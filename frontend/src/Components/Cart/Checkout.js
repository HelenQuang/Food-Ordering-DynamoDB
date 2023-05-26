import styles from "../../UI/Checkout.module.css";
import { useRef } from "react";

const Checkout = ({ onHideCart, submitOrderHandler }) => {
  const nameInputRef = useRef();
  const addressInputRef = useRef();
  const phoneInputRef = useRef();
  const noteInputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredPhone = phoneInputRef.current.value;
    const enteredNote = noteInputRef.current.value;

    submitOrderHandler({
      name: enteredName,
      address: enteredAddress,
      phone: enteredPhone,
      note: enteredNote,
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={styles.control}>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required ref={nameInputRef} />
      </div>

      <div className={styles.control}>
        <label htmlFor="address">Your shipping address</label>
        <input type="text" id="street" required ref={addressInputRef} />
      </div>

      <div className={styles.control}>
        <label htmlFor="phone">Your phone number</label>
        <input type="text" id="phone" required ref={phoneInputRef} />
      </div>

      <div className={styles.control}>
        <label htmlFor="note">Note for the courier</label>
        <input type="text" id="note" ref={noteInputRef} />
      </div>

      <div className={styles.actions}>
        <button
          className={styles["button--alt"]}
          onClick={onHideCart}
          type="button"
        >
          Cancel
        </button>

        <button className={styles.button}>Confirm your order</button>
      </div>
    </form>
  );
};

export default Checkout;
