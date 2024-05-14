import ReactApexChart from "react-apexcharts";

const Charts = () => {
  const options = {
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
  const series = [
    {
      name: "series-1",
      data: [50, 95, 25, 45, 30, 35],
    },
  ];

  const pieOptions = {
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
              width: 200,
              height: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  };

  const pieSeries = [44, 55, 41, 17, 15]; //our data

  return (
    <>
      <div className="flex flex-col gap-4">
        <div>
          <h1 className="text-lg">Charts</h1>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="full flex flex-col gap-1 rounded-md border p-6">
            <h2 className="font-semibold">Bar Chart</h2>
            <ReactApexChart
              options={options}
              series={series}
              type="bar"
              height="350"
            />
          </div>

          <div className="full flex flex-col gap-2 rounded-md border p-6">
            <h2 className="font-semibold">Line Chart</h2>
            <ReactApexChart
              options={options}
              series={series}
              type="line"
              height="350"
            />
          </div>
        </div>

        <div className="grid  grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="full flex flex-col gap-1 rounded-md border p-6">
            <h2 className="font-semibold">Donut Chart</h2>
            <ReactApexChart
              options={pieOptions}
              series={pieSeries}
              type="donut"
              height="350"
            />
          </div>

          <div className="full flex flex-col gap-2 rounded-md border p-6">
            <h2 className="font-semibold">Pie Chart</h2>
            <ReactApexChart
              options={pieOptions}
              series={pieSeries}
              type="pie"
              height="350"
            />
          </div>
        </div>

        {/* <div className="grid  grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="full flex flex-col gap-1 rounded-md border p-6">
            <h2 className="font-semibold">Donut Chart</h2>
            <ReactApexChart
              options={pieOptions}
              series={pieSeries}
              type="donut"
            />
          </div>

          <div className="full flex flex-col gap-2 rounded-md border p-6">
            <h2 className="font-semibold">Pie Chart</h2>
            <ReactApexChart
              options={pieOptions}
              series={pieSeries}
              type="pie"
            />
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Charts;
