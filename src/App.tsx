import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.scss";
import { Provider } from "react-redux";
import Store from "./redux/store";
import Login from "./Container/Auth/Login";

function App() {
  return (
    <div className="App">
      <Provider store={Store}>
        <Login />
      </Provider>
    </div>
  );
}

export default App;
