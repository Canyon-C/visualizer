import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import useStateRef from "react-usestateref";

export const NavBar = ({
  className,
  clickHandle,
}: {
  className: string;
  clickHandle: (clickState: boolean) => void;
}) => {
  const [animation, setAnimation] = useState<boolean>(false);
  const [clicked, setClicked, clickRef] = useStateRef<boolean>(false);
  return (
    <div className="z-20 flex justify-end p-4 w-full">
      <motion.nav
        onClick={() => {
          setClicked(!clickRef.current);
          clickHandle(!clickRef.current);
        }}
        onMouseEnter={() => {
          setAnimation(!animation);
        }}
        onMouseLeave={() => {
          setAnimation(!animation);
        }}
        className=" flex justify-center items-center w-9 gap-2 h-min flex-wrap hover:cursor-pointer"
      >
        <motion.div
          animate={{ x: animation ? 20 : 0 }}
          className="border-2 h-2 w-2"
        ></motion.div>
        <motion.div
          animate={{ y: animation ? 20 : 0 }}
          className="border-2 h-2 w-2"
        ></motion.div>
        <motion.div
          animate={{ y: animation ? -20 : 0 }}
          className="border-2 h-2 w-2"
        ></motion.div>
        <motion.div
          animate={{ x: animation ? -20 : 0 }}
          className="border-2 h-2 w-2"
        ></motion.div>
      </motion.nav>
    </div>
  );
};
