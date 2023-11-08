import { useState } from "react";
import "./App.css";
import Filter_Menu_Btn from "./components/Filter_Menu_Btn";
import Food_items from "./components/Food_items";

function App() {
  return (
    <>
      <div className="container-fluid">
        <div className="row justify-content-center  text-center ">
          <div className="col-lg-12 py-4 bg-primary">
            <h1 className="text-white">Street Food Filter Web App</h1>
          </div>
          <Food_items />
        </div>
      </div>
      <div className="col-lg-12 py-2 bg-primary text-center">
        <h4 className="text-white mt-2">
          © {new Date().getFullYear()} Food Filter Web App, Develop by Akshay
          Dhivare.
        </h4>
      </div>
    </>
  );
}

export default App;
