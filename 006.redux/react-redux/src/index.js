import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// 실제 deprecated 가 아닌 Redux Toolkit 을 권장하기 위함
import { createStore } from "redux";
import rootReducer from "./modules";
// react 컴포넌트에서 store 사용 시
// 최상위 컴포넌트(App)를 Provider 컴포넌트로 감싸주어야 한다.
import { Provider } from "react-redux";
import { devToolsEnhancer } from "redux-devtools-extension";

const store = createStore(rootReducer, devToolsEnhancer());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
