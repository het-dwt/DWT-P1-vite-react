import { useEffect, useState } from "react";
import axios from "axios";
import "./apiData.css";

function Apidata() {
  const [apiData, setApiData] = useState([]);
  useEffect(() => {
    axios.get("https://dummyjson.com/products").then((response) => {
      console.log(response.data);
      setApiData(response.data);
    });
  }, []);

  return (
    <div id="api-mainTable" className="nav-elem">
      <table id="apiTable" border={4}>
        <thead >
          <tr>
            <th style={{padding:"30px"}}>Sr:</th>
            <th style={{padding:"30px"}}>Product</th>
            <th style={{padding:"30px"}}>Product Name:</th>
            <th style={{padding:"30px"}}>Rating:</th>
            <th style={{padding:"30px"}}>Price:</th>
          </tr>
        </thead>
        <tbody>
          {apiData.products?.map((o) => (
            <tr key={o.id}>
              <td>{o.id}</td>
              <td>
                <img src={o.thumbnail} width="80" />
              </td>
              <td><b>{o.title}</b></td>
              <td>{o.rating}/5</td>
              <td>{o.price}/-</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Apidata;
