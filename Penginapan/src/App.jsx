// import Header from "./components/Header/Header";
// import Footer from "./components/Footer/Footer";
// import List from "./components/List-Kamar/List";
// import Logo1 from "./components/IMG/_ (3).jpeg";
// import Logo2 from "./components/IMG/95261389e5374350a146c247279c34b7.jpg";
// import Logo3 from "./components/IMG/Bamboo Beach Hotel.jpeg";
// import Logo4 from "./components/IMG/Budget Hotel Interior Design ideas 07.jpeg";
// import Cari from "./components/search/search";
// import data from "./data.json";
// import Article from "./components/Article/Article";
// import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Article from "./components/Article/Article";
import ErrorPage from "./components/Error/ErrorPage";
import Abot from "./components/Abot/Abot";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Article />} />
        <Route path="/about" element={<Abot />} />
        <Route path="*" element={<ErrorPage />} />

      </Routes>
    </>
  );
}

export default App;
