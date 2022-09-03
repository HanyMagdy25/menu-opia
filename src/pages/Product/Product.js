import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
// import { products } from "../../utils/data";
// import { useDispatch, useSelector } from "react-redux";
import Footer from "../../components/Footer/Footer";
import { BiPurchaseTag } from "react-icons/bi";
import { GiBeachBag } from "react-icons/gi";
import "./Product.css";
// import { getOneProduct, getproducts } from "../../store/productSlice";
import Spinner from "../../components/Spinner/Spinner";
import { useCart } from "react-use-cart";

export default function Product() {
  const [count, setCount] = useState(1);
  const [loading, setLoding] = useState(false);
  const [product, setProduct] = useState([]);
  // const [merged, setMerged] = useState([]);
  // const [note, setNotes] = useState("");
  const navigate = useNavigate()
  // console.log(note);
  console.log("00",product);
  // const [cart, setCart] = useState([]);
  const param = useParams();
  const {addItem} = useCart();
  // const hint = "تجربة ملاحاظات"
  // const dispatch = useDispatch();
  // const { isloading, products } = useSelector((state) => state.products);
  useEffect(() => {
    // fetch(`https://camera.eaglefits.net/api.php?product=${param.id}`)
    // لازم تزود االسعر
    fetch(`http://localhost:8000/test/${param.id}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setProduct(data);
        setLoding(true);
        
      });


      
  }, [param.id]);
  // console.log("merged", merged);
  // console.log("param", param);
  // const oneProductMap = products.map((pro, index) => pro.cards);

  // const merged = [].concat.apply([], oneProductMap);

  // const oneProduct = products.find((a) => a.id === param.id);
  // console.log("oneProduct66", oneProduct);

  // const handleCart = (data)=>{
  //   setCart(cart.concat(data))
  //   console.log("66",data)
  // }

  // console.log("cart",cart)

  return (
    <section className="section-product">
      {!loading ? (
        <>
          <Spinner />
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
                    <BiPurchaseTag /> 55 ريال
                  </h4>
                </div>
                <div>
                  <p>{product.paragraph}</p>
                </div>
                {/* <div className="textarea">
                  <h4>إضافة ملاحظات:</h4>
                  <textarea onChange={(e)=> setNotes(e.target.value)}/>
                </div> */}
                <div className="btns-div">
                  <div className="count">
                    <button onClick={() => setCount(count - 1)}>-</button>
                    <h3>{count}</h3>
                    <button onClick={() => setCount(count + 1)}>+</button>
                  </div>
                  <button className="add" onClick={()=>{addItem(product,count);navigate("/cart")}} >
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
