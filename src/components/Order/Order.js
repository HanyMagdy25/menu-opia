import React, { useState } from "react";
import "./Order.css";
import { AiOutlineClose } from "react-icons/ai";

const Order = ({handleOrder,setPopupOrder,setPhone,setTableNumber,setName}) => {
  const [toggle, setToggle] = useState(1);
  return (
    <div className="popup">
      <div className="model">
        <div className="model-header-order">
            <span onClick={()=>setPopupOrder(false)} className="close-order"><AiOutlineClose/></span>
          <div
            className={toggle === 1 ? "selected-order" : ""}
            onClick={() => setToggle(1)}
          >
            تجهيز الطلب
          </div>
          <div
            className={toggle === 2 ? "selected-order" : ""}
            onClick={() => setToggle(2)}
          >
            الطاولة
          </div>
        </div>
        <div className="model-body">
          <div
            className={
              toggle === 1
                ? "content-project content-project-active"
                : "content-project"
            }
          >
            <input onChange={(e)=>setName(e.target.value)} placeholder="الإسم" />
            <input onChange={(e)=>setPhone(e.target.value)} placeholder="الجوال" />
            <button onClick={handleOrder}>إرسال</button>
          </div>
          <div
            className={
              toggle === 2
                ? "content-project content-project-active"
                : "content-project"
            }
          >
            <h4>قم يإدخال رقم الطاولة</h4>
            <input onChange={(e)=>setTableNumber(e.target.value)} type="number" placeholder="e.g:12" />
            <button onClick={handleOrder}>إرسال</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
