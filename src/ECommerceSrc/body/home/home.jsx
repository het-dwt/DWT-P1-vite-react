import {
  Autocomplete,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import DeleteIcon from "@mui/icons-material/Delete";
// import AddIcon from '@mui/icons-material/Add';
import "./home.css";
import { useState } from "react";

export default function Home() {
  const products = [
    { label: "Product 1", id: 1 },
    { label: "Product 2", id: 2 },
    { label: "Product 3", id: 3 },
    { label: "Product 4", id: 4 },
    { label: "Product 5", id: 5 },
  ];

  const [input, setInput] = useState({
    products: null,
    quantity: null,
    price: null,
    Totalprice: null,
  });

  function handleProductChange(e) {
    setInput({
      ...input,
      product: e.target.value,
    });
  }

  function handleQuantityChange(e) {
    setInput({
      ...input,
      quantity: e.target.value,
    });
  }

  function handlePriceChange(e) {
    setInput({
      ...input,
      price: e.target.value,
    });
  }

  function handleClick() {
    console.log("removed");
  }

  return (
    <div className="home-wrapper">
      <div className="home-parent-div">
        <div className="home-content-div">
          <div style={{ display: "flex" }}>
            <h3>Add Product</h3>
          </div>
        </div>
        <div className="home-content-div">
          <TableContainer>
            <Table aria-label="simple table" id="Table">
              <TableHead>
                <TableRow id="Table-head">
                  <TableCell align="center" className="table">
                    <div className="table-head-cell">No</div>
                  </TableCell>
                  <TableCell align="center" className="table">
                    <div className="table-head-cell">Select Product</div>
                  </TableCell>
                  <TableCell align="center" className="table">
                    <div className="table-head-cell">Quantity</div>
                  </TableCell>
                  <TableCell align="center" className="table">
                    <div className="table-head-cell">Pricing</div>
                  </TableCell>
                  <TableCell align="center" className="table">
                    <div className="table-head-cell">Total Amount</div>
                  </TableCell>
                  <TableCell align="center" className="table">
                    <div className="table-head-cell">Action</div>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell className="table">
                    <div className="table-cell-data">1.</div>
                  </TableCell>
                  <TableCell className="table">
                    <div className="table-cell-data">
                      <Autocomplete
                        id="combo-box-demo"
                        options={products}
                        sx={{ width: 300 }}
                        onChange={handleProductChange}
                        renderInput={(params) => (
                          <TextField
                            variant="standard"
                            {...params}
                            label="Type or Click to Select an Item."
                          />
                        )}
                      />
                    </div>
                  </TableCell>
                  <TableCell className="table">
                    <div className="table-cell-data">
                      <div className="table-cell-data">
                        <TextField
                          label="Enter Quantity"
                          value={input.quantity}
                          onChange={handleQuantityChange}
                          variant="standard"
                        ></TextField>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="table">
                    <div className="table-cell-data">
                      <TextField
                        label="Enter Price"
                        value={input.price}
                        onChange={handlePriceChange}
                        variant="standard"
                      ></TextField>
                    </div>
                  </TableCell>
                  <TableCell className="table">
                    <div className="table-cell-data" id="pricing-cell-parent">
                      <div id="pricing-cell">
                        {input.quantity * input.price} AED
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="table">
                    <div className="table-cell-data" id="icon-parent">
                      <DeleteIcon
                        sx={{ color: grey[500] }}
                        onClick={handleClick}
                      />
                    </div>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
            <div className="add-more-btn">
              <Button size="small">
                <u>Add More</u>
              </Button>
            </div>
          </TableContainer>
        </div>
      </div>
    </div>
  );
}
