import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import LessonTable from './LessonTable';
import LessonButtons from './LessonButtons';

export default class WeekScheduleList extends PureComponent {
    static propTypes = {
      lessonsState: PropTypes.shape({
        lessons: PropTypes.shape([]),
        isLoading: PropTypes.bool,
        isFetched: PropTypes.bool,
        searchItem: PropTypes.shape({}),
      }),
    }
    render() {
      const {
        lessons, isLoading, isFetched, searchItem,
      } = this.props.lessonsState;

      if (isLoading || isFetched) {
        return (
          <div>
            {Object.values(lessons).map((day) => {
              const state = {
                ...this.props.lessonsState,
                lessons: day,
              };
              return <LessonTable lessonsState={state} key={state.lessons[0].date} />;
            })}
            <LessonButtons searchItem={searchItem} isDisabled={isLoading} />
          </div>
        );
      }
      return null;
    }
}
