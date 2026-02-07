import { useEffect, useState } from "react";
import "./List.css";
import axios from "axios";
import Logo1 from "../IMG/_ (3).jpeg";
import {Button, Card, CardBody, CardSubtitle, CardText, CardTitle} from "reactstrap"

const List = () => {
  const [hotel, setHotel] = useState([]);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    axios
      .get(
        "https://overpass-api.de/api/interpreter?data=[out:json];node[%22tourism%22~%22hotel|guest_house|hostel|motel%22][%22addr:country%22=%22ID%22];out%2050;",
      )
      .then((res) => {
        setHotel(res.data.elements);
        setLoad(false);
      })
      .catch((err) => {
        setLoad(false);
      });
  }, []);
  if (load) return <p>Loading.....</p>;
  return (
    <div className="wrapper">
      {hotel.map((htl) => (
        <Card
          color="primary"
          outline
          style={{
            width: "18rem",
          }}
          key={htl.id}
          className="kartu"
        >
          <img alt="Sample" src={Logo1} />
          <CardBody>
            <CardTitle tag="h5">{htl.tags?.name || "Error"}</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              {htl.tags?.["addr:city"] || "Error"}
            </CardSubtitle>
            <CardText>
              Jalan :{htl.tags?.["addr:street"] || "Error"}
              <br />
              Kategori :{htl.tags?.["tourism"] || "Error"}
            </CardText>
            <Button className="btn">Button</Button>
          </CardBody>
        </Card>
      ))}
      {/* <ul>
        <li>Jenis Kamar : {JenisKamar}</li>
        <li>Harga : {Harga}/Malam</li>
        <li>Fasilitas : {Fasilitas}</li>
      </ul>
      <div className="knt">
        <div className="btn">
          <span>Booking</span>
        </div>
      </div> */}
    </div>
  );
};

export default List;
