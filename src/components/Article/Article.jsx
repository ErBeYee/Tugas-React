import Cari from "../search/Search";
import List from "../List-Kamar/List";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Form from "../Form/Form";
import "./Article.css";

const Article = ({ hasil = [], setHasil, data = [] }) => {
  return (
    <div>
      <div className="src">
        <Cari data={data} setHasil={setHasil} />
      </div>
      <hr />

      <div className="ce">
        <div className="cr">
          <Form setHasil={setHasil} />
        </div>
      </div>
    </div>
  );
};

export default Article;
