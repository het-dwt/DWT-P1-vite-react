import { useEffect, useState } from "react";
import axios from "axios";
import "../shop/shop.css";
import { Grid } from "@mui/material";

function Shop() {
  const [apiData, setApiData] = useState([]);
  useEffect(() => {
    axios.get("https://dummyjson.com/products").then((response) => {
      setApiData(response.data);
    });
  }, []);
  return (
    <Grid container spacing={2}>
      {apiData.products?.map((obj) => (
        <Grid
          xs={5}
          sm={3}
          md={2}
          lg={2}
          xl={2}
          className="Product"
          key={obj.id}
        >
          <div>
            {/*<p className="Product-p">{obj.id}</p>*/}
            <div className="Product-img">
              <img src={obj.thumbnail} width="80px" height="80px" />
            </div>
            <div className="Product-title">{obj.title}</div>
            <div className="Product-rating">{obj.rating}/5</div>
            <div className="Product-rating">{obj.price}/- </div>
          </div>
        </Grid>
      ))}
    </Grid>
  );
}

export default Shop;
