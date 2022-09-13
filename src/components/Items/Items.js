import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Card from "../Card/Card";
import "./Items.css";
import Spinner from "../Spinner/Spinner";
import { useParams } from "react-router-dom";

export default function Items({ cats, catIdByMe, result }) {
  const param = useParams();
  const [items, setItems] = useState(null);
  const [loading, setLoding] = useState(false);
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  useEffect(() => {
    fetch(`http://opia.softwarecloud2.com/api/products/category/${param.id ? param.id : cats[0]?.id}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setItems(data);
        setLoding(true);
        setAnimateCard([{ y: 40, opacity: 0 }]);
        setTimeout(() => {
          setAnimateCard([{ y: 0, opacity: 1 }]);
        }, 400);
      });
  }, [catIdByMe, cats, param.id]);
  return (
    <>
      {!loading && !items ? (
        <section className="sec-spinner">
          <Spinner />
        </section>
      ) : (
        <>
          <motion.section
            animate={animateCard}
            transition={{ duration: 0.5, delayChildren: 0.5 }}
            className="sec"
          >
            <>
              <h3>{result?.name}</h3>
              <motion.div
                transition={{
                  duration: 0.4,
                  ease: "easeInOut",
                  staggerChildren: 0.4,
                }}
                className="cards"
              >
                <Card item={items} />
              </motion.div>
            </>
          </motion.section>
        </>
      )}
    </>
  );
}
