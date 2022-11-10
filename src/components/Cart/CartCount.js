import styles from "./CartCount.module.css";

const CartCount = ({ count, addCount, id, deliteCount, changeInputValue }) => {
  return (
    <div className={styles.count_container}>
      <button
        className={styles.count_button}
        onClick={() => {
          addCount(id);
        }}
      >
        +
      </button>
      <input
        type="number"
        min="1"
        className={styles.count_input}
        value={count}
        onChange={(event) => changeInputValue(id, +event.target.value)}
      />
      <button
        className={styles.count_button}
        onClick={() => {
          deliteCount(id);
        }}
      >
        -
      </button>
    </div>
  );
};

export default CartCount;
