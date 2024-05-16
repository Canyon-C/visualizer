import Image from "next/image";
import { BackgroundBeams } from "./ui/background-beams";
import { poppins } from "./ui/fonts";

export default function Home() {
  return (
    <main className="flex flex-col">
      <div className="flex justiy-center items-center min-h-screen">
        <BackgroundBeams className="z-0"/>
        <p className={`${poppins.className} z-1 text-center w-full`}>Algorithm Visualizer</p>
      
      </div>
        <div className={`${poppins.className} flex justify-center items-center min-h-screen`}>
          
        </div>
    </main>
  );
}
