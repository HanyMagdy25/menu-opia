import React from "react";
import BigCard from "../../components/BigCard/BigCard";
import "./Cart.css";
export default function Cart() {
  return (
    <section className="section-cart">
      <div className="section-cart-container">
        <BigCard />
        <BigCard />
        <BigCard />
      </div>
      <div className="cart-details">
        <div className="total">
          <h4>الإجمالي</h4>
          <h3>500 ريال</h3>
        </div>
        <button className="add">اتمام الطلب</button>
      </div>
    </section>
  );
}
