import React, { Component } from "react";
// connect is a function of react-redux, by which we can use react-redux with class component.
import { connect } from "react-redux";
import {
  Col,
  Form,
  FormGroup,
  Row,
  Button,
  Modal,
  Input,
  Label,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import { addMember } from "../actions/Index";
import DataTable from "./DataTable";

class FormClass extends Component {
  constructor(props) {
    super(props);
    // these are all states
    this.state = {
      show: false,
      name: "",
      email: "",
      address: "",
    };
  }
// A close function to change the modal format from true to false, if it is showing it will be false after clicking this function
  handleClose() {
    this.setState({ show: false });
  }
  saveUser = () => {
    this.props.addMember(this.state.name, this.state.email, this.state.address);

    this.setState({ name: "", email: "", address: "", show: true });
  };
  render() {
    return (
      <>
        <div className="container" style={{ margin: "auto", width: "70%" }}>
          <Form>
            <Row className="mb-4">
              <Col md="4">
                <FormGroup>
                  <Label> Name</Label>
                  <Input
                    id="validationCustom01"
                    required
                    type="text"
                    placeholder="Name"
                    value={this.state.name}
                    onChange={(event) =>
                      this.setState({ name: event.target.value })
                    }
                  />
                </FormGroup>
              </Col>
              <Col md="4">
                <FormGroup>
                  <Label>Email</Label>
                  <Input
                    id="validationCustom02"
                    required
                    type="email"
                    placeholder="Email"
                    value={this.state.email}
                    onChange={(event) =>
                      this.setState({ email: event.target.value })
                    }
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col md="8">
                <FormGroup>
                  <Label>Address</Label>
                  <Input
                    id="validationCustom03"
                    type="text"
                    placeholder="City"
                    required
                    value={this.state.address}
                    onChange={(event) =>
                      this.setState({ address: event.target.value })
                    }
                  />
                </FormGroup>
              </Col>
            </Row>
            <Button
              color="success"
              type="submit"
              onClick={() => this.saveUser()}
            >
              Submit
            </Button>
          </Form>
        </div>
        <div className="showItems">
          {this.props.add.list.map((item, i) => {
            return (
              <div key={i}>
                <Modal isOpen={this.state.show}>
                  <ModalHeader>User Data</ModalHeader>
                  <ModalBody>
                    <p>Name: {item.name}</p>
                    <p>Email: {item.email}</p>
                    <p>Address: {item.address}</p>
                  </ModalBody>
                  <ModalFooter>
                    <Button color="danger" onClick={() => this.handleClose()}>
                      Close
                    </Button>
                  </ModalFooter>
                </Modal>
              </div>
            );
          })}
        </div>
        <div className="container my-4">
          <DataTable />
        </div>
      </>
    );
  }
}
// we use this function in class component instead of using useSelector
const mapStateToProps = (state) => {
  return {
    add: state.addingMember,
  };
};
// we use this in class component instead of using useDispatch.
const mapDispatchToProps = () => {
  return {
    addMember,
  };
};
export default connect(mapStateToProps, mapDispatchToProps())(FormClass);
