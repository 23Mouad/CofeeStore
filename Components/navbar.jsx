"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import logonav from "@assets/coffeelogo.png";
import { usePathname } from "next/navigation";

const Navbar = () => {
   const pathname = usePathname();
   const navbarStyle = {
      backgroundColor: pathname === "/" ? "#fff" : "#ebdbcc",
   };

   return (
      <div className="navi  justify-content-between d-flex " id="nav-me">
         <div className="navi-logo align-items-center d-flex ">
            <Link className="navbar-brand align-items-center " href="/">
               <Image
                  className=" Image-fluid "
                  src={logonav}
                  alt="Logo "
               ></Image>
            </Link>
         </div>
         <div className="navi-links align-items-center">
            <ul className="nav-btns">
               <li>
                  <Link href="/">Home</Link>
               </li>
               <li>
                  <Link href="about">About</Link>
               </li>
               <li>
                  <Link href="menu">Menu</Link>
               </li>
               <li>
                  <Link href="contact">Contact</Link>
               </li>
            </ul>
         </div>
         <div></div>
      </div>
   );
};

export default Navbar;
