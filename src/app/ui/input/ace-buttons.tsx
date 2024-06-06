"use client";
import React from "react";
import reactElementToJSXString from "react-element-to-jsx-string";
import { toast, Toaster } from "sonner";
import { ButtonsCard } from "./tailwindcss-buttons";
import { useState, useEffect } from "react";
import { Tab, Tabs } from "../array/tabs";
import useStateRef from "react-usestateref";
 
export const TailwindcssButtons = ({
  
  ButtonClick,
}: {
  ButtonClick: (data: string) => void;
}) => {
    const [style, setStyle] = useState('absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-800 rounded-lg')
    const [state, setState] = useState('Start');


    const buttons = [
        {
            name: "Lit up borders",
            description: "Gradient button with perfect corners",
            status: (status: string) => {

            },
            component: (
              <button name="style-1" onClick={() => {
                changeStyle();
                ButtonClick(state);
              }} className="p-[3px] relative">
                <div className={style} />
                <div className=" bg-black rounded-[6px] py-2 px-2 relative group transition duration-200 text-white hover:bg-transparent">
                  {state}
                </div>
              </button>
            ),
          },
    ];
    return (
        <div className="w-full">
          <Toaster position="top-center" />
          <div className="grid grid-cols-1 w-full max-w-7xl">
            {buttons.map((button, idx) => (
              <ButtonsCard className="" key={idx}>
                {button.component}
              </ButtonsCard>
            ))}
          </div>
        </div>
      );
      function changeStyle() {
        if (style == 'absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-800 rounded-lg') {
            setStyle('absolute inset-0 bg-gradient-to-r from-red-600 to-red-600 rounded-lg');
        } else {
            setStyle('absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-800 rounded-lg');
        }
        changeState();
        
    }

    
    function changeState() {
      if (state == 'Start') {
        setState('Stop');
    } else {
        setState('Start');
    }   
      
}
  
  
}

export const RandomizeButton = ({
  
  randomizeClick,
}: {
  randomizeClick: (data: boolean) => void;
}) => {
    const [style, setStyle] = useState('absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-800 rounded-lg')
    const [state, setState] = useState('Randomize');
    const [randomize, setRandomize, randomizeRef] = useStateRef<boolean>(false);


    const buttons = [
        {
            name: "Lit up borders",
            description: "Gradient button with perfect corners",
            status: (status: string) => {

            },
            component: (
              <button name="style-1" onClick={() => {
                changeStyle();
                randomizeClick(randomizeRef.current);
              }} className="p-[3px] relative">
                <div className={style} />
                <div className=" bg-black rounded-[6px] py-2 px-5 relative group transition duration-200 text-white hover:bg-transparent">
                  {state}
                </div>
              </button>
            ),
          },
    ];
    return (
        <div className="w-full">
          <Toaster position="top-center" />
          <div className="w-full max-w-7xl">
            {buttons.map((button, idx) => (
              <ButtonsCard className="" key={idx}>
                {button.component}
              </ButtonsCard>
            ))}
          </div>
        </div>
      );
      function changeStyle() {
        if (style == 'absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-800 rounded-lg') {
            setStyle('absolute inset-0 bg-gradient-to-r from-red-600 to-red-600 rounded-lg');
        } else {
            setStyle('absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-800 rounded-lg');
        }
        changeState();
        
    }

    
    function changeState() {
      setRandomize(!randomizeRef.current);  
    
    }
  
  
}



