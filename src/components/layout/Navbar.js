import React, { useState } from "react";
import { Layout, Menu, Row, Col, Button, Input, Drawer } from "antd";
const { Header } = Layout;
const { Search } = Input;

const Navbar = () => {
  const [showCart, setShowCart] = useState(false);

  return (
    <Header className="header" style={{ height: "auto" }}>
      <Row type="flex" align="middle" gutter={15}>
        <Col span={4}>
          <div className="logo" style={{ width: "150px" }}>
            <img src="/logo.png" alt="Logo" width="150" />
          </div>
        </Col>
        <Col span={6}>
          <Search
            placeholder="input search text"
            enterButton="Search"
            onSearch={value => console.log(value)}
            style={{ display: "block" }}
          />
        </Col>
        <Col span={2}>
          <Button type="secondary" onClick={() => setShowCart(!showCart)}>
            Cart
          </Button>
        </Col>
        <Col span={4}>
          <Button type="primary">Checkout</Button>
        </Col>
      </Row>
      <Row>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
          <Menu.Item key="1">All our product</Menu.Item>
          <Menu.Item key="2">Inspiration for the office</Menu.Item>
          <Menu.Item key="3">About OS</Menu.Item>
        </Menu>
      </Row>
      <Drawer
        title="Basic Drawer"
        placement="right"
        closable={false}
        onClose={() => setShowCart(false)}
        visible={showCart}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </Header>
  );
};

export default Navbar;
