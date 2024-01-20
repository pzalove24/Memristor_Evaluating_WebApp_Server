import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import {
  Box,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";
import { TablePaginationActionsProps } from "@mui/material/TablePagination/TablePaginationActions";

type TDisplayType = "Text Field" | "Switch" | "Typography" | "Select";

interface Column {
  id: "active" | "name" | "code" | "population" | "size" | "density";
  label: string;
  DisplayType: TDisplayType;
  minWidth?: number;
  align?: "right";
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: "active", label: "Active", minWidth: 170, DisplayType: "Switch" },
  { id: "name", label: "Name", minWidth: 170, DisplayType: "Typography" },
  {
    id: "code",
    label: "ISO\u00a0Code",
    minWidth: 100,
    DisplayType: "Text Field",
  },
  {
    id: "population",
    label: "Population",
    minWidth: 170,
    align: "right",
    format: (value: number) => value.toLocaleString("en-US"),
    DisplayType: "Text Field",
  },
  {
    id: "size",
    label: "Size\u00a0(km\u00b2)",
    minWidth: 170,
    align: "right",
    format: (value: number) => value.toLocaleString("en-US"),
    DisplayType: "Typography",
  },
  {
    id: "density",
    label: "Density",
    minWidth: 170,
    align: "right",
    format: (value: number) => value.toFixed(2),
    DisplayType: "Typography",
  },
];

interface Data {
  active: boolean;
  name: string;
  code: string;
  population: number;
  size: number;
  density: number;
}

function createData(
  active: boolean,
  name: string,
  code: string,
  population: number,
  size: number
): Data {
  const density = population / size;
  return { active, name, code, population, size, density };
}

const rows = [
  createData(true, "India", "IN", 1324171354, 3287263),
  createData(false, "China", "CN", 1403500365, 9596961),
  createData(false, "Italy", "IT", 60483973, 301340),
  createData(false, "United States", "US", 327167434, 9833520),
  createData(false, "Canada", "CA", 37602103, 9984670),
  createData(false, "Australia", "AU", 25475400, 7692024),
  createData(false, "Germany", "DE", 83019200, 357578),
  createData(true, "Ireland", "IE", 4857000, 70273),
  createData(false, "Mexico", "MX", 126577691, 1972550),
  createData(false, "Japan", "JP", 126317000, 377973),
  createData(false, "France", "FR", 67022000, 640679),
  createData(false, "United Kingdom", "GB", 67545757, 242495),
  createData(false, "Russia", "RU", 146793744, 17098246),
  createData(false, "Nigeria", "NG", 200962417, 923768),
  createData(false, "Brazil", "BR", 210147125, 8515767),
];

function TablePaginationActions(props: TablePaginationActionsProps) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

export const CustomTablePagination = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleActiveChange = (code: string) => {
    // Update the "active" property for the corresponding row
    const updatedRows = rows.map((row) =>
      row.code === code ? { ...row, active: !row.active } : row
    );

    // You might want to update your rows state here or use some state management library
    // setStateForRows(updatedRows);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const rowDisplay = (
    displayType: TDisplayType,
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

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {/* <TableCell>
      
                    </TableCell> */}
                    {columns.map((column) => {
                      const value = row[column.id];
                      console.log(value);
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === "number"
                            ? rowDisplay(
                                column.DisplayType,
                                column.format(value)
                              )
                            : rowDisplay(column.DisplayType, value)}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        ActionsComponent={TablePaginationActions}
      />
    </Paper>
  );
};
