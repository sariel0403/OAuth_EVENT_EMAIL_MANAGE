import React from "react";
import { Stack } from "@mui/material";

import LeftSidebar from "../../components/calendar/LeftSidebar";

const Calendar = () => {
  return (
    <div>
      <Stack direction="row">
        <LeftSidebar />
      </Stack>
    </div>
  );
};

export default Calendar;
