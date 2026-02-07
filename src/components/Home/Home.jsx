import { useState } from "react";
import "./home.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Article from "../Article/Article";
import data from "../../data.json";
import List from "../List-Kamar/List";
import Cari from "../search/Search";

const Home = () => {
  const [hasil, setHasil] = useState(data);
  return (
    <div>
      <Header />
      <div className="hm">
        <h2>Selamat Datang Di BilHaven</h2>
      </div>
            <div className="src">
        <Cari data={data} setHasil={setHasil} />
      </div>
      <List />
      <Footer />
    </div>
  );
};

export default Home;
