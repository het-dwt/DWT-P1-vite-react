//(1)....Bydefault_templete-code
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// (2)....using_fetch-api_in_react.
// import { useEffect } from "react";
// import { useState } from "react";

// function App() {
//   const [apiData, setApiState] = useState();
//   useEffect(() => {
//     fetch("https://dummyjson.com/products")
//       .then((response) => response.json())
//       .then((json) => console.log(json));
//   }, []);

//   return (
//     <div>
//       Different ways to fetch Data
//       {setApiState}
//     </div>
//   );
// }

// export default App;

//(3)....Using_Axios-Package.
// import { useEffect, useState } from "react";
// import axios from "axios";

// function App() {
//   const [apiData, setApiData] = useState([]);
//   useEffect(() => {
//     axios.get("https://dummyjson.com/products").then((response) => {
//       console.log(response.data);
//       setApiData(response.data);
//     });
//   }, []);

//   return (
//     <div>
//       <div>
//         <table border="1">
//           <thead>
//             <tr>
//               <th>Sr:</th>
//               <th>Product</th>
//               <th>Product Name:</th>
//               <th>Rating:</th>
//               <th>Price:</th>
//             </tr>
//           </thead>
//           <tbody>
//             {apiData.products?.map((o) => (
//               <tr key={o.id}>
//                 <td>{o.id}</td>
//                 <td>
//                   <img src={o.thumbnail} width="80" />
//                 </td>
//                 <td>{o.title}</td>
//                 <td>{o.rating}/5</td>
//                 <td>{o.price}/-</td>
//               </tr>
//             ))}
//           </tbody>

//         </table>
//       </div>
//     </div>
//   );
// }

// export default App;

//(3)....Using_Axios-Package.
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [apiData, setApiData] = useState([]);
  useEffect(() => {
    axios.get("https://dummyjson.com/products").then((response) => {
      setApiData(response.data);
    });
  }, []);

  return (
    <div>
      <div>
        {apiData.products?.map((o) => (
          <div className="Product" key={o.id}>
            <p className="Product-p">{o.id}</p>
            <div className="Product-img">
              <img src={o.thumbnail} width="80" />
            </div>
            <div className="Product-title">{o.title}</div>
            <div className="Product-rating">{o.rating}/5</div>
            <div className="Product-rating">{o.price}/-</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

// <div>{JSON.stringify(apiData.products)}</div>
// <div>Id: {apiData.products?.map((o) => o.id)}</div>
// <div>Title: {apiData.products?.map((o) => o.title)}</div>

//(4)Async & await.....
// import { useEffect } from "react";
// import { useState } fsrom "react";
// import axios from "axios";

// function App() {
//   const [apiData, setApiState] = {};
//   useEffect(() => {
//     //async
//     (async () => {
//       try {
//         //await
//         const response = await axios.get(
//           "https://dummyjson.com/products/category/smartphones"
//         );
//         console.log(response.data);
//         setApiState(response.data);
//       } catch (error) {
//         console.log(Error);
//       }
//     })();
//   });

//   return (
// 		<div>
// 			Different ways to fetch Data
//       {{apiData}}
// 		</div>
// 	);
// }
// export default App;
