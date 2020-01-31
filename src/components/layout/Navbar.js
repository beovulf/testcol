import React from "react";
import { Layout, Menu, Row, Col, Button, Input, Icon } from "antd";
import MiniCart from "./MiniCart";
const { Header } = Layout;
const { Search } = Input;

const Navbar = () => {
  return (
    <Header
      className="header"
      style={{ height: "auto", backgroundColor: "#FFF" }}
    >
      <Row type="flex" align="middle" gutter={15}>
        <Col span={12} sm={4} md={4}>
          <a href="/" className="logo" style={{ width: "170px" }}>
            <img src="/logo.png" alt="OfficeSupplies logo" width="170" />
          </a>
        </Col>
        <Col span={0} sm={{ span: 4, offset: 3 }} md={{ span: 6, offset: 4 }}>
          <Input.Group>
            <Row gutter={5}>
              <Col span={20}>
                <Input placeholder="" style={{ display: "block" }} />
              </Col>
              <Col span={4}>
                <Button type="default">Search</Button>
              </Col>
            </Row>
          </Input.Group>
        </Col>
        <Col span={12} sm={8} md={6} xl={7} style={{ textAlign: "right" }}>
          <MiniCart />
        </Col>
        <Col span={0} sm={4} md={2} xl={3} style={{ textAlign: "right" }}>
          <Button type="link">
            Checkout
            <Icon type="right" />
          </Button>
        </Col>
      </Row>
      <Row>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
          <Menu.Item key="1">All our product</Menu.Item>
          <Menu.Item key="2">Inspiration for the office</Menu.Item>
          <Menu.Item key="3">About OS</Menu.Item>
        </Menu>
      </Row>
    </Header>
  );
};

export default Navbar;
