import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';

import LessonTable from './LessonTable';
import SearchList from './SearchList';
import SearchInput from './SearchInput';

import '../css/App.css';
import '../css/Grid.css';

const App = props => (
  <Container>
    <Row>
      <Col>
        <SearchInput
            onInputChange={props.onInputChange}
            onFocus={props.onFocus}
            onBlur={props.onBlur}
            searchQuery={props.searchQuery}
        />
        <SearchList
            items={props.items}
            searchQuery={props.searchQuery}
            searchState={props.searchState}
            fetchLessons={props.fetchLessons}
            fetchSearchItems={props.fetchSearchItems}
        />
        <LessonTable
            lessons={props.lessonsState.lessons}
            isLoading={props.lessonsState.isLoading}
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
