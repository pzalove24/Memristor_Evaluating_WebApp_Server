import {
  Box,
  Collapse,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Switch,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { TTableDisplayType } from "./TablePagination";

type TableCollapseProp = {
  row: any;
  columns: any;
};

const rowDisplay = (
  displayType: TTableDisplayType,
  data: string | number | boolean
) => {
  switch (displayType) {
    case "Typography":
      return <Typography>{data}</Typography>;
    case "Text Field":
      return (
        <TextField
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
          value={data}
        />
      );
    case "Switch":
      return (
        <Switch
          checked={data as boolean}
          // onChange={() => handleActiveChange(data)}
        />
      );
    case "Select":
      return (
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={data}
            label="Age"
            //   onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      );
    default:
      break;
  }
};

const TableCollapse = ({ row, columns }: TableCollapseProp) => {
  const [openCollapse, setOpenCollapse] = React.useState(false);
  return (
    <React.Fragment>
      <TableRow hover role="checkbox" tabIndex={-1}>
        {columns.map((column: any) => {
          const value = row[column.id];
          return (
            <>
              {column.id === "Expand Data" ? (
                <TableCell key={column.id} align="right">
                  <IconButton
                    aria-label="expand row"
                    size="small"
                    onClick={() => setOpenCollapse(!openCollapse)}
                  >
                    {openCollapse ? (
                      <KeyboardArrowUpIcon />
                    ) : (
                      <KeyboardArrowDownIcon />
                    )}
                  </IconButton>
                </TableCell>
              ) : (
                <TableCell key={column.id} align={column.align}>
                  {column.format && typeof value === "number"
                    ? rowDisplay(column.DisplayType, column.format(value))
                    : rowDisplay(column.DisplayType, value)}
                </TableCell>
              )}
            </>
          );
        })}
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={openCollapse} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                History
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    {/* <TableCell>Date</TableCell>
                    <TableCell>Customer</TableCell>
                    <TableCell align="right">Amount</TableCell> */}
                    <TableCell align="right">Total price ($)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell align="right">Test collapse</TableCell>
                  </TableRow>
                  {/* {row.history.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell component="th" scope="row">
                        {historyRow.date}
                      </TableCell>
                      <TableCell>{historyRow.customerId}</TableCell>
                      <TableCell align="right">{historyRow.amount}</TableCell>
                      <TableCell align="right">
                        {Math.round(historyRow.amount * row.price * 100) / 100}
                      </TableCell>
                    </TableRow>
                  ))} */}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
};

export default TableCollapse;
