import { getSession, useSession } from 'next-auth/react';
import Head from 'next/head';
import React, { useEffect, useMemo, useState } from 'react';
import Header from '../../components/admin/Header';
import SideNavbar from '../../layout/SideNavbar';
import Link from "next/link";
import DataTable from 'react-data-table-component';
import FilterComponent from '../../components/FilterComponent';
import CustomLoader from '../../components/CustomLoader';
import { BiEdit } from 'react-icons/bi';
import { MdDelete } from 'react-icons/md';
import { HiPlusSm } from 'react-icons/hi';
import { FaFileExcel } from 'react-icons/fa';
import { read, utils } from 'xlsx';
import { async } from '@firebase/util';

const UserPoinPage = () => {
    const { data: session } = useSession();
    const [user, setUser] = useState([]);
    const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
    const [filterText, setFilterText] = useState('');
    const [userImport, setUserImport] = useState();
    const [pending, setPending] = useState(true);

    const filteredItems = user.filter(
        item => item.number && item.number.toLowerCase().includes(filterText.toLowerCase()),
    );

    const fetchUser = () => {
        fetch('/api/userpoin/getdata').then(res => res.json().then((data) => {
            setUser(data)
        }))
    }

    const handleButtonDelete = async (e, id) => {
        e.preventDefault();
        if (confirm('Are you sure want to delete this ?')) {
            try {
                await fetch("/api/userpoin/deletedata?id=" + id, {
                    method: "DELETE",
                    headers: { "Content-Type": "application/json" },
                })
                window.location.reload();
            } catch (err) {
                console.log(err)
            }
        } else {
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
            name: 'Phone Number',
            selector: row => row.number,
        },
        {
            name: "Action",
            button: true,
            cell: row =>
            (
                <>
                    <button>
                        <Link href={`/admin/userpoin/edit/${row.id}`}>
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

    const handleImport = (e) => {
        const files = e.target.files[0];
        sendXlxs(files);
    }

    const sendXlxs = async (files) => {
        const forms = new FormData();
        forms.append('userNumber', files);
        await fetch("/api/userpoin/upload", {
            method: "POST",
            body: forms,
        });
    }

    useEffect(() => {
        const timeout = setTimeout(() => {
            fetchUser();
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
                        <h1 class="text-2xl font-semibold leading-relaxed text-gray-600">Users Poin</h1>
                        <p class="text-sm font-medium text-gray-500">
                            All Users Poin here
                        </p>
                    </div>
                    <div className="inline-flex gap-x-2 items-center py-2.5 px-6 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-1">
                        <input type="file" name="file" className="custom-file-input hidden" id="inputGroupFile" required onChange={handleImport}
                            accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel" />
                           
                        <label className="text-sm font-semibold tracking-wide cursor-pointer"  htmlFor="inputGroupFile">Import Excel</label>
                    </div>
                    <Link href="/admin/userpoin/create"
                        className="inline-flex gap-x-2 items-center py-2.5 px-6 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-1"
                    >
                        <HiPlusSm className="w-6 h-6 fill-white" />
                        <span className="text-sm font-semibold tracking-wide">Create User Poin</span>
                    </Link>
                </div>
                <DataTable
                    columns={column}
                    data={filteredItems}
                    defaultSortField="number"
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

export default UserPoinPage;

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
