import React, { SetStateAction } from "react";
import { animate, motion, useAnimationControls } from "framer-motion"
import { SimpleButton_1 } from "./simplebutton";
import { SimpleButton_2 } from "./simplebutton";
import { SimpleCard } from "./simplebutton";
import Menu from '@/public/menu.svg'
import { useState, useEffect } from "react";
import { Dispatch } from "react";
import { NavBar } from "./nav";
import { sourcePro, orbitronBold, orbitronLite } from "../fonts";
import useStateRef from "react-usestateref";

export const NavScreen = ({
    clicked,
    setIsClicked,
}: {
    clicked: {current: boolean},
    setIsClicked: Dispatch<SetStateAction<boolean>>;
}) => {

    const [hover, setHover, hoverRef] = useStateRef<boolean>(false);

    if (!clicked.current) {
        return null;
    } else {
        return (
            <div className="z-30 fixed w-screen min-h-screen bg-black flex flex-col">
                <NavBar className="" clickHandle={() => {setIsClicked(!clicked.current)}}/>
                <header className={`${orbitronBold.className} tracking-wider grow flex items-center justify-center text-4xl md:text-6xl w-full py-20`}>
                        Visualizations
                    </header>
                <div className="flex flex-col justify-center items-start grow">

                    <motion.a onMouseEnter={() => {
                        setHover(true);
                    }}
                    onMouseLeave={() => {
                        setHover(false);
                    }}
                    id="colorAni"
                    href='http://localhost:3000/'
                    className={`${orbitronLite.className} hover:cursor-pointer text-nowrap relative tracking-wider text-2xl md:text-5xl text-start w-full py-20 px-5 md:px-20 flex justify-start items-center grow border-y`}>
                    Micro
                    </motion.a> 
                        
                    <motion.a id="colorAni" href='http://localhost:3000/macro' className={`${orbitronLite.className} hover:cursor-pointer text-nowrap relative tracking-wider text-2xl md:text-5xl grow flex items-center justify-start text-start w-full py-20 px-5 md:px-20 border-y`}>
                        Macro
                    </motion.a>
                </div>
                
            </div>     
            

        );
    }

}