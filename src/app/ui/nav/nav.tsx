"use client"
import React from "react";
import { motion } from "framer-motion"
import { HoverBorderGradient } from "./hover-border-gradient";

export const NavBar = ({
    className,
} : {
    className: string,
}
    
) => {
    return(
         

        <motion.div className="z-20 fixed top-0 right-0 p-4">
            
            <nav className="">
                <ul className="flex justify-center items-center p-0 m-0 list-none gap-5">
                    <li className=""><HoverBorderGradient><span>Logarithmic</span></HoverBorderGradient></li>
                    <li className=""><HoverBorderGradient><span>Quadratic</span></HoverBorderGradient></li>
                </ul>
                    
                    
                    
                    

              
            </nav>
          
          </motion.div>     
        

    );

}