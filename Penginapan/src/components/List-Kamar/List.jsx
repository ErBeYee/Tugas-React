const List = ({ JenisKamar, Harga, Fasilitas }) => {
  return (
    <div>
      <ul>
        <li>Jenis Kamar : {JenisKamar}</li>
        <li>Harga : {Harga}/Malam</li>
        <li>Fasilitas : {Fasilitas}</li>
      </ul>
    </div>
  );
};

export default List;
