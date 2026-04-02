import React from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidear-logo">
        <img src="" alt="logo" />
        <h3>PeTIK Niaga</h3>
      </div>
      <ul className="bn">
        <div className="nav">
          <li>
            <NavLink
              to={"/dashboard"}
              className={({ isActive }) => (isActive ? "link active" : "link")}
            >
              Dashboard
            </NavLink>
          </li>
        </div>

        <div className="nav">
          <li>
            <NavLink to={"/dashboard/pesanan"} className={({ isActive }) => isActive ? "link active" : "link"}>Pesanan</NavLink>
          </li>
        </div>
        <div className="nav">
          <li>
            <NavLink to={"/dashboard/produk"} className={({ isActive }) => isActive ? "link active" : "link"}>Produk</NavLink>
          </li>
        </div>
        <div className="nav">
          <li>
            <NavLink to={"/dashboard/kategori"} className={({ isActive }) => isActive ? "link active" : "link"}>Kategori</NavLink>
          </li>
        </div>
        <div className="nav">
          <li>
            <NavLink to={"/dashboard/pelanggan"} className={({ isActive }) => isActive ? "link active" : "link"}>Pelanggan</NavLink>
          </li>
        </div>
        <div className="nav">
          <li>
            <NavLink to={"/dashboard/kartu"} className={({ isActive }) => isActive ? "link active" : "link"}>Kartu</NavLink>
          </li>
        </div>
        <div className="nav">
          <li>
            <NavLink to={"/dashboard/user"} className={({ isActive }) => isActive ? "link active" : "link"}>User</NavLink>
          </li>
        </div>
        <div className="nav">
          <li>
            <NavLink to={"/dashboard/history"} className={({ isActive }) => isActive ? "link active" : "link"}>History</NavLink>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default Sidebar;
