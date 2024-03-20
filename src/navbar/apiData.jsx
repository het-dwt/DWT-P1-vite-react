import "./apiData.css";
import axios from "axios";
import Table from "@mui/material/Table";
import Paper from "@mui/material/Paper";
import "../navbar/paginationRounded.css";
import Rating from "@mui/material/Rating";
import { useEffect, useState } from "react";
import TableRow from "@mui/material/TableRow";
import TableHead from "@mui/material/TableHead";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
// import IconButton from "@mui/material/IconButton";
import TableContainer from "@mui/material/TableContainer";
import { Button, Pagination, Stack, Typography } from "@mui/material";
// import AddShoppingCartSharpIcon from "@mui/icons-material/AddShoppingCartSharp";

function Apidata() {
  const [badgeContent, setbadgeContent] = useState(0);
  const itemsPerPage = 4;
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [apiData, setApiData] = useState({ products: [] });
  function increment() {
    setbadgeContent((c) => c + 1);
  }
  console.log(badgeContent);
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((response) => {
        console.log(response.data);
        setApiData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedProducts = apiData.products.slice(startIndex, endIndex);

  return (
    <div>
      {loading ? (
        <h2 style={{ margin: "6em" }}>Loading...</h2>
      ) : (
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
                  <TableCell align="center"></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {displayedProducts?.map((o) => (
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
                    <TableCell align="center">
                      {/* <IconButton
                        data={badgeContent}
                        onClick={() => increment()}
                        color="primary"
                        aria-label="add to shopping cart"
                      >
                        <AddShoppingCartSharpIcon />
                      </IconButton> */}
                      <Button  variant="contained" onClick={() => increment()}>Add To Cart</Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <div className="paginationRounded-wrapper">
            <Stack spacing={2}>
              <Pagination
                count={Math.ceil(apiData.products.length / itemsPerPage)}
                page={page}
                onChange={handleChangePage}
                variant="outlined"
                shape="rounded"
                className="pagination"
              />
            </Stack>
          </div>
        </div>
      )}
    </div>
  );
}

export default Apidata;
