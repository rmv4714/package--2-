import * as React from "react";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Grid, Paper, Box, Tabs, TextField, Typography, Button } from "@mui/material"
import { useState } from "react";
import Textarea from '@mui/joy/Textarea';
import Form from "./Form";
import Todo from "./Todo";
import DateFilter from "./DateFilter";


function Home() {
  const TabBar = [
    {
      id: 1,
      label: "Log Calls"
    },
    {
      id: 2,
      label: "Tasks"
    },
    {
      id: 3,
      label: "Event"
    },
    {
      id: 4,
      label: "Make Note"
    },
    {
      id: 5,
      label: "Add Attachment"
    },
    {
      id: 6,
      label: "Activity Set"
    },
    {
      id: 7,
      label: "Custom Field"
    },
    {
      id: 8,
      label: "Dynamic Data"
    },
  ]
  const [value, setValue] = React.useState("1");
  const [tab, seTab] = useState(2)

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleTabChange = (event, newValue) => {
    console.log(newValue)
    seTab(newValue);
  };


  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box mb={5} sx={{ borderBottom: 1, borderColor: "divider", marginLeft: "20px" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Activity" value="1" />
            <Tab label="Information" value="2" />
          </TabList>
        </Box>
      </TabContext>
      <Grid container >
        <Grid xs={8}>
          <Paper style={{ marginRight: "30px", marginLeft: "10px", paddingBottom: "30px" }}>
            <Tabs onChange={handleTabChange} variant="scrollable" value={tab} centered>
              {TabBar.map((tabData) => {
                return (
                  <Tab style={{ fontSize: "18px", textTransform: "capitalize", padding: "20px" }} label={tabData.label} value={tabData.id} />
                )
              })}
            </Tabs>
            <Box p={3}>New Task</Box>
            <Form />
            <Box mb={5} sx={{ borderBottom: 1, borderColor: "divider", margin: "20px" }} />
            <Box p={3}>Task List</Box>
            <Grid container justifyContent={"center"}>
              <Grid item xs={11}>
                <Todo />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid xs={3.9}>
          <Paper>
            <DateFilter/>
          </Paper>
        </Grid>
      </Grid >
    </Box >
  );
}

export default Home;
