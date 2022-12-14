import Header from "components/Header/Header";
import Main from "components/Main";
import Cart from "components/Cart";
import { useState } from "react";
import { useEffect } from "react";
import style from "./App.module.css";

const App = () => {
  const [cart, setCart] = useState([]);

  const [total, setTotal] = useState(0);

  const [successfulOrder, setSuccessfulOrder] = useState(false);

  useEffect(() => {
    const total = cart.reduce((prev, curr) => {
      return +(prev + curr.count * curr.price).toFixed(2);
    }, 0);

    setTotal(total);
  }, [cart]);

  const deleteItem = (id) => {
    setCart((currentCart) => currentCart.filter((product) => id != product.id));
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSuccessfulOrder(false);
    }, 2000);
    return () => clearTimeout(timeout);
  });

  const clearData = () => {
    const newCart = [];
    setCart(newCart);
    setSuccessfulOrder(true);
  };

  const addCount = (id) => {
    const newCart = cart.map((product) => {
      if (product.id === id) {
        return { ...product, count: ++product.count };
      }
      return product;
    });
    setCart(newCart);
  };

  const appendToCart = (currentEl) => {
    const isElementInCart = cart.find((item) => item.id === currentEl.id);
    if (isElementInCart) {
      addCount(currentEl.id);
    } else {
      setCart([...cart, { ...currentEl }]);
    }
  };

  const deleteCount = (id) => {
    const newCart = cart.map((product) => {
      if (product.id === id) {
        if (product.count > 1) {
          return { ...product, count: --product.count };
        }

        if (product.count === 1) {
          deleteItem(id);
        }
      }
      return product;
    });
    setCart(newCart);
  };

  const changeInputValue = (id, value) => {
    setCart((currentCart) => {
      return currentCart.map((product) => {
        if (product.id === id) {
          product.count = value;
        }
        return product;
      });
    });
  };

  return (
    <div className={style.app_container}>
      <Header />
      <Main appendToCart={appendToCart} />
      <div>
        <Cart
          cart={cart}
          total={total}
          addCount={addCount}
          changeInputValue={changeInputValue}
          deleteCount={deleteCount}
          deleteItem={deleteItem}
          clearData={clearData}
        />
        {successfulOrder && (
          <p className={style.successful_order}>?????????????? ???? ??????????!</p>
        )}
      </div>
    </div>
  );
};

export default App;
