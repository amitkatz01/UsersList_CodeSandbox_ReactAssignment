import "./styles.css";
import AddUser from "./Components/AddUser/AddUser.js";
import UsersList from "./Components/UsersList/UsersList";
import { useState } from "react";
import ErrorMessage from "./Components/ErrorMessage/ErrorMessage.js";

export default function App() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(false);
  function renderList(userNameData, ageData) {
    //dataFromChild =>object with username & age propretirs
    if (userNameData.trim() === 0 || ageData.trim() === 0) {
      //if username or age were left empty
      setError(true);
      return;
    }
    if (+ageData < 1) {
      //if age is 0 or below
      setError(true);
      return;
    }
    setUsers((prevUsers) => {
      return [...prevUsers, { userName: userNameData, age: ageData }];
    });
  }
  const onDismissError = () => {
    setError(false);
  };
  return (
    <div className="App">
      <div className="centered">
        <AddUser onAddUser={renderList} />
      </div>
      <div className="centered">
        <UsersList users={users} />
      </div>
      <div className="centeredError">
        {error && <ErrorMessage OnDismissError={onDismissError} />}{" "}
      </div>
    </div>
  );
}
