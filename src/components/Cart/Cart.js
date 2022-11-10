import CartItems from "components/Cart/CartItems";
import styles from "./Cart.module.css";

const Cart = ({
  cart,
  total,
  deleteItem,
  addCount,
  deleteCount,
  changeInputValue,
  clearData,
}) => {
  return (
    <div className={styles.cart_container}>
      <h2 className={styles.cart_title}>Cart</h2>
      <div className={styles.cart_body}>
        {cart.map((item) => {
          return (
            <CartItems
              key={item.id}
              products={item}
              deleteItem={deleteItem}
              addCount={addCount}
              deleteCount={deleteCount}
              changeInputValue={changeInputValue}
            />
          );
        })}
      </div>
      <div className={styles.cart_footer}>TOTAL: {total} руб.</div>
      <button
        className={styles.checkout}
        disabled={!cart.length}
        onClick={clearData}
      >
        CHECKOUT
      </button>
    </div>
  );
};

export default Cart;
