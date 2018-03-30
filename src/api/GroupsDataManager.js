import { serverApiUrl, port } from '../config';
import axios from 'axios';

export async function fetchGroups() {
    let url = `${serverApiUrl}:${port}/groups`;
    let groups = await axios.get(url);
    return groups;
};