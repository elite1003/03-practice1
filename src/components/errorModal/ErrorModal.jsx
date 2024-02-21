import React from "react";

const ErrorModal = (props) => {
  return (
    <div>
      <h3>
        <pre>
          {`            Form is not valid 
            age should be from 0 to 200 
            name should contain letter and space only`}
        </pre>
      </h3>
      <br />
      <button type="button" onClick={() => props.formValidationHandler(true)}>
        Close
      </button>
    </div>
  );
};

export default ErrorModal;
