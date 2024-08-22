export interface CpuDataPoint {
  time: string;
  value: number;
}

export interface GetCpuUsageParams {
  ipAddress: string;
  startTime: string;
  endTime: string;
  interval: string;
}
