"use client";

import React, { useState } from "react";
import fivrrL from "@assets/fivrrL.png";
import fivrrD from "@assets/fivrrD.png";

import Link from "next/link";
import Image from "next/image";
export default function HeroPage() {
   const [hovered, setHovered] = useState(false);

   return (
      <>
         <div className="heropage row m-0 mt-1">
            <div className="col-12 col-md-6 firstpart order-2 order-md-1">
               <h1 className="animate__animated animate__tada">
                  Sip into Perfection
               </h1>
               <h2>Where Coffee Meets Artistry</h2>
               <p>
                  At Coffee Store , we are passionate about bringing you the
                  finest coffee experience. Our dedication to quality and taste
                  is what sets us apart. Whether you're a coffee connoisseur or
                  just looking for a great cup of joe, we've got you covered.
               </p>
               <div className="buttons">
                  <button className="btni-full me-1">
                     <Link href="/works">My Work</Link>
                  </button>
                  <button className="btni-outline">
                     <Link href="/contact">Hire Me</Link>
                  </button>
               </div>
            </div>

            <div className="col-12 col-md-6 secondpart order-1 order-md-2">
               <div className="p-5 profile-pic align-items-center justify-content-center ">
                  {/* <Image src={profile} alt="profile" className=" Image-fluid" /> */}
               </div>
            </div>
         </div>

         <div className="">
            <ul className="wrapper">
               <li className="icon linkedin">
                  <span className="tooltip">Linkedin</span>
                  <span>
                     {" "}
                     <a
                        href="https://www.linkedin.com/in/mouad-kahla"
                        className=""
                        style={{ color: "inherit" }}
                     >
                        <i className="fa-brands fa-linkedin fs-3"></i>
                     </a>
                  </span>
               </li>

               <li className="icon github">
                  <span className="tooltip">Github</span>
                  <span>
                     <a
                        href="https://github.com/23Mouad"
                        style={{ color: "inherit" }}
                     >
                        <i className="fa-brands fa-github fs-3"></i>
                     </a>
                  </span>
               </li>

               <li className="icon facebook">
                  <span className="tooltip">Facebook</span>
                  <span>
                     {" "}
                     <a
                        href="https://www.facebook.com/profile.php?id=100090883335804"
                        style={{ color: "inherit" }}
                     >
                        <i className="fa-brands fa-facebook fs-3"></i>{" "}
                     </a>
                  </span>
               </li>
               <li
                  className="icon fiverr"
                  onMouseEnter={() => setHovered(true)}
                  onMouseLeave={() => setHovered(false)}
               >
                  <span className="tooltip">Fiverr</span>
                  <span className="d-flex align-items-center justify-content-center">
                     <a
                        href="https://www.fiverr.com/mouad_3"
                        style={{ color: "inherit", textAlign: "center" }}
                     >
                        <Image
                           src={hovered ? fivrrD : fivrrL}
                           alt="fiverr"
                           className="Image-fluid  w-50 "
                        />
                     </a>
                  </span>
               </li>
            </ul>
         </div>
      </>
   );
}
