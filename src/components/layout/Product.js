import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Layout, Carousel, Row, Col, Select, Button, Card } from "antd";
import Spinner from "./Spinner";
const { Content } = Layout;
const { Option } = Select;

const Product = ({ product: { loading, product } }) => {
  return loading || product === null ? (
    <Spinner />
  ) : (
    <Content style={{ padding: "0 24px", minHeight: 280 }}>
      <Row gutter={15}>
        <Col span={8}>
          <Carousel
            customPaging={function(i) {
              return (
                <a>
                  <img
                    src={product.gallery[i].src}
                    style={{ width: "100px" }}
                  />
                </a>
              );
            }}
          >
            {product.gallery.map(element => (
              <div>
                <img src={element.src} alt={element.alt} />
              </div>
            ))}
          </Carousel>
        </Col>
        <Col span={16}>
          <Row gutter={15}>
            <h1>{product.title}</h1>
          </Row>
          <Row gutter={15}>
            <Card>
              <Col span={8}>
                <p>{product.price.new} kr</p>
                <small>{product.price.old} kr</small>
              </Col>
              <Col span={8}>
                <Select
                  defaultValue={product.variants[0]}
                  style={{ width: 120 }}
                >
                  {product.variants.map(element => (
                    <Option value={element}>
                      {element.charAt(0).toUpperCase() + element.slice(1)}
                    </Option>
                  ))}
                </Select>
              </Col>
              <Col span={8}>
                <Button type="primary">Buy</Button>
              </Col>
            </Card>
          </Row>
          <Row gutter={15}>
            <Col>
              <div dangerouslySetInnerHTML={{ __html: product.description }} />
              <Button type="secondary">Read more</Button>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row gutter={15}>
        {product.inspirations.map(element => (
          <Col span={8}>
            <Card title={element.title}>
              <p>{element.description}</p>
            </Card>
          </Col>
        ))}
      </Row>
    </Content>
  );
};

Product.propTypes = {
  product: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  product: state.product
});

export default connect(mapStateToProps)(Product);
