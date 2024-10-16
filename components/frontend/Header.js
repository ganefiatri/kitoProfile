import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { signOut, useSession } from 'next-auth/react'

const Header = () => {
    const { data: session } = useSession();
    const [nav, setNav] = useState(false);
    const [color, setColor] = useState();
    const [textColor, setTextColor] = useState("white");

    const handleNav = () => {
        setNav(!nav);
    };

    useEffect(() => {
        const changeColor = () => {
            if (window.scrollY >= 100) {
                setColor("#484848");
                setTextColor("#ffffff");
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
            className="fixed left-0 right-0 top-0 z-10 ease-in duration-300"
        >
            <div className="md:flex lg:flex md:grid-cols-3 lg:grid-cols-3 lg:gap-6 items-center justify-center p-4 text-white/40">
                <div className="flex md:col-span-1 lg:col-span-1 items-center my-auto">
                    <ul style={{ color: `${textColor}` }} className="hidden sm:flex">
                        <li className="p-4 md:text-xs lg:text-base text-sm uppercase">
                            <Link href="/">Home</Link>
                        </li>
                        <li className="p-4 md:text-xs lg:text-base text-sm uppercase">
                            <Link href="/aboutDynamic">About</Link>
                        </li>
                        <li className="p-4 md:text-xs lg:text-base text-sm uppercase">
                            <Link href="/showroom">Store</Link>
                        </li>
                        <li className="p-4 md:text-xs lg:text-base text-sm uppercase">
                            <Link href="/project">Project</Link>
                        </li>
                    </ul>
                </div>
                <div className="flex md:col-span-1 lg:col-span-1 justify-center items-center -mt-8">
                    <div className="justify-center w-[100px] h-[100px] p-6 items-center">
                        <Link href="/">
                            <Image src="https://hokito.nyc3.digitaloceanspaces.com/1728993052509-logo.png" width={90} height={90} alt="hosanalogo" />
                        </Link>
                    </div>
                </div>
                <div className="flex md:col-span-1 lg:col-span-1 items-center justify-end">
                    <ul style={{ color: `${textColor}` }} className="hidden sm:flex">
                        <li className="p-4 md:text-xs lg:text-base text-sm uppercase">
                            {/*  data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample" */}
                            <Link href="/product">Product</Link>
                        </li>
                        <li className="p-4 md:text-xs lg:text-base text-sm uppercase">
                            <Link href="/contact">Contact</Link>
                        </li>
                        {/* <li className="p-4 text-sm uppercase">
                            <Link href="/showroom">Showroom</Link>
                        </li> */}
                        <li className="p-4 md:text-xs lg:text-base text-sm uppercase">
                            <Link href="/shops">Shop</Link>
                        </li>
                        {!session? (
                            <li className="p-4 md:text-xs lg:text-base text-sm uppercase">
                                <Link className="border p-1" href="/auth/login">Login</Link>
                            </li>) : (
                            ''
                        )
                        }
                        {session?.user.role == "ADMIN" ? (
                            <li className="p-4 md:text-xs lg:text-base text-sm uppercase">
                                <Link className="border p-1" href="/admin/homePage">Admin</Link>
                            </li>) : (
                            ''
                        )
                        }
                        {session?.user.role == "USER" ? (
                            <li className="p-4 md:text-xs lg:text-base text-sm uppercase">
                                <Link className="border p-1" href="/customer/dashboard">Dashboard</Link>
                            </li>) : (
                            ''
                        )
                        }
                    </ul>
                </div>
                {/* Mobile Button */}
                <div onClick={handleNav} className="relative -mt-16 sm:hidden z-10">
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
        </div>
    );
}

export default Header;
