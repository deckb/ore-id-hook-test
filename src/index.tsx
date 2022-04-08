import './index.css';
import reportWebVitals from './reportWebVitals';
import React from "react";
import ReactDOM from "react-dom";
import { OreId } from "oreid-js";
import { OreidProvider, useActionAuth } from "oreid-react";
import { createOreIdWebWidget } from "oreid-webwidget";

function App() {
  const onAuth = useActionAuth();
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        onAuth({
          onError: console.error,
          onSuccess: console.log
        });
      }}
    >
      Login
    </button>
  );
}

const oreId = new OreId({
  appName: "ORE ID Sample App",
  appId: "demo_0097ed83e0a54e679ca46d082ee0e33a"
});

createOreIdWebWidget(oreId, window).then((oreIdWebWidget) => {
  ReactDOM.render(
      <OreidProvider oreId={oreId} webWidget={oreIdWebWidget}>
        <App />
      </OreidProvider>,
    document.getElementById("root")
  );
});


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
