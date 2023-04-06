import { useEffect, useState } from "react";
import { useRouter } from 'next/router';

const ListItem = () => {
    const [cat, setCat] = useState('');
    const [str, setStr] = useState('');
    const [fetchCategory, setFetchCategory] = useState([]);
    const [fetchStore, setFetchStore] = useState([]);

    const router = useRouter();

    const fetchCat = async () => {
        await fetch('/api/subCategory/getdata').then(res => res.json().then((data) => {
            setFetchCategory(data)
        }))
    }

    const fetchStr = async () => {
        await fetch('/api/store/getdata').then(res => res.json().then((data) => {
            setFetchStore(data)
        }))
    }

    const submitHandlerCat = (e) => {
        e.preventDefault();

        if (!cat) {
            router.push("/product")
        } else {
            router.push({
                pathname: "/product/",
                query: {
                    searchCat: cat
                }
            })
        }
    }
    const submitHandlerStr = (e) => {
        e.preventDefault();

        if (!str) {
            router.push("/product")
        } else {
            router.push({
                pathname: "/product/",
                query: {
                    searchStr: str
                }
            })
        }
    }

    useEffect(() => {
        fetchCat();
        fetchStr();
    }, [])

    return (
        <nav className="flex pt-10 space-x-3 items-center justify-center">
            <div>
                <form onSubmit={submitHandlerCat}>
                    <select id="category" value={cat} onChange={e => setCat(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option selected>All Category</option>
                        {fetchCategory.map(item => (
                            <option value={item.id}>{item.name}</option>
                        ))}
                    </select>
                </form>
            </div>
            <div>
                <select id="group" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option value="all" selected>All Company Group</option>
                    <option value="HOSANA">Hosana</option>
                    <option value="KITO">Kito</option>
                </select>
            </div>
            <div>
                <form onSubmit={submitHandlerStr}>
                    <select id="place" value={str} onChange={e => setStr(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option value="all" selected>All Place</option>
                        {fetchStore.map(item => (
                            <option value={item.id}>{item.name}</option>
                        ))}
                    </select>
                </form>
            </div>
        </nav>
    );
}

export default ListItem;
