import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';

import LessonsContainer from '../containers/LessonsContainer';
import SearchContainer from '../containers/SearchContainer';

import benefitsImage from '../img/benefits.png';
import monitorImage from '../img/search-monitor.png';
import tgPhonesImage from '../img/tg-phones.png';
import tgScreenshots from '../img/tg-screenshots.png';

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
        <Row className="news-item upper">
          <Col lg={6} className="upper-left">
            <img src={benefitsImage} alt="Benefits" />
          </Col>
          <Col lg={{ size: 5, offset: 1 }} className="upper-right">
            <img src={monitorImage} alt="Search monitor" />
          </Col>
        </Row>
        <Row className="news-item mid">
          <Col lg={7} className="mid-left">
            <img src={tgPhonesImage} alt="Telegram bot on phones" />
          </Col>
          <Col lg={5} className="mid-right">
            <div className="text-block">
              <h2>Легко, швидко і точно</h2>
              <p>Телеграм бот відповість</p>
              <p>на всі ваші запити</p>
              <span>@Knuca_ScheduleBot</span>
              <Button
                  size="md"
                  color="info"
                  tag="a"
                  href="https://t.me/KNUCA_ScheduleBot"
                  className="text-block-link"
              >
              Приєднуйся
              </Button>
            </div>
          </Col>
        </Row>
        <Row className="news-item low">
          <Col lg={6} className="low-left">
            <div className="text-block">
              <h2>Особливості та переваги</h2>
              <p>Бот дозволяє здійснювати пошук</p>
              <p>за групою або викладачем</p>
              <p>Також ви можете вказати дату</p>
              <p>або діапазон дат</p>
            </div>
          </Col>
          <Col lg={6} className="low-right">
            <img src={tgScreenshots} alt="Telegram screenshots" />
          </Col>
        </Row>
      </Container>
    </section>
  </main>
);


export default App;
