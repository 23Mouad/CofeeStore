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
   const cafes = [cafe, cafe1, cafe2, cafe3, cafe4];
   const randomIndex = getRandomInt(0, cafes.length - 1);
   const randomCafe = cafes[randomIndex];

   return (
      <div className="flex items-center justify-center h-screen">
         <img src={randomCafe} alt="Loading..." />
      </div>
   );
}
