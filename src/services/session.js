import jwt from 'jsonwebtoken';
import { env } from '$env/dynamic/private';

export const getSession = async (token) => {
	try {
		const decodedToken = token ? jwt.verify(token, env.JWT_SECRET) : false;
		if (!token || !decodedToken.password) {
			return false;
		} else {
			return true;
		}
	} catch (e) {
		return false;
	}
};
