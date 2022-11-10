import CartCount from "./CartCount";
import style from "./CartItems.module.css";

const CartItems = ({
  products,
  deleteItem,
  addCount,
  deleteCount,
  changeInputValue,
}) => {
  return (
    <>
      <div className={style.cart_item_container}>
        <h4 className={style.cart_item_title}>{products.title}</h4>
        <CartCount
          key={products.id}
          count={products.count}
          addCount={addCount}
          id={products.id}
          deleteCount={deleteCount}
          changeInputValue={changeInputValue}
        />
        <p className={style.cart_item_price}>
          {(products.price * products.count).toFixed(2)} руб.
        </p>
        <button
          className={style.delete_cart_item_btn}
          onClick={() => {
            deleteItem(products.id);
          }}
        ></button>
      </div>
      <hr />
    </>
  );
};

export default CartItems;
