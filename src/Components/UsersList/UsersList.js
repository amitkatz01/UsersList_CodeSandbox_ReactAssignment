import { useState } from "react";
import classes from "./UsersList.module.css";
import Card from "../Card/Card.js";
function UsersList(props) {
  //props - array of objects that have username and age properties

  return (
    <Card>
      <div className={classes.users}>
        <h5>New users will be added here </h5>
        <ul>
          {props.users.map((user, index) => {
            return (
              <li key={index}>
                {user.userName} ({user.age} years old)
              </li>
            );
          })}
        </ul>
      </div>
    </Card>
  );
}

export default UsersList;
