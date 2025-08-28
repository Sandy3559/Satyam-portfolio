import { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import Portfolio from "./components/Portfolio";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Portfolio />}>
            <Route index element={<Portfolio />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;