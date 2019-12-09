import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row,Col,Form} from 'react-bootstrap';
import './App.scss'
export class SortBar extends React.Component {
  render() {
     return (
        <Row>
        <Col>
        <Form.Label>Sort By</Form.Label>
        </Col>
        <Col>
        <Form.Control as="select" className="mb-3" size="sm">
          <option>Name</option>
          <option>ID</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Form.Control>
        </Col>
      </Row>
     );
  }
}
