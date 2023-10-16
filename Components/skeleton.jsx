import React from "react";

const Skeleton = () => {
   return (
      <div className="cardske">
         <div className="card-1 animate-pulse"></div>
         <div className="card-2 p-3">
            <div className="row">
               <div className="col-4">
                  <div className="inner-card animate-pulse"></div>
               </div>

               <div className="col-8">
                  <div className="inner-card animate-pulse"></div>
               </div>
            </div>

            <div className="row mt-3">
               <div className="col-6">
                  <div className="inner-card animate-pulse"></div>
               </div>

               <div className="col-6">
                  <div className="inner-card animate-pulse"></div>
               </div>
            </div>

            <div className="row mt-3">
               <div className="col-2">
                  <div className="inner-card animate-pulse"></div>
               </div>

               <div className="col-10">
                  <div className="inner-card animate-pulse"></div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Skeleton;
