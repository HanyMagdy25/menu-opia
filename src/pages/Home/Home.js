import React, { useEffect, useState } from "react";
import "./Home.css";
import Carousel from "../../components/Carousel/Carousel";
import Category from "../../components/Category/Category";
import Items from "../../components/Items/Items";
import Tax from "../../components/Tax/Tax";
import Footer from "../../components/Footer/Footer";

export default function Home() {
  const [cats, setCats] = useState(null);
  const [catIdByMe, setCatIdByMe] = useState(2);

  useEffect(() => {
    fetch("https://camera.eaglefits.net/api.php?cats")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setCats(data);
      });
  }, []);
  // console.log("cats", cats);
  // console.log("setCatIdByMe", catIdByMe);
  return (
    <div className="home">
      <div className="carousel">
        <Carousel />
      </div>
      <div className="home-container">
        <Category cats={cats} setCatIdByMe={setCatIdByMe} />
        <Items cats={cats} catIdByMe={catIdByMe} />
        <Tax />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}
