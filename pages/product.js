import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Banner from '../components/contact/Banner';
import Footer from '../components/Footer';
import Header from '../components/frontend/Header';
import ProductCardSearch from '../components/product/ProductCardSearch';
import Search from '../components/product/Search';
import prisma from '../utils/prisma';
import { AiOutlineSearch } from 'react-icons/ai';
import { FiDelete } from 'react-icons/fi'
import Select from 'react-select';


const Product = ({ productsQuery, productCat, productStr, productBrand }) => {
    // console.log(productCat)
    const router = useRouter();
    const queries = router.query.case;
    const [input, setInput] = useState("");
    const [fetchCategory, setFetchCategory] = useState([]);
    const [fetchStore, setFetchStore] = useState([]);
    const [fetchBrand, setFetchBrand] = useState([]);
    const [selectedOptionCat, setSelectedOptionCat] = useState(null);
    const [selectedOptionStr, setSelectedOptionStr] = useState(null);
    const [selectedOptionBrand, setSelectedOptionBrand] = useState(null);
    const [show, setShow] = useState('default')

    const submitHandler = (e) => {
        e.preventDefault();
        setShow("search")

        if (!input) {
            router.push('/product')
        } else {
            router.push({
                pathname: '/product/',
                query: {
                    q: input
                }
            })
        }
    }

    const fetchCat = async () => {
        await fetch('/api/thirdSubCategory/getdata').then(res => res.json().then((data) => {
            setFetchCategory(data)
        }))
    };

    const optionsCat = fetchCategory.map(item => ({ value: item.id, label: item.name }));
    // console.log(optionsCat)

    const fetchStr = async () => {
        await fetch('/api/store/getdata').then(res => res.json().then((data) => {
            setFetchStore(data)
        }))
    }
    const optionsStr = fetchStore.map(item => ({ value: item.id, label: item.name }));

    const fetchBrands = async () => {
        await fetch('/api/brand/getdata').then(res => res.json().then((data) => {
            setFetchBrand(data)
        }))
    };

    const optionsBrand = fetchBrand.map(item => ({ value: item.id, label: item.name }));

    const submitHandlerCat = (selectedOptionCat) => {
        setSelectedOptionCat(selectedOptionCat)
        setShow("category")
        router.push({
            pathname: "/product/",
            query: {
                searchCategory: selectedOptionCat.value
            }
        });
    }
    // console.log(cat)
    const submitHandlerStr = (selectedOptionStr) => {
        setSelectedOptionStr(selectedOptionStr)
        setShow("store")
        router.push({
            pathname: "/product/",
            query: {
                searchStore: selectedOptionStr.value
            }
        })
    }

    const submitHandlerBrand = (selectedOptionBrand) => {
        setSelectedOptionBrand(selectedOptionBrand)
        setShow("brand")
        router.push({
            pathname: "/product/",
            query: {
                searchBrand: selectedOptionBrand.value
            }
        })
    }

    const resetPage = () => {
        router.push("/product");
    }

    useEffect(() => {
        fetchCat();
        fetchStr();
        fetchBrands();
    }, [])
    return (
        <div>
            <Head>
                <title>HOSANA GROUP - Product</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="shortcut icon" href="/assets/favicon/favicon.ico" />
                <link rel="icon" type="image/vnd.microsoft.icon" href="/assets/favicon/favicon.ico" />
                <link rel="icon" type="image/x-icon" href="/assets/favicon/favicon.ico" />
                <link rel="icon" href="/assets/favicon/favicon.ico" />
            </Head>
            <Header />
            <Banner />
            <main className='max-w-7xl mx-auto px-2 sm:px-16'>
                <section className='pt-10 justify-items-center'>
                    <h2 className='text-4xl text-center font-thin pb-3'>Products</h2>
                    <p className='text-gray-400 font-extralight text-center pb-5 underline'>Search here for more product </p>
                    {/* <Search /> */}
                    <form className='m-0' onSubmit={submitHandler}>
                        <div className='relative w-full xl:px-72 sm:px-10'>
                            <AiOutlineSearch className='absolute top-3 h-6 w-6 translate-x-1/2 text-gray-400' />
                            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} className='border-none font-normal px-11 py-3 rounded-md outline-none w-full bg-slate-100' />
                        </div>
                    </form>
                    <nav class="flex pt-10 space-x-3 items-center justify-center">
                        <div>
                            <Select value={selectedOptionCat} options={optionsCat} onChange={submitHandlerCat} placeholder="Search By Category" />
                        </div>
                        <div>
                            <Select value={selectedOptionStr} options={optionsStr} onChange={submitHandlerStr} placeholder="Search By Place" />
                        </div>
                        <div>
                            <Select value={selectedOptionBrand} options={optionsBrand} onChange={submitHandlerBrand} placeholder="Search By Brand" />
                        </div>
                        <div>
                            <button type="submit" onClick={resetPage}><FiDelete /></button>
                        </div>
                    </nav>
                </section>
                <section className='pt-10'>
                    <div className="group relative md:-ml-2">
                        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                            {(() => {
                                switch (show) {
                                    case 'category':
                                        return (productCat.map(item => (
                                            <ProductCardSearch key={item.id} id={item.id} title={item.product.title} img={item.product.image} price={item.price} description={item.product.description} quantity={item.product.quantity} subCategory={item.subCategory.name} discount={item.discount} place={item.stores.name} group={item.product.group} unit={item.units.name} />
                                        )));
                                        break;
                                    case 'store':
                                        return (productStr.map(item => (
                                            <ProductCardSearch key={item.id} id={item.id} title={item.product.title} img={item.product.image} price={item.price} description={item.product.description} quantity={item.product.quantity} subCategory={item.subCategory.name} discount={item.discount} place={item.stores.name} group={item.product.group} unit={item.units.name} />
                                        )));
                                        break;
                                    case 'search':
                                        return (productsQuery.map(item => (
                                            <ProductCardSearch key={item.id} id={item.product_detail.id} title={item.title} img={item.image} price={item.product_detail.map(rows => rows.price)} description={item.description} quantity={item.quantity} subCategory={item.product_detail.map(rows => rows.subCategory.name)} discount={item.product_detail.map(rows => rows.discount)} place={item.product_detail.map(rows => rows.stores.name)} group={item.group} unit={item.product_detail.map(rows => rows.units.name)} />
                                        )));
                                        break;
                                    case 'brand':
                                        return (productBrand.map(item => (
                                            <ProductCardSearch key={item.id} id={item.id} title={item.title} img={item.image} price={item.product_detail.map(rows => rows.price)} description={item.description} quantity={item.quantity} subCategory={item.product_detail.map(rows => rows.subCategory.name)} discount={item.product_detail.map(rows => rows.discount)} place={item.product_detail.map(rows => rows.stores.name)} group={item.group} unit={item.product_detail.map(rows => rows.units.name)} />
                                        )));
                                        break;
                                    default:
                                        return (productsQuery.map(item => (
                                            <ProductCardSearch key={item.id} id={item.product_detail.map(items => items.id)} title={item.title} img={item.image} price={item.product_detail.map(rows => rows.price)} description={item.description} quantity={item.quantity} subCategory={item.product_detail.map(rows => rows.subCategory.name)} discount={item.product_detail.map(rows => rows.discount)} place={item.product_detail.map(rows => rows.stores.name)} group={item.group} unit={item.product_detail.map(rows => rows.units.name)} />
                                        )));
                                        break;
                                }
                            })()}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}

