'use client'

import Image from "next/image";
import { BackgroundBeams } from "./ui/background-beams";
import { poppins } from "./ui/fonts";
import { Tabs } from "./ui/array/tabs";
import { Input } from "./ui/input/form";
import { Data } from "@/lib/data";
import React, { useState } from 'react';



export default function Home() {
  const tabData = [{
    title: "Quick Sort",
    value: 'tab1',
    content: <p></p>,
  },
  {
    title: "Merge Sort",
    value: 'tab2',
    content: <p></p>,
  }
]

const [value, setValue] = useState("");


function InputDemo() {
 
  return <Input onSubmit={(e) => {
    e.preventDefault();
    setValue(e.currentTarget.value);
    console.log(value);  
  }
    
  } name="val" type="number" placeholder="Value"/>
}

  return (
    <main className="flex flex-col">
      <BackgroundBeams className="z-0"/>
      <div className="flex flex-col justify-center items-center min-h-screen border-2 gap-10 md:flex-row z-10 ">
      
        <nav className="">
        <Tabs
        tabs={tabData}
         />
        </nav>
        <section> 
          <InputDemo />
          
          
        </section>
        
        

        {/* <p className={`${poppins.className} z-1 text-center w-full`}>Algorithm Visualizer</p> */}
      
      </div>
        <div className={`${poppins.className} flex justify-center items-center min-h-screen`}>
          
        </div>
    </main>
  );

  
  
}









