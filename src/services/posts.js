import axios from 'axios';
import { getCookie } from '../utils/cookies';

export const createPost = async (payload) => {
	const cookie = getCookie('token');
	const data = await axios.post('/api/posts', payload, {
		headers: {
			Authorization: `Bearer ${cookie}`
		}
	});
	return data.data;
};

export const deletePost = async (id) => {
	const data = await axios.delete(`/api/posts?id=${id}`, {
		headers: {
			Authorization: `Bearer ${getCookie('token')}`
		}
	});
	return data.data;
};
