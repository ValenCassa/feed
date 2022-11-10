let views = 0;

export async function GET() {
	views += 1;
	return new Response(JSON.stringify({ views }));
}
