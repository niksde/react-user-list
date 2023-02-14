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

const initialPage = 1;

const Users = () => {
  const [users, setUsers] = useState({});
  const [text, setText] = useState("");
  const [currentPage, setCurrentPage] = useState(initialPage);

  const history = useHistory();

  useEffect(() => {
    populateUsers(currentPage);
  }, [currentPage]);

  const populateUsers = async (currentPage) => {
    const usersData = await List(currentPage);
    setUsers(usersData);
  };

  const addUser = (id) => {
    const path = "user" + (id ? `/${id}` : "");
    history.push(path);
  };

  const removeUser = async (id) => {
    const response = await Delete(id);
    if (response) {
      setUsers((prevState) => ({
        ...prevState,
        data: prevState.data.filter((user) => user.id !== id),
      }));
    }
  };

  const onTextChange = (evnt) => {
    setText(evnt.target.value);
  };

  const filteredUsers = users.data
    ? users.data.filter(
        (user) =>
          user.first_name.includes(text) ||
          user.last_name.includes(text) ||
          user.email.includes(text)
      )
    : [];

  return (
    <Container fluid>
      <Row>
        <Col>
          <h4>User Module</h4>
        </Col>
      </Row>
      <Row>
        <Col>
          <UserFilter value={text} onChange={onTextChange} />
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
              <Button variant="primary" onClick={() => addUser()}>
                Add
              </Button>
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user) => (
            <tr key={user.id}>
              <td colSpan="1">
                <Image src={user.avatar} roundedCircle />
              </td>
              <td colSpan="1">{user.first_name}</td>
              <td colSpan="1">{user.last_name}</td>
              <td colSpan="1">{user.email}</td>
              <td colSpan="1">
                <Button variant="primary" onClick={() => addUser(user.id)}>
                  Edit
                </Button>
                <Button variant="danger" onClick={() => removeUser(user.id)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Pagination>
        {[1, 2].map((page) => (
          <Pagination.Item
            key={page}
            active={page === currentPage}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </Pagination.Item>
        ))}
      </Pagination>
    </Container>
  );
};

export default Users;
