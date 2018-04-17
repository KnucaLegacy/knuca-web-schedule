import axios from 'axios';
import config from '../config/config';

export default async function fetchGroups() {
  const { serverApiUrl, port, proxy } = config;
  const url = `${proxy}/${serverApiUrl}:${port}/groups`;
  const response = await axios(url);
  const groups = response.data;
  return groups;
}
