'use client'

import { motion } from 'framer-motion'

const navVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' as const },
  },
}

const navItemVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.3 + i * 0.08, duration: 0.4, ease: 'easeOut' as const },
  }),
}

const ctaVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { delay: 0.9, duration: 0.4, ease: 'easeOut' as const },
  },
}

export default function Home() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }

        html, body {
          width: 100%;
          height: 100%;
          overflow: hidden;
          background: #0A1628;
        }

        .spline-container {
          position: fixed;
          top: 0; left: 0;
          width: 100vw; height: 100vh;
          z-index: 0;
        }

        iframe {
          width: 100%; height: 100%;
          border: none; display: block;
        }

        header {
          position: fixed;
          top: 16px;
          left: 50%;
          transform: translateX(-50%);
          width: calc(100% - 48px);
          max-width: 1200px;
          z-index: 10;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 6px 20px;
          height: 64px;
          border-radius: 24px;
          border: 1px solid rgba(255,255,255,0.15);
          background: linear-gradient(135deg, rgba(255,255,255,0.18), rgba(255,255,255,0.06) 50%, rgba(120,180,255,0.1));
          backdrop-filter: blur(32px) saturate(200%) brightness(1.1);
          -webkit-backdrop-filter: blur(32px) saturate(200%) brightness(1.1);
          box-shadow: inset 0 1.5px 0 rgba(255,255,255,0.35), inset 1px 0 0 rgba(255,255,255,0.2), 0 8px 40px rgba(0,0,0,0.4);
        }

        .logo {
          position: fixed;
          top: -80px;
          left: -20px;
          z-index: 20;
          text-decoration: none;
        }
        .logo img {
          height: 270px;
          width: auto;
        }

        nav {
          display: flex;
          align-items: center;
          gap: 4px;
          padding: 4px 8px;
          border-radius: 50px;
          border: 1px solid rgba(255,255,255,0.12);
          background: rgba(255,255,255,0.07);
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.15);
        }
        nav a {
          font-family: 'Orbitron', sans-serif;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.1em;
          color: rgba(255, 255, 255, 0.7);
          text-decoration: none;
          padding: 8px 16px;
          border-radius: 50px;
          transition: all 0.25s ease;
          white-space: nowrap;
        }
        nav a:hover {
          color: white;
          background: rgba(255, 255, 255, 0.15);
        }
        nav a.active {
          color: white;
          background: linear-gradient(135deg, rgba(255,255,255,0.25), rgba(255,255,255,0.1));
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.3);
        }

        .join-btn {
          font-family: 'Orbitron', sans-serif;
          font-size: 10.5px;
          font-weight: 700;
          letter-spacing: 0.12em;
          color: #0A1628;
          background: linear-gradient(135deg, #ffffff, #c8dcff);
          border: none;
          border-radius: 50px;
          padding: 10px 22px;
          cursor: pointer;
          text-decoration: none;
          white-space: nowrap;
          box-shadow: 0 4px 12px rgba(0,0,0,0.25);
          transition: all 0.25s ease;
        }
        .join-btn:hover {
          transform: translateY(-1px);
          box-shadow: 0 6px 20px rgba(0,0,0,0.3);
        }

        @media (max-width: 768px) {
          .logo {
            top: 10px;
            left: 8px;
          }
          .logo img {
            height: 46px;
            width: auto;
          }

          header {
            top: 10px;
            right: 8px;
            left: auto;
            transform: none;
            width: auto;
            max-width: calc(100% - 62px);
            height: 46px;
            padding: 2px 6px;
            border-radius: 50px;
          }

          nav {
            display: flex;
            align-items: center;
            gap: 1px;
            overflow-x: auto;
            max-width: calc(100% - 92px);
            scrollbar-width: none;
            -ms-overflow-style: none;
          }
          nav::-webkit-scrollbar {
            display: none;
          }

          nav a {
            font-size: 8.5px;
            padding: 4px 7px;
          }

          .join-btn {
            font-size: 8px;
            padding: 5px 9px;
            margin-left: 2px;
          }
        }
      `}</style>

      <a href="/" className="logo">
        <img src="cosmoslogo.png" alt="Cosmos" />
      </a>

      <header>
        <nav>
          <a href="/" className="active">Home</a>
          <a href="/about">About</a>
          <a href="/team">Team</a>
          {/* <a href="/leaderboard">Leaderboard</a> */}
          <a href="/events">Events</a>
          <a href="/newsletter">Newsletter</a>
          <a href="/blog">Blog</a>
        </nav>
        <a href="/join" className="join-btn">BECOME A MEMBER</a>
      </header>

      <div className="spline-container">
        <iframe
          src="https://my.spline.design/thebluemarble-keVOvs2KGeZ0M1B681M26QT7/"
          frameBorder="0"
          width="100%"
          height="100%"
          title="The Blue Marble - Spline 3D Scene"
          allow="autoplay; fullscreen; xr-spatial-tracking"
        />
      </div>
    </>
  )
}