import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Layout, Carousel, Row, Col, Select, Button, Card } from "antd";
import Spinner from "./Spinner";
import { updateCart } from "../../actions/cart";
const { Content } = Layout;
const { Option } = Select;

const Product = ({ product: { loading, product }, updateCart }) => {
  const [description, setDescription] = useState(false);

  const handleBuy = () => {
    updateCart(product);
  };

  return loading || product === null ? (
    <Spinner />
  ) : (
    <Content style={{ padding: "0 24px", minHeight: 280 }} className="hproduct">
      <Row gutter={30} type="flex">
        <Col span={24} order={2} md={{ span: 8, order: 1 }}>
          <Carousel
            customPaging={function(i) {
              return (
                <a style={{ display: "block", width: "100%" }}>
                  <img
                    src={product.gallery[i].src}
                    style={{ width: "100%" }}
                    className="product-thumb"
                  />
                </a>
              );
            }}
          >
            {product.gallery.map(element => (
              <div>
                <img
                  src={element.src}
                  alt={element.alt}
                  className="product-thumb"
                />
              </div>
            ))}
          </Carousel>
        </Col>
        <Col span={24} order={1} md={{ span: 15, order: 2 }}>
          <Row gutter={15}>
            <h1 class="header product-title">{product.title}</h1>
          </Row>
          <Row gutter={16} type="flex" style={{ flexWrap: "wrap" }}>
            <Card style={{ maxWidth: "500px", width: "100%" }}>
              <Col span={12} md={4} style={{ marginBottom: "15px" }}>
                <p
                  style={{ fontWeight: "700", marginBottom: "0" }}
                  className="product-price"
                >
                  {product.price.new} kr
                </p>
                <s style={{ fontSize: "12px" }}>{product.price.old} kr</s>
              </Col>
              <Col
                span={12}
                md={4}
                style={{ textAlign: "left", marginBottom: "15px" }}
              >
                <Select
                  defaultValue={product.variants[0]}
                  style={{ width: 110 }}
                >
                  {product.variants.map(element => (
                    <Option value={element}>
                      {element.charAt(0).toUpperCase() + element.slice(1)}
                    </Option>
                  ))}
                </Select>
              </Col>
              <Col
                span={24}
                md={{ span: 8, offset: 8 }}
                style={{ textAlign: "left" }}
              >
                <Button type="primary" size="large" block onClick={handleBuy}>
                  Buy
                </Button>
              </Col>
            </Card>
          </Row>
          <Row gutter={15} style={{ marginTop: "30px" }}>
            <Col>
              <div
                dangerouslySetInnerHTML={{ __html: product.description }}
                className="product-description"
                style={{
                  height: !description ? "145px" : "100%",
                  overflow: "hidden",
                  marginBottom: "15px"
                }}
              />
              <Button
                type="secondary"
                onClick={() => setDescription(!description)}
                style={{ marginBottom: "30px" }}
              >
                {!description ? "Read more" : "Read less"}
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row gutter={30} type="flex">
        {product.inspirations.map(element => (
          <Col span={24} md={8} style={{ marginBottom: "15px" }}>
            <Card
              title={element.title}
              style={{ height: "100%", backgroundImage: "url('paper1.jpg')" }}
            >
              <p>{element.description}</p>
            </Card>
          </Col>
        ))}
      </Row>
    </Content>
  );
};

Product.propTypes = {
  product: PropTypes.object.isRequired,
  updateCart: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  product: state.product
});

export default connect(mapStateToProps, { updateCart })(Product);
