import React from "react";
import { Route } from "react-router-dom";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import Help from "./components/Help";
import Form from "./components/Form";

const App = () => {
  return (
    <>
      <Header></Header>
      <Route exact path="/" children={<Homepage/>}/>
      <Route path="/help" children={<Help/>}/>
      <Route path="/pizza" children={<Form/>}/>
    </>
  );
};
export default App;
