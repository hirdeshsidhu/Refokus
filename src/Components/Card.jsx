import { motion } from "motion/react";
import React from "react";
import { GoArrowRight } from "react-icons/go";

function Card({ width, start, para, hover = false }) {
  return (
    <motion.div
    whileHover={{backgroundColor:hover===true && "#7443ff",padding:"25px"}}
      className={`bg-zinc-800 p-5 rounded-xl ${width} min-h-[30rem] flex flex-col justify-between transition-linear `}
    >
      <div>
        <div className="w-full flex justify-between items-center">
          <h3>One Heading</h3>
          <GoArrowRight />
        </div>
        <h1 className="text-3xl font-medium mt-7">Whatever Heading</h1>
      </div>
      <div className=" w-full">
        {start === true && (
          <>
            <h1 className="text-6xl font-semibold leading-none tracking-tight">
              Start a Project
            </h1>
            <button className="px-5 py-2 text-sm mt-5 border-[1px] rounded-full cursor-pointer">
              Contact us
            </button>
          </>
        )}
        {para === true && (
          <>
            <p className="text-zinc-600 text-sm">
              Explore what drives our team.
            </p>
          </>
        )}
      </div>
    </motion.div>
  );
}

export default Card;
