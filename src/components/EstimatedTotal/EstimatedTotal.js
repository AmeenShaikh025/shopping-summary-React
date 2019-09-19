import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";

export default class EstimatedTotal extends Component {
  render() {
    return (
      <Row>
        <Col sm={8}>
          {" "}
          <h2> Est. Total </h2>{" "}
        </Col>
        <Col sm={4}>
          {" "}
          <h2>{`$${this.props.price}`} </h2>{" "}
        </Col>
      </Row>
    );
  }
}
