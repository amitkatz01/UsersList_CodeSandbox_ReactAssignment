import { useState } from "react";
import classes from "./AddUser.module.css";
import Button from "../Button/Button.js";
import Card from "../Card/Card.js";

function AddUser(props) {
  const [userNameInput, setUserNameInput] = useState("");
  const [ageInput, setAgeInput] = useState("");
  //array of users that will be rendered to a ul using UsersList
  const inputChangeHandler = (inputId, newValue) => {
    if (inputId === "userName") {
      setUserNameInput(newValue);
    } else {
      setAgeInput(newValue);
      //console.log(newValue);
    }
  };
  const submitHandler = (event) => {
    event.preventDefault();
    setUserNameInput("");
    setAgeInput("");
    props.onAddUser(userNameInput, ageInput);
  };
  return (
    <Card>
      <form onSubmit={submitHandler}>
        <div className={classes.input}>
          <label htmlFor="userName">UserName</label>
          <input
            onChange={(event) =>
              inputChangeHandler("userName", event.target.value)
            }
            type="text"
            id="userName"
            value={userNameInput} // Bind the value to the state variable
          ></input>
        </div>
        <div className={classes.input}>
          <label htmlFor="age">Age (Years)</label>
          <input
            onChange={(event) => inputChangeHandler("age", event.target.value)}
            type="number"
            id="age"
            value={ageInput} // Bind the value to the state variable
          ></input>
        </div>
        <Button type="submit" text="Add User" />
      </form>
    </Card>
  );
}

export default AddUser;
