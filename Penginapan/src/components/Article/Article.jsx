import { useState } from "react";
import Cari from "../search/Search";
import List from "../List-Kamar/List";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";


const Article = ({ data = [] }) => {
  const [filteredData, setFilteredData] = useState(data);
  const [dataTotal, setDataTotal] = useState(data.length);

  const onChangeSearch = (searchTerm) => {
    const filteredData = data.filter((dta) => {
      return dta.jenis_kamar.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setFilteredData(filteredData);
    setDataTotal(filteredData.length);
  };

  return (
    <div>
       < Header />
      <Cari dataTotal={dataTotal} onChangeSearch={onChangeSearch} />
      <div className="wrapper">
        {filteredData.map((dta, index) => (
          <div className="card" key={index}>
            <div className="card-h">
              <img src={Logo1} alt="" width={300} />
            </div>
            <div className="card-b">
              <List
                JenisKamar={dta.jenis_kamar}
                Harga={dta.harga}
                Fasilitas={dta.fasilitas}
              />
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Article;
