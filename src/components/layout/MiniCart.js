import React, { useState, Fragment } from "react";
import { connect } from "react-redux";
import { Button, Icon, Drawer, List, Avatar } from "antd";
import PropTypes from "prop-types";
import Spinner from "./Spinner";

const MiniCart = ({ cart: { cart, loading } }) => {
  const [showCart, setShowCart] = useState(false);

  return loading || cart === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <Icon
        type="shopping-cart"
        style={{ fontSize: "20px", marginRight: "5px" }}
      />
      <span>{cart.length}st</span>{" "}
      {cart.length > 0 && (
        <span>
          - {cart.map(element => element.price.new).reduce((a, b) => a + b)} kr
        </span>
      )}{" "}
      <Button
        type="dashed"
        onClick={() => setShowCart(!showCart)}
        style={{ marginLeft: "5px" }}
      >
        Cart
      </Button>
      <Drawer
        title="Cart"
        placement="right"
        closable={false}
        onClose={() => setShowCart(false)}
        visible={showCart}
      >
        <List
          itemLayout="horizontal"
          dataSource={cart}
          renderItem={item => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar src={item.gallery[0].src} />}
                title={item.title}
                description={`${item.price.new} kr`}
              />
            </List.Item>
          )}
        />
      </Drawer>
    </Fragment>
  );
};

MiniCart.propTypes = {
  cart: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  cart: state.cart
});

export default connect(mapStateToProps)(MiniCart);
