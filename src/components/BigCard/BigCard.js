import React from "react";
// import image from "../../assets/4.jpg";
import { AiOutlineClose } from "react-icons/ai";
import "./BigCard.css";
export default function BigCard({item,updateItemQuantity,removeItem}) {
  return (
    <div className="bigCard">
      <div className="close">
        <button onClick={()=>removeItem(item.id)}>
          <AiOutlineClose />
        </button>
      </div>
      <div className="bigCard-details">
        <div className="details-div">
          <img src={'/storage/' + item.image} alt="bigCard" />
          <span>{item.name}</span>
        </div>
        <div className="count-parent">
          <div className="count">
            <button onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>-</button>
            {/* <h3>{count}</h3> */}
            <h3>{item.quantity}</h3>
            <button onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</button>
          </div>
          <div>{item.quantity * item.price} ريال</div>
        </div>
      </div>
    </div>
  );
}
