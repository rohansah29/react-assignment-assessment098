import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider } from "@chakra-ui/react";
import { reducer } from "./Components/Dashboard/reducer";
import { initialState } from "./Components/Dashboard/initialState";
import {BrowserRouter} from "react-router-dom"

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
	<BrowserRouter>
	<ChakraProvider>
		<App />
	</ChakraProvider>
	</BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
// DO NOT REMOVE THIS PEICE OF CODE
if (window.Cypress) {
	window.store = initialState;
	window.reducer = reducer;
}
