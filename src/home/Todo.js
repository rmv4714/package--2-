import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.white,
        color: theme.palette.common.black,
        // border: "1px solid gray"
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const taskListData = [
    {
        id: 1,
        subject: "Sample",
        type: "To Do",
        assigned: "Ravi Kumar",
        dueDate: "13 Nov 2020",
        staus: "Not Started",
    },
    {
        id: 2,
        subject: "Sample",
        type: "To Do",
        assigned: "Ravi Kumar",
        dueDate: "13 Nov 2020",
        staus: "Not Started",
    },
    {
        id: 3,
        subject: "Sample",
        type: "To Do",
        assigned: "Ravi Kumar",
        dueDate: "13 Nov 2020",
        staus: "Not Started",
    },
]


export default function Todo() {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ width: "100%", border: "1px solid gray" }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell align="center">#</StyledTableCell>
                        <StyledTableCell align="center">Subject</StyledTableCell>
                        <StyledTableCell align="center">Type</StyledTableCell>
                        <StyledTableCell align="center">Assign to</StyledTableCell>
                        <StyledTableCell align="center">Due Date</StyledTableCell>
                        <StyledTableCell align="center">Status</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {taskListData.map((row) => (
                        <StyledTableRow key={row.name}>
                            <StyledTableCell scope="center"> {row.id} </StyledTableCell>
                            <StyledTableCell align="center" sx={{ color: "blue" }}>{row.subject}</StyledTableCell>
                            <StyledTableCell align="center">{row.type}</StyledTableCell>
                            <StyledTableCell align="center">{row.assigned}</StyledTableCell>
                            <StyledTableCell align="center">{row.dueDate}</StyledTableCell>
                            <StyledTableCell align="center">{row.staus}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}