import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { reducer, initialState } from "./reducer/reducer";
import App from "./App";
import { StateProvider } from "./StateProvider";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <StateProvider reducer={reducer} initialState={initialState}>
      <App />
    </StateProvider>
  </StrictMode>,
  rootElement
);
