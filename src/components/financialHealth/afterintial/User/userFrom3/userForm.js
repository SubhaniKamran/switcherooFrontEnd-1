import React, { Component } from "react";
import "./userForm.css";
import { Row, Col, Button } from "antd";
import Checkbox from "../utils/checkbox";
export default class userForm extends Component {
  render() {
    const {
      nusrseryOrChildminding,
      nusrseryOrChildmindingDisable,
      spousalMaintenanceCosts,
      spousalMaintenanceCostsDisable,
      monthlyCreditCardCharges,
      monthlyCreditCardChargesDisable,
      overDraftLimit,
      overDraftLimitDisable,
      creditCardLimit,
      creditCardLimitDisable,
      overDraftCharges,
      overDraftChargesDisable,
      monthlyLoanRepayments,
      monthlyLoanRepaymentsDisable,
      monthlyCashFlow,
      monthlyCashFlowDisable,
      nusrseryOrChildmindingEmpty,
      spousalMaintenanceCostsEmpty,
      monthlyCreditCardChargesEmpty,
      overDraftLimitEmpty,
      creditCardLimitEmpty,
      overDraftChargesEmpty,
      monthlyLoanRepaymentsEmpty,
      monthlyCashFlowEmpty
    } = this.props.allState;
    const {
      onChangeTextSecond,
      onChangeSecond,
      onsubmitForm,
      cashFlowChange
    } = this.props.thisObject;
    return (
      <div className="fo_2_con form3user">
        <p className="note_text">
          {" "}
          {this.props.text
            ? this.props.text
            : "Please try and be as accurate as possible in describing your earnings. All figures are yearly. Check box if it is not applicable to you"}
        </p>
        <Row className="formUser-row-gs">
          <Checkbox
            itemName={[
              "nusrseryOrChildminding",
              nusrseryOrChildminding,
              nusrseryOrChildmindingDisable,
              nusrseryOrChildmindingEmpty
            ]}
            onChangeTextSecond={onChangeTextSecond}
            onChangefunc={onChangeSecond}
          >
            How much do you pay in monthly nursery or child minding costs?
          </Checkbox>

          <Checkbox
            itemName={[
              "spousalMaintenanceCosts",
              spousalMaintenanceCosts,
              spousalMaintenanceCostsDisable,
              spousalMaintenanceCostsEmpty
            ]}
            onChangeTextSecond={onChangeTextSecond}
            onChangefunc={onChangeSecond}
          >
            How much do you pay in monthly maintenance costs i.e. (ex) spousal
            support?
          </Checkbox>

          <Checkbox
            itemName={[
              "creditCardLimit",
              creditCardLimit,
              creditCardLimitDisable,
              creditCardLimitEmpty
            ]}
            onChangeTextSecond={onChangeTextSecond}
            onChangefunc={onChangeSecond}
          >
            What is your total credit card limit(s)?
          </Checkbox>

          <Checkbox
            itemName={[
              "monthlyCreditCardCharges",
              monthlyCreditCardCharges,
              monthlyCreditCardChargesDisable,
              monthlyCreditCardChargesEmpty,
            ]}
            onChangeTextSecond={onChangeTextSecond}
            onChangefunc={onChangeSecond}
          >
            How much do you pay in monthly credit card charges?
          </Checkbox>
          <Checkbox
            itemName={[
              "overDraftLimit",

              overDraftLimit,
              overDraftLimitDisable,
              overDraftLimitEmpty,
            ]}
            onChangeTextSecond={onChangeTextSecond}
            onChangefunc={onChangeSecond}
          >
            What was the largest outstanding balance on your overdraft over the last 6 months?
          </Checkbox>
          <Checkbox
            itemName={[
              "overDraftCharges",
              overDraftCharges,
              
              overDraftChargesDisable,
              overDraftChargesEmpty,
            ]}
            onChangeTextSecond={onChangeTextSecond}
            onChangefunc={onChangeSecond}
          >
            How much do you pay in monthly overdraft charges?
          </Checkbox>
          <Checkbox
            itemName={[
              "monthlyLoanRepayments",
              monthlyLoanRepayments,
              monthlyLoanRepaymentsDisable,
              monthlyLoanRepaymentsEmpty,
            ]}
            onChangeTextSecond={onChangeTextSecond}
            onChangefunc={onChangeSecond}
          >
            How much do you pay in other monthly loan repayments?
          </Checkbox>
          <Checkbox
            itemName={[
              "monthlyCashFlow",
              monthlyCashFlow,
              monthlyCashFlowDisable,
              monthlyCashFlowEmpty,
            ]}
            onChangeTextSecond={onChangeTextSecond}
            onChangefunc={onChangeSecond}
            cashFlowChange={cashFlowChange}
          >
            Do you have a monthly cashflow shortfall/surplus from properties you
            rent? (please include shortfall as a negative and surplus cashflow
            as a positive figure)
          </Checkbox>

          <Col lg={10}>
            <div className="btn-div">
              <button
                onClick={this.props.thisObject.onChangeback}
                className="btn1"
              >
                Back
              </button>

              <Button onClick={onsubmitForm} className="btn2">
                Save & Continue
              </Button>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}
