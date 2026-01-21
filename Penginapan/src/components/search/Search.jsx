import { useState } from "react";
import "./search.css";

const Cari = ({ onSearchChange }) => {
  const [setSearch] = useState("keyword");

  const handleChangeSearch = (e) => {
    const keyword = e.target.value.toLowerCase();
    setSearch(keyword);

    onSearchChange(keyword);
  };

  return (
    <div>
      <input
        type="text"
        onChange={handleChangeSearch}
        placeholder="Masukkan Jenis Kamar..."
        className="cari"
      />
    </div>
  );
};

export default Cari;
