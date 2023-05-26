import styles from "../../UI/MealItem.module.css";
import MealItemForm from "./MealItemForm";
import { useContext } from "react";
import CartContext from "../../Store/CartContext";

const MealItem = ({ id, name, description, price, image }) => {
  const cartContext = useContext(CartContext);

  const addAmountToCartHandler = (amount) => {
    cartContext.addItem({
      id: id,
      name: name,
      amount: amount,
      price: price.toFixed(2),
    });
  };

  return (
    <li className={styles.meal}>
      <div>
        <h3>{name}</h3>
        <div className={styles.description}>{description}</div>
        <div className={styles.price}>{`€${price}`}</div>
      </div>
      <div>
        <img src={image} alt="Food item" className={styles.img} />
      </div>
      <div>
        <MealItemForm id={id} onAddAmountToCart={addAmountToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
