export async function GET(request) {
  const userAgent = request.headers.get("user-agent") || "";
  return new Response(JSON.stringify({ userAgent }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
