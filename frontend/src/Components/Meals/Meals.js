import { Fragment } from "react";
import MealsSumary from "./MealsSumary";
import MealsAvailable from "./MealsAvailable";

const Meals = () => {
  return (
    <Fragment>
      <MealsSumary />
      <MealsAvailable />
    </Fragment>
  );
};

export default Meals;
