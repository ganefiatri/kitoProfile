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
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from 'next/router';

const CustomerPoinPage = () => {
    const { data: session } = useSession();
    const [user, setUser] = useState([]);
    const router = useRouter()
    const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
    const [filterText, setFilterText] = useState('');
    const [userImport, setUserImport] = useState();
    const [pending, setPending] = useState(true);

    const filteredItems = user.filter(
        item => item.cust_name && item.cust_name.toLowerCase().includes(filterText.toLowerCase()),
    );

    const fetchUser = () => {
        fetch('/api/customerpoin/getdata').then(res => res.json().then((data) => {
            setUser(data)
        }))
    }

    const handleButtonDelete = async (e, id) => {
        e.preventDefault();
        if (confirm('Are you sure want to delete this ?')) {
            try {
                await fetch("/api/customerpoin/deletedata?id=" + id, {
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
            name: 'Customer Name',
            selector: row => row.cust_name,
        },
        {
            name: 'Loc',
            selector: row => row.loc,
        },
        {
            name: 'Ar Type',
            selector: row => row.ar_type,
        },
        {
            name: 'Ar No',
            selector: row => row.ar_no,
        },
        {
            name: 'Ar Date',
            selector: row => row.ar_date,
        },
        {
            name: 'Due Date',
            selector: row => row.due_date,
        },
        {
            name: 'Customer Code',
            selector: row => row.cust_code,
        },
        {
            name: 'Total Ar',
            selector: row => row.total_ar,
        },
        {
            name: 'Payment',
            selector: row => row.payment,
        },
        {
            name: 'Giro Rls',
            selector: row => row.giro_rls,
        },
        {
            name: 'Description',
            selector: row => row.description,
        },
        {
            name: 'Giro No',
            selector: row => row.giro_no,
        },
        {
            name: 'Ar Notemp',
            selector: row => row.ar_notemp,
        },
        {
            name: 'Ac Code',
            selector: row => row.ac_code,
        },
        {
            name: 'Seri Id',
            selector: row => row.seri_id,
        },
        {
            name: 'Status',
            selector: row => row.status,
        },
        {
            name: 'Flag Gl',
            selector: row => row.flag_gl,
        },
        {
            name: 'Flag Giro',
            selector: row => row.flag_giro,
        },
        {
            name: 'Giro',
            selector: row => row.giro,
        },
        {
            name: 'Flag Gl Cair',
            selector: row => row.flag_gl_cair,
        },
        {
            name: 'Ac Biaya',
            selector: row => row.ac_biaya,
        },
        {
            name: 'Biaya',
            selector: row => row.biaya,
        },
        {
            name: 'Sales Code',
            selector: row => row.sales_code,
        },
        {
            name: 'Sisa',
            selector: row => row.sisa,
        },
        {
            name: 'Phone',
            selector: row => row.phone1,
        },
        {
            name: 'Due',
            selector: row => row.due,
        },
        {
            name: 'Jual',
            selector: row => row.jual,
        },
        {
            name: 'Retur Panjar',
            selector: row => row.retur_panjar,
        },
        {
            name: 'Periode',
            selector: row => row.periode,
        },
        {
            name: 'Jenis',
            selector: row => row.jenis,
        },
        {
            name: 'Keterangan',
            selector: row => row.keterangan,
        },
        {
            name: "Action",
            button: true,
            cell: row =>
            (
                <>
                    <button>
                        <Link href={`/admin/customerpoin/edit/${row.id}`}>
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
        const res = await fetch("/api/customerpoin/upload", {
            method: "POST",
            body: forms,
        });
        const result = await res.json();
        if(!result){
            toast('Something Wrong!', { hideProgressBar: true, autoClose: 2000, type: 'error', position: 'top-right' })
        }else{
            toast('Successfully Linked data!', { hideProgressBar: true, autoClose: 2000, type: 'success', position: 'top-right' })
            router.push("/admin/customerPoinPage")
        }
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
                    <title>HOKITO GROUP</title>
                    <meta name="description" content="Generated by create next app" />
                    <link rel="shortcut icon" href="/assets/favicon/favicon.ico" />
                    <link rel="icon" type="image/vnd.microsoft.icon" href="/assets/favicon/favicon.ico" />
                    <link rel="icon" type="image/x-icon" href="/assets/favicon/favicon.ico" />
                    <link rel="icon" href="/assets/favicon/favicon.ico" />
                </Head>
                <div class="items-center justify-between pb-5 lg:flex xl:flex md:flex">
                    <div className=''>
                        <h1 className="text-2xl font-semibold leading-relaxed text-gray-600">Customer Poin</h1>
                        <p className="text-sm font-medium text-gray-500">
                            All Customer Poin here
                        </p>
                    </div>
                    <div className="inline-flex gap-x-2 items-center py-2.5 px-6 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-1">
                        <input type="file" name="file" className="custom-file-input hidden" id="inputGroupFile" required onChange={handleImport}
                            accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel" />

                        <label className="text-sm font-semibold tracking-wide cursor-pointer" htmlFor="inputGroupFile">Import Excel</label>
                    </div>

                </div>
                <DataTable
                    columns={column}
                    data={filteredItems}
                    defaultSortField="cust_name"
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

export default CustomerPoinPage;

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
