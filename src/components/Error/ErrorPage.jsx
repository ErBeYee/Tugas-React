import { NavLink, Navigate, useNavigate } from "react-router-dom";
import "./Errorpage.css";

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <div className="bkr">
      <div className="bnkass">
        <h1 className="nit">Halaman Belum Tersedia</h1>
      </div>
      <NavLink to={"/"}>Home</NavLink>
      <div >
        <button onClick={() => navigate(-1)}>Kembali</button>
      </div>
    </div>
  );
};

export default ErrorPage;
