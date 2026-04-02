import { Route, Routes } from "react-router-dom";
import "./App.css";
import MyNavbar from "./components/MyNavbar/MyNavbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Kategori from "./pages/Kategori/Kategori";
import DashboardLayout from "./pages/DahboardLayout/DashboardLayout";
import AddKategori from "./pages/Kategori/AddKategori";
import Produk from "./pages/Produk/Produk";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<h1>Hello World</h1>} />

        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route element={<h1>Dashboard</h1>} />

          <Route path="/dashboard/pesanan" element={<h1>Pesanan</h1>} />

          <Route path="/dashboard/produk" element={<Produk />} />
          <Route path="/dashboard/produk/edit" element={<h1>Edit Produk</h1>} />

          <Route path="/dashboard/kategori" element={<Kategori />} />
          <Route path="/dashboard/kategori/add" element={<AddKategori />} />

          <Route path="/dashboard/pelanggan" element={<h1>Pelanggan</h1>} />

          <Route path="/dashboard/kartu" element={<h1>Kartu</h1>} />

          <Route path="/dashboard/users" element={<h1>Users</h1>} />

          <Route path="/dashboard/history" element={<h1>History</h1>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
