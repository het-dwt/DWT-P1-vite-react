import "./apiData.css";
import axios from "axios";
import Table from "@mui/material/Table";
import Paper from "@mui/material/Paper";
import Rating from "@mui/material/Rating";
import { Typography } from "@mui/material";
import { Pagination } from "@mui/material";
import { useEffect, useState } from "react";
import TableRow from "@mui/material/TableRow";
import TableHead from "@mui/material/TableHead";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";

function Apidata() {
  const [apiData, setApiData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  useEffect(() => {
    const apiUrl = `https://dummyjson.com/products?page=${currentPage}&limit=${itemsPerPage}`;

    axios.get(apiUrl).then((response) => {
      console.log(response.data);
      setApiData(response.data);
    });
  }, [currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
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
                  <img
                    src={o.thumbnail}
                    id="tableImage"
                    style={{ borderRadius: "10px" }}
                  />
                  <h6>{o.brand}</h6>
                </TableCell>
                <TableCell align="center">
                  {o.title} <h6>[{o.stock} in stock.]</h6>
                </TableCell>
                <TableCell>
                  <Typography component="legend">
                    <Rating
                      name="half-rating-read"
                      defaultValue={o.rating}
                      precision={1}
                      readOnly
                    />
                  </Typography>
                </TableCell>
                <TableCell align="center">
                  {o.price} $<h6>({o.discountPercentage} % off.)</h6>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Pagination
        showFirstButton
        showLastButton
        count={3}
        // count={Math.ceil(apiData.totalProducts / itemsPerPage)}
        page={currentPage}
        onChange={handlePageChange}
        style={{
          marginTop: "20px",
          display: "flex",
          justifyContent: "center",
        }}
      />
    </div>
  );
}

export default Apidata;
