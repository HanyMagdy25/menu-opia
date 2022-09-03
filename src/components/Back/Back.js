import React from "react";
import "./Back.css"
import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

export default function Back({path}) {
  return (
    <>
      <span className="back">
        <Link to={path}>
          <HiOutlineArrowNarrowRight /> الرجوع
        </Link>
      </span>
    </>
  );
}
