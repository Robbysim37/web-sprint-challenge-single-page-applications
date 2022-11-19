import React from "react";
import { Route } from "react-router-dom";
import Header from "./components/Header";
import Homepage from "./components/Homepage";

const App = () => {
  return (
    <>
      <Header></Header>
      <Homepage></Homepage>
      <Route exact path="/" element={<Homepage/>}></Route>
    </>
  );
};
export default App;
