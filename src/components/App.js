import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import LessonsContainer from '../containers/LessonsContainer';
import SearchContainer from '../containers/SearchContainer';

import '../css/App.css';
import '../css/Grid.css';

const App = () => (
  <Container>
    <Row>
      <Col>
        <SearchContainer />
        <LessonsContainer />
      </Col>
    </Row>
  </Container>
);


export default App;
