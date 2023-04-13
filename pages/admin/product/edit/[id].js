import Head from 'next/head';
import React, { useState } from 'react';
import { FaUpload } from 'react-icons/fa';
import Header from '../../../../components/admin/Header';
import SideNavbar from '../../../../layout/SideNavbar';
import prisma from '../../../../utils/prisma';
import { useRouter } from "next/router";
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

export async function getServerSideProps({ params }) {
    const productId = await prisma.product.findMany({
        where: {
            id: params.id
        },
        include: {
            product_detail: {
                include: {
                    units: true,
                    subCategory: true,
                    stores: true,
                    spesification: true
                }
            },
        }
    });
    const subCategory = await prisma.sub_category_third.findMany();
    const units = await prisma.units.findMany();
    const stores = await prisma.stores.findMany();
    const brands = await prisma.brands.findMany();

    return {
        props: {
            product: JSON.parse(JSON.stringify(productId)),
            subCategory,
            units,
            stores,
            brands
        },
    }
}

const ProductbyId = props => {
    const { product, subCategory, units, stores, brands } = props;
    // console.log(product[0].product_detail[0].price)
    const router = useRouter()
    //state
    const [imageUploaded, setImageUploaded] = useState(product[0].image);
    const [createObjectURL, setCreateObjectURL] = useState(product[0].image);
    const [title, setTitle] = useState(product[0].title);
    const [code, setCode] = useState(product[0].code);
    const [group, setGroup] = useState(product[0].group);
    const [discounts, setDiscount] = useState(product[0].product_detail.map(item => item.discount));
    const [store, setStore] = useState(product[0].product_detail.map(item => item.store_id));
    const [unit, setUnit] = useState(product[0].product_detail.map(item => item.unit_id));
    const [subCategoryId, setSubcategory] = useState(product[0].product_detail.map(item => item.subCategoryId));
    const [prices, setPrice] = useState(product[0].product_detail.map(item => item.price));
    const [quantity, setQuantity] = useState(product[0].quantity);
    const [description, setDescription] = useState(product[0].description);
    const [specTitle1, setSpecTitle1] = useState(product[0].product_detail.map(item => item.spesification.map(items => items.titleOne)));
    const [specTitle2, setSpecTitle2] = useState(product[0].product_detail.map(item => item.spesification.map(items => items.titleTwo)));
    const [specTitle3, setSpecTitle3] = useState(product[0].product_detail.map(item => item.spesification.map(items => items.titleThree)));
    const [specTitle4, setSpecTitle4] = useState(product[0].product_detail.map(item => item.spesification.map(items => items.titleFour)));
    const [specTitle5, setSpecTitle5] = useState(product[0].product_detail.map(item => item.spesification.map(items => items.titleFive)));
    const [specDetail1, setSpecDetail1] = useState(product[0].product_detail.map(item => item.spesification.map(items => items.answerOne)));
    const [specDetail2, setSpecDetail2] = useState(product[0].product_detail.map(item => item.spesification.map(items => items.answerTwo)));
    const [specDetail3, setSpecDetail3] = useState(product[0].product_detail.map(item => item.spesification.map(items => items.answerThree)));
    const [specDetail4, setSpecDetail4] = useState(product[0].product_detail.map(item => item.spesification.map(items => items.answerFour)));
    const [specDetail5, setSpecDetail5] = useState(product[0].product_detail.map(item => item.spesification.map(items => items.answerFive)));
    const setFilename = product[0].filename;
    const id = product[0].id;
    const id_product_detail = product[0].product_detail.map(item => item.id);
    const id_product_spec = product[0].product_detail.map(item => item.spesification.map(items => items.id));

    const handleImage = (e) => {
        const file = e.target.files[0];
        // console.log(file)
        setImageUploaded(file);
        const fileReader = new FileReader();
        fileReader.onload = function (e) {
            // console.log(e.target.result);
            setCreateObjectURL(e.target.result);
        };
        fileReader.readAsDataURL(file);
        // setImageUploaded(e.target.files[0]);
        // setCreateObjectURL(URL.createObjectURL(e.target.files[0]));
    }

    const handleFormData = async (e) => {
        e.preventDefault();
        const brands = e.target.brands.value;
        const location = e.target.loc.value;

        const forms = new FormData();
        forms.append('title', title);
        forms.append('image', imageUploaded);
        forms.append('price', prices);
        forms.append('quantity', quantity);
        forms.append('description', description);
        forms.append('subCategoryId', subCategoryId);
        forms.append('filename', setFilename);
        forms.append('unit', unit);
        forms.append('code', code);
        forms.append('discount', discounts);
        forms.append('group', group);
        forms.append('store', store);
        forms.append('id', id);
        forms.append('id_product_detail', id_product_detail);
        forms.append('id_product_spec', id_product_spec);
        forms.append('loc', location);
        forms.append('brands', brands);
        // spec
        forms.append('spec1', specTitle1);
        forms.append('spec2', specTitle2);
        forms.append('spec3', specTitle3);
        forms.append('spec4', specTitle4);
        forms.append('spec5', specTitle5);
        forms.append('answer1', specDetail1);
        forms.append('answer2', specDetail2);
        forms.append('answer3', specDetail3);
        forms.append('answer4', specDetail4);
        forms.append('answer5', specDetail5);
        // await axios.post("/api/category/createdata",forms);
        const res = await fetch("/api/product/editdata", {
            method: "PUT",
            body: forms,
        });
        const result = await res.json();
        if (!result) {
            toast('Something Wrong!', { hideProgressBar: true, autoClose: 2000, type: 'error', position: 'top-right' })
        } else {
            toast('Successfully Create data!', { hideProgressBar: true, autoClose: 2000, type: 'success', position: 'top-right' })
        }
        router.push("/admin/productPage");
        // console.log(result)
    }

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
                {/* Category */}
                <section>
                    <div className='flex border-b border-dashed border-border-base py-5 sm:py-8'>
                        <h1 className='text-lg font-semibold text-heading'>Edit Product</h1>
                    </div>
                    <form onSubmit={handleFormData}>
                        <div className='my-5 flex flex-wrap border-b border-dashed border-border-base pb-8 sm:my-8'>
                            <div className='w-full px-0 pb-5 sm:w-4/12 sm:py-8 sm:px-4 md:w-1/3 md:py-5'>
                                <h4 className='text-base font-semibold mb-2'>Image</h4>
                                <p className='text-sm'>Upload Your Category Image here</p>
                            </div>
                            <div className='p-5 md:p-8 bg-white shadow rounded w-full sm:w-8/12 md:w-2/3'>
                                <section className='upload'>
                                    <label for="dropzone-file" className='border-dashed border-2 border-border-base h-36 rounded flex flex-col justify-center items-center cursor-pointer focus:border-accent-400 focus:outline-none'>
                                        <FaUpload />
                                        <p className='mt-4 text-center text-xs'>
                                            <span className='font-normal text-gray-600'>Upload an image </span>
                                            or drag and drop
                                            <br />
                                            <span className='text-xs'>PNG, JPG</span>
                                        </p>
                                        <input id="dropzone-file" onChange={handleImage} type="file" className='hidden' />
                                        <div className='flex mb-5'>
                                            {createObjectURL && <img src={createObjectURL} alt="image" width={100} className='h-[100px] object-contain' />}
                                        </div>
                                    </label>
                                </section>
                            </div>
                        </div>
                        <div className='my-5 flex flex-wrap sm:my-8'>
                            <div className='w-full px-0 pb-5 sm:w-4/12 sm:py-8 sm:px-4 md:w-1/3 md:py-5'>
                                <h4 className='text-base font-semibold mb-2'>Details</h4>
                                <p className='text-sm'>Edit Product from here</p>
                            </div>
                            <div className='p-5 md:p-8 bg-white shadow rounded w-full sm:w-8/12 md:w-2/3'>
                                <div className='mb-5'>
                                    <label for="name" className='block mb-3 text-sm font-normal leading-none text-gray-400'>Name</label>
                                    <input type="text" value={title} onChange={e => setTitle(e.target.value)} name="title" id="name" className='px-4 h-12 flex items-center w-full rounded appearance-none transition duration-300 ease-in-out text-heading text-sm focus:outline-none focus:ring-0 border border-border-base focus:border-accent' autoComplete='off' autoCorrect='off' autoCapitalize='off' spellCheck='false' />
                                </div>
                                <div className='mb-5'>
                                    <label for="code" className='block mb-3 text-sm font-normal leading-none text-gray-400'>Product Code</label>
                                    <input type="text" value={code} onChange={e => setCode(e.target.value)} name="code" id="code" className='px-4 h-12 flex items-center w-full rounded appearance-none transition duration-300 ease-in-out text-heading text-sm focus:outline-none focus:ring-0 border border-border-base focus:border-accent' autoComplete='off' autoCorrect='off' autoCapitalize='off' spellCheck='false' />
                                </div>
                                <div className='mb-5'>
                                    <label for="price" className='block mb-3 text-sm font-normal leading-none text-gray-400'>Price (Rp)</label>
                                    <input type="text" inputmode="numeric" pattern="[0-9]*" value={prices} onChange={e => setPrice(e.target.value)} name="price" id="price" className='px-4 h-12 flex items-center w-full rounded appearance-none transition duration-300 ease-in-out text-heading text-sm focus:outline-none focus:ring-0 border border-border-base focus:border-accent' />
                                </div>
                                <div className='mb-5'>
                                    <label for="discount" className='block mb-3 text-sm font-normal leading-none text-gray-400'>Discount (%)</label>
                                    <input type="text" inputmode="numeric" pattern="[0-9]*" value={discounts} onChange={e => setDiscount(e.target.value)} name="discount" id="discount" className='px-4 h-12 flex items-center w-full rounded appearance-none transition duration-300 ease-in-out text-heading text-sm focus:outline-none focus:ring-0 border border-border-base focus:border-accent' />
                                </div>
                                <div className='mb-5'>
                                    <label className='block text-gray-400 font-normal text-sm leading-none mb-3'>Units</label>
                                    <select name='unit' value={unit} onChange={e => setUnit(e.target.value)} className='border border-gray-300 text-gray-400 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full h-12 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'>
                                        {units.map(item => (
                                            <option value={item.id}>{item.name}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className='mb-5'>
                                    <label for="quantity" className='block mb-3 text-sm font-normal leading-none text-gray-400'>Quantity</label>
                                    <input type="text" inputmode="numeric" pattern="[0-9]*" value={quantity} onChange={e => setQuantity(e.target.value)} name="quantity" id="quantity" className='px-4 h-12 flex items-center w-full rounded appearance-none transition duration-300 ease-in-out text-heading text-sm focus:outline-none focus:ring-0 border border-border-base focus:border-accent' autoComplete='off' autoCorrect='off' autoCapitalize='off' spellCheck='false' />
                                </div>
                                <div className='mb-5'>
                                    <label className='block text-gray-400 font-normal text-sm leading-none mb-3'>Sub Category</label>
                                    <select name='subCategory' value={subCategoryId} onChange={e => setSubcategory(e.target.value)} className='border border-gray-300 text-gray-400 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full h-12 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'>
                                        {subCategory.map(item => (
                                            <option value={item.id}>{item.name}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className='mb-5'>
                                    <label className='block text-gray-400 font-normal text-sm leading-none mb-3'>Stores</label>
                                    <select name='store' value={store} onChange={e => setStore(e.target.value)} className='border border-gray-300 text-gray-400 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full h-12 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'>
                                        {stores.map(item => (
                                            <option value={item.id}>{item.name}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className='mb-5'>
                                    <label className='block text-gray-400 font-normal text-sm leading-none mb-3'>Company Group</label>
                                    <select name='group' value={group} onChange={e => setGroup(e.target.value)} className='border border-gray-300 text-gray-400 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full h-12 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'>
                                        <option value="HOSANA">HOSANA</option>
                                        <option value="KITO">KITO</option>
                                    </select>
                                </div>
                                <div className='mb-5'>
                                    <label for="description" className='block text-gray-400 font-normal text-sm leading-none mb-3'>Description</label>
                                    <textarea id="description" name='description' value={description} onChange={e => setDescription(e.target.value)} className='py-3 px-4 w-full rounded appearance-none transition duration-300 ease-in-out text-heading text-sm focus:outline-none focus:ring-0 border border-border-base focus:border-accent ' rows="4" autoComplete='off' autoCorrect='off' autoCapitalize='off' spellCheck='false'></textarea>
                                </div>
                            </div>
                        </div>
                        <div className='my-5 flex flex-wrap sm:my-8'>
                            <div className='w-full px-0 pb-5 sm:w-4/12 sm:py-8 sm:px-4 md:w-1/3 md:py-5'>
                                <h4 className='text-base font-semibold mb-2'>Spesifikasi</h4>
                                <p className='text-sm'>Add Spesifikasi Product</p>
                            </div>
                            <div className='p-5 md:p-8 bg-white shadow rounded w-full sm:w-8/12 md:w-2/3'>
                                <div className='mb-5'>
                                    <label className='block text-gray-400 font-normal text-sm leading-none mb-3'>Brands</label>
                                    <select name='brands' className='border border-gray-300 text-gray-400 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full h-12 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'>
                                        {brands.map(item => (
                                            <option value={item.id}>{item.name}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className='mb-5'>
                                    <label className='block text-gray-400 font-normal text-sm leading-none mb-3'>Product From</label>
                                    <select name='loc' className='border border-gray-300 text-gray-400 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full h-12 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'>
                                        <option value="">Choose Product From</option>
                                        <option value="IMPORT">IMPORT</option>
                                        <option value="LOKAL">LOKAL</option>
                                    </select>
                                </div>
                                <div className='flex'>
                                    <div className='mb-5 w-full pr-1'>
                                        <label for="spec1" className='block mb-3 text-sm font-normal leading-none text-gray-400'>Spesification Title 1</label>
                                        <input type="text" value={specTitle1} onChange={e => setSpecTitle1(e.target.value)} name="spec1" id="spec1" className='px-4 h-12 flex items-center w-full rounded appearance-none transition duration-300 ease-in-out text-heading text-sm focus:outline-none focus:ring-0 border border-border-base focus:border-accent' autoComplete='off' autoCorrect='off' autoCapitalize='off' spellCheck='false' />
                                    </div>
                                    <div className='mb-5 w-full pr-1'>
                                        <label for="detail1" className='block mb-3 text-sm font-normal leading-none text-gray-400'>Spesification Detail 1</label>
                                        <textarea id="detail1" name='detail1' value={specDetail1} onChange={e => setSpecDetail1(e.target.value)} className='py-3 px-3 w-full rounded appearance-none transition duration-300 ease-in-out text-heading text-sm focus:outline-none focus:ring-0 border border-border-base focus:border-accent ' rows="1.5" autoComplete='off' autoCorrect='off' autoCapitalize='off' spellCheck='false'></textarea>
                                    </div>
                                </div>
                                <div className='flex'>
                                    <div className='mb-5 w-full pr-1'>
                                        <label for="spec2" className='block mb-3 text-sm font-normal leading-none text-gray-400'>Spesification Title 2</label>
                                        <input type="text" value={specTitle2} onChange={e => setSpecTitle2(e.target.value)} name="spec2" id="spec2" className='px-4 h-12 flex items-center w-full rounded appearance-none transition duration-300 ease-in-out text-heading text-sm focus:outline-none focus:ring-0 border border-border-base focus:border-accent' autoComplete='off' autoCorrect='off' autoCapitalize='off' spellCheck='false' />
                                    </div>
                                    <div className='mb-5 w-full pr-1'>
                                        <label for="detail2" className='block mb-3 text-sm font-normal leading-none text-gray-400'>Spesification Detail 2</label>
                                        <textarea id="detail2" name='detail2' value={specDetail2} onChange={e => setSpecDetail2(e.target.value)} className='py-3 px-3 w-full rounded appearance-none transition duration-300 ease-in-out text-heading text-sm focus:outline-none focus:ring-0 border border-border-base focus:border-accent ' rows="1.5" autoComplete='off' autoCorrect='off' autoCapitalize='off' spellCheck='false'></textarea>
                                    </div>
                                </div>
                                <div className='flex'>
                                    <div className='mb-5 w-full pr-1'>
                                        <label for="spec3" className='block mb-3 text-sm font-normal leading-none text-gray-400'>Spesification Title 3</label>
                                        <input type="text" value={specTitle3} onChange={e => setSpecTitle3(e.target.value)} name="spec3" id="spec3" className='px-4 h-12 flex items-center w-full rounded appearance-none transition duration-300 ease-in-out text-heading text-sm focus:outline-none focus:ring-0 border border-border-base focus:border-accent' autoComplete='off' autoCorrect='off' autoCapitalize='off' spellCheck='false' />
                                    </div>
                                    <div className='mb-5 w-full pr-1'>
                                        <label for="detail3" className='block mb-3 text-sm font-normal leading-none text-gray-400'>Spesification Detail 3</label>
                                        <textarea id="detail3" name='detail3' value={specDetail3} onChange={e => setSpecDetail3(e.target.value)} className='py-3 px-3 w-full rounded appearance-none transition duration-300 ease-in-out text-heading text-sm focus:outline-none focus:ring-0 border border-border-base focus:border-accent ' rows="1.5" autoComplete='off' autoCorrect='off' autoCapitalize='off' spellCheck='false'></textarea>
                                    </div>
                                </div>
                                <div className='flex'>
                                    <div className='mb-5 w-full pr-1'>
                                        <label for="spec4" className='block mb-3 text-sm font-normal leading-none text-gray-400'>Spesification Title 4</label>
                                        <input type="text" value={specTitle4} onChange={e => setSpecTitle4(e.target.value)} name="spec4" id="spec4" className='px-4 h-12 flex items-center w-full rounded appearance-none transition duration-300 ease-in-out text-heading text-sm focus:outline-none focus:ring-0 border border-border-base focus:border-accent' autoComplete='off' autoCorrect='off' autoCapitalize='off' spellCheck='false' />
                                    </div>
                                    <div className='mb-5 w-full pr-1'>
                                        <label for="detail4" className='block mb-3 text-sm font-normal leading-none text-gray-400'>Spesification Detail 4</label>
                                        <textarea id="detail4" name='detail4' value={specDetail4} onChange={e => setSpecDetail4(e.target.value)} className='py-3 px-3 w-full rounded appearance-none transition duration-300 ease-in-out text-heading text-sm focus:outline-none focus:ring-0 border border-border-base focus:border-accent ' rows="1.5" autoComplete='off' autoCorrect='off' autoCapitalize='off' spellCheck='false'></textarea>
                                    </div>
                                </div>
                                <div className='flex'>
                                    <div className='mb-5 w-full pr-1'>
                                        <label for="spec5" className='block mb-3 text-sm font-normal leading-none text-gray-400'>Spesification Title 5</label>
                                        <input type="text" value={specTitle5} onChange={e => setSpecTitle5(e.target.value)} name="spec5" id="spec5" className='px-4 h-12 flex items-center w-full rounded appearance-none transition duration-300 ease-in-out text-heading text-sm focus:outline-none focus:ring-0 border border-border-base focus:border-accent' autoComplete='off' autoCorrect='off' autoCapitalize='off' spellCheck='false' />
                                    </div>
                                    <div className='mb-5 w-full pr-1'>
                                        <label for="detail5" className='block mb-3 text-sm font-normal leading-none text-gray-400'>Spesification Detail 5</label>
                                        <textarea id="detail5" name='detail5' value={specDetail5} onChange={e => setSpecDetail5(e.target.value)} className='py-3 px-3 w-full rounded appearance-none transition duration-300 ease-in-out text-heading text-sm focus:outline-none focus:ring-0 border border-border-base focus:border-accent ' rows="1.5" autoComplete='off' autoCorrect='off' autoCapitalize='off' spellCheck='false'></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='mb-4 text-end'>
                            <button type="submit" className='inline-flex items-center justify-center flex-shrink-0 font-normal leading-none rounded outline-none transition duration-300 ease-in-out focus:outline-none focus:shadow focus:ring-1 focus:ring-accent-700 bg-green-400 text-white border border-transparent hover:bg-accent-hover px-5 py-0 h-12'>Edit Product</button>
                        </div>
                    </form>
                </section>
            </SideNavbar>
        </>
    );
}

export default ProductbyId;    
