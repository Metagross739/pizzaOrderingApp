import React from "react";
import Button from "../../UI/Button";
import { decreaseItem, increaseItem } from "./cartSlice";
import { useDispatch } from "react-redux";

export default function UpdateItemQuantity({ pizzaId, currentQuantity }) {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center gap-2 md:gap-3">
      <Button type={"round"} onClick={() => dispatch(decreaseItem(pizzaId))}>
        -
      </Button>
      <p className="text-sm font-medium">{currentQuantity}</p>
      <Button type={"round"} onClick={() => dispatch(increaseItem(pizzaId))}>
        +
      </Button>
    </div>
  );
}
