import React from "react";

import { Search } from "lucide-react";
// import { ModeToggle } from "./ui/ModeToggle";
// import { Sheet } from "./ui/sheet";
// import { Humburger } from "./Home/Humburger";
import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import { Humburger } from "./Humburger";

const Navbar = () => {
  return (
    <nav className="flex justify-around items-center h-[4.1rem]  md:h-[4.5rem] w-full bg-black text-white ">
      <h2
        className="font-bold text-xl sm:text-3xl
        "
      >
       <Link href={"/"}> Crypto uncle</Link>
      </h2>

      <ul className=" flex items-center space-x-4 font-semibold *:duration-500 ">
        <div className="hidden md:flex items-center space-x-6 ">
          {" "}
          <li className="hover:text-gray-500   cursor-pointer  ">
            <Link href={"/"}> Home</Link>
          </li>
          <li className="hover:text-gray-500   cursor-pointer  ">
            {" "}
            <Link href={"posts"}> Posts</Link>
          </li>
          <li className="hover:text-gray-500  cursor-pointer   ">
            <Link href={"/archives"}> archives</Link>{" "}
          </li>
          <li className="hover:text-gray-500   cursor-pointer  ">
            <Link href={"/pages"}> pages</Link>{" "}
          </li>
        </div>
        <li className="hover:text-gray-500   cursor-pointer  ">
          <Search />{" "}
        </li>
        <li className="hover:text-gray-500   cursor-pointer  ">
          <ModeToggle />{" "}
        </li>
        <li className="block md:hidden">
          <Humburger />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
