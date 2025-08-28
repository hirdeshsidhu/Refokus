import { motion } from "motion/react";
import React from "react";

function Marquee({ ImageUrl, direction }) {
  return (
    <div id="marquee-container" className="flex w-full overflow-hidden">
      <motion.div
        id="marquee-track-1"
        initial={{ x: direction === "left" ? 0 : "-100%" }}
        animate={{ x: direction === "left" ? "-100%" : 0 }}
        transition={{ ease: "linear", duration: 10, repeat: Infinity }}
        className="flex w-full py-8 gap-20 whitespace-nowrap overflow-hidden flex-shrink-0"
      >
        {ImageUrl.map((item, index) => {
          return (
            <img
              src={item}
              alt=""
              key={index}
              className="w-[6vw] flex-shrink-0"
            />
          );
        })}
      </motion.div>
      <motion.div
        id="marquee-track-2"
        initial={{ x: direction === "left" ? 0 : "-100%" }}
        animate={{ x: direction === "left" ? "-100%" : 0 }}
        transition={{ ease: "linear", duration: 10, repeat: Infinity }}
        className="flex w-full py-8 gap-20 whitespace-nowrap overflow-hidden flex-shrink-0"
      >
        {ImageUrl.map((item, index) => {
          return (
            <img
              src={item}
              alt=""
              key={index}
              className="w-[6vw] flex-shrink-0"
            />
          );
        })}
      </motion.div>
      
    </div>
  );
}

export default Marquee;
