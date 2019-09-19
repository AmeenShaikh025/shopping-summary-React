import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";

export default class Subtotal extends Component {
  render() {
    return (
      <Row className="show-grid">
        <Col sm={8}>Subtotal</Col>
        <Col sm={4}> {`$${this.props.price}`} </Col>
      </Row>
    );
  }
}
