import { revalidateTag } from 'next/cache';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    // In production, verify req.headers.get('x-hub-signature-256') using your WEBHOOK_SECRET.
    const event = req.headers.get('x-github-event');
    
    if (event === 'push' || event === 'star' || event === 'ping') {
      // Instantly purge all cached GitHub repository fetches globally.
      revalidateTag('github-projects', {});
      return NextResponse.json({ message: 'Cache purged successfully', revalidated: true }, { status: 200 });
    }

    return NextResponse.json({ message: 'Event ignored' }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: 'Webhook processing failed' }, { status: 500 });
  }
}
