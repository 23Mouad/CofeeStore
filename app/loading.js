import React from "react";
import cafe from "@assets/cafe.gif";
import cafe1 from "@assets/caf5.gif";
import cafe2 from "@assets/cafe2.gif";
import cafe3 from "@assets/cafe3.gif";
import cafe4 from "@assets/cafe4.gif";

function getRandomInt(min, max) {
   return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function Loading() {
   return (
      <div className="d-flex justify-content-center align-items-center loading ">
         <div className="🤚">
            <div className="👉"></div>
            <div className="👉"></div>
            <div className="👉"></div>
            <div className="👉"></div>
            <div className="🌴"></div>
            <div className="👍"></div>
         </div>
      </div>
   );
}
