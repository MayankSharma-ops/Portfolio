'use client';

import { useEffect, useState } from 'react';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Github, Star, GitFork, Users } from 'lucide-react';

interface GitHubUser {
  public_repos: number;
  followers: number;
  html_url: string;
  avatar_url: string;
}

const USERNAME = 'MayankSharma-ops';

export function GitHubStats() {
  const [data, setData] = useState<GitHubUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(`https://api.github.com/users/${USERNAME}`)
      .then((res) => {
        if (!res.ok) throw new Error();
        return res.json();
      })
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  if (error) return null; // Graceful fallback — hide section

  return (
    <AnimatedSection delay={0.2}>
      <h2 className="font-display text-2xl font-bold mb-5 flex items-center gap-2">
        <Github size={22} className="text-amber-400" />
        GitHub
      </h2>

      {/* Stats cards */}
      <div className="grid grid-cols-3 gap-3 mb-5">
        {loading ? (
          <>
            {[1, 2, 3].map((i) => (
              <div key={i} className="glass-card p-4 text-center animate-pulse">
                <div className="h-8 w-12 bg-[#2a2a2a] rounded mx-auto mb-2" />
                <div className="h-3 w-16 bg-[#2a2a2a] rounded mx-auto" />
              </div>
            ))}
          </>
        ) : data ? (
          <>
            <div className="glass-card p-4 text-center">
              <div className="flex items-center justify-center gap-1.5 mb-1">
                <GitFork size={14} className="text-amber-400" />
                <span className="font-display text-2xl font-bold text-amber-400">{data.public_repos}</span>
              </div>
              <p className="text-xs text-[#57534e]">Repositories</p>
            </div>
            <div className="glass-card p-4 text-center">
              <div className="flex items-center justify-center gap-1.5 mb-1">
                <Users size={14} className="text-amber-400" />
                <span className="font-display text-2xl font-bold text-amber-400">{data.followers}</span>
              </div>
              <p className="text-xs text-[#57534e]">Followers</p>
            </div>
            <a
              href={data.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-4 text-center hover:border-amber-500/40 transition group"
            >
              <div className="flex items-center justify-center gap-1.5 mb-1">
                <Star size={14} className="text-amber-400" />
                <span className="font-display text-lg font-bold text-[#f5f0e8] group-hover:text-amber-400 transition">View Profile</span>
              </div>
              <p className="text-xs text-[#57534e]">@{USERNAME}</p>
            </a>
          </>
        ) : null}
      </div>

      {/* Contribution graph */}
      <div className="glass-card p-4 sm:p-5 overflow-x-auto">
        <p className="text-xs font-mono text-[#57534e] mb-3">Contribution Graph</p>
        <img
          src={`https://ghchart.rshah.org/f59e0b/${USERNAME}`}
          alt={`${USERNAME}'s GitHub Contribution Graph`}
          className="w-full min-w-[640px] h-auto rounded"
          loading="lazy"
        />
      </div>
    </AnimatedSection>
  );
}
