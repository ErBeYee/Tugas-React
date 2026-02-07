
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import ErrorPage from "./components/Error/ErrorPage";
import Abot from "./components/Abot/Abot";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<ErrorPage />}/>
        <Route path="/about" element={<Abot />} />
        <Route path="*" element={<ErrorPage />} />

      </Routes>
    </>
  );
}

export default App;
