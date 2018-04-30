import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';

// import LessonTable from './Table';
import SearchList from './SearchList';
import SearchInput from './SearchInput';

import '../css/App.css';
import '../css/Grid.css';

const App = props => (
  <Container>
    <Row>
      <Col>
        <SearchInput onInputChange={props.onInputChange} />
        {/* <LessonTable /> */}
        <SearchList
            searchItemsState={props.searchItemsState}
            fetchSearchItems={props.fetchSearchItems}
        />
      </Col>
    </Row>
  </Container>
);

App.propTypes = {
  searchItemsState: PropTypes.shape({}),
  fetchSearchItems: PropTypes.func,
  onInputChange: PropTypes.func,
};

export default App;
