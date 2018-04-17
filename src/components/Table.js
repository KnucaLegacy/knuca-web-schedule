import React from 'react';
import { Table } from 'reactstrap';

const LessonTable = () => (
  <Table bordered responsive>
    <thead>
      <tr>
        <th>День</th>
        <th>Время</th>
        <th>Дисциплина</th>
        <th>Преподаватель</th>
        <th>Аудитория</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row" rowSpan={4} className="lessonDay">Понедельник 12.02.18</th>
        <td>09:00</td>
        <td>Правознавство(Л)</td>
        <td>доц. Тернавская В.М.</td>
        <td>119</td>
      </tr>
      <tr>
        <td>10:30</td>
        <td>Менеджмент и маркетинг(Л)</td>
        <td>доц. Ачкасов И.А. \ доц. Тиминский О.Г.</td>
        <td>363</td>
      </tr>
      <tr>
        <td>12:20</td>
        <td />
        <td />
        <td />
      </tr>
      <tr>
        <td>13:50</td>
        <td />
        <td />
        <td />
      </tr>
    </tbody>
  </Table>
);

export default LessonTable;
