import { useQuery } from "@tanstack/react-query";
import { fetchCPUUsage } from "./api";
import { CPUDataPoint } from "../api/api.types";

export const useCPUUsage = ({
  ipAddress,
  startTime,
  endTime,
  interval,
}: {
  ipAddress: string;
  startTime: string;
  endTime: string;
  interval: string;
}) => {
  return useQuery<CPUDataPoint[]>({
    queryKey: ["cpuUsage"],
    queryFn: () => fetchCPUUsage(ipAddress, startTime, endTime, interval),
    enabled: false,
  });
};
