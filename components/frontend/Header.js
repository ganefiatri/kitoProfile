import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Header = () => {
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
                            <Link href="/about">About</Link>
                        </li>
                        <li className="p-4 text-sm uppercase">
                            <Link href="/">Product</Link>
                        </li>
                        <li className="p-4 text-sm uppercase">
                            <Link href="/">Catalogue</Link>
                        </li>
                        <li className="p-4 text-sm uppercase">
                            <Link href="/">Showroom</Link>
                        </li>
                    </ul>
                </div>
                <div className="flex items-center justify-center">
                    <Link href="/">
                        <Image src="/assets/logo-hosana.png" width={90} height={90} alt="hosanalogo"/>
                    </Link>
                </div>
                <div className="flex items-center justify-end">
                    <ul style={{ color: `${textColor}` }} className="hidden sm:flex">
                        <li className="p-4 text-sm uppercase">
                            <Link href="/">Project</Link>
                        </li>
                        <li className="p-4 text-sm uppercase">
                            <Link href="/">Find Store</Link>
                        </li>
                        <li className="p-4 text-sm uppercase">
                            <Link href="/">Contact</Link>
                        </li>
                        <li className="p-4 text-sm uppercase">
                            <Link href="/">Shop</Link>
                        </li>
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
                            <Link href="/">Gallery</Link>
                        </li>
                        <li
                            onClick={handleNav}
                            className="p-4 text-4xl hover:text-gray-500"
                        >
                            <Link href="/">My roads</Link>
                        </li>
                        <li
                            onClick={handleNav}
                            className="p-4 text-4xl hover:text-gray-500"
                        >
                            <Link href="/">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Header;
