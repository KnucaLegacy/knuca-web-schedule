import React, { Component } from 'react';
import { Container } from 'flux/utils';
import 'core-js/es7/object';

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
    if (this.state.lessonsState.isMany) {
      const { lessons } = this.state.lessonsState;
      return (
        <div>
          {Object.values(lessons).map((day) => {
            const state = {
              ...this.state.lessonsState,
              lessons: day,
            };
            return <LessonTable lessonsState={state} />;
          })}
        </div>
      );
    }
    return (
      <React.Fragment>
        <LessonTable {...this.state} />
      </React.Fragment>
    );
  }
}


export default Container.create(LessonsContainer);
