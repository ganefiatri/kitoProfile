import { getSession, useSession } from 'next-auth/react';
import Head from 'next/head';
import React, { useEffect, useMemo, useState } from 'react';
import { HiPlusSm, HiSearch } from 'react-icons/hi';
import Header from '../../components/admin/Header';
import SideNavbar from '../../layout/SideNavbar';
import Link from "next/link";
import DataTable from 'react-data-table-component';
import FilterComponent from '../../components/FilterComponent';
import CustomLoader from '../../components/CustomLoader';
import { BiEdit } from 'react-icons/bi';
import { MdDelete } from 'react-icons/md';
import axios from '../../utils/axios';

const thirdSubCategoryPage = () => {
    const { data: session } = useSession();
    const [categories, setCategories] = useState([]);
    const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
    const [filterText, setFilterText] = useState('');
    const [pending, setPending] = useState(true);

    const filteredItems = categories.filter(
        item => item.name && item.name.toLowerCase().includes(filterText.toLowerCase()),
    );

    const fetchCategory = () => {
        fetch('/api/thirdSubCategory/getdata').then(res => res.json().then((data) => {
            setCategories(data)
        }))
    }

    const handleButtonDelete = async (e, id) => {
        e.preventDefault();
        if(confirm('Are you sure want to delete this ?')){
            try {
                await fetch("/api/subCategory/deletedata?id=" + id, {
                    method: "DELETE",
                    headers: { "Content-Type": "application/json" },
                })
                window.location.reload()
            } catch (err) {
                console.log(err)
            }
        }else{
            console.log("not gonna happen!")
        }
    };

    const subHeaderComponent = useMemo(() => {
        const handleClear = () => {
            if (filterText) {
                setResetPaginationToggle(!resetPaginationToggle);
                setFilterText('');
            }
        };

        return (
            <FilterComponent onFilter={e => setFilterText(e.target.value)} onClear={handleClear} filterText={filterText} />
        );
    }, [filterText, resetPaginationToggle]);


    const column = [
        {
            name: 'Name',
            selector: row => row.name,
        },
        {
            name: 'Second Category',
            selector: row => row.subCategory.name,
        },
        {
            name: "Action",
            button: true,
            cell: row =>
            (
                <>
                    <button>
                        <Link href={`/admin/thirdSubCategory/edit/${row.id}`}>
                            <BiEdit className='h-5 w-5' />
                        </Link>
                    </button>
                    <button onClick={(e) => handleButtonDelete(e, row.id)}>
                        <MdDelete className='h-5 w-5' />
                    </button>
                </>
            )
        }
    ];

    useEffect(() => {
        const timeout = setTimeout(() => {
            fetchCategory();
            setPending(false);
        }, 2000);
        return () => clearTimeout(timeout);
    }, [])
    return (
        <>
            <Header />
            <SideNavbar>
                <Head>
                    <title>HOSANA GROUP</title>
                    <meta name="description" content="Generated by create next app" />
                    <link rel="shortcut icon" href="/assets/favicon/favicon.ico" />
                    <link rel="icon" type="image/vnd.microsoft.icon" href="/assets/favicon/favicon.ico" />
                    <link rel="icon" type="image/x-icon" href="/assets/favicon/favicon.ico" />
                    <link rel="icon" href="/assets/favicon/favicon.ico" />
                </Head>
                <div class="items-center justify-between pb-5 lg:flex xl:flex md:flex">
                    <div className=''>
                        <h1 class="text-2xl font-semibold leading-relaxed text-gray-600">ThirdSubCategory</h1>
                        <p class="text-sm font-medium text-gray-500">
                            Let's grow to your business! Create your sub category and upload here
                        </p>
                    </div>
                    <Link href="/admin/thirdSubCategory/create"
                        className="inline-flex gap-x-2 items-center py-2.5 px-6 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-1"
                    >
                        <HiPlusSm className="w-6 h-6 fill-white" />
                        <span className="text-sm font-semibold tracking-wide">Create Third Sub Category</span>
                    </Link>
                </div>
                <DataTable
                    columns={column}
                    data={filteredItems}
                    defaultSortField="name"
                    striped
                    pagination
                    progressPending={pending}
                    progressComponent={<CustomLoader />}
                    subHeader
                    subHeaderComponent={subHeaderComponent}
                />
            </SideNavbar>
        </>
    );
}

export default thirdSubCategoryPage;

export async function getServerSideProps({ req }) {
    const session = await getSession({ req })

    if (session?.user.role != "ADMIN") {
        return {
            redirect: {
                destination: "/auth/login",
                permanent: false
            }
        }
    }
    // autorize user
    return {
        props: { session }
    }
}
