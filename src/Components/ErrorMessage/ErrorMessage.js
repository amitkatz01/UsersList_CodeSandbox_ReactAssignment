import React from "react";
import classes from "../ErrorMessage/ErrorMessage.module.css";
import Card from "../Card/Card.js";
import Button from "../Button/Button";
function ErrorMessage(props) {
  const handleDismissClick = () => {
    props.OnDismissError();
  };
  return (
    <div>
      <div className={classes.backdrop}></div>
      <div className={classes.modal}>
        <header className={classes.header}>
          <h2>Invalid Input</h2>
        </header>
        <div>
          <p className={classes.content}>
            You are required to enter a username and an age. <br /> Age should
            not be 0 or below.
          </p>
        </div>
        <footer className={classes.actions}>
          <Button text="Dismiss" onClick={handleDismissClick} />
        </footer>
      </div>
    </div>
  );
}
export default ErrorMessage;
