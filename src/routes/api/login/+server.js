import jwt from 'jsonwebtoken';
import { env } from '$env/dynamic/private';

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
	const req = await request.json();

	if (req.password && req.password === env.PASSWORD_SECRET) {
		const token = jwt.sign({ password: req.password }, env.JWT_SECRET);
		return new Response(token);
	} else {
		return new Response(JSON.stringify({ error: 'Unauthorized' }), {
			status: 401
		});
	}
}
