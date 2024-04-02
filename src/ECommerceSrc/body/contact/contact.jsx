// import { useState } from "react";

import TodoList from "../../../utilities/todo";

// import Todo from "../../../utilities/todo2";

export default function Contact() {
  // const [Input, setInput] = useState({
  //   quantity: 0,
  //   price: 0,
  //   Totalprice: 0,
  // });

  // function handleQuantityChange(e) {
  //   setInput({
  //     ...Input,
  //     quantity: e.target.value,
  //   });
  // }

  // function handlePriceChange(e) {
  //   setInput({
  //     ...Input,
  //     price: e.target.value,
  //   });
  // }

  return (
    <div>
      {/* <p>
        Quantity
        <input value={Input.quantity} onChange={handleQuantityChange} />
      </p>
      <p>
        Price
        <input value={Input.price} onChange={handlePriceChange} />
      </p>
      <p>Totalprice :{Input.quantity * Input.price}</p> */}
      {/* <Todo /> */}
      <TodoList />
    </div>
  );
}
