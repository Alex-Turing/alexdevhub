import axios from 'axios';
import { IRepo } from '@/App';

const BASE_URL = 'api/github'; //'http://localhost:3001/api/github';

const getAll = async () => {
    const response = await axios.get<IRepo[]>(`${BASE_URL}/repos`);
    return response.data as IRepo[];
};

const getLanguages = async (url:string) => {
    const repoName = url.split('/').slice(-2, -1)[0]; // Extract repo name
    const response = await axios.get<string[]>(`${BASE_URL}/repos/${repoName}/languages`);   
    return response.data as string[];
}

export default { getAll, getLanguages }