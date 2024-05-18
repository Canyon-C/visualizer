'use client'

import Image from "next/image";
import { BackgroundBeams } from "./ui/background-beams";
import { poppins } from "./ui/fonts";
import { Tabs } from "./ui/array/tabs";
import { Input } from "./ui/input/form";
import { Data } from "@/lib/data";
import React, { useState } from 'react';
import { ArrayPopulation } from "@/lib/generation";
import { DataView } from "@/lib/data";



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

const temp: Data = new Data(1);
const temp2: Data = new Data(2);
const view: DataView = new DataView(temp);
view.render();


const [value, setValue] = useState('');

const handleSubmit = (e: any) => {
  e.preventDefault();
  setValue(e.target.valie);
  console.log(value);
};

  return (
    <main className="flex flex-col">
      <BackgroundBeams className="z-0"/>
      <div className="flex flex-col justify-center items-center min-h-screen gap-10 md:flex-row z-10">
      
        <nav className="">
        <Tabs
        tabs={tabData}
         />
        </nav>
        <section className=" border-2 w-1/2  h-20"> 
          {view.render()}
          {/* <Input name="val" type="number" placeholder="Value" onSubmit={handleSubmit}/>
    <p>{value}</p> */}
          
          
        </section>
        
        {/* onSubmit={(e) => {
      e.preventDefault();
      setValue(e.currentTarget.value);
    }
    
      
    } */}

        {/* <p className={`${poppins.className} z-1 text-center w-full`}>Algorithm Visualizer</p> */}
      
      </div>
        <div className={`${poppins.className} flex justify-center items-center min-h-screen`}>
          
        </div>
    </main>
  );

  
  
}









