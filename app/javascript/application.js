// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Greetings from "./components/Greetings";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/greetings" element={<Greetings />} />
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root'),
);