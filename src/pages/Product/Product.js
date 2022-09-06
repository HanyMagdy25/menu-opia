import React, { useEffect, useState } from "react";
import "./Product.css";
import { useParams,useNavigate } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import { BiPurchaseTag } from "react-icons/bi";
import { GiBeachBag } from "react-icons/gi";
import Spinner from "../../components/Spinner/Spinner";
import { useCart } from "react-use-cart";
import ImageSpinner from "../../components/Spinner/ImageSpinner";
import Back from "../../components/Back/Back";

export default function Product() {
  const [count, setCount] = useState(1);
  const [loading, setLoding] = useState(false);
  const [product, setProduct] = useState([]);
  const navigate = useNavigate();
  const { addItem } = useCart();
  const param = useParams();

  useEffect(() => {
    fetch(`https://camera.eaglefits.net/api.php?product=${param.id}`)
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
      <Back path="/"/>
      {!loading ? (
        <>
          <ImageSpinner />
        </>
      ) : (
        <>
          {product && (
            <>
              <div className="section-product-container">
                <img src={product.image} alt="product" />
                <div className="product-datails">
                  <h3>{product.title}</h3>

                  <h4>
                    <BiPurchaseTag /> {product.price * count} ريال
                  </h4>
                </div>
                <div>
                  <p>{product.paragraph}</p>
                </div>
                <div className="btns-div">
                  <div className="count">
                    <button disabled={count<2} onClick={() => setCount(count - 1)}>-</button>
                    <h3>{count}</h3>
                    <button onClick={() => setCount(count + 1)}>+</button>
                  </div>
                  <button
                    className="add"
                    onClick={() => {
                      addItem(product, count);
                      navigate("/cart");
                    }}
                  >
                    <GiBeachBag /> اضافة للسلة
                  </button>
                </div>
              </div>
              <Footer />
            </>
          )}
        </>
      )}
    </section>
  );
}
