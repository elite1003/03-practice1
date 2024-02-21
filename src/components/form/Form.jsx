import React from "react";

const Form = (props) => {
  const submitHandler = (event) => {
    event.preventDefault();
    if (isFormValid()) {
      props.formValidationHandler(true);
      props.formSubmitHandler();
    } else {
      props.formValidationHandler(false);
    }
  };
  const isFormValid = () => {
    const isValid = isAgeValid() && onlyLettersAndSpaces();
    return isValid;
  };
  const onlyLettersAndSpaces = () => {
    const isOnlyLetterAndSpace = /^[A-Za-z\s]*$/.test(props.username);
    return isOnlyLetterAndSpace;
  };
  const isAgeValid = () => {
    const age = Number(props.age);
    if (age > 0 && age <= 200) return true;
    else return false;
  };
  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="username">User Name</label>
      <br />
      <input
        type="text"
        id="username"
        value={props.username}
        onChange={props.usernameInputChangeHandler}
      />
      <br />
      <label htmlFor="age">{`Age (Years)`}</label>
      <br />
      <input
        type="number"
        id="age"
        value={props.age}
        onChange={props.ageInputChangeHandler}
      />
      <br />
      <button type="submit">Add User</button>
    </form>
  );
};

export default Form;
