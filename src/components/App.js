import React, { Component } from "react";
// import LessonTable from './Table';
import GroupList from '../components/GroupList';
import { Container, Button, Input, InputGroupAddon, InputGroup } from "reactstrap";
import "../css/App.css";

class App extends Component {

  render() {

    return (
      <Container>
            <InputGroup className="main-input col-8 ">
              <Input onChange={this.props.onInputChange} placeholder="Введите группу\преподаватель" />
              <InputGroupAddon addonType="prepend">
                <Button color="success">
                  <span className="oi oi-magnifying-glass"></span>
                </Button>
              </InputGroupAddon>
            </InputGroup>
            {/* <LessonTable /> */}
            <GroupList {...this.props} />
      </Container>
    );
  }
}

export default App;
