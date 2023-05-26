import styles from "../../UI/Card.module.css";

const Card = ({ children }) => {
  return <div className={styles.card}>{children}</div>;
};

export default Card;
