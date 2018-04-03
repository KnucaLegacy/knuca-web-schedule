import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

// import LessonTable from './Table';
import GroupList from './GroupList';
import SearchInput from './SearchInput';

import '../css/App.css';
import '../css/Grid.css';

class App extends Component {

  render() {

    return (
      <Container className="main-container">
        <Row>
          <Col>
            <SearchInput onInputChange={this.props.onInputChange} />
            {/* <LessonTable /> */}
            <GroupList {...this.props} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
