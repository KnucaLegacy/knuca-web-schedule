import React, { Component } from "react";
import LessonTable from './Table';
import { Container, Button, Input, InputGroupAddon, InputGroup } from "reactstrap";
import "../App.css";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  // componentWillMount() {
  //   fetch('https://crossorigin.me/http://35.195.191.179:8080/lessons/2018-03-05/group/5')
  //     .then(res => res.json())
  //     .then(data => this.setState({lessons: data}));
  // }

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
