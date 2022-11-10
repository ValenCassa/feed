import axios from 'axios';

export const getViews = async () => {
	const data = await axios.get('http://localhost:5173/api/views');

	return data.data.views;
};
