import React from "react";
import { Layout, Menu } from "antd";
import Product from "./Product";
const { Content, Sider } = Layout;

const Landing = () => {
  return (
    <Content style={{ padding: "0 50px" }}>
      <Layout style={{ padding: "24px 0", background: "#fff" }}>
        <Sider
          width={200}
          style={{ background: "#fff" }}
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={broken => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{ height: "100%" }}
          >
            <Menu.Item key="1">Paper clips</Menu.Item>
            <Menu.Item key="2">Post-it notes</Menu.Item>
            <Menu.Item key="3">Staples</Menu.Item>
            <Menu.Item key="4">Hole punches</Menu.Item>
            <Menu.Item key="5">Binders</Menu.Item>
            <Menu.Item key="6">Staplers</Menu.Item>
            <Menu.Item key="7">Laminators</Menu.Item>
            <Menu.Item key="8">Writing utensils</Menu.Item>
            <Menu.Item key="9">Paper</Menu.Item>
            <Menu.Item key="10">Computers</Menu.Item>
            <Menu.Item key="11">Printers</Menu.Item>
            <Menu.Item key="12">Fax machines</Menu.Item>
            <Menu.Item key="13">Photocopiers</Menu.Item>
            <Menu.Item key="14">Cash registers</Menu.Item>
            <Menu.Item key="15">Office furniture</Menu.Item>
            <Menu.Item key="16">Chairs</Menu.Item>
            <Menu.Item key="17">Cubicles</Menu.Item>
            <Menu.Item key="18">Filing cabinet</Menu.Item>
            <Menu.Item key="19">Armoire desks</Menu.Item>
          </Menu>
        </Sider>
        <Product />
      </Layout>
    </Content>
  );
};

export default Landing;
