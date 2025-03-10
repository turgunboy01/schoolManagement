import Image from "next/image";
import React from "react";

export const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-4">
      {/* search bar */}
      <div className="hidden md:flex items-center gap-2 text-xs rounded-full ring-[1.5px] px-2 ring-gray-300">
        <Image src={"/search.png"} width={14} height={14} alt="" />
        <input
          type="text"
          placeholder="Search..."
          className="outline-none bg-transparent p-2 w-[200px]"
        />
      </div>

      {/* Icons and user */}
      <div className="flex items-center gap-6 justify-end w-full">
        <div className=" bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer">
          <Image src={"/message.png"} alt="" width={20} height={20} />
        </div>
        <div className=" bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer relative">
          <Image src={"/announcement.png"} alt="" width={20} height={20} />
          <span className="absolute -top-3 -right-3 w-5 h-5 flex items-center justify-center bg-purple-500 text-white rounded-full text-xs">
            1
          </span>
        </div>
        <div className="flex flex-col">
          <span className="text-xs leading-3 font-medium">Jhone Doe</span>
          <span className="text-right text-[10px] text-gray-500">Teacher</span>
        </div>
        <Image
          src={"/avatar.png"}
          alt=""
          width={36}
          height={36}
          className="rounded-full"
        />
      </div>
    </div>
  );
};
