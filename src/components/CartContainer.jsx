import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import { toggleModal } from "../redux/features/modal/modalSlice";

const CartContainer = () => {
  const dispatch = useDispatch();
  const { cartItems, amount, total } = useSelector((store) => store.cart);



  if (amount < 1)
    return (
      <section className="cart">
        <header>
          <h2>your bag</h2>
          <h4 className="empty-cart">is currently empty.</h4>
        </header>
      </section>
    );
  return (
    <section className="cart">
      <header>
        <h2>your bag</h2>
      </header>
      <div>
        {cartItems.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
      </div>
      <footer>
        <div className="cart-total">
          <hr />
          <h4>
            total <span>${total.toFixed(4)}</span>
          </h4>
        </div>
        <button
          onClick={() => dispatch(toggleModal())}
          className="btn clear-btn"
        >
          clear cart
        </button>
      </footer>
    </section>
  );
};

export default CartContainer;
