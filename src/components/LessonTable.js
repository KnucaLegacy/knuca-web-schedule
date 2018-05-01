import React from 'react';

import ReactTable from 'react-table';
import 'react-table/react-table.css';

const LessonTable = () => {
  const data = [
    {
      time: '09:00',
      subject: 'Об`ектно-оріентов.програмування',
      lessonType: 'Лекція',
      teachers: 'доц. Цюцюра М.І.',
      rooms: 'ауд. 366',
      groups: 'ІУСТ-21, ІТП-21, ІТП-22',
    },
    {
      time: '10:30',
      subject: 'Об`ектно-оріентов.програмування',
      lessonType: 'Лабораторна',
      teachers: 'ас. Миронов О.В., ст.викл. Гончаренко Т.А.',
      rooms: 'ауд. 368',
      groups: 'ІУСТ-21',
    },
  ];
  return (
    <div>
      <ReactTable
          data={data}
          noDataText="На сьогодні немає пар"
          columns={[
            {
              Header: 'Вівторок - 01/05/2018',
              columns: [
                {
                  Header: 'День',
                  accessor: 'day',
                  minWidth: 110,
                },
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
                  maxWidth: 100,
                },
                {
                  Header: 'Групи',
                  accessor: 'groups',
                  minWidth: 120,
                },
              ],
            },
          ]}

          defaultPageSize={5}
          showPageSizeOptions={false}
          showPagination={false}
          sortable={false}
          className="-striped -highlight"
      />
      <br />
    </div>
  );
};

export default LessonTable;
