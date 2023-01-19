import * as React from "react";
import { Grid, Box, TextField, Typography, Button } from "@mui/material"
import Textarea from '@mui/joy/Textarea';
export default function Form() {
    return (
        <Grid container spacing={10} justifyContent="center">
            <Grid item xs={5.8}>
                <Grid>
                    <Typography>Task Type *</Typography>
                    <TextField fullWidth label="Outlined" variant="outlined" />
                </Grid>
                <Grid sx={{ paddingTop: "25px" }}>
                    <Typography>Assigned To *</Typography>
                    <TextField fullWidth label="Outlined" variant="outlined" />
                </Grid>
                <Grid sx={{ display: "flex", justifyContent: "space-between", paddingTop: "25px" }}>
                    <Box>
                        <Typography>Start Date</Typography>
                        <TextField
                            id="date"
                            // label="Start Date"
                            type="date"
                            defaultValue="2017-05-24"
                            sx={{ width: "12vw" }}
                        />
                    </Box>
                    <Box>
                        <Typography>End Date</Typography>
                        <TextField
                            id="date"
                            // label="End Date"
                            type="date"
                            defaultValue="2017-05-24"
                            sx={{ width: "12vw" }}
                        />
                    </Box>
                </Grid>
                <Grid sx={{ paddingTop: "25px" }}>
                    <Typography>Remind On</Typography>
                    <TextField
                        id="date"
                        type="date"
                        defaultValue="2017-05-24"
                        fullWidth
                    />
                </Grid>
            </Grid>
            <Grid item xs={5.8}>
                <Typography>Subject *</Typography>
                <TextField fullWidth label="Outlined" variant="outlined" />
                <Grid sx={{ paddingTop: "25px" }}>
                    <Typography>Details</Typography>
                    <Box>
                        <Textarea
                            placeholder="Type in here…"
                            defaultValue=""
                            minRows={10}
                            maxRows={10}
                        />
                    </Box>
                </Grid>
            </Grid>
            <Box displa="flex" ml={70}>
                <Button variant="outlined" sx={{
                    border: "1px solid gray",
                    color: "gray", padding: "10px",
                    width: "200px",
                    margin: "10px"
                }}>
                    Cancell</Button>
                <Button variant="outlined" sx={{
                    border: "1px solid orange",
                    color: "orange",
                    padding: "10px",
                    width: "200px",
                    margin: "10px"
                }}>
                    Apply</Button>
            </Box>
        </Grid>
    )
}
