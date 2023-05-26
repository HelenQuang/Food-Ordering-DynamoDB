import styles from "../../UI/Cart.module.css";
import Modal from "./Modal";
import React, { useContext, useState } from "react";
import CartContext from "../../Store/CartContext";
import CartItem from "./CartItem";
import Checkout from "./Checkout";

const Cart = ({ onHideCart }) => {
  const cartCtx = useContext(CartContext);
  const totalAmount = `€${cartCtx.totalAmount}`;
  const hasItems = cartCtx.items.length > 0;
  const [isCheckout, setIsCheckout] = useState(false);
  const [isConfirm, setIsConfirm] = useState(false);
  const [error, setError] = useState(null);

  const addItemHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const removeItemHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const checkoutHandler = () => {
    setIsCheckout(true);
  };

  const submitOrderHandler = async (userData) => {
    setIsConfirm(true);
    cartCtx.clearItem();

    try {
      const response = await fetch(
        "https://food-odering-project-default-rtdb.firebaseio.com/orders.json",
        {
          method: "POST",
          body: JSON.stringify({
            orderData: userData,
            orderDetails: cartCtx.items,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Something went wrong! Please try again!");
      }
    } catch (error) {
      setError("Something went wrong! Please try again!");
    }
  };

  const cartItem = (
    <ul className={styles["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          price={item.price}
          amount={item.amount}
          onRemove={removeItemHandler.bind(null, item.id)}
          onAdd={addItemHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  const cartModalContent = (
    <React.Fragment>
      {!hasItems && <h2>Your cart is empty</h2>}

      {!isCheckout && cartItem}

      {isCheckout && (
        <div className={styles.total}>
          <span>Total Amount:</span>
          <span>{totalAmount}</span>
        </div>
      )}

      {isCheckout && (
        <Checkout
          onHideCart={onHideCart}
          submitOrderHandler={submitOrderHandler}
        />
      )}

      {!isCheckout && (
        <div className={styles.actions}>
          <button className={styles["button--alt"]} onClick={onHideCart}>
            Close
          </button>

          {hasItems && (
            <button className={styles.button} onClick={checkoutHandler}>
              Order
            </button>
          )}
        </div>
      )}
    </React.Fragment>
  );

  return (
    <Modal onHideCart={onHideCart}>
      {!isConfirm && cartModalContent}

      {isConfirm && (
        <p className={styles.confirm}>
          Thank you for your order. Your order has been processed. Enjoy your
          meal!
        </p>
      )}

      {!isConfirm && error && <p>{error}</p>}
    </Modal>
  );
};

export default Cart;
