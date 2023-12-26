import { MdOutlineShoppingCart } from "react-icons/md";
import './CartWidget.scss'

const CartWidget = () => {
  return (
    <div className="CartWidget">
      <MdOutlineShoppingCart className="MdOutlineShoppingCart" size={32} />
      <p>1</p>
    </div>
  );
};

export default CartWidget;
