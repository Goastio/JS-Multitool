import React from "react";
import SimpleCalc from "./SimpleCalc";

function Main() {
  const buttons = [
    {
      symbol: 1,
    },
    {
      symbol: 2,
    },
    {
      symbol: 3,
    },
    {
      symbol: "+",
    },
    {
      symbol: 4,
    },
    {
      symbol: 5,
    },
    {
      symbol: 6,
    },
    {
      symbol: "-",
    },
    {
      symbol: 7,
    },
    {
      symbol: 8,
    },
    {
      symbol: 9,
    },
    {
      symbol: "*",
    },
    {
      symbol: "C",
    },
    {
      symbol: 0,
    },
    {
      symbol: "=",
    },
    {
      symbol: "/",
    },
  ];

  return (
    <>
      <div className="bg-slate-700 h-screen w-full flex justify-center items-center px-8">
        <div className="flex flex-col lg:flex-row w-full gap-8 justify-center items-center">
            <SimpleCalc />

          <div className="bg-slate-600 h-[316px] w-full flex max-w-md rounded-md shadow-md"></div>
        </div>
      </div>
    </>
  );
}

export default Main;
