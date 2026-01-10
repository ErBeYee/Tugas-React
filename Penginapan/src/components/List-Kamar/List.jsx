import "./List.css";

const List = ({ JenisKamar, Harga, Fasilitas }) => {
  return (
    <div>
      <ul>
        <li>Jenis Kamar : {JenisKamar}</li>
        <li>Harga : {Harga}/Malam</li>
        <li>Fasilitas : {Fasilitas}</li>
      </ul>
      <div className="knt">
        <div className="btn">
          <span>Booking</span>
        </div>
      </div>
    </div>
  );
};

export default List;
