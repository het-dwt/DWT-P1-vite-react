import {
  Alert,
  Button,
  Paper,
  Snackbar,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import "./addProducts.css";
import { useEffect, useState } from "react";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";

export default function ProductList() {
  const [products, setProducts] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      return JSON.parse(savedTodos);
    } else {
      return [];
    }
  });
  const [quantities, setquantities] = useState(() => {
    const savedProducts = localStorage.getItem("products");
    if (savedProducts) {
      return JSON.parse(savedProducts);
    } else {
      return [];
    }
  });
  const [prices, setPrices] = useState(() => {
    const savedPrices = localStorage.getItem("Prices");
    if (savedPrices) {
      return JSON.parse(savedPrices);
    } else {
      return [];
    }
  });
  const [product, setProduct] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");

  const [openAddAlert, setOpenAddAlert] = useState(false);
  const [openDeleteAlert, setOpenDeleteAlert] = useState(false);

  useEffect(() => {
    localStorage.setItem(products, JSON.stringify(products));
  }, [products]);

  useEffect(() => {
    localStorage.setItem(quantities, JSON.stringify(quantities));
  }, [quantities]);

  useEffect(() => {
    localStorage.setItem(prices, JSON.stringify(prices));
  }, [prices]);

  function handleProductInputChange(e) {
    setProduct(e.target.value);
  }
  function handleQuantityInputChange(e) {
    setQuantity(e.target.value);
  }
  function handlePriceInputChange(e) {
    setPrice(e.target.value);
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    {
      if (product !== "") {
        setProducts([
          ...products,
          {
            id: products.length + 1,
            text: product.trim(),
          },
        ]);
      }
      setProduct("");
    }
    {
      if (quantity !== "") {
        setquantities([
          ...quantities,
          {
            id: quantities.length + 1,
            text: quantity.trim(),
          },
        ]);
      }
      setQuantity("");
    }
    {
      if (price !== "") {
        setPrices([
          ...prices,
          {
            id: prices.length + 1,
            text: price.trim(),
          },
        ]);
      }
      setPrice("");
    }
  }

  const handleAddClick = () => {
    setOpenAddAlert(product !== "" ? true : false);
    setOpenAddAlert(quantity !== "" ? true : false);
    setOpenAddAlert(price !== "" ? true : false);
  };

  const handleAddClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenAddAlert(false);
  };

  const handleDeleteClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenDeleteAlert(false);
  };

  function handleDeleteClick(id) {
    const removeItem = products.filter((product) => {
      return product.id !== id;
    });
    if (removeItem) {
      setProducts(removeItem);
      setPrices(removeItem);
      setquantities(removeItem);
      setOpenDeleteAlert(true);
    }
  }

  return (
    <div className="product-wrapper">
      <div className="product-input-parent">
        <div className="product-input">
          <h3>Add Product List</h3>
          <Paper square variant="outlined">
            <form onSubmit={handleFormSubmit} className="form">
              <Table aria-label="simple table" id="Table">
                <TableRow>
                  <TableCell>
                    <div className="product-input-elem">
                      <TextField
                        type="text"
                        value={product}
                        size="small"
                        label={"Add Product Here"}
                        variant="standard"
                        id="standard-size-small"
                        onChange={handleProductInputChange}
                      />
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="product-input-elem">
                      <TextField
                        type="text"
                        value={quantity}
                        size="small"
                        label={"Add Quantity Here"}
                        variant="standard"
                        id="standard-size-small"
                        onChange={handleQuantityInputChange}
                      />
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="product-input-elem">
                      <TextField
                        type="text"
                        value={price}
                        size="small"
                        label={"Add Price Here"}
                        variant="standard"
                        id="standard-size-small"
                        onChange={handlePriceInputChange}
                      />
                    </div>
                  </TableCell>
                  <TableCell>
                    <div
                      className="product-input-elem"
                      style={{ flexDirection: "row" }}
                    >
                      <Button
                        type="submit"
                        variant="contained"
                        onClick={handleAddClick}
                      >
                        Add
                      </Button>
                      <Snackbar
                        open={openAddAlert}
                        autoHideDuration={1000}
                        onClose={handleAddClose}
                      >
                        <Alert
                          onClose={handleAddClose}
                          severity="success"
                          variant="filled"
                          sx={{ width: "100%" }}
                        >
                          Product Added Sucessfully.
                        </Alert>
                      </Snackbar>
                      <Button
                        onClick={() =>
                          setProduct(false) &&
                          setQuantity(false) &&
                          setPrices(false)
                        }
                        variant="contained"
                      >
                        Cancel
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              </Table>
            </form>
          </Paper>
        </div>
      </div>
      <div className="product-list-parent">
        <Paper square variant="outlined">
          <Table aria-label="simple table" id="Table">
            <div className="product-list">
              <TableHead>
                <TableRow>
                  <TableCell align="left">Product: </TableCell>
                  <TableCell align="left">Quantity: </TableCell>
                  <TableCell align="left"> Price: </TableCell>
                  <TableCell align="left">Action: </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <div className="product-list">
                      {products.map((product) => (
                        <TableCell
                          key={product.id}
                          className="product-listitem"
                        >
                          {product.text}
                        </TableCell>
                      ))}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="product-list">
                      {quantities.map((quantity) => (
                        <TableCell
                          key={quantity.id}
                          className="product-listitem"
                        >
                          {quantity.text}
                        </TableCell>
                      ))}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="product-list">
                      {prices.map((price) => (
                        <TableCell key={price.id} className="product-listitem">
                          {price.text}
                        </TableCell>
                      ))}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="product-list">
                      {prices.map((price) => (
                        <TableCell key={price.id} className="product-listitem">
                          <ClearRoundedIcon
                            fontSize="small"
                            onClick={() =>
                              handleDeleteClick(
                                price.id,
                                product.id,
                                quantity.id
                              )
                            }
                          />
                          <Snackbar
                            open={openDeleteAlert}
                            autoHideDuration={1000}
                            onClose={handleDeleteClose}
                          >
                            <Alert
                              onClose={handleDeleteClose}
                              severity="error"
                              variant="filled"
                              sx={{ width: "100%" }}
                            >
                              item Deleted Sucessfully !
                            </Alert>
                          </Snackbar>
                        </TableCell>
                      ))}
                    </div>
                  </TableCell>
                </TableRow>
              </TableBody>
            </div>
          </Table>
        </Paper>
      </div>
    </div>
  );
}
