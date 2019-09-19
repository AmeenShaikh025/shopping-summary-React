import React, { Component } from "react";
import { Button, Collapse, Well, Media, Row, Col } from "react-bootstrap";

export default class ItemDetails extends Component {
  state = {
    open: false
  };

  render() {
    return (
      <div>
        <Button
          className="item-details-button"
          variant="link"
          onClick={() => this.setState({ open: !this.state.open })}
        >
          {this.state.open === false ? `See ` : `Hide `} item details
          {this.state.open === false ? ` +` : ` -`}
        </Button>
        <Collapse in={this.state.open}>
          <div>
            <Media>
              <img
                width={100}
                height={100}
                src="https://i5.walmartimages.com/asr/90c1aad2-a3b3-4711-a29f-7b42b25aeadf_1.e83f74dfd7486d797bd0882996d1e3a4.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF"
                alt="thumbnail"
              />
              <Media.Body>
                <p>
                  Essential by OFM ES5-3085 Racing Style Leather Ganing Chair,
                  Grey
                </p>
                <Row className="show-grid">
                  <Col sm={8}>
                    <strong>{`$${this.props.price}`}</strong>
                    <br />
                    <strong className="price-strike">
                      {`$${this.props.price}`}
                    </strong>
                  </Col>
                  <Col sm={4}>Qty: 1</Col>
                </Row>
              </Media.Body>
            </Media>
          </div>
        </Collapse>
      </div>
    );
  }
}
