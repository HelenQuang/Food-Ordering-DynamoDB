import styles from "../../UI/MealItemForm.module.css";
import Input from "./Input";
import { useRef, useState } from "react";

const MealItemForm = ({ id, onAddAmountToCart }) => {
  const amountInputRef = useRef();
  const [amountIsValid, setAmountIsValid] = useState(true);

  const submitHandler = (e) => {
    e.preventDefault();

    const enteredAmount = +amountInputRef.current.value;

    if (
      enteredAmount < 1 ||
      enteredAmount > 5 ||
      amountInputRef.current.value.trim().length === 0
    ) {
      setAmountIsValid(false);
      return;
    }

    onAddAmountToCart(enteredAmount);
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount:"
        input={{
          id: "amount_" + id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />

      <button>+ Add</button>

      {!amountIsValid && <p>Please enter a valid amount of meals (1-5)</p>}
    </form>
  );
};

export default MealItemForm;
