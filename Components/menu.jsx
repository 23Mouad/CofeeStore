"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Skeleton from "./skeleton";

const Menu = ({ data }) => {
   const [visibleItems, setVisibleItems] = useState(getInitialVisibleItems());
   console.log(data);
   const emptyarr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
   const getRandomPrice = () => {
      return Math.floor(Math.random() * 5) + 3;
   };

   function getInitialVisibleItems() {
      if (typeof window !== "undefined" && window.innerWidth >= 992) {
         // Large screens
         return 8;
      } else if (typeof window !== "undefined" && window.innerWidth >= 768) {
         // Medium screens
         return 6;
      } else {
         // Small screens
         return 4;
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

   const loadMore = () => {
      // Increase the number of visible items by a certain amount when "See more" is clicked
      setVisibleItems(visibleItems + 8); // Change 8 to the desired number
   };

   return (
      <div>
         <h1 className="fascinate mt-1 mb-2 mb-md-4 " id="menu">
            Menu
         </h1>{" "}
         {data.length !== 0 ? (
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
         ) : (
            <div className="row m-0 p-1 p-md-2 p-lg-4">
               {emptyarr.slice(0, 4).map((item, index) => (
                  <div
                     class="container col-lg-3 col-md-4 col-sm-6 h-screen d-flex justify-content-center align-items-center"
                     key={index}
                  >
                     <Skeleton />
                  </div>
               ))}
            </div>
         )}
         {/* "See more" button */}
         {visibleItems < data.length && (
            <div className="row justify-content-center m-0 mb-4">
               <button
                  className="btni-full  rounded-5 mt-1"
                  onClick={loadMore}
                  style={{
                     width: "7rem",
                  }}
               >
                  See More
               </button>
            </div>
         )}
      </div>
   );
};

export default Menu;
