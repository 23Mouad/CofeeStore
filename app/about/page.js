import React from "react";
import Image from "next/image";
import signature from "@assets/signature.png";
import playicon from "@assets/video-bg.jpg";
import Navbar from "@Components/navbar";
const page = () => {
   return (
      <>
         <Navbar />
         <main className="p-5 aboutPage">
            <h1 className="d-flex justify-content-center AboutTitle mb-3">
               About Us
            </h1>
            <section class="video-sec-area pb-100 pt-40" id="about">
               <div class="container-lg">
                  <div class="row justify-content-start align-items-center">
                     <div class="col-lg-6 video-right justify-content-center align-items-center d-flex">
                        <div class="overlay overlay-bg"></div>

                        <Image class="img-fluid" src={playicon} alt="playico" />
                     </div>
                     <div class="col-lg-6 video-left ">
                        <h6 className="mt-3 mindesc">
                           Live Coffee making process.
                        </h6>
                        <h1 className="minTitle">
                           We Telecast our <br />
                           Coffee Making Live
                        </h1>
                        <p>
                           <span>
                              We are here to listen from you deliver exellence
                           </span>
                        </p>
                        <p className="AboutDesc">
                           At Coffee Store Name, we are passionate about
                           bringing you the finest coffee experience. Our
                           journey began with a love for coffee and a commitment
                           to sourcing the highest quality beans from around the
                           world. We take pride in crafting exceptional coffee
                           beverages that awaken your senses and elevate your
                           day. With a cozy atmosphere and friendly baristas,
                           our coffee shop is not just a place to enjoy your
                           favorite brew but a community where coffee lovers
                           come together. Join us for a cup of perfection and
                           make every moment delightful.Feel free to customize
                           this description to match the specific details and
                           atmosphere of your coffee store.
                        </p>
                        <Image class="img-fluid" src={signature} alt="" />
                     </div>
                  </div>
               </div>
            </section>
         </main>
      </>
   );
};

export default page;
