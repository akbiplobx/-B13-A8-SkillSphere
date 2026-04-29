"use client";
import Link from "next/link";

const Navbar = () => {
    return (
        <div className="border-b px-5">
            <nav className=" flex justify-between items-center  py-4 max-w-6xl mx-auto w-full">
                <div className="flex gap-3 items-center">
                    <h3 className="font-black text-lg">Skill<span className="text-success">Sphere</span> </h3>

                </div>

                <ul className="flex items-center gap-5">
                    <li>
                        <Link href={"/"}>Home</Link>
                    </li>
                    <li>
                        <Link href={"/courses"}>Courses</Link>
                    </li>

                    <li>
                        <Link href={"/profile"}>My Profile</Link>
                    </li>
                </ul>

                <div className="flex gap-5">
                    <ul className="flex items-center gap-3">
                        <li>
                            <Link href={"/register "}>Register</Link>
                        </li>
                        <li>
                            <Link href={"/login "}>Login</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;