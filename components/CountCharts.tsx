"use client";
import Image from "next/image";
import React from "react";
import { RadialBar, RadialBarChart, ResponsiveContainer } from "recharts";

const data = [
  {
    name: "Total",
    count: 104,
    fill: "#fff",
  },

  {
    name: "Girls",
    count: 53,
    fill: "#fae27c",
  },
  {
    name: "Boys",
    count: 53,
    fill: "#c3ebfa",
  },
];

const CountCharts = () => {
  return (
    <div className="bg-white rounded-xl p-4 w-full h-full">
      {/* title */}
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Students</h1>
        <Image src={"/moreDark.png"} alt="" width={20} height={20} />
      </div>
      {/* charts */}
      <div className="relative w-full h-[75%]">
        <ResponsiveContainer width="100%" height="100%">
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="40%"
            outerRadius="100%"
            barSize={32}
            data={data}
          >
            <RadialBar background dataKey="count" />
          </RadialBarChart>
        </ResponsiveContainer>
        <Image
          src={"/maleFemale.png"}
          alt=""
          width={50}
          height={50}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      </div>
      {/* button */}
      <div className="flex justify-center gap-16">
        <div className="flex flex-col gap-1">
          <div className="w-5 h-5 bg-lamaSky rounded-full" />
          <h1 className="font-bold">1,234</h1>
          <h2 className="text-xs text-gray-300">Boys (55%)</h2>
        </div>
        <div className="flex flex-col gap-1">
          <div className="w-5 h-5 bg-lamaYellow rounded-full" />
          <h1 className="font-bold">1,234</h1>
          <h2 className="text-xs text-gray-300">Girls (45%)</h2>
        </div>
      </div>
    </div>
  );
};

export default CountCharts;
