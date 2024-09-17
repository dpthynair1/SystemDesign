import "./App.css";
import { About } from "./components/About";
import { Team } from "./components/Team";
import Body from "./components/Body";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import { Login } from "./components/Login";
import { useState } from "react";

function App() {
  const [lang, setLang] = useState("en");
  return (
    <>
      <header className="flex text-2xl font-bold py-5  bg-gray-700 text-white text-center">
        Hello World
        <nav className="p-2 m-2 w-96 justify-evenly text-lg  text-white ">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/team"> Team</a>
          <a href="/login"> Login</a>
        </nav>
        <select
          value={lang}
          onChange={(e) => setLang(e.target.value)}
          className="text-black bg-white border h-11"
        >
          <option value="en">English</option>
          <option
            className="text-black bg-white"
            value="hi"
          >
            Hindi
          </option>
          <option
            className="text-black bg-white"
            value="sp"
          >
            Spanish
          </option>
          <option
            className="text-black bg-white"
            value="ru"
          >
            Russian
          </option>
        </select>
      </header>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Body />}
          ></Route>
          <Route
            path="/about"
            element={<About lang={lang} />}
          ></Route>

          <Route element={<ProtectedRoute />}>
            <Route
              path="/login"
              element={<Login />}
            ></Route>
            <Route
              path="/team"
              element={<Team />}
            ></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
