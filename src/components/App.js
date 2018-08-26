import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import LessonsContainer from '../containers/LessonsContainer';
import SearchContainer from '../containers/SearchContainer';

import '../css/App.css';
import '../css/Grid.css';

const App = () => (
  <div id="main">
    <div id="search-bg">
      <Container>
        <Row>
          <Col className="search-container">
            <SearchContainer />
            <LessonsContainer />
          </Col>
        </Row>
      </Container>
    </div>
    <div className="news-container">
      <Container>
        <Row>
          <Col className=""/>
          <Col />
        </Row>
        <Row>
          <Col />
          <Col />
        </Row>
      </Container>
    </div>
  </div>
);


export default App;
