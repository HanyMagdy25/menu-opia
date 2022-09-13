import React, { useEffect, useState } from "react";
import "./Product.css";
import { useParams } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import { BiPurchaseTag } from "react-icons/bi";
import { GiBeachBag } from "react-icons/gi";
import { useCart } from "react-use-cart";
import ImageSpinner from "../../components/Spinner/ImageSpinner";
import Back from "../../components/Back/Back";
import Popup from "../../components/Popup/Popup";

export default function Product() {
  const [count, setCount] = useState(1);
  const [loading, setLoding] = useState(false);
  const [product, setProduct] = useState([]);
  const [popup, setPopup] = useState(false);
  const { addItem } = useCart();
  const param = useParams();

  useEffect(() => {
    fetch(`http://opia.softwarecloud2.com/api/products/product/${param.id}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setProduct(data);
        setLoding(true);
      });
  }, [param.id]);

  return (
    <section className="section-product">
      <Back path="/" />
      {!loading ? (
        <>
          <ImageSpinner />
        </>
      ) : (
        <>
          {product && (
            <>
              <div className="section-product-container">
                <img src={"/storage/" + product.image} alt="product" />
                <div className="product-datails">
                  <h3>{product.name}</h3>

                  <h4>
                    <BiPurchaseTag /> {product.price * count} ريال
                  </h4>
                </div>
                <div>
                  <p>{product.description}</p>
                </div>
                <div className="btns-div">
                  <div className="count">
                    <button
                      disabled={count < 2}
                      onClick={() => setCount(count - 1)}
                    >
                      -
                    </button>
                    <h3>{count}</h3>
                    <button onClick={() => setCount(count + 1)}>+</button>
                  </div>
                  <button
                    className="add"
                    onClick={() => {
                      addItem(product, count);
                      setPopup(true);
                    }}
                  >
                    <GiBeachBag /> اضافة للسلة
                  </button>
                </div>
              </div>
              <Footer />
              {popup && <Popup setPopup={setPopup} />}
            </>
          )}
        </>
      )}
    </section>
  );
}
