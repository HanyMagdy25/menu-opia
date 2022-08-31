import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import "./Feedback.css";

const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9",
};

export default function Feedback() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [text, setText] = useState("");
  // Stars 
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const stars = Array(5).fill(0);
  const handleClick = (value) => {
    setCurrentValue(value);
  };
  const handleMouseOver = (newHoverValue) => {
    setHoverValue(newHoverValue);
  };
  const handleMouseLeave = () => {
    setHoverValue(undefined);
  };

  return (
    <section className="feedback-section">
      <span>
        <Link to="/">
          <HiOutlineArrowNarrowRight /> الرجوع
        </Link>
      </span>
      <div className="feedback-section-container">
        <h4>شكرا لكم</h4>
        <h1>كيف كانت تجربتك معنا؟</h1>
        <h5>قيمنا</h5>
        <div className="stars">
          {stars.map((_, index) => {
            return (
              <FaStar
                key={index}
                size={24}
                onClick={() => handleClick(index + 1)}
                onMouseOver={() => handleMouseOver(index + 1)}
                onMouseLeave={handleMouseLeave}
                color={
                  (hoverValue || currentValue) > index
                    ? colors.orange
                    : colors.grey
                }
                style={{
                  marginRight: 10,
                  cursor: "pointer",
                }}
              />
            );
          })}
        </div>
        <input
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="الاسم"
        />
        <input
          onChange={(e) => setPhone(e.target.value)}
          type="tel"
          placeholder="الجوال"
        />
        <textarea
          onChange={(e) => setText(e.target.value)}
          placeholder="اكتب تعليق"
        />
        <button type="button">ارسال</button>
      </div>
      <Footer />
    </section>
  );
}
