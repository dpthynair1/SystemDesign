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
      <header className="flex m-auto justify-between p-5 bg-gray-700 text-white text-center">
        <h1 className=" text-2xl font-bold">Hello World</h1>
        <nav className=" w-96 justify-between text-lg  text-white ">
          <a
            className="px-3 py-3"
            href="/"
          >
            Home
          </a>
          <a
            className="px-3 py-3"
            href="/about"
          >
            About
          </a>
          <a
            className="px-3 py-3"
            href="/team"
          >
            {" "}
            Team
          </a>
          <a
            className="px-3 py-3"
            href="/login"
          >
            {" "}
            Login
          </a>
        </nav>
        <select
          value={lang}
          onChange={(e) => setLang(e.target.value)}
          className="text-white bg-gray-700 "
        >
          <option value="en">English</option>
          <option
            className="text-white bg-gray-700"
            value="hi"
          >
            Hindi
          </option>
          <option
            className="text-white bg-gray-700"
            value="sp"
          >
            Spanish
          </option>
          <option
            className="text-white bg-gray-700"
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
