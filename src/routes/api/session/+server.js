import jwt from 'jsonwebtoken';
import { env } from '$env/dynamic/private';

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
	const req = await request.json();
	const token = req.token;
	const decodedToken = token ? jwt.verify(token, env.JWT_SECRET) : false;

	if (!req.token || !decodedToken.password) {
		return new Response(JSON.stringify({ status: 'Unauthorized' }));
	} else {
		return new Response(JSON.stringify({ status: 'Authorized' }));
	}
}
