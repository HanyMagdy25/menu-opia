import React, { useEffect, useState } from "react";
// import { products } from "../../utils/data";
// import { useDispatch, useSelector } from "react-redux";
// import { getproducts } from "../../store/productSlice";
import { motion } from "framer-motion";
import Card from "../Card/Card";
import "./Items.css";
import Spinner from "../Spinner/Spinner";
import { useParams } from "react-router-dom";

const scaleVariants = {
  whileInView: {
    // scale:[0,1],
    y: [-20, 0],
    opacity: [0, 1],
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

export default function Items({ cats, catIdByMe }) {
  const param = useParams()
  const [items, setItems] = useState(null);
  const [loading, setLoding] = useState(false);
  // const { isloading, products } = useSelector((state) => state.products);
  // const dispatch = useDispatch();
  useEffect(() => {
    // dispatch(getproducts());
    fetch(`https://camera.eaglefits.net/api.php?cat=${param.id ? param.id : 1}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setItems(data);
        setLoding(true);
      });
  }, [catIdByMe, param.id]);
  // console.log("6items:", items);

  // console.log("products", products);

  return (
    <>
      {!loading && !items ? (
        <section className="sec-spinner">
          <Spinner />
        </section>
      ) : (
        <>
          <section className="sec">
            <>
              <h3>فطور</h3>
              <motion.div
                variant={scaleVariants}
                whileInView={scaleVariants.whileInView}
                className="cards"
              >
                <Card item={items} />
              </motion.div>
            </>
          </section>
        </>
      )}
    </>
  );
}
