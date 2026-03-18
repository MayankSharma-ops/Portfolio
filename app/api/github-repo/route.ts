import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const repoUrl = searchParams.get('url');

  if (!repoUrl) return NextResponse.json({ error: 'Missing url' }, { status: 400 });

  const match = repoUrl.match(/github\.com\/([^/]+)\/([^/]+)/);
  if (!match) return NextResponse.json({ error: 'Invalid repo URL' }, { status: 400 });
  
  const [, owner, repo] = match;

  try {
    const res = await fetch(`https://api.github.com/repos/${owner}/${repo}`, {
      // Cache this fetch permanently. 
      // It will ONLY be purged when the webhook hits /api/webhooks/github!
      next: { tags: ['github-projects'] },
      headers: {
        'Accept': 'application/vnd.github.v3+json',
        // 'Authorization': `Bearer ${process.env.GITHUB_TOKEN}` // Recommended in production to avoid rate limits
      },
    });
    
    if (!res.ok) throw new Error('GitHub API Error');
    
    const data = await res.json();
    return NextResponse.json({
      stars: data.stargazers_count,
      lastCommit: data.pushed_at,
      language: data.language,
    });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch repo stats' }, { status: 500 });
  }
}
