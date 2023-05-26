import styles from "../../UI/MealsSummary.module.css";

const MealsSumary = () => {
  return (
    <section className={styles.summary}>
      <h2>Delicious Asian Food, Delivered Right To Your Door</h2>
      <p>
        Choose your favorite meal from our broad selection of available meals
        and enjoy delicious lunch or dinner at home.
      </p>
      <p>
        All of our meals are cooked with high-quality ingredients, just-in-time
        and of course, by experienced chefs.
      </p>
    </section>
  );
};

export default MealsSumary;
