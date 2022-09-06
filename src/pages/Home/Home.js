import React, { useEffect, useState } from "react";
import "./Home.css";
import Carousel from "../../components/Carousel/Carousel";
import Category from "../../components/Category/Category";
import Items from "../../components/Items/Items";
import Tax from "../../components/Tax/Tax";
import Footer from "../../components/Footer/Footer";
import ImageSpinner from "../../components/Spinner/ImageSpinner";

export default function Home() {
  const [cats, setCats] = useState(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState({});

  useEffect(() => {
    fetch("https://camera.eaglefits.net/api.php?cats")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setCats(data);
        setLoading(true);
      });
  }, []);
  console.log("cats from Home",cats)
  return !loading ? (
    <>
      <ImageSpinner />
    </>
  ) : (
    <div className="home">
      <div className="carousel">
        <Carousel />
      </div>
      <div className="home-container">
        <Category cats={cats} setResult={setResult} result={result} />
        <Items cats={cats} result={result}/>
        <Tax />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}
