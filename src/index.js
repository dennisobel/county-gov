import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./state";
import { Provider } from "react-redux";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { globalApi } from "./state/api";
import { AuthContextProvider } from "./context/authContext";

const store = configureStore({
  reducer: {
    global: rootReducer,
    [globalApi.reducerPath]: globalApi.reducer,
  },
  middleware: (getDefault) => getDefault().concat(globalApi.middleware),
});
setupListeners(store.dispatch);

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    {/* <BrowserRouter> */}
    <AuthContextProvider>
    <Provider store={store}>
      <App />
    </Provider>
    </AuthContextProvider>
    {/* </BrowserRouter> */}
  </React.StrictMode>
);
