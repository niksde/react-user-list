
import React, { useState, useEffect } from "react";
import { Form, Col, Button, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { Get, Save } from "../../Services/UserServices";

const initialUserState = {
  first_name: "",
  last_name: "",
  email: "",
};
const UserAddEdit = (props) => {
  const [user, setUser] = useState(initialUserState);
  const history = useHistory();

  useEffect(() => {
    populateUser();
  }, []);

  const populateUser = async () => {
    if (props.match.params.id) {
      const { data: userData } = await Get(props.match.params.id);
      setUser(userData);
    }
  };

  const onInputChange = (evnt) => {
    setUser((prevState) => ({
      ...prevState,
      [evnt.target.name]: evnt.target.value,
    }));
  };

  const createUpdateUser = async () => {
    const response = await Save(user);
    if (response.updatedAt || response.createdAt) {
      history.goBack();
    }
  };

  return (
    <Row>
      <Col md="4"></Col>
      <Col md="4">
        {/* TODO: User form will go here{" "} */}
        <Form.Label>First name</Form.Label>
        <Form.Control
          placeholder="First name"
          name="first_name"
          value={user.first_name}
          onChange={onInputChange}
        />
        <Form.Label>Last name</Form.Label>
        <Form.Control
          placeholder="Last name"
          name="last_name"
          value={user.last_name}
          onChange={onInputChange}
        />
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="email"
          name="email"
          value={user.email}
          onChange={onInputChange}
        />
        <Button variant="primary" onClick={createUpdateUser}>
          Submit
        </Button>
      </Col>
      <Col md="4"></Col>
    </Row>
  );
};

export default UserAddEdit;
