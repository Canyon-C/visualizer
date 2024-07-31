"use client";
import React from "react";
import { motion } from "framer-motion";

export const Render = ({
  data,
  swapDivs,
  elementDelta,
  applyGreen,
}: {
  randomize: boolean;
  data: number[];
  swapDivs: number[];
  elementDelta: number;
  applyGreen: number[];
}) => {
  return data.map((value, index) => {
    const x =
      swapDivs[0] === index
        ? elementDelta
        : swapDivs[1] === index
        ? -elementDelta
        : 0;

    if (swapDivs.includes(index)) {
      return (
        <motion.div
          id={"position" + index}
          style={{
            left: `${(index * 100) / data.length}%`,
            width: `${100 / data.length}%`,
            height: `${value}%`,
            order: index,
          }}
          key={index}
          className={`element element-red`}
          animate={{ x }}
          transition={{ duration: 0.01 }}
        ></motion.div>
      );
    }
    if (applyGreen.includes(index)) {
      return (
        <motion.div
          id={"position" + index}
          style={{
            left: `${(index * 100) / data.length}%`,
            width: `${100 / data.length}%`,
            height: `${value}%`,
            order: index,
          }}
          key={index}
          className={`element element-green`}
        ></motion.div>
      );
    }
    return (
      <div
        id={"position" + index}
        style={{
          left: `${(index * 100) / data.length}%`,
          width: `${100 / data.length}%`,
          height: `${value}%`,
          order: index,
        }}
        key={index}
        className={`element`}
      />
    );
  });
};
