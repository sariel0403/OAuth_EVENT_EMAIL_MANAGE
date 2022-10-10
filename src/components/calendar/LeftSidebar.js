import React from "react";
import {
  Button,
  Dialog,
  Slide,
  DialogActions,
  DialogTitle,
  Stack,
} from "@mui/material";

import AddEventModalContent from "./AddEventModalContent";
import Calendar from "./Calendar";
import MyBigCalendar from "./MyBigCalendar";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const LeftSidebar = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div style={{ padding: 20 }}>
      <Stack direction="row">
        <Stack>
          <Button
            variant="contained"
            onClick={handleClickOpen}
            sx={{
              width: 200,
              height: 35,
              marginLeft: "auto",
              marginRight: "auto",
              marginBottom: 2,
            }}
          >
            Create Event
          </Button>
          <Calendar />
        </Stack>
        <MyBigCalendar />
      </Stack>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        maxWidth={"xs"}
      >
        <DialogTitle sx={{ backgroundColor: "#2338ff", color: "white" }}>
          {"Create Event"}
        </DialogTitle>
        <AddEventModalContent />
        <DialogActions>
          <Button onClick={handleClose}>Create</Button>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default LeftSidebar;
