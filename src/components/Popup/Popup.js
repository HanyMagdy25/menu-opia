import React from "react";
import "./Popup.css";
import check from "../../assets/check.png";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import { MdKeyboardArrowLeft } from "react-icons/md";

const Popup = ({ setPopup }) => {
  return (
    <div className="popup">
      <div className="model">
        <div className="model-header">
          <span onClick={()=>setPopup(false)}>
            <AiOutlineClose />
          </span>
        </div>
        <div className="model-body">
          <img src={check} alt="check" />
          <p>تمت الاضافة الى السلة</p>
          <span className="toCart"><Link to="/cart">الذهاب الى السلة <MdKeyboardArrowLeft/></Link> </span>
        </div>
      </div>
    </div>
  );
};

export default Popup;
