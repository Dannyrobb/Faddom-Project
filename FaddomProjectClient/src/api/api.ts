import { CPUDataPoint } from "./api.types";

export async function fetchCPUUsage(ipAddress: string, startTime: string, endTime: string, interval: string): Promise<CPUDataPoint[]> {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/api/cpu-usage?ipAddress=${ipAddress}&startTime=${startTime}&endTime=${endTime}&interval=${interval}`
    );
    const data: CPUDataPoint[] = await response.json();

    return data;
  } catch (error) {
    throw new Error(`Error fetching data: ${error}`);
  }
}
