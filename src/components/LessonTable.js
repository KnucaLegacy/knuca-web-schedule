import React from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

import mapLessonResponseToTableData from '../utils/mapLessonResponseToTableData';
import weekDayOrToday from '../utils/weekDayOrToday';

const LessonTable = ({ lessons, isLoading }) => {
  const data = mapLessonResponseToTableData(lessons);
  const day = lessons.length > 0 ? lessons[0].date : undefined;
  const weekDay = weekDayOrToday(day);
  const pageSize = data.length || 4;

  return (
    <div>
      <ReactTable
          data={data}
          noDataText="На сьогодні немає пар"
          columns={[
            {
              Header: weekDay,
              columns: [
                {
                  Header: 'Час',
                  accessor: 'time',
                  maxWidth: 50,
                },
                {
                  Header: 'Дісципліна',
                  accessor: 'subject',
                  minWidth: 180,
                },
                {
                  Header: 'Тип',
                  accessor: 'lessonType',
                  maxWidth: 130,
                },
                {
                  Header: 'Викладач',
                  accessor: 'teachers',
                },
                {
                  Header: 'Аудиторія',
                  accessor: 'rooms',
                  minWidth: 100,
                },
                {
                  Header: 'Групи',
                  accessor: 'groups',
                  minWidth: 120,
                },
              ],
            },
          ]}

          defaultPageSize={4}
          pageSize={pageSize}
          showPageSizeOptions={false}
          showPagination={false}
          sortable={false}
          loading={isLoading}
          className="-striped -highlight"
      />
      <br />
    </div>
  );
};

export default LessonTable;
