import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AppFunc from "./AppFunc";
// import AppClass from "./AppClass";
// import PureComp from "./render/PureComp";
// import ShouldCompUpdate from "./render/ShouldCompUpdate";
// import Memo from "./render/Memo";

import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppFunc />
    {/* <AppClass /> */}
    {/* <PureComp /> */}
    {/* <ShouldCompUpdate /> */}
    {/* <Memo /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
