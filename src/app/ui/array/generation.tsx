'use client'

import { useState } from "react";
import { motion, useMotionValue } from "framer-motion"

export class Data {
    value: number;
    position: number;

    constructor(value: number, position: number) {
        this.value = value;
        this.position = position;
    }
}

export class GenerateMarkup {
    data: Data[];

    constructor(data: Data[]) {
        this.data = data;
    }
 
    render(arr: Data[], swapIndicies: [number, number] = [-1, -1], translateValue: number) {
        
        return (
            
            arr.map((data, index) => { 
                const swappingIndicies = swapIndicies.includes(index);
                const x = (swapIndicies[0] === index ? translateValue : (swapIndicies[1] === index ? -translateValue : 0));
                let animateY = [0, 75, 75, 0];
                let animateX = [0, 0, x, x];
                if (x === (-(translateValue))) {
                    animateY = [0, -75, -75, 0];
                }
                
                if (swappingIndicies) {
                    return (
                        <motion.div
                            key={index}
                            id={"position" + index}
                            className="flex rounded-2xl border-2 items-center h-full justify-center flex-grow"
                            style={{ order: data.position }}
                            initial={{ y: 0 }}
                            animate={ {
                                y: animateY,
                                x: animateX,

                            } }
                            transition={{ 
                                duration: 1.25,
                                // times: [0, 0.3, 0.75, 1],
                            }}
                            exit={{ y: 0 }}
                        >
                            <p className="text-white">{data.value}</p>
                        </motion.div>
                    );
                }

                return (<div 
                    key={index}
                    id={"position" + index}
                    className={`flex rounded-2xl border-2 items-center h-full justify-center flex-grow`} style={{order: data.position}}>
                        <p className="text-white">{data.value}</p>
                </div>);
                
            })
            

        );


    }
}