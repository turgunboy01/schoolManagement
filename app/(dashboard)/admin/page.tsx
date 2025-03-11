import Announcements from "@/components/Announcements";
import AttendanceCharts from "@/components/AttendanceCharts";
import CountCharts from "@/components/CountCharts";
import EventCalendar from "@/components/EventCalendar";
import FinanceCharts from "@/components/FinanceCharts";
import { UserCard } from "@/components/UserCard";
import React from "react";

const Page = () => {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      {/* LEFT */}
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
        {/* USERCARD */}
        <div className="flex gap-4 justify-between flex-wrap">
          <UserCard type={"stuudent"} />
          <UserCard type={"teacher"} />
          <UserCard type={"parent"} />
          <UserCard type={"staff"} />
        </div>
        {/* Middle charts */}
        <div className="flex gap-4 flex-col lg:flex-row">
          {/* count chart */}
          <div className="w-full lg:w-1/3 h-[450px]">
            <CountCharts />
          </div>

          {/* attendance chart */}
          <div className="w-full lg:w-2/3 h-[450px] ">
            <AttendanceCharts />
          </div>
        </div>

        {/* Bottom chart */}
        <div className="w-full h-[500px]">
          <FinanceCharts />
        </div>
      </div>
      {/* RIGHT */}
      <div className="w-full lg:w-1/3 flex flex-col gap-8">
        <EventCalendar />
        <Announcements />
      </div>
    </div>
  );
};

export default Page;
