import axios from 'axios';
import { API_URL } from '../utils/apiUtils';

export const getViews = async () => {
	const data = await axios.get(`${API_URL}/api/views`);

	return data.data.views;
};
