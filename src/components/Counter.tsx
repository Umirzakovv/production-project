import classes from "./Counter.module.scss"

export const Counter = () => {
  console.log(classes);

  return <div className={classes.btn}>Counter</div>;
};
