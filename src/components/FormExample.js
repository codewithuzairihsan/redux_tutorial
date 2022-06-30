import { useState } from "react";
import { Col, Form, Row, Button, Modal } from "react-bootstrap";
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
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row className="mb-4">
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label> Name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Name"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                please provide a valid name
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom02">
              <Form.Label>Email</Form.Label>
              <Form.Control
                required
                type="email"
                placeholder="Email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                please provide a valid email
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="8" controlId="validationCustom03">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="City"
                required
                value={address}
                onChange={(event) => setAddress(event.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Button
          variant="success"
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
            <>
              <div >
                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>User Data</Modal.Title>
                  </Modal.Header>
                  <Modal.Body key={i}>
                    <p>Name: {item.name}</p>
                    <p>Email: {item.email}</p>
                    <p>Address: {item.address}</p>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="danger"  onClick={handleClose}>
                      Close
                    </Button>
                  </Modal.Footer>
                </Modal>
              </div>
            </>
          );
        })}
        <div className="container my-4">
          <Data />
        </div>
      </div>
    </>
  );
}

export default FormExample;
