import React, { useState } from "react";
import Navbar from "./Navbar";

function Header() {
  const [name, setName] = useState("Mirane");
  console.log(name);
  console.log("header render olunur");
  return (
    <div>
      <h2> Header</h2>
      <button
        onClick={() => {
          setName("fatma");
          //     console.log(name);
        }}
      >
        Change name
      </button>
      <Navbar />
    </div>
  );
}

export default Header;
