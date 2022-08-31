import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../../utils/data";
import Footer from "../../components/Footer/Footer";
import {BiPurchaseTag} from "react-icons/bi";
import {GiBeachBag} from "react-icons/gi";
import "./Product.css";

export default function Product() {
  const [count, setCount] = useState(0)
  const param = useParams();
  const oneProductMap = products.map((pro, index) => pro.cards);

  const merged = [].concat.apply([], oneProductMap);

  const oneProduct = merged.find((a) => a.id === param.id);
  console.log("oneProduct66", oneProduct);

  return (
    <section className="section-product">
      <div className="section-product-container">
        <img src={oneProduct.image} alt="product"/>
        <div className="product-datails">
          <h3>{oneProduct.title}</h3>
          <h4><BiPurchaseTag/> {oneProduct.price}</h4>
        </div>
        <div>
          <p>{oneProduct.paragraph}</p>
        </div>
        <div className="textarea">
          <h4>إضافة ملاحظات:</h4>
          <textarea/>
        </div>
        <div className="btns-div">
          <div className="count">
            <button onClick={()=> setCount(count-1)}>-</button>
            <h3>{count}</h3>
            <button onClick={()=> setCount(count+1)}>+</button>
          </div>
          <button className="add"><GiBeachBag/> اضافة للسلة</button>
        </div>
      </div>
      <Footer/>
    </section>
  );
}
