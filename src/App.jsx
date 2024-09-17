import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
// import Header from "./components/header";
import Footer from "./components/footer";
import Header from "./components/aboutState/Header";
import ToDoBox from "./components/todoBox";

function App() {
  // const [count, setCount] = useState(0);

  let name = "fatma";
  let age = 21;
  console.log("app render olunur");

  return (
    <>
      <h5>App component</h5>
      {/* <Header name={name} age={age} />
      <Footer /> */}

      {/* <Header /> */}
      <ToDoBox />
    </>
  );
}

export default App;
