import ReactApexChart from "react-apexcharts";
import {
  options,
  series,
  pieOptions,
  pieSeries,
} from "@/components/js/constants/data";
const Charts = () => {
  return (
    <>
      <div className="flex flex-col gap-8">
        <div>
          <h1 className="text-base font-medium">Charts</h1>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="flex flex-col gap-2 rounded-md border p-6 bg-white">
            <h2 className="font-semibold">Bar Chart</h2>
            <ReactApexChart
              options={options}
              series={series}
              type="bar"
              height="350"
            />
          </div>

          <div className="flex flex-col gap-2 rounded-md border p-6 bg-white">
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
          <div className="flex flex-col gap-2 bg-white rounded-md border p-6">
            <h2 className="font-semibold">Donut Chart</h2>

            <div className="chart-container">
              <ReactApexChart
                options={pieOptions}
                series={pieSeries}
                type="donut"
                height="350"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2 rounded-md border p-6 bg-white">
            <h2 className="font-semibold">Pie Chart</h2>

            <div className="chart-container">
              <ReactApexChart
                options={pieOptions}
                series={pieSeries}
                type="pie"
                height="350"
              />
            </div>
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
