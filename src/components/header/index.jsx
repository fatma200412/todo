import React from "react";
import UserSurname from "../UserSurname";

function Header({ name, age }) {
  //   console.log(name);

  console.log("header render olunur");

  return (
    <div>
      <h2>Header</h2>
      <p>{name}</p>

      <UserSurname />
    </div>
  );
}

export default Header;
