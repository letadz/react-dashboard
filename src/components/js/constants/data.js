import { MdOutlineEvent } from "react-icons/md";
import { IoSettingsSharp, IoLink } from "react-icons/io5";

import image1 from "@/assets/image/image1.webp";
import image2 from "@/assets/image/image2.webp";
import image3 from "@/assets/image/image3.webp";

export const options = {
  chart: {
    id: "basic-bar",
    height: 350,
  },
  xaxis: {
    categories: [2019, 2020, 2021, 2022, 2023, 2024],
  },
  stroke: {
    width: [2],
    curve: "smooth",
  },
};
export const series = [
  {
    name: "series-1",
    data: [50, 95, 25, 45, 30, 35],
  },
];

export const barSeries = [
  {
    name: "Net Profit",
    data: [44, 55, 57, 56, 61, 58, 63, 60],
  },
  {
    name: "Revenue",
    data: [76, 85, 101, 98, 87, 105, 91, 114],
  },
  {
    name: "Free Cash Flow",
    data: [35, 41, 36, 26, 45, 48, 52, 53],
  },
];
export const barOptions = {
  chart: {
    type: "bar",
    height: 350,
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "55%",
      endingShape: "rounded",
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    show: true,
    width: 6,
    colors: ["transparent"],
  },
  xaxis: {
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
  },
  // yaxis: {
  //   labels: false,
  // },
  fill: {
    opacity: 1,
  },
  tooltip: {
    y: {
      formatter: (val) => {
        return "$ " + val + " thousands";
      },
    },
  },
};

export const donutSeries = [55, 44, 15];
export const donutOptions = {
  chart: {
    type: "donut",
  },
  dataLabels: {
    enabled: false,
  },
  labels: ["Search Engines", "Direct Click", "Bookmarks Click"],
  legend: {
    position: "bottom",
    formatter: (seriesName, opts) => {
      return `${seriesName}: ${opts.w.globals.series[opts.seriesIndex]}`;
    },
    markers: {
      width: 16,
      height: 16,
    },
    itemMargin: {
      vertical: 5,
    },
  },
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 300,
        },
        legend: {
          position: "bottom",
        },
      },
    },
  ],
};

export const pieOptions = {
  series: [44, 55, 13, 43, 22],
  options: {
    chart: {
      width: 380,
      height: 350,
      type: "pie",
    },
    labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 300,
            height: 300,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  },
};
export const pieSeries = [44, 55, 41, 17, 15];

export const rowsData = [
  {
    rowValues: [
      "John Doe",
      "Fund is not recieved",
      "DONE",
      "Dec 5, 2020",
      "RD-12345",
    ],
  },
  {
    rowValues: [
      "Jane Smith",
      "High loading time",
      "PROGRESS",
      "Jan 20, 2021",
      "RD-12346",
    ],
  },
  {
    rowValues: [
      "Marina Michel",
      "Website down for one week",
      "ON HOLD",
      "Feb 8, 2021",
      "RD-12346",
    ],
  },
];

export const messagesData = [
  {
    img: image1,
    alt: "alt1",
    message: "Zach send you a message",
    time: "1 minute ago",
  },
  {
    img: image2,
    alt: "alt1",
    message: "Caly send you a message",
    time: "15 minutes ago",
  },
  {
    img: image3,
    alt: "alt1",
    message: "Jeff send you a message",
    time: "20 minutes ago",
  },
];

export const notifData = [
  {
    icon: MdOutlineEvent,
    subTitle: "Event Today",
    description: "Just a reminder that you...",
    type: "Event",
  },
  {
    icon: IoSettingsSharp,
    subTitle: "Settings",
    description: "Update Dashboard",
    type: "Settings",
  },
  {
    icon: IoLink,
    subTitle: "Launch Admin",
    description: "New admin",
    type: "Admin",
  },
];
