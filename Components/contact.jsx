"use client";
import React, { useState } from "react";
// import maps from "@assets/maps.png";
import Image from "next/image";

const Contact = () => {
   const [formData, setFormData] = useState({
      firstName: "",
      lastName: "",
      email: "",
      message: "",
   });

   const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
         ...formData,
         [name]: value,
      });
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      // You can handle form submission logic here
      // formData contains the user's input
   };

   return (
      <div className="p-2 p-md-5 mt-2" id="contact">
         <h1 className="fascinate mt-1 mb-3 mb-md-4  ">Contact</h1>
         <div className=" row m-0 m-sm-3">
            <div className="contact-form-container col-12 col-md-6 pe-1 ps-1 pe-lg-4 ps-lg-4">
               <form onSubmit={handleSubmit} className="contact-form  ">
                  <div className="row">
                     <div className="col">
                        <div className="input-container">
                           <input
                              type="text"
                              id="firstName"
                              name="firstName"
                              value={formData.firstName}
                              onChange={handleChange}
                              required
                           />
                           <label htmlFor="firstName" className="label">
                              First Name
                           </label>
                           <div className="underline"></div>
                        </div>
                     </div>
                     <div className="col">
                        <div className="input-container">
                           <input
                              type="text"
                              id="lastName"
                              name="lastName"
                              value={formData.lastName}
                              onChange={handleChange}
                              required
                           />
                           <label htmlFor="lastName" className="label">
                              Last Name
                           </label>
                           <div className="underline"></div>
                        </div>
                     </div>
                  </div>
                  <div className="row">
                     <div className="col">
                        <div className="email-container">
                           {" "}
                           {/* New class for email */}
                           <input
                              type="email"
                              id="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              required
                           />
                           <label htmlFor="email" className="label">
                              Email
                           </label>
                           <div className="underline"></div>
                        </div>
                     </div>
                  </div>
                  <div className="row">
                     <div className="col">
                        <div className="message-container">
                           {" "}
                           {/* New class for message */}
                           <textarea
                              id="message"
                              name="message"
                              value={formData.message}
                              onChange={handleChange}
                              required
                              rows={6}
                           />
                           <label htmlFor="message" className="label">
                              Message
                           </label>
                           <div className="underline"></div>
                        </div>
                     </div>
                  </div>
                  <div className="row">
                     <div className="col row justify-content-center m-0 mb-4">
                        <button
                           className="btni-full  rounded-5 mt-1"
                           type="submit"
                           style={{
                              width: "7rem",
                           }}
                        >
                           Send
                        </button>
                     </div>
                  </div>
               </form>
            </div>
            <div className=" col-12 col-md-6 maps d-none d-sm-block"></div>
         </div>
      </div>
   );
};

export default Contact;
