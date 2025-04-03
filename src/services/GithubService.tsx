import axios from 'axios';
import { IRepo } from '@/App';

const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;
const GITHUB_URL = import.meta.env.VITE_GITHUB_URL

const getAll = () => {
    const request = axios.get<IRepo[]>(`${GITHUB_URL}`, { headers: { Authorization: `token ${GITHUB_TOKEN}` } });
    return request.then(response => response.data as IRepo[]);
};

const getLanguages = (url:string) => {
    const request = axios.get<string[]>(url, { headers: { Authorization: `token ${GITHUB_TOKEN}` } });   
    return request.then(response => response.data as string[]);
}

export default { getAll, getLanguages }