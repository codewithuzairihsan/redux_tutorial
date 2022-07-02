import { useState } from "react";
import { Col, Form, FormGroup, Row, 
  Button, Modal, Input, Label, ModalHeader,
  ModalBody,ModalFooter} from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { addMember } from "../actions/Index";
import Data from "./Data";
function FormExample() {
  const [show, setShow] = useState(false);
  const handleClose = () => {
    
    setShow(false);
    
  };
  const list = useSelector((state) => state.addingMember.list);
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [validated, setValidated] = useState(false);
  const handleSubmit = (event) => {
    
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
        event.preventDefault();
       event.stopPropagation();
    }
    setValidated(true);
  };
  return (
    <>
      <div className="container" style={{ margin: "auto", width: "70%" }}>
        <Form  onSubmit={handleSubmit}>
          <Row className="mb-4">
            <Col md="4">
            <FormGroup>
              <Label> Name</Label>
              <Input
              valid={validated}
              id="validationCustom01"
                required
                type="text"
                placeholder="Name"
                value={name}
                onChange={(event) => setName(event.target.value)}
               
              />
            </FormGroup>
            </Col>
            <Col md="4">
            <FormGroup >
              <Label>Email</Label>
              <Input
              valid={validated}
              id="validationCustom02"
                required
                type="email"
                placeholder="Email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </FormGroup>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col md="8">
            <FormGroup>
              <Label>Address</Label>
              <Input
              valid={validated}
              id="validationCustom03"
                type="text"
                placeholder="City"
                required
                value={address}
                onChange={(event) => setAddress(event.target.value)}
              />
            </FormGroup>
            </Col>
          </Row>
          <Button
          color="success"
          type="submit"
            onClick={() =>
              dispatch(
                addMember(name, email, address),
                setName(''),
                setEmail(''),
                setAddress(''),
               setShow(true)
              )
            }
          >
            Submit
          </Button>
        </Form>
      </div>
      <div className="showItems">     
        {list.map((item, i) => {
          return (
              <div >
                <Modal isOpen={show}>
                  <ModalHeader >
                    User Data
                  </ModalHeader>
                  <ModalBody key={i}>
                    <p>Name: {item.name}</p>
                    <p>Email: {item.email}</p>
                    <p>Address: {item.address}</p>
                  </ModalBody>
                  <ModalFooter>
                    <Button color="danger"  onClick={handleClose}>
                      Close
                    </Button>
                  </ModalFooter>
                </Modal>
              </div>
          );
        })}
        </div>
        <div className="container my-4">
          <Data />
        </div>
    </>
  );
}

export default FormExample;
