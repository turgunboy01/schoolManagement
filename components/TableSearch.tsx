import Image from "next/image";
import React from "react";

const TableSearch = () => {
  return (
    <div className="w-full md:w-auto flex items-center gap-2 text-xs rounded-full ring-[1.5px] px-2 ring-gray-300">
      <Image src={"/search.png"} width={14} height={14} alt="" />
      <input
        type="text"
        placeholder="Search..."
        className="outline-none bg-transparent p-2 w-[200px]"
      />
    </div>
  );
};

export default TableSearch;
