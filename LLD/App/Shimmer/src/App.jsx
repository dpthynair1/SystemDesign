import "./App.css";
import { About } from "./components/About";
import { Team } from "./components/Team";
import Body from "./components/Body";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import { Login } from "./components/Login";
import { useState } from "react";
import Accordion from "./components/Accordion";
import MultipleOpenAccordion from "./components/MultipleOpenAccordion";
import Comments from "./components/comments/Comments";
import ImageSlider from "./components/image-slider/ImageSlider";
import ImageSlider2 from "./components/image-slider/imageSlider2";
import Pagination from "./components/Pagination/Pagination";
import PaginationFE from "./components/PaginationFE/PaginationFE";
import ImageSliderTransition from "./components/image-slider/imageSliderWithTransition";
import LiveChatUi from "./components/LiveChatUI/LiveChatUi";
import SearchUi from "./components/SearchBar/SearchUi";
import Contact from "./components/PhoneBook/Contact";
import Application from "./components/LetterTile/tile";

function App() {
  const [lang, setLang] = useState("en");
  return (
    <>
      <header className="flex justify-between   p-5 bg-gray-700 text-white text-center">
        <h1 className=" text-2xl font-bold">Hello World</h1>
        <nav className=" w-auto flex justify-between text-lg  text-white ">
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
          <a
            className="px-3 py-3"
            href="/Accordion"
          >
            {" "}
            Accordion
          </a>
          <a
            className="px-3 py-3"
            href="/multipleAccordion"
          >
            {" "}
            MultipleAccordion
          </a>
          <a
            className="px-3 py-3"
            href="/comments"
          >
            {" "}
            Comments
          </a>
          <a
            className="px-3 py-3"
            href="/image-slider"
          >
            {" "}
            Image-Slider
          </a>
          <a
            className="px-3 py-3"
            href="/image-slider2"
          >
            {" "}
            Image-Slider-2
          </a>
          <a
            className="px-3 py-3"
            href="/image-slider3"
          >
            {" "}
            Image-Slider-3
          </a>
          <a
            className="px-3 py-3"
            href="/pagination"
          >
            {" "}
            PaginationSS
          </a>
          <a
            className="px-3 py-3"
            href="/paginationfe"
          >
            {" "}
            PaginationFE
          </a>
          <a
            className="px-3 py-3"
            href="/livechatui"
          >
            {" "}
            LiveChat
          </a>
          <a
            className="px-3 py-3"
            href="/searchui"
          >
            {" "}
            Search
          </a>
           <a
            className="px-3 py-3"
            href="/phone-book"
          >
            {" "}
            PhoneBook
          </a>
          <a
            className="px-3 py-3"
            href="/letter-tile"
          >
            {" "}
            LetterTile
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
            path="/multipleAccordion"
            element={<MultipleOpenAccordion />}
          ></Route>
          <Route
            path="/Accordion"
            element={<Accordion />}
          ></Route>
          <Route
            path="/comments"
            element={<Comments />}
          ></Route>
          <Route
            path="/image-slider"
            element={<ImageSlider />}
          ></Route>
          <Route
            path="/image-slider2"
            element={<ImageSlider2 />}
          ></Route>
          <Route
            path="/image-slider3"
            element={<ImageSliderTransition />}
          ></Route>
          <Route
            path="/pagination"
            element={<Pagination />}
          ></Route>
          <Route
            path="/paginationfe"
            element={<PaginationFE />}
          ></Route>
          <Route
            path="/livechatui"
            element={<LiveChatUi />}
          ></Route>
          <Route
            path="/searchui"
            element={<SearchUi />}
          ></Route>
          <Route
            path="/phone-book"
            element={<Contact />}
          ></Route>

           <Route
            path="/letter-tile"
            element={<Application />}
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
