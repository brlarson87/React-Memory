import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store";

import Stage from "./components/Stage";
import SideBar from "./components/SideBar";

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <Stage />
        <SideBar />
      </div>
    </Provider>
  );
}

export default App;
