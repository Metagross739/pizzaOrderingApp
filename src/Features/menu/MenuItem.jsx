import { formatCurrency } from "../../Utils/helpers";
import Button from "../../UI/Button";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../cart/cartSlice";
import DeleteItem from "../cart/DeleteItem";
import { getCurrentQuantityById } from "../cart/cartSlice";
import UpdateItemQuantity from "../cart/UpdateItemQuantity";
function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const pizzQuantity = useSelector(getCurrentQuantityById(id));
  const dispatch = useDispatch();
  const isInsideCart = pizzQuantity > 0;
  function AddItem() {
    const newItem = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice * 1,
    };
    dispatch(addItem(newItem));
  }

  return (
    <li className="flex gap-4 py-2">
      <img
        className={`h-24 ${soldOut ? "opacity-70 grayscale" : ""}`}
        src={imageUrl}
        alt={name}
      />
      <div className="flex grow flex-col pt-0.5">
        <p className="font-medium">{name}</p>
        <p className="text-sm capitalize italic text-stone-500">
          {ingredients.join(", ")}
        </p>
        <div className="mt-auto flex items-center justify-between">
          {!soldOut ? (
            <p className="text-sm">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-sm font-medium uppercase text-stone-500">
              Sold out
            </p>
          )}
          {isInsideCart ? (
            <div className="flex items-center gap-3 sm:gap-8">
              <UpdateItemQuantity pizzaId={id} currentQuantity={pizzQuantity} />
              <DeleteItem pizzaId={id} type="small" />
            </div>
          ) : (
            ""
          )}

          {!soldOut && !isInsideCart ? (
            <Button onClick={AddItem} type="small">
              Add to Cart
            </Button>
          ) : (
            ""
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
