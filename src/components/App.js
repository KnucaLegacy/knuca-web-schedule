import React, { Component } from "react";
import background from "../img/background.jpg";
import { Button, Input, InputGroupAddon, InputGroup } from "reactstrap";
import "../App.css";

class App extends Component {
  render() {
    return (
      <div className="container">
        <img src={background} alt="background" className="bg" />
            <InputGroup className="main-input col-8">
              <Input placeholder="Введите группу\преподаватель" />
              <InputGroupAddon addonType="prepend">
                <Button color="success">Search</Button>
              </InputGroupAddon>
            </InputGroup>
      </div>
    );
  }
}

export default App;
