import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';

// import LessonTable from './Table';
import GroupList from './GroupList';
import SearchInput from './SearchInput';

import '../css/App.css';
import '../css/Grid.css';

const App = props => (
  <Container>
    <Row>
      <Col>
        <SearchInput onInputChange={props.onInputChange} />
        {/* <LessonTable /> */}
        <GroupList
            groupsState={props.groupsState}
            fetchGroups={props.fetchGroups}
        />
      </Col>
    </Row>
  </Container>
);

App.propTypes = {
  groupsState: PropTypes.shape({}),
  fetchGroups: PropTypes.func,
  onInputChange: PropTypes.func,
};

export default App;
