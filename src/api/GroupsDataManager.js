import config from '../config/config';
import axios from 'axios';

export async function fetchGroups() {
    let { serverApiUrl, port, proxy } = config;
    let url = `${proxy}/${serverApiUrl}:${port}/groups`;
    let response = await axios(url);
    let groups = response.data;
    return groups;
};