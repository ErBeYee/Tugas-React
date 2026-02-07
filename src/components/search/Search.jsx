import { useState } from "react";
import "./search.css";

const Cari = ({ data = [], setHasil }) => {
  const [search, setSearch] = useState("");

  const handleChangeSearch = (e) => {
    setSearch(e.target.value);

    const temukan = data.filter((tmk) => tmk.jenis_kamar.includes(search));
    setHasil(temukan);
  };

  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={handleChangeSearch}
        placeholder="Masukkan Jenis Kamar..."
        className="cari"
      />
    </div>
  );
};

export default Cari;
