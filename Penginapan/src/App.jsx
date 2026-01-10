import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import List from "./components/List-Kamar/List";
import Logo1 from "./components/IMG/_ (3).jpeg";
import Logo2 from "./components/IMG/95261389e5374350a146c247279c34b7.jpg";
import Logo3 from "./components/IMG/Bamboo Beach Hotel.jpeg";
import Logo4 from "./components/IMG/Budget Hotel Interior Design ideas 07.jpeg";
import "./App.css";

function App() {
  return (
    <>
      <div className="bg">
        <Header />
      </div>
      <div className="bnkus">
        <div className="pl">
          <h3>Pilih kamar impian anda disini</h3>
        </div>
        <div className="wrapper">
          <div className="card">
            <div className="card-h">
              <img src={Logo1} alt="" width={300} />
            </div>
            <div className="card-b">
              <List
                JenisKamar={"Kamar Standar"}
                Harga={"350.000"}
                Fasilitas={"Wi-Fi Gratis,Kamar Mandi didalam"}
              />
            </div>
          </div>

          <div className="card">
            <div className="card-h">
              <img src={Logo2} alt="" />
            </div>
            <div className="card-b">
              <List
                JenisKamar={"Kamar Deluxe"}
                Harga={"550.000"}
                Fasilitas={"Kopi Panas Gratis,Pemandian Pantai"}
              />
            </div>
          </div>

          <div className="card">
            <div className="card-h">
              <img src={Logo3} alt="" />
            </div>
            <div className="card-b">
              <List
                JenisKamar={"Kamar Supersior"}
                Harga={"750.000"}
                Fasilitas={"Balkon Pribadi,Tempat Duduk nyaman"}
              />
            </div>
          </div>

          <div className="card">
            <div className="card-h">
              <img src={Logo4} alt="" />
            </div>
            <div className="card-b">
              <List
                JenisKamar={"Kamar Suite"}
                Harga={"1.200.000"}
                Fasilitas={"Ruang Tamu terpisah,Bathtub mewah"}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="foot">

      <Footer Nama={"BillHaven"} />
      </div>
    </>
  );
}

export default App;

