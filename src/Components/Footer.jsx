import React from "react";

function Footer() {
  return (
    <div className="w-full">
      <div className="max-w-screen-xl py-10 mx-auto flex gap-32">
        <div className="basis-1/2">
          <h1 className="text-[11.5rem] leading-none tracking-tight font-medium select-none ">
            refokus.
          </h1>
        </div>
        <div className="basis-1/2 flex gap-4">
          <div className="basis-1/3">
            <h4 className="text-zinc-500 mb-12">Socials</h4>
            {["instagram", "Twitter(X?)", "LinkedIn"].map((item, index) => {
              return (
                <a
                  key={index}
                  href="#"
                  className="text-zinc-600 mt-2 capitalize block"
                >
                  {item}
                </a>
              );
            })}
          </div>
          <div className="basis-1/3">
            <h4 className="text-zinc-500 mb-7">Siltermap</h4>
            {["Home", "Work", "Carrers", "Contact"].map((item, index) => {
              return (
                <a
                  key={index}
                  href="#"
                  className="text-zinc-600 mt-2 capitalize block"
                >
                  {item}
                </a>
              );
            })}
          </div>
          <div className="basis-1/3 flex flex-col items-end">
            <p className="text-right">
                Refokus is pioneering digital agency driven by design and empowered by technology.
            </p>
            <img src="https://assets-global.website-files.com/5df3de8e749203dc3167a479/65369e818884afbae46a35fc_Webflow-badge.svg" className="w-32 mt-8" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
