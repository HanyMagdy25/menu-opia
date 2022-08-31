import React from "react";
import { products } from "../../utils/data";
import Card from "../Card/Card";
import "./Items.css";
export default function Items() {
  return (
    <>
      {products.map((item, index) => (
        <section key={index} id={item.section} className="sec">
          <>
            <h3>{item.name}</h3>
            <div className="cards">
              <Card  item={item.cards} />
            </div>
          </>
        </section>
      ))}
    </>
  );
}
