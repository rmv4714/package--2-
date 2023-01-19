import React from "react";
import { Grid, Box, TextField, Typography, Button } from "@mui/material";
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
import KeyboardArrowDownSharpIcon from "@mui/icons-material/KeyboardArrowDownSharp";
import CheckCircleSharpIcon from "@mui/icons-material/CheckCircleSharp";
import ReceiptSharpIcon from "@mui/icons-material/ReceiptSharp";
export default function DateFilter() {
  const filterByDate = [
    {
      id: 1,
      icon: <LocalPhoneRoundedIcon fontSize="large" color="primary" />,
      status: "You contacted with",
      title: "Informed Product Features",
      name: " Charles Gomez",
      dataAndTime: "13 Nov 2018  05:49 AM",
    },
    {
      id: 2,
      icon: <CheckCircleSharpIcon fontSize="large" color="secondary" />,
      status: "You contacted with",
      title: "Informed Product Features",
      name: " Charles Gomez",
      dataAndTime: "13 Nov 2018  05:49 AM",
    },
    {
      id: 3,
      icon: <ReceiptSharpIcon fontSize="large" color="primary" />,
      status: "You contacted with",
      title: "Informed Product Features",
      name: " Charles Gomez",
      dataAndTime: "13 Nov 2018  05:49 AM",
    },
    {
      id: 4,
      icon: <ReceiptSharpIcon fontSize="large" color="secondary" />,
      status: "You contacted with",
      title: "Informed Product Features",
      name: " Charles Gomez",
      dataAndTime: "13 Nov 2018  05:49 AM",
    },
  ];
  return (
    <Grid container justifyContent="center" sx={{ padding: "20px" }}>
      <Grid item xs={12}>
        <TextField fullWidth label="Filter By Date" variant="outlined" />
      </Grid>
      <Grid item xs={12}>
        <Box
          mb={5}
          sx={{ borderBottom: 1, borderColor: "divider", margin: "20px 0px" }}
        />
      </Grid>
      <Grid>
        {filterByDate.map((item, index) => {
          return (
            <>
              <Box
                sx={{
                  border: "1px solid gray",
                  height: "20vh",
                  width: "100%",
                  margin: "10px",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Box ml={2} fontSize="20px">
                    {item.icon}
                  </Box>
                  <Box ml={3}>
                    <Typography sx={{ fontWeight: "bold", fontSize: "18px" }}>
                      {" "}
                      {item.title}
                    </Typography>
                    <Typography sx={{ color: "gray" }}>
                      {" "}
                      {item.status}{" "}
                      <span
                        style={{
                          color: "#dada80",
                          fontWeight: "18px",
                          fontWeight: "bold",
                        }}
                      >
                        {item.name}
                      </span>
                    </Typography>
                    <Typography sx={{ color: "gray" }}>
                      {" "}
                      {item.dataAndTime}
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box textAlign="center">
                <KeyboardArrowDownSharpIcon />
              </Box>
            </>
          );
        })}
      </Grid>
    </Grid>
  );
}
