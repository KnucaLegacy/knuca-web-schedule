/* eslint-disable */
import axios from 'axios';
import config from '../config/config';

export async function getItems() {
  const { serverApiUrl, port, proxy } = config;
  const url = `${proxy}/${serverApiUrl}:${port}`;

  const groups = await axios(`${url}/groups`);
  const teachers = await axios(`${url}/teachers`);
  const rooms = await axios(`${url}/rooms`);

  const searchItems = {
    groups,
    teachers,
    rooms,
    items:[
      ...(groups.data),
      ...(teachers.data),
      ...(rooms.data),
    ],
  };

  return searchItems;
}
