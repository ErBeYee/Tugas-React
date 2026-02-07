import { useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./Form.css";

const Form = ({ setHasil }) => {
  const [form, setForm] = useState({
    jenis_kamar: "",
    harga: "",
    fasilitas: "",
  });
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setHasil((prev) => [
      ...prev,
      {
        jenis_kamar: form.jenis_kamar,
        harga: form.harga,
        fasilitas: form.fasilitas,
      },
    ]);
    setForm({
      jenis_kamar: "",
      harga: "",
      fasilitas: "",
    });
  };

  return (
    <div>
      <h5 className="ht">Tambah Kamar</h5>
      <form onSubmit={handleSubmit} className="frm">
        <label>Jenis kamar</label>
        <input
          name="jenis_kamar"
          placeholder="Masukkan Jenis Kamar"
          value={form.jenis_kamar}
          onChange={handleChange}
        />
        <br />
        <label>Harga</label>
        <input
          name="harga"
          placeholder="Harga"
          value={form.harga}
          onChange={handleChange}
        />
        <br />
        <label>Fasilitas</label>
        <input
          name="fasilitas"
          placeholder="Fasilitas"
          value={form.fasilitas}
          onChange={handleChange}
        />
        <br />
        <br />
        <button type="submit">Tambah</button>
      </form>
    </div>
  );
};

export default Form;
