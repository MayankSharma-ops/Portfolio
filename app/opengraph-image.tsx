/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Mayank Sharma — Full Stack Web Developer';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'system-ui, sans-serif',
          position: 'relative',
        }}
      >
        {/* Amber glow orb */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 500,
            height: 500,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(245,158,11,0.15) 0%, transparent 70%)',
          }}
        />

        {/* Dot grid pattern */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'radial-gradient(rgba(245,158,11,0.08) 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />

        {/* Logo badge */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 64,
            height: 64,
            borderRadius: 16,
            background: '#f59e0b',
            marginBottom: 32,
            fontSize: 28,
            fontWeight: 800,
            color: '#0a0a0a',
          }}
        >
          MS
        </div>

        {/* Name */}
        <div
          style={{
            fontSize: 64,
            fontWeight: 800,
            letterSpacing: '-0.02em',
            color: '#f5f0e8',
            marginBottom: 8,
          }}
        >
          Mayank Sharma
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: 28,
            color: '#f59e0b',
            fontWeight: 600,
            marginBottom: 24,
          }}
        >
          Full Stack Web Developer
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 18,
            color: '#a8a29e',
            maxWidth: 600,
            textAlign: 'center',
            lineHeight: 1.5,
          }}
        >
          Building production-grade full-stack applications with clean, scalable code.
        </div>

        {/* Tech pills */}
        <div
          style={{
            display: 'flex',
            gap: 12,
            marginTop: 36,
          }}
        >
          {['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'React'].map((tech) => (
            <div
              key={tech}
              style={{
                padding: '6px 16px',
                borderRadius: 6,
                border: '1px solid rgba(245,158,11,0.3)',
                background: 'rgba(245,158,11,0.08)',
                color: '#f59e0b',
                fontSize: 14,
                fontWeight: 500,
              }}
            >
              {tech}
            </div>
          ))}
        </div>

        {/* Bottom border accent */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: 4,
            background: 'linear-gradient(90deg, transparent 0%, #f59e0b 50%, transparent 100%)',
          }}
        />
      </div>
    ),
    { ...size }
  );
}
