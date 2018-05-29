/* eslint-disable */
import axios from 'axios';
import config from '../config/config';

export async function getItems() {
  const { serverApiUrl, port } = config;
  const url = `${serverApiUrl}:${port}`;

  const groups = await axios(`${url}/groups`);
  const teachers = await axios(`${url}/teachers`);
  const rooms = await axios(`${url}/rooms`);

  const searchItems = {
    groups: groups.data,
    teachers: teachers.data,
    rooms: rooms.data,
  };

  return searchItems;
}
