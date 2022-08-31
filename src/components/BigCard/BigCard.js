import React, { useState } from "react";
import image from "../../assets/4.jpg";
import { AiOutlineClose } from "react-icons/ai";
import "./BigCard.css";
export default function BigCard() {
  const [count, setCount] = useState(0);
  return (
    <div className="bigCard">
      <div className="close">
        <button>
          <AiOutlineClose />
        </button>
      </div>
      <div className="bigCard-details">
        <div className="details-div">
          <img src={image} alt="bigCard" />
          <span>بان كيك</span>
        </div>
        <div className="count-parent">
          <div className="count">
            <button onClick={() => setCount(count - 1)}>-</button>
            <h3>{count}</h3>
            <button onClick={() => setCount(count + 1)}>+</button>
          </div>
          <div>25 ريال</div>
        </div>
      </div>
      <div className="hints">
        <p>الملاحظات: بدون فواكة</p>
      </div>
    </div>
  );
}
