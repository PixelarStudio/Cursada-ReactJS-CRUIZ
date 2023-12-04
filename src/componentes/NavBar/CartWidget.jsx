import { MdOutlineShoppingCart } from "react-icons/md";

const CartWidget = () => {
  return (
    <div className="CartWidget">
      <MdOutlineShoppingCart clasName="MdOutlineShoppingCart" size={40} />
      <p>1</p>
    </div>
  );
};

export default CartWidget;
