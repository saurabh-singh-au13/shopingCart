import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

import { connect } from "react-redux";

const Navbar = ({ cart }) => {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    let count = 0;
    cart.forEach((item) => {
      count += item.qty;
    });

    setCartCount(count);
  }, [cart, cartCount]);

  return (
    <div className={styles.navbar}>
      <Link to="/">
        <div>

          
        
          <h2 className={styles.navbar__logo}> <img
            className={styles.cart__image}
            src="https://image.flaticon.com/icons/png/512/891/891462.png"
            alt="shopping cart"
          /> Shopping Cart</h2>
        </div>
      </Link>
      <Link to="/cart">
        <div className={styles.navbar__cart}>
          <h3 className={styles.cart__title}>Cart</h3>
          
          <div className={styles.cart__counter}>{cartCount}</div>
        </div>
      </Link>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(Navbar);
