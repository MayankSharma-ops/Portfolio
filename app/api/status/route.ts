import { NextResponse } from 'next/server';

export const runtime = 'edge';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const url = searchParams.get('url');

  if (!url) return NextResponse.json({ up: false }, { status: 400 });

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000);

    // Some hosts reject HEAD requests or require a real User-Agent. Using GET to be safe.
    const res = await fetch(url, { 
      method: 'GET', 
      signal: controller.signal,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) PortfolioStatusBot/1.0',
      }
    });
    
    clearTimeout(timeoutId);

    return NextResponse.json({ up: res.ok, status: res.status });
  } catch (err) {
    return NextResponse.json({ up: false, error: 'failed' });
  }
}
