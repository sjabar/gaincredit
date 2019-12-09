import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import DropdownButton from 'react-bootstrap/DropdownButton';
import './App.scss'
export class SearchBar extends React.Component {
  render() {
     return (
      <InputGroup className="mb-3" size="sm">
     <FormControl
      placeholder="Name,ID"
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
    />
    <InputGroup.Append>
      <Button variant="outline-secondary">GO</Button>
    </InputGroup.Append>     
    </InputGroup>
     );
  }
}
