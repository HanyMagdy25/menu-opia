import React from "react";
import "./Card.css";
import {BiPurchaseTag} from "react-icons/bi";
export default function Card({ item }) {
  return (
    <>
      {item?.map((i, index) => (
        <a href={`/product/${i.id}`} key={index} className="card">
          <img src={i.image} alt="product" />
          <div className="card-details">
            <h5>{i.title}</h5>
            <h6>{i.paragraph}</h6>
            {/* <h4><BiPurchaseTag/> {i.price}</h4> */}
          </div>
        </a>
      ))}
    </>
  );
}
