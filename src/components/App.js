import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';

import LessonsContainer from '../containers/LessonsContainer';
import SearchContainer from '../containers/SearchContainer';
import Image from './Image';

import images from '../img';


import '../css/App.css';
import '../css/Grid.css';
import '../css/media-lg.css';
import '../css/media-md.css';

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
          <Col xl={6} lg={7} md={12} className="upper-left">
            <Image
                xl={images.xl.benefitsImage}
                lg={images.lg.benefitsImageLg}
                md={images.md.benefitsImageMd}
                alt="Benefits"
            />
          </Col>
          <Col xl={{ size: 5, offset: 1 }} lg={5} md={12} className="upper-right">
            <Image
                xl={images.xl.monitorImage}
                lg={images.lg.monitorImageLg}
                alt="Search monitor"
            />
          </Col>
        </Row>
        <Row className="news-item mid">
          <Col xl={7} lg={7} md={{ size: 12 }} className="mid-left">
            <Image
                xl={images.xl.tgPhonesImage}
                lg={images.lg.tgPhonesImageLg}
                alt="Telegram bot on phones"
            />
          </Col>
          <Col xl={5} lg={5} md={{ size: 12 }} className="mid-right">
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
          <Col xl={6} lg={7} md={12} className="low-left">
            <div className="text-block">
              <h2>Особливості та переваги</h2>
              <p>Бот дозволяє здійснювати пошук</p>
              <p>за групою або викладачем</p>
              <p>Також ви можете вказати дату</p>
              <p>або діапазон дат</p>
            </div>
          </Col>
          <Col xl={6} lg={{ size: 5, offset: 0 }} md={12} className="low-right">
            <Image
                xl={images.xl.tgScreenshots}
                lg={images.lg.tgScreenshotsLg}
                alt="Telegram screenshots"
            />
          </Col>
        </Row>
      </Container>
    </section>
    <footer>
      <Container>
        <Row>
          <Col className="page-footer">
            <div className="footer-credits">
              <Image
                  xl={images.xl.KnucaLegacyLogo}
                  lg={images.lg.KnucaLegacyLogoLg}
                  alt="Knuca Legacy logo"
              />
              <span>&copy; Knuca Legacy 2018, All rights reserved.</span>
            </div>
            <div className="footer-contacts">
              <span>Зв`яжіться з нами</span>
              <a href="knuca-legacy.gmail.com">
                <Image
                    xl={images.xl.gmailLogo}
                    lg={images.lg.gmailLogoLg}
                    alt="Gmail logo"
                />
              </a>
              <a href="https://t.me/KNUCA_ScheduleBot">
                <Image
                    xl={images.xl.tgLogo}
                    lg={images.lg.tgLogoLg}
                    alt="Knuca Legacy logo"
                />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  </main>
);


export default App;
