'use client'

import Image from "next/image";
import { BackgroundBeams } from "./ui/background-beams";
import { Tab, Tabs } from "./ui/array/tabs";
import React, { act, useState, useEffect, useLayoutEffect, useCallback } from 'react';
import { GenerateMarkup, Data } from "@/app/ui/array/generation";
import { TailwindcssButtons } from "./ui/input/ace-buttons";
import { ButtonsCard } from "./ui/input/tailwindcss-buttons";
import { motion } from "framer-motion"
import useStateRef from "react-usestateref";
import { bubbleSort, insertionSort, selectionSort } from "./utils/algorithms";
import { NavBar } from "./ui/nav/nav"
import { NavScreen } from "./ui/nav/nav-big-picture";


export default function Home() {
  const tabData = [{
    title: "Selection Sort",
    value: 'Selection',
    content: (
      <p></p>
    ),
  }, 
  {
    title: "Bubble Sort",
    value: 'Bubble',
    content: <p></p>,
  },
  {
    title: "Insertion Sort",
    value: 'Insertion',
    content: <p></p>,
  },

]


const initialArray= [new Data(1, 0), new Data(3, 1), new Data(6, 2), new Data(4, 3), new Data(9, 4), new Data(7, 5), new Data(5, 6)];
const [arrayData, setArrayData] = useState(initialArray);
const gen: GenerateMarkup = new GenerateMarkup(initialArray);

const [selectionProcess, setSelectionProcess, selectionRef] = useStateRef(false);
const [sortState, setSortState, stateRef] = useStateRef('Start');
const [activeTab, setActiveTab] = useState(tabData[0].title);
const [swapIndices, setSwapIndices] = useState<[number, number]>([-1, -1]);
const [elementDelta, setElementDelta] = useState(-1);

useEffect(() => {
  if (swapIndices[0] !== -1 && swapIndices[1] !== -1) {
    setElementDelta((document.getElementById("position" + swapIndices[1])?.getBoundingClientRect().x ?? 0) - (document.getElementById("position" + swapIndices[0])?.getBoundingClientRect().x ?? 0));
  }
}, [swapIndices]);

const onTabChange = (data: Tab) => {
  setActiveTab(data.title);
  setArrayData(initialArray);
}

const ButtonClick = async (state: string) => {
  setSortState(state);

  if (activeTab === 'Selection Sort' && state === 'Start') {
    await selectionSort(arrayData, setSwapIndices, stateRef, setArrayData);
  }
  if (activeTab === 'Insertion Sort' && state === 'Start') {
    await insertionSort(arrayData, stateRef, setSwapIndices, setArrayData);
  }
  if (activeTab === 'Bubble Sort' && state === 'Start') {
    await bubbleSort(arrayData, stateRef, setSwapIndices, setArrayData);
  }
  
}

const [isClicked, setIsClicked, clickRef] = useStateRef<boolean>(false);

const clickHandle = (data: boolean) => {
  console.log(data);
  setIsClicked(data);
  console.log(clickRef);
}


  return (
    
    <main className="flex flex-col min-h-screen">

      <NavBar clickHandle={() => setIsClicked(!clickRef.current)} className=""/>
      <NavScreen setIsClicked={setIsClicked} clicked={clickRef}/>


      
      <div className="flex flex-col justify-center grow items-center md:flex-row z-10 gap-20 p-5">
      
          <nav className="">
            <Tabs tabs={tabData} onTabChange={onTabChange}/>
          </nav>

        <div className="w-full flex flex-col justify-start md:w-3/4 lg:w-1/2">
          {/* <p className="text-center pb-5">Swaping Values:{}</p> */}
          <section className="rounded-3xl min-w-full h-20 flex justify-start gap-2 p-2 md:w-3/4 lg:w-1/2"> 
              
            {gen.render(arrayData, swapIndices, elementDelta)} 
                
          </section>
        </div>
          
          

        <section>
        <TailwindcssButtons ButtonClick={ButtonClick}/>
        
          
        </section>
      </div>

      <div>
      {/* <BackgroundBeams className="z-0"/> */}
      </div>
    </main>
  );
}
 









