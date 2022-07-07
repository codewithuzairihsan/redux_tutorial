import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { connect } from "react-redux";
import DataTable from "./DataTable";
import { addMember, clear } from "../actions/Index";
class ModalAlert extends Component {
  constructor(){
    super();
    this.state={
      showData:false,
     
    }
  }
  // A handleclose function called by Decline button
  handleClose = () => {

    this.props.close();
  };
// A handleSave function called through Accept button
handleSave=(event)=>{
event.preventDefault()
  this.setState({showData:true})
  this.props.closeModal()
}
  render() {
    return (
      <>
      <div>
        {this.props.add.list.map((item,i) => {
          return (
            <div key={i}>
              <Modal isOpen={this.props.show}>
                <ModalHeader>User Data</ModalHeader>
               
                <ModalBody >
                  <p>Id: {item.id}</p>
                  <p>Name: {item.name}</p>
                  <p>Email: {item.email}</p>
                  <p>Country:{item.countries}</p>
                  <p>City: {item.cities}</p>
                  <p>Address: {item.address}</p>
                </ModalBody>
              
                <ModalFooter>
                <Button color="success" type="submit"  onClick={this.handleSave}>
                    Accept
                  </Button>
                  <Button color="danger" onClick={()=>this.handleClose(item.id)}>
                    Decline
                  </Button>
                </ModalFooter>
              </Modal>
            </div>
          );
        })}
     
      </div>
        {this.handleSave ? 
         <DataTable showData={this.state.showData}/>
        :
       null}
      </>
    );
  }
}



const mapStateToProps = (state) => {
  return {
    add: state.addingMember,

  };
};
const mapDispatchToProps = () => {
  return {
    addMember, clear
  };
};
export default connect(mapStateToProps, mapDispatchToProps())(ModalAlert);
