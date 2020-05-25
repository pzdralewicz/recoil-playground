import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { RecoilRoot } from "recoil";
import { Logo, ParticlesBackground } from "@pzdralewicz/components";
import "@pzdralewicz/components/dist/index.css";

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <ParticlesBackground />
      <Logo />
      <App />
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
