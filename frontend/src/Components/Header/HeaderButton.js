import CartIcon from "./CartIcon";
import styles from "../../UI/HeaderButton.module.css";
import { useContext, useEffect, useState } from "react";
import CartContext from "../../Store/CartContext";

const HeaderButton = ({ onShowCart }) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const { items } = useContext(CartContext);

  const numberOfCartItem = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const btnClasses = `${styles.button} ${btnIsHighlighted ? styles.bump : ""}`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    } else {
      setBtnIsHighlighted(true);

      const timer = setTimeout(() => {
        setBtnIsHighlighted(false);
      }, 300);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [items]);

  return (
    <button className={btnClasses} onClick={onShowCart}>
      <span className={styles["cart-icon"]}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{numberOfCartItem}</span>
    </button>
  );
};

export default HeaderButton;
