import React, { useEffect, useState } from "react";
import {
  DialogContent,
  DialogContentText,
  TextField,
  Stack,
  FormControl,
  Input,
  InputLabel,
  InputAdornment,
  List,
  ListItem,
  ListItemText,
  IconButton,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CheckIcon from "@mui/icons-material/Check";
import { FilePicker } from "evergreen-ui";

import DateInput from "./DateInput";
import TimeInput from "./TimeInput";

const AddEventModalContent = () => {
  const [user_list, setUserList] = useState([]);
  const [filter_text, setFilter] = useState("");
  const [user, setUser] = useState("");

  useEffect(() => {
    const new_user_list = [
      "user1",
      "user2",
      "user3",
      "user4",
      "user5",
      "user6",
      "user7",
      "user8",
      "user9",
      "user10",
      "user11",
      "user12",
    ];
    setUserList(new_user_list);
  }, []);

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <div>
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
          <Stack spacing={2}>
            <TextField
              id="standard-basic"
              label="Title"
              variant="standard"
              sx={{ width: "100%" }}
            />
            <Stack direction="row" spacing={2}>
              <FormControl variant="standard">
                <InputLabel htmlFor="date">Date</InputLabel>
                <DateInput id="date" />
              </FormControl>

              <FormControl variant="standard">
                <InputLabel htmlFor="start-time">Start</InputLabel>
                <TimeInput id="start-time" />
              </FormControl>
              <FormControl variant="standard">
                <InputLabel htmlFor="end-time">End</InputLabel>
                <TimeInput id="end-time" />
              </FormControl>
            </Stack>
            <TextField
              id="standard-basic"
              label="User"
              variant="standard"
              value={user}
            />
            <FormControl variant="standard" sx={{ width: "100%" }}>
              <InputLabel htmlFor="standard-adornment-password">
                Search User
              </InputLabel>
              <Input
                id="standard-adornment-password"
                onChange={handleFilterChange}
                endAdornment={
                  <InputAdornment position="end">
                    <SearchIcon />
                  </InputAdornment>
                }
              />
            </FormControl>
            <List
              sx={{
                width: "100%",
                bgcolor: "background.paper",
                position: "relative",
                overflow: "auto",
                height: 150,
                "& ul": { padding: 0 },
              }}
              subheader={<li />}
            >
              <li>
                <ul>
                  {user_list.map(
                    (user) =>
                      user.includes(filter_text) && (
                        <ListItem key={user}>
                          <ListItemText primary={user} />
                          <IconButton onClick={() => setUser(user)}>
                            <CheckIcon />
                          </IconButton>
                        </ListItem>
                      )
                  )}
                </ul>
              </li>
            </List>
            <FilePicker width={"100%"} placeholder="Select your file" />
          </Stack>
        </DialogContentText>
      </DialogContent>
    </div>
  );
};

export default AddEventModalContent;
