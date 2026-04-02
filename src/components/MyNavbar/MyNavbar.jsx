import "./MyNavbar.css";

const MyNavbar = ({ search, setSearch }) => {
  return (
    <div className="navbar">
      <div className="nav-kiri">
        <input
          type="text"
          name="search"
          id="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <ul className="bnks">
        <li>Profile</li>
      </ul>
     </div>
  );
};

export default MyNavbar;
