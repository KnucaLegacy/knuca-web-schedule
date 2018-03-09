import React, { Component } from "react";
import { Container, Button, Input, InputGroupAddon, InputGroup } from "reactstrap";
import "../App.css";

class App extends Component {
  render() {
    return (
      <Container>
            <InputGroup className="main-input col-8 ">
              <Input placeholder="Введите группу\преподаватель" />
              <InputGroupAddon addonType="prepend">
                <Button color="success">Search</Button>
              </InputGroupAddon>
            </InputGroup>
      </Container>
    );
  }
}

export default App;
