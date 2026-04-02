import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink, useOutletContext } from "react-router-dom";
import Card from "../../components/Card/Card";
import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"
import "./Kategori.css"

const Kategori = () => {
  // setcategories digunakan untuk menyimpan data api
  const [categories, setCategories] = useState([]);

  // membuat pagination pakai currentpage
  const [currentPage, setCurrentPage] = useState(1);

  const { search } = useOutletContext();
  const [loading, setLoading] = useState(false);

  // jalanin getProductCategories pakai useEffect
  useEffect(() => {
    getProductCategories();
  }, []);

  const getProductCategories = async () => {
    setLoading(true);
    try {
      const result = await axios.get(
        `${import.meta.env.VITE_API_URL}/jenis-produk`,
      );
      //   console.log(result.data.data);
      console.log(categories);
      setCategories(result.data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const filteredData = categories.filter((category) => {
    return category.nama?.toLowerCase().includes(search.toLowerCase());
  });

  const ITEMS_PER_PAGE = 5;

  const totalPage = Math.ceil(filteredData.length / ITEMS_PER_PAGE);

  // buat membatasi di 1 halaman ada berapa data
  const paginatedData = filteredData.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );

  const handleDelete = async (uuid) => {
    const msg = window.confirm("Yakin nak hapus ni?");

    if (!msg) return;
    try {
      await axios.delete(
        `${import.meta.env.VITE_API_URL}/jenis-produk/${uuid}`,
      );
      getProductCategories();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="kategori-header">
        <h3>Daftar Kategori</h3>
        <NavLink to="/dashboard/kategori/add">Tambah Kategori</NavLink>
      </div>

<div className="table-wrapper">
  <table className="kategori-table">
    <thead>
      <tr>
        <th>No</th>
        <th>Nama</th>
        <th>Gambar</th>
        <th>Aksi</th>
      </tr>
    </thead>

    <tbody>
      {loading
        ? Array.from({ length: 5 }).map((_, i) => (
            <tr key={i}>
              {Array.from({ length: 4 }).map((_, j) => (
                <td key={j}>
                  <Skeleton height={20} />
                </td>
              ))}
            </tr>
          ))
        : paginatedData.map((category, index) => (
            <tr key={category.uuid}>
              <td>
                {(currentPage - 1) * ITEMS_PER_PAGE + index + 1}
              </td>

              <td className="nama-cell">
                {category.nama}
              </td>

              <td>
                <img
                  src={category.url}
                  alt="gambar"
                  className="table-img"
                />
              </td>

              <td className="aksi-cell">
                <button className="btn-edit">Edit</button>
                <button
                  className="btn-delete"
                  onClick={() => handleDelete(category.uuid)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
    </tbody>
  </table>
</div>

      {/* PAGINATION */}
      {totalPage > 1 && (
        <div className="pagination">
          <button
            className="btn-page"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((p) => p - 1)}
          >
            &laquo; Prev
          </button>

          {Array.from({ length: totalPage }).map((_, i) => (
            <button
              className="btn-page"
              disabled={currentPage === i + 1}
              key={i}
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}

          <button
            className="btn-page"
            disabled={currentPage === totalPage}
            onClick={() => setCurrentPage((p) => p + 1)}
          >
            &raquo; Next
          </button>
        </div>
      )}
    </div>
  );
};

export default Kategori;
