import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./App.css";
import SubTotal from "./components/Subtotal/Subtotal";
import PickupSavings from "./components/PickupSavings/PickupSavings";
import TaxesFees from "./components/TaxesFees/TaxesFees";
import EstimatedTotal from "./components/EstimatedTotal/EstimatedTotal";
import ItemDetails from "./components/ItemDetails/ItemDetails";
import PromoCode from "./components/PromoCode/PromoCode";

import { connect } from "react-redux";
import { handleChange } from "./actions/promoCodeActions";

class App extends React.Component {
  state = {
    total: 100,
    PickupSavings: -3.85,
    taxes: 0,
    estimatedTotal: 0,
    disabledPrmoButton: false
  };

  componentDidMount = () => {
    this.setState(
      {
        taxes: (this.state.total + this.state.PickupSavings) * 0.0875
      },
      function() {
        this.setState({
          estimatedTotal:
            this.state.total + this.state.PickupSavings + this.state.taxes
        });
      }
    );
  };

  giveDiscountHandler = () => {
    if (this.props.promoCode === "DISCOUNT") {
      this.setState(
        {
          estimatedTotal: (this.state.estimatedTotal = 0.4)
        },
        function() {
          this.setState({
            disabledPrmoButton: true
          });
        }
      );
    }
  };

  render() {
    return (
      <Container className="container">
        <Row className="purchase-card">
          <Col>
            <SubTotal price={this.state.total.toFixed(2)} />
            <PickupSavings price={this.state.PickupSavings} />
            <TaxesFees taxes={this.state.taxes.toFixed(2)} />
            <hr />
            <EstimatedTotal price={this.state.estimatedTotal.toFixed(2)} />
            <ItemDetails price={this.state.estimatedTotal.toFixed(2)} />
            <hr />
            <PromoCode
              giveDiscount={() => this.giveDiscountHandler()}
              isDisabled={this.state.disabledPrmoButton}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  promoCode: state.promoCode.value
});

export default connect(
  mapStateToProps,
  { handleChange }
)(App);
