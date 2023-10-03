"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import logonav from "@assets/coffeelogo.png";

const Navbar = () => {
   return (
      <div
         className="navi d-flex justify-content-between sticky-top"
         id="nav-me"
      >
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
         <div className="navi-btn align-items-center d-flex">
            <button className=" mybtn-one ">
               <Link href="contact">Let's Talk</Link>
            </button>
         </div>
      </div>
   );
};

export default Navbar;
