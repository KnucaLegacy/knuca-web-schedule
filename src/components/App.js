import React, { Component } from "react";
// import LessonTable from './Table';
import GroupListContainer from '../containers/GroupListContainer';
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
                <Button color="success">
                  <span class="oi oi-magnifying-glass"></span>
                </Button>
              </InputGroupAddon>
            </InputGroup>
            {/* <LessonTable /> */}
            <GroupListContainer />
      </Container>
    );
  }
}

export default App;
