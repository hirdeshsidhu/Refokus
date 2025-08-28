import React, { useState } from "react";
import Product from "./Product";
import { motion } from "motion/react";
import arqitel from "../Video/arqitel.mp4";
import rainfall from "../Video/rainfall.mp4";
import ttr from "../Video/ttr.mp4";
import yahoo from "../Video/yahoo.mp4";
import yir from "../Video/yir.mp4";

function Products() {
  var products = [
    {
      title: "Arqitel",
      desc: "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
      live: true,
      case: false,
    },
    {
      title: "TTR",
      desc: "We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.",
      live: true,
      case: false,
    },
    {
      title: "YIR 2022",
      desc: "Our second year was filled with great events, exciting projects, awards and amazing people - so we made another showcase to celebrate.",
      live: true,
      case: false,
    },
    {
      title: "Yahoo!",
      desc: "We enhanced the New York Fashion Week, by creating a fully digital AR fashion experience for Yahoo and Maisie Wilen, featuring holographic 3D models and an integrated web shop.",
      live: true,
      case: true,
    },
    {
      title: "Rainfall",
      desc: "We crafted a website for Rainfall Ventures, developing prototypes and custom code that ultimately allows their team to update content regularly and with ease.",
      live: true,
      case: true,
    },
  ];
  const [pos, setPos] = useState(0);
  const mover = (val) => {
    setPos(val * 23);
  };
  return (
    <div className="mt-32 relative">
      {products.map((item, index) => {
        return <Product val={item} key={index} mover={mover} count={index} />;
      })}
      <div className="w-full h-full pointer-events-none  absolute top-0">
        <motion.div
          initial={{ y: pos, x: "-50%" }}
          animate={{ y: pos + `rem` }}
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }}
          className="w-[32rem] h-[23rem] left-[44%] absolute   overflow-hidden rounded-3xl "
        >
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }}
            className="w-full h-full  rounded-3xl overflow-hidden"
          >
            <video
              autoPlay
              muted
              loop
              className="absolute object-cover"
              src={arqitel}
            ></video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }}
            className="w-full h-full  rounded-3xl overflow-hidden"
          >
            <video
              autoPlay
              muted
              loop
              className="absolute object-cover"
              src={ttr}
            ></video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }}
            className="w-full h-full  rounded-3xl overflow-hidden"
          >
            <video
              autoPlay
              muted
              loop
              className="absolute object-cover"
              src={yir}
            ></video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }}
            className="w-full h-full  rounded-3xl overflow-hidden"
          >
            <video
              autoPlay
              muted
              loop
              className="absolute object-cover"
              src={yahoo}
            ></video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }}
            className="w-full h-full  rounded-3xl overflow-hidden"
          >
            <video
              autoPlay
              muted
              loop
              className="absolute object-cover"
              src={rainfall}
            ></video>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Products;
