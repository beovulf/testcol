import React from "react";
import { Layout, Menu, Row, Col, Button, Input, Icon } from "antd";
import MiniCart from "./MiniCart";
const { Header } = Layout;
const { Search } = Input;

const Navbar = () => {
  return (
    <Header className="header" style={{ height: "auto" }}>
      <Row type="flex" align="middle" gutter={15}>
        <Col span={4}>
          <a href="/" className="logo" style={{ width: "150px" }}>
            <img src="/logo.png" alt="OfficeSupplies logo" width="150" />
          </a>
        </Col>
        <Col span={6}>
          <Search
            placeholder=""
            enterButton="Search"
            onSearch={value => console.log(value)}
            style={{ display: "block" }}
          />
        </Col>
        <Col span={3}>
          <MiniCart />
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
      >
    </Header>
  );
};

export default Navbar;
