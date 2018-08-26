import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import LessonsContainer from '../containers/LessonsContainer';
import SearchContainer from '../containers/SearchContainer';

import benefitsImage from '../img/benefits.png';
import monitorImage from '../img/search-monitor.png';

import '../css/App.css';
import '../css/Grid.css';

const App = () => (
  <main id="main">
    <section id="search-bg">
      <Container>
        <Row>
          <Col className="search-container">
            <SearchContainer />
            <LessonsContainer />
          </Col>
        </Row>
      </Container>
    </section>
    <section className="news-container">
      <Container>
        <Row className="news-item">
          <Col className="up-left" lg={6}>
            <img src={benefitsImage} alt="benefits" />
          </Col>
          <Col lg={{ size: 5, offset: 1 }} className="up-right">
            <img src={monitorImage} alt="search monitor" />
          </Col>
        </Row>
        <Row>
          <Col />
          <Col />
        </Row>
      </Container>
    </section>
  </main>
);


export default App;
