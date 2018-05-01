/* eslint-disable */
import axios from 'axios';
import config from '../config/config';

export async function getLessons(endPoint) {
  const { serverApiUrl, port, proxy } = config;
  const url = `${proxy}/${serverApiUrl}:${port}/${endPoint}`;

  const lessons = await axios(url);
  

  return lessons.data;
}
