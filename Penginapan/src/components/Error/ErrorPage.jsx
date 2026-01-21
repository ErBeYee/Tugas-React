import { NavLink,Navigate, useNavigate } from "react-router-dom";
import "./Errorpage.css";


const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <div>
<div  className="bnkass">

      <h1 className="Not">404</h1>
      <h1 className="nit">Halaman Tidak Tersedia</h1>
</div>
      <NavLink to={"/"}>Home</NavLink>
      <button onClick={() => navigate(-1)}>Kembali</button>
    </div>
  );
};

export default ErrorPage;
