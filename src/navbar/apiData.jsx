import { useEffect, useState } from "react";
import axios from "axios";
import "./apiData.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function Apidata() {
  const [apiData, setApiData] = useState([]);
  useEffect(() => {
    axios.get("https://dummyjson.com/products").then((response) => {
      console.log(response.data);
      setApiData(response.data);
    });
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table" id="Table">
        <TableHead>
          <TableRow>
            <TableCell align="center">
              <label id="label">Sr.</label>
            </TableCell>
            <TableCell align="center">
              <label id="label">Product</label>
            </TableCell>
            <TableCell align="center">
              <label id="label">Product Name</label>
            </TableCell>
            <TableCell align="center">
              <label id="label">Rating</label>
            </TableCell>
            <TableCell align="center">
              <label id="label">Price</label>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {apiData.products?.map((o) => (
            <TableRow key={o.id}>
              <TableCell align="center" component="th" scope="row">
                <label id="label">{o.id}</label>
              </TableCell>
              <TableCell align="center">
                <img src={o.thumbnail} width="100" />
              </TableCell>
              <TableCell align="center">{o.title}</TableCell>
              <TableCell align="center">{o.rating} / 5</TableCell>
              <TableCell align="center">{o.price} /-</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Apidata;
