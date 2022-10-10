import React from "react";
import {
  Button,
  Dialog,
  Slide,
  DialogActions,
  DialogTitle,
} from "@mui/material";
import Calendar from "./Calendar";

import AddEventModalContent from "./AddEventModalContent";

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
      <Button variant="contained" onClick={handleClickOpen}>
        Create Event
      </Button>
      <Calendar />
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
