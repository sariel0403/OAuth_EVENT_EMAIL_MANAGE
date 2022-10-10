import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import events from "./events";

const localizer = momentLocalizer(moment);

const MyBigCalendar = (props) => (
  <div>
    <Calendar
      localizer={localizer}
      events={events}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 700, width: 1100 }}
    />
  </div>
);

export default MyBigCalendar;
