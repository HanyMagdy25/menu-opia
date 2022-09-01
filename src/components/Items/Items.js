import React, { useEffect, useState } from "react";
// import { products } from "../../utils/data";
import { useDispatch, useSelector } from "react-redux";
import { getproducts } from "../../store/productSlice";
import Card from "../Card/Card";
import "./Items.css";
import Spinner from "../Spinner/Spinner";
export default function Items({ cats, catIdByMe }) {
  const [items, setItems] = useState(null);
  const [loading, setLoding] = useState(false);
  // const { isloading, products } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getproducts());
    fetch(`https://camera.eaglefits.net/api.php?cat=${catIdByMe}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setItems(data);
        setLoding(true);
      });
  }, [catIdByMe, dispatch]);
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
              <div className="cards">
                <Card item={items} />
              </div>
            </>
          </section>
        </>
      )}
    </>
  );
}
