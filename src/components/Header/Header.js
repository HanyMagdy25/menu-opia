import React, { useState } from "react";
import "./Header.css";
import { AiOutlineClose, AiFillPhone } from "react-icons/ai";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { BsGlobe, BsCart4 } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";
import logo from "../../assets/white-logo.png";
import facebook from "../../assets/facebook.png";
import snapchat from "../../assets/Snapchat.jpg";
import instagram from "../../assets/instagram.jpg";
import twitter from "../../assets/twitter.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";

export default function Header() {
  const [toggle, settoggle] = useState(false);
  const { totalItems, cartTotal, isEmpty } = useCart();

  // const {
  //   isEmpty,
  //   // totalUniqueItems,
  //   items,
  //   // totalItems,
  //   cartTotal,
  //   updateItemQuantity,
  //   removeItem,
  // } = useCart();

  const icons = [
    { image: facebook, path: "/" },
    { image: snapchat, path: "/" },
    { image: instagram, path: "/" },
    { image: twitter, path: "/" },
  ];
  return (
    <header>
      <div className="header-container">
        <span className="menu-lang">
          <BsGlobe />
        </span>
        <span className="menu-icon" onClick={() => settoggle((prev) => !prev)}>
          <FiMenu />
        </span>
        {!isEmpty && (
          <Link to="/cart"
            className="menu-cart"
            // onClick={() => settoggle((prev) => !prev)}
          >
            <span className="menu-cart-number">{totalItems}</span>
            <BsCart4 />
          </Link>
        )}

        {toggle && (
          <motion.div
            whileInView={{ x: [380, 0] }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            exit={{ x: 0 }}
            className={toggle ? "sideBar" : "sideBar"}
          >
            <div className="close-btn">
              <span
                className="close-icon"
                onClick={() => settoggle((prev) => !prev)}
              >
                <AiOutlineClose />
              </span>
            </div>
            <div className="menu-body">
              <div className="menu-body-first">
                <Link to="/" onClick={() => settoggle((prev) => !prev)}>
                  <img src={logo} alt="logo" />
                </Link>
                <div>
                  <h4>Opia</h4>
                  <h4 className="phone">
                    <span style={{ marginLeft: "3px", color: "#c77b41" }}>
                      <AiFillPhone />
                    </span>{" "}
                    05000000
                  </h4>
                </div>
              </div>
              <Link
                to="/feedback"
                onClick={() => settoggle((prev) => !prev)}
                className="menu-body-second"
              >
                <div>
                  <h4>التقيم و المراجعة</h4>
                  <p>اعطنا ملاحظاتك</p>
                </div>
                <div>
                  <span>
                    <MdKeyboardArrowLeft />
                  </span>
                </div>
              </Link>
              <div className="menu-body-second">
                <div>
                  <h4>أعرف أوقتنا</h4>
                  <p>ساعات الدوام من 6 صباحا - اخر طلب الساعة 12</p>
                </div>
              </div>
              <div className="menu-body-second">
                <div>
                  <h4>جودة المنتجات و مسببات الحساسية</h4>
                </div>
              </div>
              <Link
                to="/cart"
                onClick={() => settoggle((prev) => !prev)}
                className="menu-body-second"
              >
                <div className="menu-body-cart-total">
                  <h4>سلة التسوق</h4>
                  {totalItems === 0 ? (
                    <span>فارغة</span>
                  ) : (
                    <>
                      <span>عدد المنتجات : {totalItems} ,</span>
                      <span> الاجمالى : {cartTotal} ريال</span>
                    </>
                  )}
                </div>
                <div>
                  <span>
                    <MdKeyboardArrowLeft />
                  </span>
                </div>
              </Link>
              <div className="menu-body-icons">
                {icons.map((icon, index) => (
                  <span key={index}>
                    <a href={icon.path}>
                      <img src={icon.image} alt="icon" />
                    </a>
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
}
