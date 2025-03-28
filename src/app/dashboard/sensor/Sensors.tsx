"use client";

import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

import * as React from "react";
import SendIcon from "@mui/icons-material/Send";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import Link from "@mui/material/Link";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

import TextField from "@mui/material/TextField";
import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import { motion } from "framer-motion";
import Stack from "@mui/material/Stack";
import MenuItem from "@mui/material/MenuItem";
import Navigation from "../../Navigation";
import Footer from "@/app/Footer";

interface Column {
  id: "soilmoisture" | "temperature" | "humidity" | "nitrogen" | "time";
  label: string;
  minWidth?: number;
  align?: "right";
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: "soilmoisture", label: "Soil Moisture", minWidth: 170 },
  { id: "temperature", label: "Soil Temperature", minWidth: 100 },
  {
    id: "humidity",
    label: "Humidity",
    minWidth: 170,
    align: "right",
    // format: (value: number) => value.toLocaleString("en-US"),
  },
  {
    id: "nitrogen",
    label: "Nitrogen",
    minWidth: 170,
    align: "right",
    // format: (value: number) => value.toLocaleString("en-US"),
  },
  {
    id: "time",
    label: "Time",
    minWidth: 170,
    align: "right",
    // format: (value: number) => value.toFixed(2),
  },
];

interface Data {
  soilmoisture: string;
  temperature: string;
  humidity: number;
  nitrogen: number;
  time: number;
}

function createData(
  soilmoisture: string,
  temperature: string,
  humidity: number,
  nitrogen: number,
  time: number
): Data {
  const density = humidity/ nitrogen;
  return { soilmoisture, temperature, humidity, nitrogen, time };
}

const rows = [
  createData("25%", "24°C", 52, 30,1),
  createData("28%%", "23°C", 53, 30,2),
  createData("26%", "22°C", 53, 30,3),
  createData("22%", "21°C", 54, 30,4),
  createData("21%", "20°C", 55, 30,5),
  createData("25%", "21°C", 56, 30,6),
  createData("25%", "21°C", 57, 29,7),
  createData("25%", "20°C", 58, 29,8),
  createData("25%", "24°C", 58, 29,9),
  createData("25%", "24°C", 59, 29,10),
  createData("25%", "25°C", 58, 29,11),
  createData("22%", "26°C", 56, 29,12),
  createData("21%", "26°C", 52, 28,13),
  createData("25%", "26°C", 52, 28,14),
  createData("24%", "24°C", 52, 28,15),
  createData("25%", "24°C", 53, 28,16),
  createData("25%", "24°C", 54, 29,17),
  createData("23%", "24°C", 56, 29,18),
  createData("25%", "24°C", 52, 29,19),
  createData("26%", "24°C", 53, 28,20),
  createData("27%", "24°C", 52, 28,21),
  createData("26%", "24°C", 54, 28,22),
  createData("24%", "24°C", 54, 28,23),
  createData("23%", "24°C", 52, 28,24),
  createData("22%", "24°C", 52, 28,25),
  createData("23%", "24°C", 52, 28,26),
  createData("24%", "24°C", 53, 28,27),
  createData("25%", "24°C", 54, 28,28),
  createData("26%", "24°C", 55, 28,29),
  createData("28%", "24°C", 56, 30,30),
];

function Sensors() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div style={{ backgroundColor: "white", height: "1000px" }}>
      <Navigation></Navigation>
      <Box sx={{ paddingTop: "0px" }}>
        <Container maxWidth="xl" sx={{ padding: "0px !important" }}>
          <Grid
            className="row"
            container
            rowSpacing={1}
            spacing={2}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            sx={{
              padding: "0px 20px",
              display: "flex",
              justifyContent: "left",
              marginTop: "0px !important",
              marginBottom: "52px",
            }}
          >
            <Grid
              item
              xs={12}
              className="column"
              sx={{
                display: "flex",
                alignItems: "center",
                paddingLeft: "0px !important",
                paddingTop: "0px !important",
                width: "100%",
                marginTop: "32px",
                marginBottom: "26px",
              }}
            >
              <Breadcrumbs aria-label="breadcrumb">
                <Link
                  underline="hover"
                  sx={{
                    fontFamily: "Open Sans",
                    fontSize: "12px",
                    fontStyle: "normal",
                    fontWeight: "400",
                  }}
                  color="inherit"
                  href="/dashboard"
                >
                  Homepage
                </Link>
                <Typography
                  sx={{
                    fontFamily: "Open Sans",
                    fontSize: "12px",
                    fontStyle: "normal",
                    fontWeight: "600",
                  }}
                  color="text.primary"
                >
                  Sensors
                </Typography>
              </Breadcrumbs>
            </Grid>{" "}
            <Grid
              item
              xs={12}
              className="column"
              sx={{
                display: "flex",
                alignItems: "center",
                paddingLeft: "0px !important",
                paddingTop: "0px !important",
                width: "100%",
                marginTop: "0px",
                marginBottom: "26px",
              }}
            >
              <Typography
                variant="h4"
                component="h2"
                sx={{
                  fontWeight: "700",
                  fontSize: "24px",
                  color: "#262324",
                }}
              >
                Sensors
              </Typography>
            </Grid>{" "}
            <Grid
              item
              xs={12}
              className="column"
              sx={{
                display: "flex",
                alignItems: "center",
                paddingLeft: "0px !important",
                paddingTop: "0px !important",
                width: "100%",
                marginTop: "0px",
                marginBottom: "26px",
              }}
            >
              {" "}
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
                        .slice(
                          page * rowsPerPage,
                          page * rowsPerPage + rowsPerPage
                        )
                        .map((row) => {
                          return (
                            <TableRow
                              hover
                              role="checkbox"
                              tabIndex={-1}
                            //   key={row.
                            >
                              {columns.map((column) => {
                                const value = row[column.id];
                                return (
                                  <TableCell
                                    key={column.id}
                                    align={column.align}
                                  >
                                    {column.format && typeof value === "number"
                                      ? column.format(value)
                                      : value}
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
                />
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Footer></Footer>
    </div>
  );
}

export default Sensors;
