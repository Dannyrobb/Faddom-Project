import { useState } from "react";
import { Typography, Box, Paper } from "@mui/material";
import CPUUsageChart from "../components/CPUUsageChart";
import ChartSkeleton from "../components/ChartSkeleton";
import Welcome from "../components/Welcome";
import { useCPUUsage } from "../api/useCpuUsage";
import { InputFields } from "../components/InputFields";
import { FetchButton } from "../components/FetchButton";
import { styles } from "./main.styles.ts";

function Main() {
  const [ipAddress, setIpAddress] = useState<string>("172.31.88.161");
  const [startTime, setStartTime] = useState<string>("2024-07-24T00:00");
  const [endTime, setEndTime] = useState<string>("2024-08-24T00:00");
  const [interval, setInterval] = useState<string>("3600");

  const {
    data: cpuData = [],
    refetch,
    isFetching,
    isError,
  } = useCPUUsage({
    ipAddress,
    startTime,
    endTime,
    interval,
  });

  return (
    <Box sx={styles.container}>
      <Paper sx={styles.paper}>
        <Typography variant="h5" gutterBottom textAlign="center">
          AWS CPU Usage Monitor
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
          <InputFields
            ipAddress={ipAddress}
            setIpAddress={setIpAddress}
            startTime={startTime}
            setStartTime={setStartTime}
            endTime={endTime}
            setEndTime={setEndTime}
            interval={interval}
            setInterval={setInterval}
          />
          <FetchButton handleFetch={refetch} isFetching={isFetching} startTime={startTime} endTime={endTime} />
        </Box>
      </Paper>

      {isError && <Typography color="error">Error fetching data. Please try again.</Typography>}

      {isFetching && <ChartSkeleton />}

      {!isFetching && !isError && cpuData.length > 0 && (
        <Box sx={styles.chartContainer}>
          <CPUUsageChart data={cpuData} />
        </Box>
      )}

      {!isFetching && !isError && cpuData.length === 0 && (
        <Box sx={styles.welcomeContainer}>
          <Welcome />
        </Box>
      )}
    </Box>
  );
}

export default Main;
