import { Button, Tooltip } from "@mui/material";

interface FetchButtonProps {
  handleFetch: () => void;
  isFetching: boolean;
  startTime: string;
  endTime: string;
}

export function FetchButton({ handleFetch, isFetching, startTime, endTime }: FetchButtonProps) {
  const isStartDateAfterEndDate = new Date(startTime) > new Date(endTime);
  const tooltipTitle = isStartDateAfterEndDate ? "Start date can not be after end date." : "Click to fetch data";

  return (
    <Tooltip title={tooltipTitle} arrow>
      <Button variant="contained" sx={{ margin: 1 }} color="primary" onClick={handleFetch} disabled={isFetching || isStartDateAfterEndDate}>
        {isFetching ? "Fetching..." : "Fetch Data"}
      </Button>
    </Tooltip>
  );
}
