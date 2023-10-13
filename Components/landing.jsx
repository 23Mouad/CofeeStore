"use client";

import React, { useState } from "react";
import fivrrL from "@assets/fivrrL.png";
import fivrrD from "@assets/fivrrD.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
   faLinkedin,
   faGithub,
   faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import Image from "next/image";
import Navbar from "./navbar";

export default function HeroPage() {
   const [hovered, setHovered] = useState(false);

   return (
      <div className="landingpage m-0 ">
         <Navbar />
         <div className="heropage row m-0 mt-1 p-1 p-md-4">
            <div className="col-12 col-md-6 firstpart order-2 order-md-1">
               <h1 className="animate__animated animate__tada">
                  Sip into Perfection
               </h1>
               <h2 className=" mb-1 mb-md-5">Where Coffee Meets Artistry</h2>
               <p>
                  At Coffee Store , we are passionate about bringing you the
                  finest coffee experience. Our dedication to quality and taste
                  is what sets us apart. Whether you're a coffee connoisseur or
                  just looking for a great cup of joe, we've got you covered.
               </p>
               <div className="buttons">
                  <button className="btni-full me-1 rounded-5">
                     <Link href="/works" className=" fs-6 fa-bold">
                        Shop Now
                     </Link>
                  </button>
               </div>
            </div>
         </div>

         <div className="">
            <ul className="wrapper text-black">
               <li className="icon linkedin">
                  <span className="tooltip">Linkedin</span>
                  <span>
                     {" "}
                     <a
                        href="https://www.linkedin.com/in/mouad-kahla"
                        className=""
                        style={{ color: "inherit" }}
                     >
                        <FontAwesomeIcon
                           icon={faLinkedin}
                           className="fs-3"
                           size="xl"
                        />
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
                        <FontAwesomeIcon icon={faGithub} className="fs-3" />
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
                        <FontAwesomeIcon icon={faFacebook} className="fs-3" />
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
                           className="Image-fluid w-50 h-auto"
                        />
                     </a>
                  </span>
               </li>
            </ul>
         </div>
      </div>
   );
}
