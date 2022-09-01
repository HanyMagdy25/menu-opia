import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import { products } from "../../utils/data";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../../components/Footer/Footer";
import { BiPurchaseTag } from "react-icons/bi";
import { GiBeachBag } from "react-icons/gi";
import "./Product.css";
import { getOneProduct, getproducts } from "../../store/productSlice";
import Spinner from "../../components/Spinner/Spinner";

export default function Product() {
  const [count, setCount] = useState(0);
  const param = useParams();
  const dispatch = useDispatch();
  const { isloading, products, product } = useSelector(
    (state) => state.products
  );
  useEffect(() => {
    dispatch(getOneProduct(param.id));
  }, [dispatch, param.id, param]);
  console.log("product[0]", product[0]);
  // const oneProductMap = products.map((pro, index) => pro.cards);

  // const merged = [].concat.apply([], oneProductMap);

  // const oneProduct = products.find((a) => a.id === param.id);
  // console.log("oneProduct66", oneProduct);

  return (
    <section className="section-product">
      {isloading ? (
        <>
          <Spinner />
        </>
      ) : (
        <>
          {product[0] && (
            <>
              <div className="section-product-container">
                <img src={product[0].image} alt="product" />
                <div className="product-datails">
                  <h3>{product[0].title}</h3>
                  {/* <h4><BiPurchaseTag/> {oneProduct.price}</h4> */}
                  <h4>
                    <BiPurchaseTag /> 55 ريال
                  </h4>
                </div>
                <div>
                  <p>{product[0].paragraph}</p>
                </div>
                <div className="textarea">
                  <h4>إضافة ملاحظات:</h4>
                  <textarea />
                </div>
                <div className="btns-div">
                  <div className="count">
                    <button onClick={() => setCount(count - 1)}>-</button>
                    <h3>{count}</h3>
                    <button onClick={() => setCount(count + 1)}>+</button>
                  </div>
                  <button className="add">
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
