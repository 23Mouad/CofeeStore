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

   // Function to handle smooth scrolling to a specific element on the page
   const scrollToElement = (elementId) => {
      const element = document.getElementById(elementId);
      if (element) {
         element.scrollIntoView({ behavior: "smooth" });
      }
   };

   return (
      <div className="navi justify-content-between d-flex" id="nav-me">
         <div className="navi-logo align-items-center d-flex">
            <Link className="navbar-brand align-items-center" href="/">
               <Image className="Image-fluid" src={logonav} alt="Logo"></Image>
            </Link>
         </div>
         <div className="navi-links align-items-center">
            <ul className="nav-btns">
               <li>
                  <Link href="/">Home</Link>
               </li>
               <li>
                  <Link href="/about">About</Link>
               </li>
               <li>
                  <a href="#" onClick={() => scrollToElement("menu")}>
                     Menu
                  </a>
               </li>
               <li>
                  <a href="#" onClick={() => scrollToElement("contact")}>
                     Contact
                  </a>
               </li>
            </ul>
         </div>
         <div></div>
      </div>
   );
};

export default Navbar;
