import "./globals.css";
import "./verse.css";
import "@node_modules/bootstrap/dist/css/bootstrap.min.css";
import "animate.css";
import { Inter } from "next/font/google";
import Navbar from "@Components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
   title: "Coffee Store",
   description: "coffee store website with All types of coffee ",
};

export default function RootLayout({ children }) {
   return (
      <html lang="en">
         <body>
            <Navbar />
            {children}
         </body>
      </html>
   );
}
