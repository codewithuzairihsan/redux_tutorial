import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { connect } from "react-redux";
// import { addMember } from "../actions/Index";

class ModalAlert extends Component {
  handleClose = () => {
    this.props.close();
  };
  render() {
    return (
      <div>
        {this.props.add.list.map((item, i) => {
          return (
            <div key={i}>
              <Modal isOpen={this.props.show}>
                <ModalHeader>User Data</ModalHeader>
                <ModalBody>
                  <p>Name: {item.name}</p>
                  <p>Email: {item.email}</p>
                  <p>Address: {item.address}</p>
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" onClick={this.handleClose}>
                    Close
                  </Button>
                </ModalFooter>
              </Modal>
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    add: state.addingMember,
  };
};
export default connect(mapStateToProps)(ModalAlert);
