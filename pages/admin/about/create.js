import { getSession, useSession } from 'next-auth/react';
import Head from 'next/head';
import React, { useState } from 'react';
import { FaUpload } from 'react-icons/fa';
import Header from '../../../components/admin/Header';
import SideNavbar from '../../../layout/SideNavbar';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

 const Create = () => {
    const { data: session } = useSession();
    const [imageBanner, setImageBanner] = useState();
    const [imageCompany1, setImageCompany1] = useState();
    const [imageCompany2, setImageCompany2] = useState();
    const [imageConcept, setImageConcept] = useState();
    const [imageClass1, setImageClass1] = useState();
    const [imageClass2, setImageClass2] = useState();
    const [imageClass3, setImageClass3] = useState();
    const [imageClass4, setImageClass4] = useState();
    const [createBanner, setCreateBanner] = useState(null);
    const [createCompany1, setCreateCompany1] = useState(null);
    const [createCompany2, setCreateCompany2] = useState(null);
    const [createConcept, setCreateConcept] = useState(null);
    const [createClass1, setCreateClass1] = useState(null);
    const [createClass2, setCreateClass2] = useState(null);
    const [createClass3, setCreateClass3] = useState(null);
    const [createClass4, setCreateClass4] = useState(null);
    const [textCompany1, setCompany1] = useState('');
    const [textCompany2, setCompany2] = useState('');
    const [visionTitle, setVisionTitle] = useState('');
    const [visionDetail, setVisionDetail] = useState('');
    const [missionTitle, setMissionTitle] = useState('');
    const [missionDetail, setMissionDetail] = useState('');
    const [valueDetail, setValueDetail] = useState('');
    const [conceptTitle, setConceptTitle] = useState('');
    const [conceptDetail, setConceptDetail] = useState('');
    const [classTitle, setClassTitle] = useState('');
    const [classTitle1, setClassTitle1] = useState('');
    const [classDetail1, setClassDetail1] = useState('');
    const [classTitle2, setClassTitle2] = useState('');
    const [classDetail2, setClassDetail2] = useState('');
    const [classTitle3, setClassTitle3] = useState('');
    const [classDetail3, setClassDetail3] = useState('');
    const [classTitle4, setClassTitle4] = useState('');
    const [classDetail4, setClassDetail4] = useState('');
    const router = useRouter();


    const handleImageBanner = (e) => {
        const file = e.target.files[0];
        setImageBanner(file);
        const fileReader = new FileReader();
        fileReader.onload = function (e) {
            setCreateBanner(e.target.result);
        };
        fileReader.readAsDataURL(file);
    }

    const handleImageCompany1 = (e) => {
        const file = e.target.files[0];
        setImageCompany1(file);
        const fileReader = new FileReader();
        fileReader.onload = function (e) {
            setCreateCompany1(e.target.result);
        };
        fileReader.readAsDataURL(file);
    }

    const handleImageCompany2 = (e) => {
        const file = e.target.files[0];
        setImageCompany2(file);
        const fileReader = new FileReader();
        fileReader.onload = function (e) {
            setCreateCompany2(e.target.result);
        };
        fileReader.readAsDataURL(file);
    }

    const handleImageConcept = (e) => {
        const file = e.target.files[0];
        setImageConcept(file);
        const fileReader = new FileReader();
        fileReader.onload = function (e) {
            setCreateConcept(e.target.result);
        };
        fileReader.readAsDataURL(file);
    }

    const handleImageClass1 = (e) => {
        const file = e.target.files[0];
        setImageClass1(file);
        const fileReader = new FileReader();
        fileReader.onload = function (e) {
            setCreateClass1(e.target.result);
        };
        fileReader.readAsDataURL(file);
    }

    const handleImageClass2 = (e) => {
        const file = e.target.files[0];
        setImageClass2(file);
        const fileReader = new FileReader();
        fileReader.onload = function (e) {
            setCreateClass2(e.target.result);
        };
        fileReader.readAsDataURL(file);
    }

    const handleImageClass3 = (e) => {
        const file = e.target.files[0];
        setImageClass3(file);
        const fileReader = new FileReader();
        fileReader.onload = function (e) {
            setCreateClass3(e.target.result);
        };
        fileReader.readAsDataURL(file);
    }

    const handleImageClass4 = (e) => {
        const file = e.target.files[0];
        setImageClass4(file);
        const fileReader = new FileReader();
        fileReader.onload = function (e) {
            setCreateClass4(e.target.result);
        };
        fileReader.readAsDataURL(file);
    }

    const handleFormData = async (e) => {
        e.preventDefault();
        const forms = new FormData();
        forms.append('imgBanner', imageBanner);
        forms.append('imgCompany1', imageCompany1);
        forms.append('imgCompany2', imageCompany2);
        forms.append('imgConcept', imageConcept);
        forms.append('imgClass1', imageClass1);
        forms.append('imgClass2', imageClass2);
        forms.append('imgClass3', imageClass3);
        forms.append('imgClass4', imageClass4);
        forms.append('textCompany1', textCompany1);
        forms.append('textCompany2', textCompany2);
        forms.append('visionTitle', visionTitle);
        forms.append('visionDetail', visionDetail);
        forms.append('missionTitle', missionTitle);
        forms.append('missionDetail', missionDetail);
        forms.append('valueDetail', valueDetail);
        forms.append('conceptTitle', conceptTitle);
        forms.append('conceptDetail', conceptDetail);
        forms.append('classTitle', classTitle);
        forms.append('classTitle1', classTitle1);
        forms.append('classDetail1', classDetail1);
        forms.append('classTitle2', classTitle2);
        forms.append('classDetail2', classDetail2);
        forms.append('classTitle3', classTitle3);
        forms.append('classDetail3', classDetail3);
        forms.append('classTitle4', classTitle4);
        forms.append('classDetail4', classDetail4);

        const res = await fetch("/api/about/upload", {
            method: "POST",
            body: forms
        });
        const result = await res.json();
        if (!result) {
            toast('Something Wrong!', { hideProgressBar: true, autoClose: 2000, type: 'error', position: 'top-right' })
        } else {
            toast('Successfully Linked data!', { hideProgressBar: true, autoClose: 2000, type: 'success', position: 'top-right' })
        }
        router.push("/admin/aboutPage");
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
                        <h1 className='text-lg font-semibold text-heading'>Create About Page</h1>
                    </div>
                    {/* {loading ? <CustomLoader className="justify-items-center items-center" />
                        : ( */}
                    <form onSubmit={handleFormData}>
                        {/* Banner */}
                        <div className='my-5 flex flex-wrap border-b border-dashed border-border-base pb-8 sm:my-8'>
                            <div className='w-full px-0 pb-5 sm:w-4/12 sm:py-8 sm:px-4 md:w-1/3 md:py-5'>
                                <h4 className='text-base font-semibold mb-2'>Image Banner</h4>
                                <p className='text-sm'>Upload Your Image Banner here</p>
                            </div>
                            <div className='p-5 md:p-8 bg-white shadow rounded w-full sm:w-8/12 md:w-2/3'>
                                <section className='uploadBanner'>
                                    <label for="dropzone-file-banner" className='border-dashed border-2 border-border-base h-36 rounded flex flex-col justify-center items-center cursor-pointer focus:border-accent-400 focus:outline-none'>
                                        <FaUpload />
                                        <p className='mt-4 text-center text-xs'>
                                            <span className='font-normal text-gray-600'>Upload an image </span>
                                            or drag and drop
                                            <br />
                                            <span className='text-xs'>PNG, JPG</span>
                                        </p>
                                        <input id="dropzone-file-banner" onChange={handleImageBanner} type="file" className='hidden' />
                                        <div className='flex mb-5'>
                                            {createBanner && <img src={createBanner} alt="image" width={100} className='h-[100px] object-contain' />}
                                        </div>
                                    </label>
                                </section>
                            </div>
                        </div>
                        {/* Company 1 */}
                        <div className='my-5 flex flex-wrap border-b border-dashed border-border-base pb-8 sm:my-8'>
                            <div className='w-full px-0 pb-5 sm:w-4/12 sm:py-8 sm:px-4 md:w-1/3 md:py-5'>
                                <h4 className='text-base font-semibold mb-2'>Image Company 1</h4>
                                <p className='text-sm'>Upload Your Image Company 1 here</p>
                            </div>
                            <div className='p-5 md:p-8 bg-white shadow rounded w-full sm:w-8/12 md:w-2/3'>
                                <section className='uploadCompany1'>
                                    <label for="dropzone-file-company1" className='border-dashed border-2 border-border-base h-36 rounded flex flex-col justify-center items-center cursor-pointer focus:border-accent-400 focus:outline-none'>
                                        <FaUpload />
                                        <p className='mt-4 text-center text-xs'>
                                            <span className='font-normal text-gray-600'>Upload an image </span>
                                            or drag and drop
                                            <br />
                                            <span className='text-xs'>PNG, JPG</span>
                                        </p>
                                        <input id="dropzone-file-company1" onChange={handleImageCompany1} type="file" className='hidden' />
                                        <div className='flex mb-5'>
                                            {createCompany1 && <img src={createCompany1} alt="image" width={100} className='h-[100px] object-contain' />}
                                        </div>
                                    </label>
                                </section>
                            </div>
                        </div>
                        {/* Company 2 */}
                        <div className='my-5 flex flex-wrap border-b border-dashed border-border-base pb-8 sm:my-8'>
                            <div className='w-full px-0 pb-5 sm:w-4/12 sm:py-8 sm:px-4 md:w-1/3 md:py-5'>
                                <h4 className='text-base font-semibold mb-2'>Image Company 2</h4>
                                <p className='text-sm'>Upload Your Image Company 2 here</p>
                            </div>
                            <div className='p-5 md:p-8 bg-white shadow rounded w-full sm:w-8/12 md:w-2/3'>
                                <section className='uploadCompany2'>
                                    <label for="dropzone-file-company2" className='border-dashed border-2 border-border-base h-36 rounded flex flex-col justify-center items-center cursor-pointer focus:border-accent-400 focus:outline-none'>
                                        <FaUpload />
                                        <p className='mt-4 text-center text-xs'>
                                            <span className='font-normal text-gray-600'>Upload an image </span>
                                            or drag and drop
                                            <br />
                                            <span className='text-xs'>PNG, JPG</span>
                                        </p>
                                        <input id="dropzone-file-company2" onChange={handleImageCompany2} type="file" className='hidden' />
                                        <div className='flex mb-5'>
                                            {createCompany2 && <img src={createCompany2} alt="image" width={100} className='h-[100px] object-contain' />}
                                        </div>
                                    </label>
                                </section>
                            </div>
                        </div>
                        {/* Concept */}
                        <div className='my-5 flex flex-wrap border-b border-dashed border-border-base pb-8 sm:my-8'>
                            <div className='w-full px-0 pb-5 sm:w-4/12 sm:py-8 sm:px-4 md:w-1/3 md:py-5'>
                                <h4 className='text-base font-semibold mb-2'>Image Concept</h4>
                                <p className='text-sm'>Upload Your Image Concept here</p>
                            </div>
                            <div className='p-5 md:p-8 bg-white shadow rounded w-full sm:w-8/12 md:w-2/3'>
                                <section className='uploadConcept'>
                                    <label for="dropzone-file-concept" className='border-dashed border-2 border-border-base h-36 rounded flex flex-col justify-center items-center cursor-pointer focus:border-accent-400 focus:outline-none'>
                                        <FaUpload />
                                        <p className='mt-4 text-center text-xs'>
                                            <span className='font-normal text-gray-600'>Upload an image </span>
                                            or drag and drop
                                            <br />
                                            <span className='text-xs'>PNG, JPG</span>
                                        </p>
                                        <input id="dropzone-file-concept" onChange={handleImageConcept} type="file" className='hidden' />
                                        <div className='flex mb-5'>
                                            {createConcept && <img src={createConcept} alt="image" width={100} className='h-[100px] object-contain' />}
                                        </div>
                                    </label>
                                </section>
                            </div>
                        </div>
                        {/* Class1 */}
                        <div className='my-5 flex flex-wrap border-b border-dashed border-border-base pb-8 sm:my-8'>
                            <div className='w-full px-0 pb-5 sm:w-4/12 sm:py-8 sm:px-4 md:w-1/3 md:py-5'>
                                <h4 className='text-base font-semibold mb-2'>Image Class 1</h4>
                                <p className='text-sm'>Upload Your Image Class 1 here</p>
                            </div>
                            <div className='p-5 md:p-8 bg-white shadow rounded w-full sm:w-8/12 md:w-2/3'>
                                <section className='uploadClass1'>
                                    <label for="dropzone-file-class1" className='border-dashed border-2 border-border-base h-36 rounded flex flex-col justify-center items-center cursor-pointer focus:border-accent-400 focus:outline-none'>
                                        <FaUpload />
                                        <p className='mt-4 text-center text-xs'>
                                            <span className='font-normal text-gray-600'>Upload an image </span>
                                            or drag and drop
                                            <br />
                                            <span className='text-xs'>PNG, JPG</span>
                                        </p>
                                        <input id="dropzone-file-class1" onChange={handleImageClass1} type="file" className='hidden' />
                                        <div className='flex mb-5'>
                                            {createClass1 && <img src={createClass1 } alt="image" width={100} className='h-[100px] object-contain' />}
                                        </div>
                                    </label>
                                </section>
                            </div>
                        </div>
                        {/* Class2 */}
                        <div className='my-5 flex flex-wrap border-b border-dashed border-border-base pb-8 sm:my-8'>
                            <div className='w-full px-0 pb-5 sm:w-4/12 sm:py-8 sm:px-4 md:w-1/3 md:py-5'>
                                <h4 className='text-base font-semibold mb-2'>Image Class 2</h4>
                                <p className='text-sm'>Upload Your Image Class 2 here</p>
                            </div>
                            <div className='p-5 md:p-8 bg-white shadow rounded w-full sm:w-8/12 md:w-2/3'>
                                <section className='uploadClass2'>
                                    <label for="dropzone-file-class2" className='border-dashed border-2 border-border-base h-36 rounded flex flex-col justify-center items-center cursor-pointer focus:border-accent-400 focus:outline-none'>
                                        <FaUpload />
                                        <p className='mt-4 text-center text-xs'>
                                            <span className='font-normal text-gray-600'>Upload an image </span>
                                            or drag and drop
                                            <br />
                                            <span className='text-xs'>PNG, JPG</span>
                                        </p>
                                        <input id="dropzone-file-class2" onChange={handleImageClass2} type="file" className='hidden' />
                                        <div className='flex mb-5'>
                                            {createClass2 && <img src={createClass2} alt="image" width={100} className='h-[100px] object-contain' />}
                                        </div>
                                    </label>
                                </section>
                            </div>
                        </div>
                        {/* Class3 */}
                        <div className='my-5 flex flex-wrap border-b border-dashed border-border-base pb-8 sm:my-8'>
                            <div className='w-full px-0 pb-5 sm:w-4/12 sm:py-8 sm:px-4 md:w-1/3 md:py-5'>
                                <h4 className='text-base font-semibold mb-2'>Image Class 3</h4>
                                <p className='text-sm'>Upload Your Image Class 3 here</p>
                            </div>
                            <div className='p-5 md:p-8 bg-white shadow rounded w-full sm:w-8/12 md:w-2/3'>
                                <section className='uploadClass3'>
                                    <label for="dropzone-file-class3" className='border-dashed border-2 border-border-base h-36 rounded flex flex-col justify-center items-center cursor-pointer focus:border-accent-400 focus:outline-none'>
                                        <FaUpload />
                                        <p className='mt-4 text-center text-xs'>
                                            <span className='font-normal text-gray-600'>Upload an image </span>
                                            or drag and drop
                                            <br />
                                            <span className='text-xs'>PNG, JPG</span>
                                        </p>
                                        <input id="dropzone-file-class3" onChange={handleImageClass3} type="file" className='hidden' />
                                        <div className='flex mb-5'>
                                            {createClass3 && <img src={createClass3} alt="image" width={100} className='h-[100px] object-contain' />}
                                        </div>
                                    </label>
                                </section>
                            </div>
                        </div>
                        {/* Class4 */}
                        <div className='my-5 flex flex-wrap border-b border-dashed border-border-base pb-8 sm:my-8'>
                            <div className='w-full px-0 pb-5 sm:w-4/12 sm:py-8 sm:px-4 md:w-1/3 md:py-5'>
                                <h4 className='text-base font-semibold mb-2'>Image Class 4</h4>
                                <p className='text-sm'>Upload Your Image Class 4 here</p>
                            </div>
                            <div className='p-5 md:p-8 bg-white shadow rounded w-full sm:w-8/12 md:w-2/3'>
                                <section className='uploadClass4'>
                                    <label for="dropzone-file-class4" className='border-dashed border-2 border-border-base h-36 rounded flex flex-col justify-center items-center cursor-pointer focus:border-accent-400 focus:outline-none'>
                                        <FaUpload />
                                        <p className='mt-4 text-center text-xs'>
                                            <span className='font-normal text-gray-600'>Upload an image </span>
                                            or drag and drop
                                            <br />
                                            <span className='text-xs'>PNG, JPG</span>
                                        </p>
                                        <input id="dropzone-file-class4" onChange={handleImageClass4} type="file" className='hidden' />
                                        <div className='flex mb-5'>
                                            {createClass4 && <img src={createClass4} alt="image" width={100} className='h-[100px] object-contain' />}
                                        </div>
                                    </label>
                                </section>
                            </div>
                        </div>
                        <div className='my-5 flex flex-wrap sm:my-8'>
                            <div className='w-full px-0 pb-5 sm:w-4/12 sm:py-8 sm:px-4 md:w-1/3 md:py-5'>
                                <h4 className='text-base font-semibold mb-2'>Text here</h4>
                                <p className='text-sm'>Add All Text for About Page here</p>
                            </div>
                            <div className='p-5 md:p-8 bg-white shadow rounded w-full sm:w-8/12 md:w-2/3'>
                                <div className='mb-5'>
                                    <label for="company1" className='block mb-3 text-sm font-normal leading-none text-gray-400'>Text Profile Company 1</label>
                                    <textarea id="company1" name='company1' value={textCompany1} onChange={e => setCompany1(e.target.value)} className='py-3 px-3 w-full rounded appearance-none transition duration-300 ease-in-out text-heading text-sm focus:outline-none focus:ring-0 border border-border-base focus:border-accent ' rows="1.5" autoComplete='off' autoCorrect='off' autoCapitalize='off' spellCheck='false'></textarea>
                                </div>
                                <div className='mb-5'>
                                    <label for="company2" className='block mb-3 text-sm font-normal leading-none text-gray-400'>Text Profile Company 2</label>
                                    <textarea id="company2" name='company2' value={textCompany2} onChange={e => setCompany2(e.target.value)} className='py-3 px-3 w-full rounded appearance-none transition duration-300 ease-in-out text-heading text-sm focus:outline-none focus:ring-0 border border-border-base focus:border-accent ' rows="1.5" autoComplete='off' autoCorrect='off' autoCapitalize='off' spellCheck='false'></textarea>
                                </div>
                                <div className='mb-5'>
                                    <label for="visiontitle" className='block mb-3 text-sm font-normal leading-none text-gray-400'>Vision Title</label>
                                    <textarea id="visiontitle" name='visiontitle' value={visionTitle} onChange={e => setVisionTitle(e.target.value)} className='py-3 px-3 w-full rounded appearance-none transition duration-300 ease-in-out text-heading text-sm focus:outline-none focus:ring-0 border border-border-base focus:border-accent ' rows="1.5" autoComplete='off' autoCorrect='off' autoCapitalize='off' spellCheck='false'></textarea>
                                </div>
                                <div className='mb-5'>
                                    <label for="visiondetail" className='block mb-3 text-sm font-normal leading-none text-gray-400'>Vision Detail</label>
                                    <textarea id="visiondetail" name='visiondetail' value={visionDetail} onChange={e => setVisionDetail(e.target.value)} className='py-3 px-3 w-full rounded appearance-none transition duration-300 ease-in-out text-heading text-sm focus:outline-none focus:ring-0 border border-border-base focus:border-accent ' rows="1.5" autoComplete='off' autoCorrect='off' autoCapitalize='off' spellCheck='false'></textarea>
                                </div>
                                <div className='mb-5'>
                                    <label for="missiontitle" className='block mb-3 text-sm font-normal leading-none text-gray-400'>Mission Title</label>
                                    <textarea id="missiontitle" name='missiontitle' value={missionTitle} onChange={e => setMissionTitle(e.target.value)} className='py-3 px-3 w-full rounded appearance-none transition duration-300 ease-in-out text-heading text-sm focus:outline-none focus:ring-0 border border-border-base focus:border-accent ' rows="1.5" autoComplete='off' autoCorrect='off' autoCapitalize='off' spellCheck='false'></textarea>
                                </div>
                                <div className='mb-5'>
                                    <label for="missiondetail" className='block mb-3 text-sm font-normal leading-none text-gray-400'>Mission Detail</label>
                                    <textarea id="missiondetail" name='missiondetail' value={missionDetail} onChange={e => setMissionDetail(e.target.value)} className='py-3 px-3 w-full rounded appearance-none transition duration-300 ease-in-out text-heading text-sm focus:outline-none focus:ring-0 border border-border-base focus:border-accent ' rows="1.5" autoComplete='off' autoCorrect='off' autoCapitalize='off' spellCheck='false'></textarea>
                                </div>
                                <div className='mb-5'>
                                    <label for="valuedetail" className='block mb-3 text-sm font-normal leading-none text-gray-400'>Value Detail</label>
                                    <textarea id="valuedetail" name='valuedetail' value={valueDetail} onChange={e => setValueDetail(e.target.value)} className='py-3 px-3 w-full rounded appearance-none transition duration-300 ease-in-out text-heading text-sm focus:outline-none focus:ring-0 border border-border-base focus:border-accent ' rows="1.5" autoComplete='off' autoCorrect='off' autoCapitalize='off' spellCheck='false'></textarea>
                                </div>
                                <div className='mb-5'>
                                    <label for="concepttitle" className='block mb-3 text-sm font-normal leading-none text-gray-400'>Concept Title</label>
                                    <textarea id="concepttitle" name='concepttitle' value={conceptTitle} onChange={e => setConceptTitle(e.target.value)} className='py-3 px-3 w-full rounded appearance-none transition duration-300 ease-in-out text-heading text-sm focus:outline-none focus:ring-0 border border-border-base focus:border-accent ' rows="1.5" autoComplete='off' autoCorrect='off' autoCapitalize='off' spellCheck='false'></textarea>
                                </div>
                                <div className='mb-5'>
                                    <label for="conceptdetail" className='block mb-3 text-sm font-normal leading-none text-gray-400'>Concept Detail</label>
                                    <textarea id="conceptdetail" name='conceptdetail' value={conceptDetail} onChange={e => setConceptDetail(e.target.value)} className='py-3 px-3 w-full rounded appearance-none transition duration-300 ease-in-out text-heading text-sm focus:outline-none focus:ring-0 border border-border-base focus:border-accent ' rows="1.5" autoComplete='off' autoCorrect='off' autoCapitalize='off' spellCheck='false'></textarea>
                                </div>
                                <div className='mb-5'>
                                    <label for="classtitle" className='block mb-3 text-sm font-normal leading-none text-gray-400'>Class Title</label>
                                    <textarea id="classtitle" name='classtitle' value={classTitle} onChange={e => setClassTitle(e.target.value)} className='py-3 px-3 w-full rounded appearance-none transition duration-300 ease-in-out text-heading text-sm focus:outline-none focus:ring-0 border border-border-base focus:border-accent ' rows="1.5" autoComplete='off' autoCorrect='off' autoCapitalize='off' spellCheck='false'></textarea>
                                </div>
                                <div className='mb-5'>
                                    <label for="classtitle1" className='block mb-3 text-sm font-normal leading-none text-gray-400'>Class Title 1</label>
                                    <textarea id="classtitle1" name='classtitle1' value={classTitle1} onChange={e => setClassTitle1(e.target.value)} className='py-3 px-3 w-full rounded appearance-none transition duration-300 ease-in-out text-heading text-sm focus:outline-none focus:ring-0 border border-border-base focus:border-accent ' rows="1.5" autoComplete='off' autoCorrect='off' autoCapitalize='off' spellCheck='false'></textarea>
                                </div>
                                <div className='mb-5'>
                                    <label for="classdetail1" className='block mb-3 text-sm font-normal leading-none text-gray-400'>Class Detail 1</label>
                                    <textarea id="classdetail1" name='classdetail1' value={classDetail1} onChange={e => setClassDetail1(e.target.value)} className='py-3 px-3 w-full rounded appearance-none transition duration-300 ease-in-out text-heading text-sm focus:outline-none focus:ring-0 border border-border-base focus:border-accent ' rows="1.5" autoComplete='off' autoCorrect='off' autoCapitalize='off' spellCheck='false'></textarea>
                                </div>
                                <div className='mb-5'>
                                    <label for="classtitle2" className='block mb-3 text-sm font-normal leading-none text-gray-400'>Class Title 2</label>
                                    <textarea id="classtitle2" name='classtitle2' value={classTitle2} onChange={e => setClassTitle2(e.target.value)} className='py-3 px-3 w-full rounded appearance-none transition duration-300 ease-in-out text-heading text-sm focus:outline-none focus:ring-0 border border-border-base focus:border-accent ' rows="1.5" autoComplete='off' autoCorrect='off' autoCapitalize='off' spellCheck='false'></textarea>
                                </div>
                                <div className='mb-5'>
                                    <label for="classdetail2" className='block mb-3 text-sm font-normal leading-none text-gray-400'>Class Detail 2</label>
                                    <textarea id="classdetail2" name='classdetail2' value={classDetail2} onChange={e => setClassDetail2(e.target.value)} className='py-3 px-3 w-full rounded appearance-none transition duration-300 ease-in-out text-heading text-sm focus:outline-none focus:ring-0 border border-border-base focus:border-accent ' rows="1.5" autoComplete='off' autoCorrect='off' autoCapitalize='off' spellCheck='false'></textarea>
                                </div>
                                <div className='mb-5'>
                                    <label for="classtitle3" className='block mb-3 text-sm font-normal leading-none text-gray-400'>Class Title 3</label>
                                    <textarea id="classtitle3" name='classtitle3' value={classTitle3} onChange={e => setClassTitle3(e.target.value)} className='py-3 px-3 w-full rounded appearance-none transition duration-300 ease-in-out text-heading text-sm focus:outline-none focus:ring-0 border border-border-base focus:border-accent ' rows="1.5" autoComplete='off' autoCorrect='off' autoCapitalize='off' spellCheck='false'></textarea>
                                </div>
                                <div className='mb-5'>
                                    <label for="classdetail3" className='block mb-3 text-sm font-normal leading-none text-gray-400'>Class Detail 3</label>
                                    <textarea id="classdetail3" name='classdetail3' value={classDetail3} onChange={e => setClassDetail3(e.target.value)} className='py-3 px-3 w-full rounded appearance-none transition duration-300 ease-in-out text-heading text-sm focus:outline-none focus:ring-0 border border-border-base focus:border-accent ' rows="1.5" autoComplete='off' autoCorrect='off' autoCapitalize='off' spellCheck='false'></textarea>
                                </div>
                                <div className='mb-5'>
                                    <label for="classtitle4" className='block mb-3 text-sm font-normal leading-none text-gray-400'>Class Title 4</label>
                                    <textarea id="classtitle4" name='classtitle4' value={classTitle4} onChange={e => setClassTitle4(e.target.value)} className='py-3 px-3 w-full rounded appearance-none transition duration-300 ease-in-out text-heading text-sm focus:outline-none focus:ring-0 border border-border-base focus:border-accent ' rows="1.5" autoComplete='off' autoCorrect='off' autoCapitalize='off' spellCheck='false'></textarea>
                                </div>
                                <div className='mb-5'>
                                    <label for="classdetail4" className='block mb-3 text-sm font-normal leading-none text-gray-400'>Class Detail 4</label>
                                    <textarea id="classdetail4" name='classdetail4' value={classDetail4} onChange={e => setClassDetail4(e.target.value)} className='py-3 px-3 w-full rounded appearance-none transition duration-300 ease-in-out text-heading text-sm focus:outline-none focus:ring-0 border border-border-base focus:border-accent ' rows="1.5" autoComplete='off' autoCorrect='off' autoCapitalize='off' spellCheck='false'></textarea>
                                </div>
                            </div>
                        </div>
                        <div className='mb-4 text-end'>
                            <button type="submit" className='inline-flex items-center justify-center flex-shrink-0 font-normal leading-none rounded outline-none transition duration-300 ease-in-out focus:outline-none focus:shadow focus:ring-1 focus:ring-accent-700 bg-green-400 text-white border border-transparent hover:bg-accent-hover px-5 py-0 h-12'>Add About</button>
                        </div>
                    </form>
                    {/* )} */}
                </section>
            </SideNavbar>
        </>
    );
}

export default Create;

export async function getServerSideProps({ req }) {
    const session = await getSession({ req })

    if (!session) {
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