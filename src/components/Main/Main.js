import Article from "components/Article/Article";
import articlesData from "components/Article/articlesData";
import style from "./Main.module.css";

const Main = ({ appendToCart }) => {
  return (
    <main className={style.main_container}>
      {articlesData.map((currentElement) => {
        return (
          <Article
            key={currentElement.id}
            currentElement={currentElement}
            appendToCart={appendToCart}
          />
        );
      })}
    </main>
  );
};

export default Main;
