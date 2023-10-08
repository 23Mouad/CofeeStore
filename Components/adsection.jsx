"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import quality from "@assets/quality.png";
import barista from "@assets/barista.png";
import atmosphere from "@assets/atmosphere.png";
import adimage from "@assets/adimage.png";

const Adsection = ({ data }) => {
   const [visibleItems, setVisibleItems] = useState(getInitialVisibleItems());

   const getRandomPrice = () => {
      return Math.floor(Math.random() * 5) + 3;
   };

   function getInitialVisibleItems() {
      if (typeof window !== "undefined" && window.innerWidth >= 992) {
         // Large screens
         return 4;
      } else if (typeof window !== "undefined" && window.innerWidth >= 768) {
         // Medium screens
         return 3;
      } else {
         // Small screens
         return 2;
      }
   }
   useEffect(() => {
      function handleResize() {
         // Update visible items when the window is resized
         setVisibleItems(getInitialVisibleItems());
      }

      window.addEventListener("resize", handleResize);
      return () => {
         window.removeEventListener("resize", handleResize);
      };
   }, []);

   return (
      <>
         <div className="adsection m-0 mt-3 mb-3 row">
            <div className="firstPart col-12 col-sm-8 p-1 p-md-4">
               <h1>IT’S ALL ABOUT QUALITY</h1>

               <div className="row mt-1 mt-md-3 ">
                  <div className="col-4 p-1 p-md-3 d-flex flex-column align-items-center">
                     <Image src={quality} width={64} height={64} />
                     <h6 className=" text-center mt-2">Quality Ingredients</h6>
                  </div>

                  <div className="col-4 p-1 p-md-3 d-flex flex-column align-items-center">
                     <Image src={barista} width={64} height={64} />
                     <h6 className=" text-center mt-2">Passionate Baristas</h6>
                  </div>

                  <div className="col-4 p-0 p-md-3 d-flex flex-column align-items-center">
                     <Image src={atmosphere} width={64} height={64} />
                     <h6 className=" text-center mt-2">Cozy Atmosphere</h6>
                  </div>
               </div>
            </div>

            <div className="overflow-image-container d-none d-sm-flex ms-auto col-4 p-0">
               <Image src={adimage} className="ms-auto" />
            </div>
         </div>

         {/* OUR BEST SECTON */}

         <h1 className="fascinate mt-1 mb-2 mb-md-4 ">Our best</h1>
         <div className="row m-0 mt-3 p-1 p-md-2 p-lg-4">
            {data.slice(0, visibleItems).map((item, index) => (
               <div
                  className="col-lg-3 col-md-4 col-sm-6 mb-4 d-flex justify-content-center"
                  key={index}
               >
                  <div
                     className="h-100"
                     style={{
                        width: "255px",
                     }}
                  >
                     <Link href={`/coffee/${item.id}`}>
                        {/* Link to coffee page with specific id */}
                        <Image
                           src={item.image}
                           className="rounded-5"
                           alt={item.title}
                           width={250}
                           height={250}
                        />
                     </Link>
                     <div className="">
                        <h5 className="mb-1">{item.title}</h5>
                        <h6 className="halfblc">
                           {item.ingredients.join(", ")}
                        </h6>
                     </div>
                     <div className="d-flex justify-content-between">
                        <h5 className="price">${getRandomPrice()},99</h5>
                        <button className="add-to-cart-button border-0 ">
                           <h5 className=" m-0">+</h5>
                        </button>
                     </div>
                  </div>
               </div>
            ))}
         </div>
      </>
   );
};

export default Adsection;
