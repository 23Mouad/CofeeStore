import Image from "next/image";
import HeroPage from "@Components/landing";
import Menu from "@Components/menu";

export default function Home() {
   return (
      <main>
         <HeroPage />
         <Menu />
      </main>
   );
}
