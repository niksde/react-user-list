import React, { useState, useEffect } from "react";
import {
  Col,
  Container,
  Image,
  Row,
  Table,
  Button,
  Pagination,
} from "react-bootstrap";
import { useHistory } from "react-router-dom";
import UserFilter from "./UserFilter";
import { List, Delete } from "../../Services/UserServices";

const Users = () => {

  return (
    <Container fluid>
      <Row>
        <Col>
          <h4>User Module</h4>
        </Col>
      </Row>
      <Row>
        <Col>
          <UserFilter />
        </Col>
      </Row>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th></th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>
              <Button variant="primary">Add</Button>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan="5">User detail will display here.</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};

export default Users;
