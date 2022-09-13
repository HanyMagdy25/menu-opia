import React from "react";
import "./Card.css";
import { BiPurchaseTag } from "react-icons/bi";
import { Link } from "react-router-dom";
import Spinner from "../Spinner/Spinner";
import { motion } from "framer-motion";

export default function Card({ item }) {
  return (
    <>
      {!item ? (
        <Spinner />
      ) : (
        <>
          {item?.map((i, index) => (
            <Link to={`/product/${i.id}`} key={index} className="card">
              <motion.img src={'/storage/' + i.image} alt="product" />
              <motion.div className="card-details">
                <h5>{i.name}</h5>
                <h6>{i.description}</h6>
                <h4>
                  <BiPurchaseTag /> {i.price} ريال
                </h4>
              </motion.div>
            </Link>
          ))}
        </>
      )}
    </>
  );
}
