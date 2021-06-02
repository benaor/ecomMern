import React from "react";
import { useSelector } from "react-redux";
import CartFooter from "./CartFooter";
import { Table } from "../components";
import Row from "./Row";

function Cart() {
  const items = useSelector((state) => state.items);

  return (
    <Table
      items={items}
      heading="My Shopping Cart"
      subheading="items in your cart"
    >
      <tbody>
        {!items.length && <div>No items in the cart </div>}
        {items.map((item) => (
          <Row {...item} />
        ))}
      </tbody>
      <CartFooter />
    </Table>
  );
}
export default Cart;
