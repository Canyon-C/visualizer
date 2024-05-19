"use client";
import React from "react";
import reactElementToJSXString from "react-element-to-jsx-string";
import { toast, Toaster } from "sonner";
import { ButtonsCard } from "./tailwindcss-buttons";
import { useState } from "react";
 
export function TailwindcssButtons() {
    const [style, setStyle] = useState('absolute inset-0 bg-gradient-to-r from-gray-600 to-gray-600 rounded-lg')
    const [state, setState] = useState('Start');

    const buttons = [
        {
            name: "Lit up borders",
            description: "Gradient button with perfect corners",
            component: (
              <button name="style-1" onClick={changeStyle} className="p-[3px] relative">
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
        if (style == 'absolute inset-0 bg-gradient-to-r from-gray-600 to-gray-600 rounded-lg') {
            setStyle('absolute inset-0 bg-gradient-to-r from-red-600 to-red-600 rounded-lg');
        } else {
            setStyle('absolute inset-0 bg-gradient-to-r from-gray-600 to-gray-600 rounded-lg');
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



