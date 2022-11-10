import CartCount from "./CartCount";
import style  from "./CartItems.module.css";

const CartItems = ({ products, deliteItem, addCount, deliteCount, changeInputValue }) => {
  return (
    <>
      <div className={style.cart_item_container}>
        <h4 className={style.cart_item_title}>{products.title}</h4>
        <CartCount key = {products.id} 
        count = {products.count} addCount={addCount} id={products.id} deliteCount={deliteCount} changeInputValue={changeInputValue}/>
        <p className={style.cart_item_price}>{(products.price * products.count).toFixed(2)} руб.</p>
        <button className={style.delite_cart_item_btn}  onClick={() => {deliteItem(products.id)}}></button>
      </div>
      <hr />
    </>
  );
};

export default CartItems;
