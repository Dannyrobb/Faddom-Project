import { Chart, AxisOptions } from "react-charts";
import { CPUDataPoint } from "../api/api.types";

interface ChartProps {
  data: CPUDataPoint[];
}

function CPUUsageChart({ data }: ChartProps) {
  const chartData = [
    {
      label: "CPU Usage",
      data: data.map((point) => ({ primary: new Date(point.time), secondary: point.value })),
    },
  ];

  const primaryAxis: AxisOptions<{ primary: Date }> = {
    getValue: (dataPoint) => dataPoint.primary,
    scaleType: "time",
  };

  const secondaryAxes: AxisOptions<{ secondary: number }>[] = [
    {
      getValue: (dataPoint) => dataPoint.secondary,
      scaleType: "linear",
    },
  ];

  const options = { data: chartData, primaryAxis, secondaryAxes };

  return <Chart options={options} />;
}

export default CPUUsageChart;
