import React from "react";
import { useDispatch } from "react-redux";
import { deleteItem } from "./cartSlice";
import Button from "../../UI/Button";
function DeleteItem({ pizzaId }) {
  const dispatch = useDispatch();

  return (
    <Button onClick={() => dispatch(deleteItem(pizzaId))} type="small">
      Delete
    </Button>
  );
}

export default DeleteItem;
