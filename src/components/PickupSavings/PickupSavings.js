import React, { Component } from "react";

import { Row, Col, Tooltip, OverlayTrigger } from "react-bootstrap";

var styles = {
  PickupSavings: {
    textDecoration: "underline"
  },
  totalSavings: {
    color: "red",
    fontWeight: 800
  }
};

export default class PickupSavings extends Component {
  render() {
    const tooltip = (
      <Tooltip id="tooltip">
        <p>
          Picking up your order in the store help cut cost and we pass the
          savings on to you!.
        </p>
      </Tooltip>
    );

    return (
      <Row className="show-grid">
        <Col sm={8}>
          <OverlayTrigger placement="bottom" overlay={tooltip}>
            <div style={styles.PickupSavings}>Pickup Savings</div>
          </OverlayTrigger>
        </Col>
        <Col style={styles.totalSavings} sm={4}>
          {`$${this.props.price}`}
        </Col>
      </Row>
    );
  }
}
