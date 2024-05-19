'use client'

import Image from "next/image";
import { BackgroundBeams } from "./ui/background-beams";
import { poppins } from "./ui/fonts";
import { Tabs } from "./ui/array/tabs";
import { Input } from "./ui/input/form";
// import { Data } from "@/lib/data";
import React, { useState } from 'react';
import { ArrayPopulation, GenerateMarkup } from "@/lib/generation";
import { Button } from "./ui/input/button";
import { TailwindcssButtons } from "./ui/input/ace-buttons";
import { ButtonsCard } from "./ui/input/tailwindcss-buttons";
// import { DataView } from "@/lib/data";



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
  },
  {
    title: "Selection Sort",
    value: 'tab3',
    content: <p></p>,
  },
  {
    title: "Shell Sort",
    value: 'tab4',
    content: <p></p>,
  },
  {
    title: "Insertion Sort",
    value: 'tab5',
    content: <p></p>,
  },
  {
    title: "Bubble Sort",
    value: 'tab6',
    content: <p></p>,
  },
]
const array: ArrayPopulation = new ArrayPopulation();
array.insert(1);
array.insert(3);
array.insert(6);
array.insert(4);
array.insert(9);
array.insert(7);
array.insert(5);
const gen: GenerateMarkup = new GenerateMarkup(array);


// console.log(array.list[0]);

// const view: DataView = new DataView(temp);

// view.render();


const [value, setValue] = useState('');

const changeStyle = () => {

}

  return (
    <main className="flex flex-col">
      
      <div className="flex flex-col justify-center items-center min-h-screen md:flex-row z-10 gap-20 p-5">
      
        <nav className="">
          <Tabs tabs={tabData}/>
        </nav>

        
        <section className=" border-2 rounded-3xl w-full h-20 flex justify-start gap-2 p-2 min-w-max md:w-3/4 lg:w-1/2"> 
          {gen.render()} 
        </section>

        <section >
        <TailwindcssButtons />
          
        </section>
      </div>

        {/* <div className={`${poppins.className} flex justify-center items-center min-h-screen`}>
          
        </div> */}
      <div>
      <BackgroundBeams className="z-0"/>
      </div>
    </main>
  );

  
  
}









