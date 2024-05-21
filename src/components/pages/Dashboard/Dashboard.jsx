import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { FaChartLine } from "react-icons/fa6";
import { FiBookmark } from "react-icons/fi";
import { IoDiamond } from "react-icons/io5";
import {
  barOptions,
  barSeries,
  donutOptions,
  donutSeries,
} from "@/components/js/constants/data";
import Table from "@/components/common/Table/Table";
import Card from "@/components/common/Card/Card";
import { rowsData } from "@/components/js/constants/data";

const Dashboard = () => {
  const [tableData, setTableData] = useState({
    columns: [],
    rows: [],
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setTableData({
        columns: ["User", "Subject", "Status", "Last Update", "Tracking ID"],
        rows: rowsData,
      });
      setIsLoading(false);
    }, 2000);
  }, []);
  return (
    <>
      <div className="flex flex-col gap-8">
        <div>
          <h1 className="text-base font-medium">Dashboard</h1>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3 text-white">
          <Card
            title="Weekly Sales"
            icon={<FaChartLine />}
            amount="₱ 25,000"
            description="Increased by 60%"
            bgColor="from-blue-400 to-indigo-600"
          />

          <Card
            title="Weekly Orders"
            icon={<FiBookmark />}
            amount="52,080"
            description="Decreased by 10%"
            bgColor="from-orange-300 to-red-400"
          />

          <Card
            title="Visitors Online"
            icon={<IoDiamond />}
            amount="4,630"
            description="Increased by 5%"
            bgColor="from-emerald-300 to-cyan-400"
          />
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          <ReactApexChart
            options={barOptions}
            series={barSeries}
            type="bar"
            height={350}
            className="rounded-md bg-white shadow-sm p-4 sm:p-6"
          />

          <ReactApexChart
            options={donutOptions}
            series={donutSeries}
            type="donut"
            height={350}
            className="flex items-center justify-center rounded-md bg-white shadow-sm p-4 sm:p-6"
          />
        </div>

        <div>
          <Table
            className="animate__animated animate__fadeIn"
            data={tableData}
            emptyStateTitle="No Tickets Available"
            emptyStateDescription="There are no tickets available as of the moment."
            fetching={isLoading}
          />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
