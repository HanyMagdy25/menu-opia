import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { useCart } from "react-use-cart";
import BigCard from "../../components/BigCard/BigCard";
import "./Cart.css";
import Back from "../../components/Back/Back";
import Order from "../../components/Order/Order";

// POST REQUEST
// const order = 'https://camera.eaglefits.net/api.php?order'

export default function Cart() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [tableNumber, setTableNumber] = useState(null);
  const [note, setNote] = useState("");
  const [popupOrder, setPopupOrder] = useState(false);

  useEffect(() => {
    if(note === ""){
      localStorage.removeItem('note');
    }else{
      localStorage.setItem('note', note);
    }
  }, [note])

  console.log("name",name)
  
  const {
    isEmpty,
    // totalUniqueItems,
    items,
    // totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
  } = useCart();

  // const handleOrder = () => {
  //   const order = {};
  //   fetch(`https://camera.eaglefits.net/api.php?order`, {
  //     method: "POST",
  //     credentials: "include",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(order),
  //   })
  //     .then((data) => data.json())
  //     .then((res) => {
  //       console.log(res);
  //       if (res.status === "success") {
  //         // 
  //       }
  //     });
  // };

  // console.log("totalItems",totalItems)


  return (
    <>
      {isEmpty ? (
        <div className="empty">
          <h3>السلة فارغة</h3>
          <span>
            <Link to="/">
              الذهاب الى صفحة المنتجات <MdOutlineProductionQuantityLimits />
            </Link>
          </span>
        </div>
      ) : (
        <>
        <section className="section-cart">
          <Back path="/"/>

          <div className="section-cart-container">
            {items?.map((item, index) => (
              <BigCard
                key={index}
                item={item}
                removeItem={removeItem}
                updateItemQuantity={updateItemQuantity}
              />
            ))}
          </div>
          <div className="note"> 
            <h4>ملاحظات :</h4>
            <textarea placeholder="ملاحظات..." onChange={(e)=>setNote(e.target.value)}/>
          </div>
          <div className="cart-details">
            <div className="total">
              <h4>الإجمالي</h4>
              <h3>{cartTotal} ريال</h3>
            </div>
            <button onClick={()=>setPopupOrder(true)} className="add">اتمام الطلب</button>
          </div>
        </section>
        {popupOrder && <Order setPopupOrder={setPopupOrder} setTableNumber={setTableNumber} setPhone={setPhone} setName={setName} />}
      </>
      )}
    </>
  );
}
