import { Fragment } from "react";
import styles from "../../UI/Header.module.css";
import Logo from "../../Assets/omnifood-logo.png";
import FoodTable from "../../Assets/Food Table.jpg";
import HeaderButton from "./HeaderButton";

const Header = ({ onShowCart }) => {
  return (
    <Fragment>
      <header className={styles.header}>
        <img src={Logo} alt="OmniFood Logo" className={styles.logo} />
        <HeaderButton onShowCart={onShowCart} />
      </header>

      <div className={styles["main-image"]}>
        <div className={styles.layer}></div>
        <img src={FoodTable} alt="Asian Food Table" />
      </div>
    </Fragment>
  );
};

export default Header;
