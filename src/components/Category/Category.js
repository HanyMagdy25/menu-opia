import React, { useEffect, useState } from "react";
import "./Category.css";
import logo from "../../assets/white-logo.png";
import Spinner from "../Spinner/Spinner";
import { Link, useParams } from "react-router-dom";

export default function Category({ cats, setResult, result }) {
  const param = useParams();
  const [activeCat, setActiveCat] = useState(result?.id);

  useEffect(() => {
    if (Object.keys(param).length === 0) {
      setResult(cats[0]);
      setActiveCat(result?.id);
    } else {
      setResult(cats.find((c) => c.id === parseInt(param.id)));
      setActiveCat(parseInt(param.id));
    }

    console.log("result from cat", result);
  }, [cats, param, result, setResult]);

  return (
    <div className="category">
      <div className="category-top">
        <div className="category-top-logo">
          <img src={logo} alt="logo" />
          <h3>أوبيا</h3>
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
                <Link
                  className={`${activeCat === cat.id ? "activeCat" : ""}`}
                  to={`/${cat.id}`}
                >
                  {cat.name}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
