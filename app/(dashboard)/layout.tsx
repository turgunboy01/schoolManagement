import Menu from "@/components/Menu";
import { Navbar } from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const DashboardLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className="h-screen flex">
      {/* left */}
      <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] p-4">
        <Link
          href={"/"}
          className="flex justify-center items-center lg:justify-start gap-2"
        >
          <Image src={"/logo.png"} alt="logo" width={32} height={32} />
          <span className="hidden lg:block  font-bold">SchoolFront</span>
        </Link>
        <Menu />
      </div>

      {/* Right */}
      <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%]  bg-[#f7f8fa] overflow-scroll flex flex-col">
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
