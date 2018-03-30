import React, { Component } from "react";
import LessonTable from './Table';
import { Container, Button, Input, InputGroupAddon, InputGroup } from "reactstrap";
import "../css/App.css";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    return (
      <Container>
            <InputGroup className="main-input col-8 ">
              <Input placeholder="Введите группу\преподаватель" />
              <InputGroupAddon addonType="prepend">
                <Button color="success">Search</Button>
              </InputGroupAddon>
            </InputGroup>
            <LessonTable />
      </Container>
    );
  }
}

export default App;
