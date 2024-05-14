import { faker } from "@faker-js/faker";

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const spark1 = {
  chart: {
    id: "sparkline1",
    group: "sparklines",
    type: "area",
    height: 160,
    sparkline: {
      enabled: true,
    },
  },
  stroke: {
    curve: "straight",
  },
  fill: {
    opacity: 1,
  },
  series: [
    {
      name: "Sales",
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
    },
  ],
  labels: labels.map((n) => `2024-01-0${n + 1}`),
  yaxis: {
    min: 0,
  },
  xaxis: {
    type: "datetime",
  },
  colors: ["#DCE6EC"],
  title: {
    text: "$424,652",
    offsetX: 30,
    style: {
      fontSize: "24px",
      cssClass: "apexcharts-yaxis-title",
    },
  },
  subtitle: {
    text: "Sales",
    offsetX: 30,
    style: {
      fontSize: "14px",
      cssClass: "apexcharts-yaxis-title",
    },
  },
};
