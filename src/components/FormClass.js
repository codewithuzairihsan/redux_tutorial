import React, { Component } from "react";
// connect is a function of react-redux, by which we connect react-redux with class component.
import { connect } from "react-redux";
import { Col, Form, FormGroup, Row, Button, Input, Label } from "reactstrap";
import { addMember,clear } from "../actions/Index";
// import DataTable from "./DataTable";
import ModalAlert from "./ModalAlert";
const initialState = {
  id:new Date().getTime().toString(),
  name: '',
  email: '',
  countries: '',
  cities: '',
  address: '',
};
class FormClass extends Component {
  constructor(props) {
    super(props);
    // these are all states
    this.state = {
      show: false,
      initialState,
    };
  }
  // A close function to change the modal format from true to false, if it is showing it will be false after clicking this function
  handleClose = () => {
      this.props.clear()
      this.setState({show:false})
  };
  // A close function for closing modal its called in accept argument.
  closeModal=()=>{
    this.setState({show:false})
  }
  // submit form
  handleSubmit = (event) => {
    event.preventDefault();
    this.setState(initialState);
  };
  // A save function to save input data
  saveUser = () => {
    this.props.addMember(
    this.state.id,
    this.state.name,
    this.state.email,
    this.state.countries,
    this.state.cities,
    this.state.address,
    )
    this.setState({
      show: true
    });
  };
  render() {
    return (
      <>
        <div className="container" style={{ margin: "auto", width: "70%" }}>
          <Form onSubmit={this.handleSubmit}>
            <Row className="mb-4">
              <Col md="4">
                <FormGroup>
                  <Label> Name</Label>
                  <Input
                    id="name"
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
                    id="email"
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
            <Row className="mb-4">
              <Col md="4">
                <FormGroup>
                  <Label>Country</Label>
                  <Input
                    id="country"
                    name="country"
                    type="select"
                    value={this.state.countries}
                    required
                    onChange={(event) =>
                      this.setState({ countries: event.target.value })
                    }
                  >
                    <option value="Select Countries"></option>
                    <option value="Pak">Pakistan</option>
                    <option value="Ind">India</option>
                    <option value="UK">UK</option>
                    <option value="USA">USA</option>
                  </Input>
                </FormGroup>
              </Col>
              {/* City value will be open after selecting country if not you can't access cities */}
              <Col md="4">
                {this.state.countries ? (
                  <FormGroup>
                    <Label>Cities</Label>
                    <Input
                      id="Cities"
                      name="cities"
                      type="select"
                      value={this.state.cities}
                      required
                      onChange={(event) =>
                        this.setState({ cities: event.target.value })
                      }
                    >
                      {/* Some of Pakistan Cities */}
                      {this.state.countries === "Pak" ? (
                        <>
                          <option></option>
                          <option>Peshawar</option>
                          <option>Islamabad</option>
                          <option>Karachi</option>
                          <option>Lahore</option>
                        </>
                      ) :
                      // some of Indian Cities 
                      this.state.countries === "Ind" ? (
                        <>
                          <option></option>
                          <option>Delhi</option>
                          <option>Mumbai</option>
                          <option>Kolkata</option>
                          <option>Agra</option>
                        </>
                      ) :
                      // some of United Kingdom Cities
                      this.state.countries === "UK" ? (
                        <>
                          <option></option>
                          <option>London</option>
                          <option>Edinburgh</option>
                          <option>Bristol</option>
                          <option>Manchester</option>
                        </>
                      ) :
                      // some of United State of America Cities
                      this.state.countries === "USA" ? (
                        <>
                          <option></option>
                          <option>Chicago</option>
                          <option>New York</option>
                          <option>San Diego</option>
                          <option>Los Angeles</option>
                        </>
                      ) : null}
                    </Input>
                  </FormGroup>
                ) : null}
              </Col>
            </Row>
            <Row className="mb-3">
              <Col md="8">
                <FormGroup>
                  <Label>Address</Label>
                  <Input
                    id="address"
                    type="text"
                    placeholder="Address"
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
          <ModalAlert
            show={this.state.show}
            close={this.handleClose}
            closeModal={this.closeModal}
          />
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
    addMember,clear
  };
};
export default connect(mapStateToProps, mapDispatchToProps())(FormClass);
