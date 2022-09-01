import React from "react";
import "./Category.css";
import logo from "../../assets/white-logo.png";
import Spinner from "../Spinner/Spinner";

// const catsOld = [
//   { path: "#sec1", title: "عصائر الصيف" },
//   { path: "#sec2", title: "فطور" },
//   { path: "#sec3", title: "حلى حلو" },
//   { path: "#sec4", title: "احتفالات" },
//   { path: "#sec5", title: "السلطات" },
//   { path: "#sec6", title: "أطباق المشاركة" },
//   { path: "#sec7", title: "أطباق" },
//   { path: "#sec8", title: "فرن" },
//   { path: "#sec9", title: "المشروبات الباردة والمثلجة" },
//   { path: "#sec10", title: "المشروبات الساخنة" },
// ];
export default function Category({ cats, setCatIdByMe }) {
  
  return (
    <div className="category">
      <div className="category-top">
        <div className="category-top-logo">
          <img src={logo} alt="logo" />
          <h3>اسم المطعم</h3>
        </div>
        <h4>للطاولات</h4>
      </div>
      <div className="category-bottom">
        {!cats ? (
          <Spinner />
        ) : (
          <ul className="all-cats">
            {cats?.map((cat, index) => (
              <li key={index}>
                <span onClick={() => setCatIdByMe(cat.id)}>{cat.name}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