export default Product;

export async function getServerSideProps(context) {
    // console.log()
    const productQuery = await prisma.product.findMany({
        where: {
            title: {
                search: context.query.q
            },
        },
        select: {
            id: true,
            image: true,
            description: true,
            title: true,
            group: true,
            product_detail: {
                select: {
                    id:true,
                    price: true,
                    discount: true,
                    subCategory: true,
                    units: true,
                    stores: true,
                },
            },
        },
    });
    const productCat = await prisma.product_detail.findMany({
        select: {
            id: true,
            price: true,
            discount: true,
            product: {
                select: {
                    image: true,
                    description: true,
                    title: true,
                    group: true,
                }
            },
            units: {
                select: {
                    name: true
                }
            },
            stores: {
                select: {
                    name: true
                }
            },
            subCategory: {
                select: {
                    name: true
                }
            }
        },
        where: {
            subCategory: {
                id: context.query.searchCategory
            }
        }
    });

    const productStr = await prisma.product_detail.findMany({
        select: {
            id: true,
            price: true,
            discount: true,
            product: {
                select: {
                    image: true,
                    description: true,
                    title: true,
                    group: true,
                }
            },
            units: {
                select: {
                    name: true
                }
            },
            stores: {
                select: {
                    name: true
                }
            },
            subCategory: {
                select: {
                    name: true
                }
            }
        },
        where: {
            stores: {
                id: context.query.searchStore
            }
        }
    });

    const productBrand = await prisma.product_detail.findMany({
        select: {
            id: true,
            price: true,
            discount: true,
            product: {
                select: {
                    image: true,
                    description: true,
                    title: true,
                    group: true,
                }
            },
            units: {
                select: {
                    name: true
                }
            },
            stores: {
                select: {
                    name: true
                }
            },
            subCategory: {
                select: {
                    name: true
                }
            }
        },
        where: {
            brand_id: context.query.searchStore
        }
    });

    return {
        props: {
            productsQuery: JSON.parse(JSON.stringify(productQuery)),
            productCat: JSON.parse(JSON.stringify(productCat)),
            productStr: JSON.parse(JSON.stringify(productStr)),
            productBrand: JSON.parse(JSON.stringify(productBrand)),
        }, // will be passed to the page component as props

    }
}