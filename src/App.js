import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import Register from "./components/Register";
import List from "./components/Clients";
import FormClient from "./components/FormClient";

import store from "./store";
import { Provider } from "react-redux";

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/registration" element={<Register />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/list" element={<List />} />
          <Route exact path="/createclient" element={<FormClient />} />
        </Routes>
      </Provider>
    </Router>
  );
}

export default App;
