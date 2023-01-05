import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { signOut, useSession } from 'next-auth/react'

const Header = () => {
    const { data: session } = useSession();
    const [nav, setNav] = useState(false);
    const [color, setColor] = useState("transparent");
    const [textColor, setTextColor] = useState("white");

    const handleNav = () => {
        setNav(!nav);
    };

    useEffect(() => {
        const changeColor = () => {
            if (window.scrollY >= 90) {
                setColor("#ffffff");
                setTextColor("#000000");
            } else {
                setColor("transparent");
                setTextColor("#ffffff");
            }
        };
        window.addEventListener("scroll", changeColor);
    }, []);
    return (
        <div
            style={{ backgroundColor: `${color}` }}
            className="fixed left-0 top-0 w-full z-10 ease-in duration-300"
        >
            <div className="max-w-[1240px] grid grid-cols-3 items-center p-4 text-white">
                <div className="flex items-center my-auto">
                    <ul style={{ color: `${textColor}` }} className="hidden sm:flex">
                        <li className="p-4 text-sm uppercase">
                            <Link href="/">Home</Link>
                        </li>
                        <li className="p-4 text-sm uppercase">
                            {/*  data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample" */}
                            <Link href="/product">Product</Link>
                        </li>
                        <li className="p-4 text-sm uppercase">
                            <Link href="/about">About</Link>
                        </li>
                        <li className="p-4 text-sm uppercase">
                            <Link href="/showroom">Showroom</Link>
                        </li>
                    </ul>
                </div>
                <div className="flex items-center justify-center">
                    <Link href="/">
                        <Image src="/assets/logo-hosana.png" width={90} height={90} alt="hosanalogo" />
                    </Link>
                </div>
                <div className="flex items-center justify-end">
                    <ul style={{ color: `${textColor}` }} className="hidden sm:flex">
                        <li className="p-4 text-sm uppercase">
                            <Link href="/project">Project</Link>
                        </li>
                        <li className="p-4 text-sm uppercase">
                            <Link href="/store">Find Store</Link>
                        </li>
                        <li className="p-4 text-sm uppercase">
                            <Link href="/contact">Contact</Link>
                        </li>
                        <li className="p-4 text-sm uppercase">
                            <Link href="/shop">Shop</Link>
                        </li>
                        {session?.user.role == "ADMIN" ? (
                            <li className="p-4 text-sm uppercase">
                                <Link className="border p-2" href="/admin/homePage">Admin</Link>
                            </li>) : (
                            ''
                        )
                        }
                        {session?.user.role == "USER" ? (
                            <li className="p-4 text-sm uppercase">
                                <Link className="border p-2" href="/customer/dashboard">Dashboard</Link>
                            </li>) : (
                            ''
                        )
                        }
                    </ul>
                </div>
                {/* Mobile Button */}
                <div onClick={handleNav} className="relative -mt-10 sm:hidden z-10">
                    {nav ? (
                        <AiOutlineClose size={20} style={{ color: `${textColor}` }} />
                    ) : (
                        <AiOutlineMenu size={20} style={{ color: `${textColor}` }} />
                    )}
                </div>
                {/* Mobile Menu */}
                <div
                    className={
                        nav
                            ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
                            : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
                    }
                >
                    <ul>
                        <li
                            onClick={handleNav}
                            className="p-4 text-4xl hover:text-gray-500"
                        >
                            <Link href="/">Home</Link>
                        </li>
                        <li
                            onClick={handleNav}
                            className="p-4 text-4xl hover:text-gray-500"
                        >
                            <Link href="/product">Product</Link>
                        </li>
                        <li
                            onClick={handleNav}
                            className="p-4 text-4xl hover:text-gray-500"
                        >
                            <Link href="/about">About</Link>
                        </li>
                        <li
                            onClick={handleNav}
                            className="p-4 text-4xl hover:text-gray-500"
                        >
                            <Link href="/showroom">Showroom</Link>
                        </li>
                        <li
                            onClick={handleNav}
                            className="p-4 text-4xl hover:text-gray-500"
                        >
                            <Link href="/project">Project</Link>
                        </li>
                        <li
                            onClick={handleNav}
                            className="p-4 text-4xl hover:text-gray-500"
                        >
                            <Link href="/store">Store</Link>
                        </li>
                        <li
                            onClick={handleNav}
                            className="p-4 text-4xl hover:text-gray-500"
                        >
                            <Link href="/contact">Contact</Link>
                        </li>
                        <li
                            onClick={handleNav}
                            className="p-4 text-4xl hover:text-gray-500"
                        >
                            <Link href="/">Shop</Link>
                        </li>
                        {session?.user.role == "ADMIN" ? (
                            <li
                                onClick={handleNav}
                                className="p-4 text-4xl hover:text-gray-500"
                            >
                                <Link href="/admin/homePage">Admin</Link>
                            </li>) : (
                            ''
                        )
                        }
                        {session?.user.role == "USER" ? (
                            <li
                                onClick={handleNav}
                                className="p-4 text-4xl hover:text-gray-500"
                            >
                                <Link href="/customer/dashboard">Dashboard</Link>
                            </li>) : (
                            ''
                        )
                        }

                    </ul>
                </div>
            </div>
            {/* <div className="absolute">
                <div className="collapse collapse-horizontal" id="collapseWidthExample">
                    <div className="block p-2 shadow-lg bg-white w-full">
                        <div className="flex justify-center">
                            <div className="bg-white w-[250px] h-auto p-5">
                                <a href="#!">
                                    <img src="https://images.unsplash.com/photo-1604014237256-11d475e2a2d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80" alt="" className="h-[140px] w-[250px]" />
                                </a>
                                <div className="text-center pt-2">
                                    <h5 className="text-gray-600 text-sm font-medium">Luxury Series</h5>
                                </div>
                            </div>
                            <div className="bg-white w-[250px] h-auto p-5">
                                <a href="#!">
                                    <img src="https://images.unsplash.com/photo-1661107259637-4e1c55462428?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTk3fHxzaG93ZXIlMjBpbnRlcmlvcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" alt="" className="h-[140px] w-[250px]" />
                                </a>
                                <div className="text-center pt-2">
                                    <h5 className="text-gray-600 text-sm font-medium">Gold Series</h5>
                                </div>
                            </div>
                            <div className="p-5">
                                <h5 className='text-xl font-thin tracking-widest pl-10 text-gray-400'>Browse By Category</h5>
                                <div className="grid grid-cols-5 pl-10">
                                    <div className="grid pt-2 pr-4">
                                        <Link href="/" className="text-sm font-medium tracking-widest text-gray-600">All Products</Link>
                                        <Link href="/" className="text-sm font-medium tracking-widest pt-2 text-gray-600">Pub Singapore</Link>
                                        <Link href="/" className="text-sm font-medium tracking-widest pt-2 text-gray-600">Certified</Link>
                                        <Link href="/" className="text-sm font-medium tracking-widest pt-2 text-gray-600">Products</Link>
                                        <Link href="/" className="text-sm font-medium tracking-widest pt-2 text-gray-600">Excellence</Link>
                                    </div>
                                    <div className="grid pt-2 pr-4">
                                        <Link href="/" className="text-sm font-medium tracking-widest text-gray-600">Fitings</Link>
                                        <Link href="/" className="text-xs tracking-widest pt-2 text-gray-600"> ~ Mixer Faucet</Link>
                                        <Link href="/" className="text-xs tracking-widest pt-2 text-gray-600"> ~ Shower</Link>
                                        <Link href="/" className="text-xs tracking-widest pt-2 text-gray-600"> ~ Others</Link>
                                    </div>
                                    <div className="grid pt-10 pr-4">
                                        <Link href="/" className="text-xs tracking-widest pt-2 text-gray-600"> ~ Single Faucet</Link>
                                        <Link href="/" className="text-xs tracking-widest pb-6 text-gray-600"> ~ Hose</Link>
                                    </div>
                                    <div className="grid pt-2">
                                        <Link href="/" className="text-sm font-medium tracking-widest text-gray-600">Sanitary Wares</Link>
                                        <Link href="/" className="text-xs tracking-widest pt-2 text-gray-600"> ~ Toilet</Link>
                                        <Link href="/" className="text-xs tracking-widest pt-2 text-gray-600"> ~ Washbasin</Link>
                                        <Link href="/" className="text-xs tracking-widest pt-2 text-gray-600"> ~ Urinal</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    );
}

export default Header;
