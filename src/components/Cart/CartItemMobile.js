
import style  from "./CartItemsMobole.module.css";

const CartItemsMobole = ({ products, deliteItem }) => {
  return (
    <>
      <div className={style.cart_item_container}>
        <h4 className={style.cart_item_title}>{products.title}</h4>
        <p>{products.count}*</p>
        <p className={style.cart_item_price}>{(products.price * products.count).toFixed(2)} руб.</p>
        <button className={style.delite_cart_item_btn}  onClick={() => {deliteItem(products.id)}}></button>
      </div>
      <hr />
    </>
  );
};

export default CartItemsMobole;
