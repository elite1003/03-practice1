import React from "react";

const UserList = (props) => {
  return (
    <ul>
      {props.userList.map((user) => (
        <li key={user.id}>
          {user.username} {user.age}
        </li>
      ))}
    </ul>
  );
};

export default UserList;
