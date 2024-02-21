import "./App.css";
import React, { useState } from "react";
import Form from "./components/form/Form.jsx";
import UserList from "./components/userList/UserList.jsx";
import ErrorModal from "./components/errorModal/ErrorModal.jsx";
const App = () => {
  const [userName, setUserName] = useState("");
  const [age, setAge] = useState("");
  const [userList, setUserList] = useState([]);
  const [isFormValid, setIsFormValid] = useState(true);
  const formValidationHandler = (isValid) => {
    setIsFormValid(isValid);
  };
  const ageInputChangeHandler = (event) => {
    setAge(event.target.value);
  };
  const usernameInputChangeHandler = (event) => {
    setUserName(event.target.value);
  };

  const formSubmitHandler = () => {
    const userDetail = {
      id: Math.random().toString(),
      username: userName,
      age: age,
    };
    setUserList((prevState) => {
      const updatedList = [...prevState];
      updatedList.unshift(userDetail);
      return updatedList;
    });
    setUserName("");
    setAge("");
  };
  if (isFormValid) {
    return (
      <div>
        <div>
          <Form
            formValidationHandler={formValidationHandler}
            ageInputChangeHandler={ageInputChangeHandler}
            age={age}
            usernameInputChangeHandler={usernameInputChangeHandler}
            username={userName}
            formSubmitHandler={formSubmitHandler}
          />
        </div>
        <br />
        <UserList userList={userList} />
      </div>
    );
  } else {
    return <ErrorModal formValidationHandler={formValidationHandler} />;
  }
};

export default App;
