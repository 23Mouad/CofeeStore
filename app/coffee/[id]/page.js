"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import cup from "@assets/Cup.svg";
import SelectedCup from "@assets/Selected-Cup.svg";
import location from "@assets/Location.svg";
import { useParams } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

const ProductPage = () => {
   const [selectedSize, setSelectedSize] = useState(null);
   const [count, setCount] = useState(0); // Use state for the count
   const showSuccess = () => {
      toast("your Order has been submited, please wait!", {
         icon: "☕",
      });
   };

   const handleSubmit = () => {
      showSuccess();
   };

   const params = useParams();

   const getRandomPrice = () => {
      return Math.floor(Math.random() * 5) + 3;
   };

   const [product, setProduct] = useState(null);

   useEffect(() => {
      // Ensure that id is defined before making the fetch request
      if (params.id) {
         // Fetch product data based on the ID
         async function fetchProductData() {
            try {
               const response = await fetch(
                  `https://api.sampleapis.com/coffee/hot/${params.id}`
               );
               const data = await response.json();
               setProduct(data);
            } catch (error) {
               console.error("Error fetching product data:", error);
            }
         }

         fetchProductData();
      }
   }, [params.id]);

   if (!product) {
      // Handle the case when the product data is not available or id is not defined
      return <p>Loading...</p>;
   }

   const handleSizeClick = (size) => {
      if (selectedSize === size) {
         // If the same size is clicked again, unselect it
         setSelectedSize(null);
      } else {
         // Otherwise, select the new size
         setSelectedSize(size);
      }
   };

   const isSizeSelected = (size) => {
      return selectedSize === size;
   };

   return (
      <>
         <main className="Product-page">
            <section className="py-5">
               <div className="container">
                  <div className="row">
                     <aside className="col-lg-6">
                        <div className="border rounded-4 mb-3 d-flex justify-content-center flex-column">
                           <div>
                              <Image
                                 className="product-img"
                                 src={product.image}
                                 alt={product.title}
                                 width={300}
                                 height={400}
                              />
                           </div>

                           <br />
                           <div className="mt-2 ms-2 location align-items-center d-flex flex-row">
                              <Image
                                 className="location-img"
                                 src={location}
                                 alt="location"
                              />
                              <p className="mt-3 ms-lg-2 ">
                                 {product.title} available in All our Coffee
                                 Store
                              </p>
                           </div>
                        </div>
                     </aside>
                     <main className="col-lg-6">
                        <div className="ps-lg-3">
                           <h4 className="title text-dark fw- ">
                              {product.title}
                           </h4>
                           <div className="d-flex flex-row mb-3 mt-1">
                              <span className="text-muted ingredients">
                                 {product.ingredients.join(", ")}
                              </span>
                           </div>
                           <div className="Description mt-4">
                              <p className="product-descTitle ">
                                 Description:{" "}
                              </p>

                              <p className="product-desc">
                                 {product.description}
                              </p>
                           </div>

                           <div className="Size ">
                              <p className="product-descTitle">Size: </p>
                              <div className="d-flex flex-row justify-content-around mt-3">
                                 <div
                                    className={
                                       isSizeSelected("Tall")
                                          ? "align-self-end Cup-selected"
                                          : "align-self-end cup"
                                    }
                                 >
                                    <Image
                                       className="Small-cup"
                                       src={
                                          isSizeSelected("Tall")
                                             ? SelectedCup
                                             : cup
                                       }
                                       alt="cup"
                                       onClick={() => handleSizeClick("Tall")}
                                    />
                                    <p className="Size-text">Tall</p>
                                 </div>
                                 <div
                                    className={
                                       isSizeSelected("Grande")
                                          ? "align-self-end Cup-selected"
                                          : "align-self-end cup"
                                    }
                                 >
                                    <Image
                                       className="Grande-cup"
                                       src={
                                          isSizeSelected("Grande")
                                             ? SelectedCup
                                             : cup
                                       }
                                       alt="cup"
                                       onClick={() => handleSizeClick("Grande")}
                                    />
                                    <p className="Size-text">Grande</p>
                                 </div>
                                 <div
                                    className={
                                       isSizeSelected("Venti")
                                          ? "align-self-end Cup-selected"
                                          : "align-self-end cup"
                                    }
                                 >
                                    <Image
                                       className="Venti-cup"
                                       src={
                                          isSizeSelected("Venti")
                                             ? SelectedCup
                                             : cup
                                       }
                                       alt="cup"
                                       onClick={() => handleSizeClick("Venti")}
                                    />
                                    <p className="Size-text">Venti</p>
                                 </div>
                              </div>
                           </div>
                           <div className="Sugar d-flex align-items-cen flex-row mt-5">
                              <p className="  product-descTitle"> Sugar: </p>
                              <div className="d-flex flex-row counter">
                                 <span onClick={() => setCount(count - 1)}>
                                    -
                                 </span>
                                 <span className="me-2 ms-2">{count}</span>
                                 <span onClick={() => setCount(count + 1)}>
                                    +
                                 </span>
                              </div>
                           </div>
                           <div className="mt-5 d-flex justify-content-between order ">
                              <span className="Price-text ms-2">
                                 {" "}
                                 Price:{" "}
                                 <span className="price ms-lg-3">
                                    ${getRandomPrice()}
                                 </span>
                              </span>
                              <button
                                 className="Order-btn"
                                 onClick={handleSubmit}
                              >
                                 Order Now{" "}
                              </button>{" "}
                              <Toaster />
                           </div>
                        </div>
                     </main>
                  </div>
               </div>
            </section>
         </main>
      </>
   );
};

export default ProductPage;
