"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const Menu = () => {
   const [data, setData] = useState([]);
   const [visibleItems, setVisibleItems] = useState(getInitialVisibleItems());

   const getRandomPrice = () => {
      return Math.floor(Math.random() * 5) + 3;
   };

   const getData = async () => {
      try {
         const resp = await fetch("https://api.sampleapis.com/coffee/hot");
         const json = await resp.json();
         setData(json);
      } catch (error) {
         console.error("Error fetching data:", error);
      }
   };

   useEffect(() => {
      getData();
   }, []);

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

         {/* "See more" button */}
         {visibleItems < data.length && (
            <div className="row justify-content-center">
               <button
                  className="btni-full me-1 rounded-5 mt-1"
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
