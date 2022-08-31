import React from "react";
import "./Home.css";
import Carousel from "../../components/Carousel/Carousel";
import Category from "../../components/Category/Category";
import Items from "../../components/Items/Items";
import Tax from "../../components/Tax/Tax";
import Footer from "../../components/Footer/Footer";

export default function Home() {
  return (
    <div className="home">
      <div className="carousel">
        <Carousel />
      </div>
      <div className="home-container">
        <Category />
        <Items />
        <Tax />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}
