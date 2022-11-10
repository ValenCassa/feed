import axios from 'axios';
import { getCookie } from '../utils/cookies';

export const getSession = async () => {
	const token = getCookie('token');
	const data = await axios.post('/api/session', { token });
	return data.data;
};
