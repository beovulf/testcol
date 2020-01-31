import React from "react";
import { Layout, Row, Col, Anchor, Icon } from "antd";

const { Link } = Anchor;
const { Footer } = Layout;

const FooterContainer = props => {
  return (
    <Footer>
      <h3>OfficeSupplies</h3>
      <Row gutter={15}>
        <Col span={12}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            euismod bibendum laoreet. Proin gravida dolor sit amet lacus
            accumsan et viverra justo commodo. Proin sodales pulvinar tempor.
            Cum sociis natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra
            vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget
            odio.
          </p>
        </Col>
        <Col span={12}>
          <Row>
            <Col span={12}>
              Bestsellers
              <Row gutter={15}>
                <Col span={12}>
                  <Anchor>
                    <Link href="#!1" title="A4" />
                    <Link href="#!2" title="A5" />
                    <Link href="#!3" title="Pens" />
                    <Link href="#!4" title="Staplers" />
                  </Anchor>
                </Col>
                <Col span={12}>
                  <Anchor>
                    <Link href="#!1" title="A4" />
                    <Link href="#!2" title="A5" />
                    <Link href="#!3" title="Pens" />
                    <Link href="#!4" title="Staplers" />
                  </Anchor>
                </Col>
              </Row>
            </Col>
            <Col span={12}>
              We're social
              <Row>
                <a href="#!">
                  <Icon type="facebook" theme="filled" />
                  Facebook
                </a>
              </Row>
              <Row>
                <a href="#!">
                  <Icon type="twitter" />
                  Twitter
                </a>
              </Row>
              <Row>
                <a href="#!">
                  <Icon type="linkedin" theme="filled" />
                  LinkedIn
                </a>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Footer>
  );
};

export default FooterContainer;
