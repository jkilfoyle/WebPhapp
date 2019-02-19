import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class PrescriptionAdd extends Component {
  // Initialize the state
  state = {
    patientID: 0,
    drugID:0,
    quantity: "",
    daysFor: 0,
    refillsLeft: 0,
    prescriberID: 0,
    dispenserID: 0,
    message: ''
  };

  // Updating value in the patientID state
  onKeyDownPatientID = event => {
    this.setState({patientID: event.target.value});
  }

  /* Seperate component for this to validate it... */
  // Updating value in the drugID state
  onKeyDownDrugID = event => {
    this.setState({drugID: event.target.value});
  }

  // Updating value in the quantity state
  onKeyDownQuantity = event => {
    this.setState({quantity: event.target.value});
  }

  // Updating value in the days daysFor state
  onKeyDownDaysFor = event => {
    this.setState({daysFor: event.target.value});
  }

  // Updating value in the refillsLeft state
  onKeyDownRefillsLeft = event => {
    this.setState({refillsLeft: event.target.value});
  }

  // Updating value in the prescriberID state
  onKeyDownPrescriberID = event => {
    this.setState({prescriberID: event.target.value});
  }

  // Updating value in the dispenserID state
  onKeyDownDispenserID = event => {
    this.setState({dispenserID: event.target.value});
  }

  // Sending the prescription to be added
  onSendPrecription = () => {

    var prescriptionAddQuery= `/api/v1/prescriptions/add`;

    /* Send a message back for an error or a success */
    axios
      .post(prescriptionAddQuery,{
        "patientID": this.state.patientID,
        "drugID": this.state.drugID,
        "quantity": this.state.quantity,
        "daysFor": this.state.daysFor,
        "refillsLeft": this.state.refillsLeft,
        "prescriberID": this.state.prescriberID,
        "dispenserID": this.state.dispenserID
      });

  }

  render() {

    return (
      <div className="App">
        <div className="col-xl-8 order-xl-1 center">
        <div className="card bg-secondary shadow">
          <div className="card-header bg-white border-0">
              <div className="row align-items-center">
                <div className="col-8 text-left">
                  <h3 className="mb-0">Prescription Add</h3>
                </div>
              </div>
          </div>
          <div className="card-body text-left">
          <form>
            <div className="pl-lg-4"> </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group focused">
                  <input 
                  type="p" 
                  className="form-control" 
                  placeholder="Patient ID"
                  onChange={this.onKeyDownPatientID}/> 
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-group focused">
                  <input 
                  type="p" 
                  className="form-control" 
                  placeholder="Drug ID"
                  onChange={this.onKeyDownDrugID}/> 
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-group focused">
                  <input 
                  type="p" 
                  className="form-control" 
                  placeholder="Quantity"
                  onChange={this.onKeyDownQuantity}/> 
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-group focused">
                  <input 
                  type="p" 
                  className="form-control" 
                  placeholder="Days For"
                  onChange={this.onKeyDownDaysFor}/> 
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-group focused">
                  <input 
                  type="p" 
                  className="form-control" 
                  placeholder="Refills Left"
                  onChange={this.onKeyDownRefillsLeft}/> 
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-group focused">
                  <input 
                  type="p" 
                  className="form-control" 
                  placeholder="Prescriber ID"
                  onChange={this.onKeyDownPrescriberID}/> 
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-group focused">
                  <input 
                  type="p" 
                  className="form-control" 
                  placeholder="Dispenser ID"
                  onChange={this.onKeyDownDispenserID}/> 
                </div>
              </div>
            </div> 
          </form>
          <Link to={"/"}>
                <button 
                  type="button" 
                  className="btn btn-danger my-4"
                  variant="raised">
                  Cancel
                </button>
          </Link>
          <nbsp> </nbsp>
          <button 
            type="button" 
            class="btn btn-success my-4" 
            onClick={this.onSendPrecription}>
            Add Prescription
          </button>
            </div>
          </div>
          </div>
      </div>
    );
  }
}

export default PrescriptionAdd;