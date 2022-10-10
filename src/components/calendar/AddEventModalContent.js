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
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { FilePicker } from "evergreen-ui";

const AddEventModalContent = () => {
  const [user_list, setUserList] = useState([]);

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
              <TextField id="standard-basic" label="Date" variant="standard" />
              <TextField id="standard-basic" label="From" variant="standard" />
              <TextField id="standard-basic" label="To" variant="standard" />
            </Stack>
            <TextField
              id="standard-basic"
              label="User"
              variant="standard"
              sx={{ width: "100%" }}
            />
            <br />

            <FormControl variant="standard" sx={{ width: "100%" }}>
              <InputLabel htmlFor="standard-adornment-password">
                Search User
              </InputLabel>
              <Input
                id="standard-adornment-password"
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
                maxHeight: 150,
                "& ul": { padding: 0 },
              }}
              subheader={<li />}
            >
              <li>
                <ul>
                  {user_list.map((user) => (
                    <ListItem key={user}>
                      <ListItemText primary={user} />
                    </ListItem>
                  ))}
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
