import { useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./Store/CartProvider";

function App() {
  const [cartIsShown, setCardIsShown] = useState(false);

  const showCartHandler = () => {
    setCardIsShown(true);
  };

  const hideCartHandler = () => {
    setCardIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onHideCart={hideCartHandler} />}

      <Header onShowCart={showCartHandler} />

      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
