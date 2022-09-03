import React from "react";
import "./Card.css";
import { BiPurchaseTag } from "react-icons/bi";
import { Link } from "react-router-dom";
import Spinner from "../Spinner/Spinner";
export default function Card({ item }) {
  return (
    <>
      {!item ? (
        <Spinner />
      ) : (
        <>
          {item?.map((i, index) => (
            <Link to={`/product/${i.id}`} key={index} className="card">
              <img src={i.image} alt="product" />
              <div className="card-details">
                <h5>{i.title}</h5>
                <h6>{i.paragraph}</h6>
                {/* <h4><BiPurchaseTag/> {i.price}</h4> */}
              </div>
            </Link>
          ))}
        </>
      )}
    </>
  );
}
