import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useStateValue } from "./StateProvider";
export default function Header() {
  const [{ basket }] = useStateValue();
  return (
    <div className="header">
      <img
        className="logo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt="Amazon-logo"
      />

      <div className="header_search">
        <input className="header_input" type="text" />
        <SearchIcon className="Header_searchicon"></SearchIcon>
      </div>

      <div className="header_nav">
        <div className="header_option">
          {/*hola sign */}
          <span className="header_1">Hello!</span>
          <span className="header_2">Sign In</span>
        </div>

        <div className="header_option">
          {/*hola orders */}
          <span className="header_1">Returns</span>
          <span className="header_2">& orders</span>
        </div>

        <div className="header_option">
          {/*hola basket */}
          <span className="header_1">Your's</span>
          <span className="header_2">Cart</span>
        </div>

        <div className="header_basket">
          <ShoppingCartIcon />
          <span className="header_lineTwoBasketCount">{basket?.length}</span>
        </div>
      </div>
    </div>
  );
}
