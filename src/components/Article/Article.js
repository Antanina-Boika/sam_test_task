import style from "./Articles.module.css";

const Article = ({ currentElement, appendToCart }) => {
  return (
    <div className={style.article_container}>
      <img
        src={"./images/" + currentElement.img}
        alt={"./images/" + currentElement.img}
        className={style.article_image}
      />
      <h3 className={style.article_title}>{currentElement.title}</h3>
      <p className={style.article_description}>{currentElement.description}</p>
      <div className={style.articte_price_div}>
        <p className={style.article_price}>{currentElement.price} руб.</p>
        <button
          className={style.add_to_cart_btn}
          onClick={() => appendToCart(currentElement)}
        >
          buy
        </button>
      </div>
    </div>
  );
};

export default Article;
