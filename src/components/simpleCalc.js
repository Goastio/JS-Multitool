import { useState, useEffect } from "react";

const SimpleCalc = () => {
  const [total, setTotal] = useState(0);
  const [active, setActive] = useState(false);

  const buttons = [
    {
      symbol: 1,
      isNumber: true,
    },
    {
      symbol: 2,
      isNumber: true,
    },
    {
      symbol: 3,
      isNumber: true,
    },
    {
      symbol: "+",
      isNumber: false,
    },
    {
      symbol: 4,
      isNumber: true,
    },
    {
      symbol: 5,
      isNumber: true,
    },
    {
      symbol: 6,
      isNumber: true,
    },
    {
      symbol: "-",
      isNumber: false,
    },
    {
      symbol: 7,
      isNumber: true,
    },
    {
      symbol: 8,
      isNumber: true,
    },
    {
      symbol: 9,
      isNumber: true,
    },
    {
      symbol: "*",
      isNumber: false,
    },
    {
      symbol: "C",
      isNumber: false,
    },
    {
      symbol: 0,
      isNumber: true,
    },
    {
      symbol: "=",
      isNumber: false,
    },
    {
      symbol: "/",
      isNumber: false,
    },
  ];

  const controller = (b) => {
    setActive(true);
    if (b.isNumber) {
      if (!total) {
        setTotal(b.symbol.toString());
      } else {
        setTotal(total.toString() + b.symbol.toString());
      }
    }
    if (!b.isNumber) {
      if (b.symbol === "C") {
        setActive(false);
        setTotal(null);
      }
    }
  };

  console.log(total);
  return (
    <div className="bg-slate-600 w-full flex flex-col gap-4 max-w-md rounded-md shadow-md p-4">
      <div className="h-1/4 w-full bg-sky-600 rounded-md flex">
        <div className="flex w-full items-center justify-end px-8 text-6xl font-light">
          {active ? total : "0"}
        </div>
      </div>

      <div className="grid grid-cols-4 w-full gap-4">
        {buttons.map((b, i) => {
          return (
            <button
              key={i}
              onClick={() => {
                controller(b);
              }}
              className="bg-slate-700 shadow-md hover:bg-slate-600 text-white py-2"
            >
              {b.symbol}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default SimpleCalc;
