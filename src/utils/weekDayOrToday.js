import { dateToWeekDay } from './lessonMappers';

const today = () => new Date().toISOString().substring(0, 10);

export default (date = today()) => dateToWeekDay(date);
