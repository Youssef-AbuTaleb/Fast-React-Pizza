import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import { deleteItem, itemExistInTheCart } from "./cartSlice";

function DeleteItem({ itemId }) {
  const dispatch = useDispatch();
  const itemExistInCart = useSelector(itemExistInTheCart(itemId));

  if (!itemExistInCart) return null;
  return (
    <Button type="small" onClick={() => dispatch(deleteItem(itemId))}>
      Delete
    </Button>
  );
}

export default DeleteItem;
