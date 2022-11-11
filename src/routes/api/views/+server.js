import db from '$utils/mongoClient';
import { ObjectId } from 'mongodb';

export async function GET() {
	await db
		.collection('views')
		.updateOne({ _id: ObjectId('636e9611da2ea99b7f16be82') }, { $inc: { value: 1 } });
	const views = await db.collection('views').findOne({ _id: ObjectId('636e9611da2ea99b7f16be82') });

	return new Response(JSON.stringify({ views: views.value }));
}
