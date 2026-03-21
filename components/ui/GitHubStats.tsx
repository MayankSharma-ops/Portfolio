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
        <Github size={22} className="text-amber" />
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
                <GitFork size={14} className="text-amber" />
                <span className="font-display text-2xl font-bold text-amber">{data.public_repos}</span>
              </div>
              <p className="text-xs text-text-muted">Repositories</p>
            </div>
            <div className="glass-card p-4 text-center">
              <div className="flex items-center justify-center gap-1.5 mb-1">
                <Users size={14} className="text-amber" />
                <span className="font-display text-2xl font-bold text-amber">{data.followers}</span>
              </div>
              <p className="text-xs text-text-muted">Followers</p>
            </div>
            <a
              href={data.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-4 text-center hover:border-amber/40 transition group"
            >
              <div className="flex items-center justify-center gap-1.5 mb-1">
                <Star size={14} className="text-amber" />
                <span className="font-display text-lg font-bold text-text-primary group-hover:text-amber transition">View Profile</span>
              </div>
              <p className="text-xs text-text-muted">@{USERNAME}</p>
            </a>
          </>
        ) : null}
      </div>

      {/* GitHub Stats Cards — github-readme-stats (amber themed) */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="glass-card p-4 sm:p-5 overflow-hidden">
          <p className="text-xs font-mono text-text-muted mb-3">Stats Overview</p>
          <img
            src={`https://github-readme-stats.vercel.app/api?username=${USERNAME}&show_icons=true&hide_border=true&bg_color=00000000&title_color=f59e0b&text_color=a8a29e&icon_color=f59e0b&ring_color=f59e0b&count_private=true`}
            alt={`${USERNAME}'s GitHub Stats`}
            className="w-full h-auto"
            loading="lazy"
          />
        </div>
        <div className="glass-card p-4 sm:p-5 overflow-hidden">
          <p className="text-xs font-mono text-text-muted mb-3">Most Used Languages</p>
          <img
            src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${USERNAME}&layout=compact&hide_border=true&bg_color=00000000&title_color=f59e0b&text_color=a8a29e&langs_count=8`}
            alt={`${USERNAME}'s Top Languages`}
            className="w-full h-auto"
            loading="lazy"
          />
        </div>
      </div>

      {/* Contribution streak */}
      <div className="glass-card p-4 sm:p-5 overflow-hidden mt-4">
        <p className="text-xs font-mono text-text-muted mb-3">Contribution Streak</p>
        <img
          src={`https://github-readme-streak-stats.herokuapp.com/?user=${USERNAME}&hide_border=true&background=00000000&ring=f59e0b&fire=f59e0b&currStreakLabel=f5f0e8&sideLabels=a8a29e&currStreakNum=f5f0e8&sideNums=a8a29e&dates=57534e&stroke=2a2a2a`}
          alt={`${USERNAME}'s Contribution Streak`}
          className="w-full h-auto"
          loading="lazy"
        />
      </div>
    </AnimatedSection>
  );
}
