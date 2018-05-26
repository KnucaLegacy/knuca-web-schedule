import React, { Component } from 'react';
import { Container } from 'flux/utils';

import LessonTable from '../components/LessonTable';

import LessonsStore from '../stores/LessonsStore';

class LessonsContainer extends Component {
  static getStores() {
    return [
      LessonsStore,
    ];
  }

  static calculateState() {
    const lessonsState = LessonsStore.getState();

    return {
      lessonsState,
    };
  }

  render() {
    return <LessonTable {...this.state} />;
  }
}


export default Container.create(LessonsContainer);
