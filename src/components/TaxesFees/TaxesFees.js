import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";

export default class TaxesFees extends Component {
  render() {
    return (
      <Row className="show-grid">
        <Col sm={8}>Est. taces & fees (Based on 4957)</Col>
        <Col sm={4}>{`$${this.props.taxes}`}</Col>
      </Row>
    );
  }
}
