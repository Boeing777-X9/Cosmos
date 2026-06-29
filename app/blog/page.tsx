'use client'

import { motion } from 'framer-motion'

export default function Blog() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&display=swap');

        * { margin: 0; padding: 0; box-sizing: border-box; }

        html, body {
          width: 100%;
          min-height: 100%;
          background: #0A1628;
          font-family: 'Orbitron', sans-serif;
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
          width: calc(100% - 64px);
          max-width: 1100px;
          z-index: 10;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 2px 16px;
          height: 70px;
          border-radius: 24px;
          border: 1px solid rgba(255, 255, 255, 0.15);
          background: linear-gradient(135deg, rgba(255,255,255,0.18), rgba(255,255,255,0.06) 50%, rgba(120,180,255,0.1));
          backdrop-filter: blur(32px) saturate(200%) brightness(1.1);
          -webkit-backdrop-filter: blur(32px) saturate(200%) brightness(1.1);
          box-shadow: inset 0 1.5px 0 rgba(255,255,255,0.35), inset 1px 0 0 rgba(255,255,255,0.2), 0 8px 40px rgba(0,0,0,0.4);
        }

        .logo {
          position: fixed;
          top: -80px; left: -20px;
          z-index: 20;
          text-decoration: none;
        }
        .logo img { height: 270px; width: auto; }

        nav {
          display: flex;
          align-items: center;
          gap: 2px;
          padding: 4px 6px;
          border-radius: 50px;
          border: 1px solid rgba(255,255,255,0.12);
          background: rgba(255,255,255,0.07);
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.15);
        }

        nav a {
          font-family: 'Orbitron', sans-serif;
          font-size: 10px;
          letter-spacing: 0.1em;
          color: rgba(255,255,255,0.6);
          text-decoration: none;
          padding: 7px 15px;
          border-radius: 50px;
          transition: all 0.25s ease;
          white-space: nowrap;
        }
        nav a:hover { color: white; background: rgba(255,255,255,0.12); }
        nav a.active {
          color: white;
          background: linear-gradient(135deg, rgba(255,255,255,0.2), rgba(255,255,255,0.08));
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.3);
        }

        .join-btn {
          font-family: 'Orbitron', sans-serif;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.12em;
          color: #0A1628;
          background: linear-gradient(135deg, #ffffff, #c8dcff);
          border: none;
          border-radius: 50px;
          padding: 10px 20px;
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

        .content {
          position: relative;
          z-index: 1;
          padding: 120px 64px 80px;
          max-width: 1000px;
          margin: 0 auto;
        }

        .page-title {
          font-size: 48px;
          font-weight: 900;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          color: white;
          text-align: center;
          margin-bottom: 8px;
          text-shadow: 0 0 40px rgba(120,180,255,0.3);
        }

        .page-subtitle {
          font-size: 12px;
          letter-spacing: 0.3em;
          color: rgba(255,255,255,0.5);
          text-align: center;
          margin-bottom: 60px;
          text-transform: uppercase;
        }

        .blog-container {
          background: linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 50%, rgba(120,180,255,0.04) 100%);
          backdrop-filter: blur(20px) saturate(180%);
          -webkit-backdrop-filter: blur(20px) saturate(180%);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 24px;
          padding: 60px 48px;
          min-height: 400px;
        }

        .blog-placeholder {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          min-height: 300px;
          border: 1px dashed rgba(255,255,255,0.1);
          border-radius: 16px;
          padding: 40px;
        }

        .blog-placeholder .icon {
          font-size: 48px;
          margin-bottom: 20px;
          opacity: 0.3;
        }

        .blog-placeholder h2 {
          font-size: 18px;
          font-weight: 700;
          letter-spacing: 0.12em;
          color: rgba(255,255,255,0.4);
          text-transform: uppercase;
          margin-bottom: 12px;
        }

        .blog-placeholder p {
          font-size: 10px;
          letter-spacing: 0.1em;
          color: rgba(255,255,255,0.25);
          max-width: 400px;
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .content { padding: 120px 24px 60px; }
          .page-title { font-size: 32px; }
          .blog-container { padding: 32px 20px; }
        }
      `}</style>

      <div className="spline-container">
        <iframe
          src="https://my.spline.design/thebluemarble-3BkvTwYV0pmMUmjMet2lcF95/"
          frameBorder="0"
          width="100%"
          height="100%"
          title="The Blue Marble - Blog"
          allow="autoplay; fullscreen; xr-spatial-tracking"
        />
      </div>

      <a href="/" className="logo">
        <img src="/cosmoslogo.png" alt="Cosmos" />
      </a>

      <header>
        <nav>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/team">Team</a>
          {/* <a href="/leaderboard">Leaderboard</a> */}
          <a href="/events">Events</a>
          <a href="/newsletter">Newsletter</a>
          <a href="/blog" className="active">Blog</a>
        </nav>
        <a href="/join" className="join-btn">BECOME A MEMBER</a>
      </header>

      <div className="content">
        <motion.h1
          className="page-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Blog
        </motion.h1>
        <motion.p
          className="page-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Stories from the cosmos
        </motion.p>

        <motion.div
          className="blog-container"
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
        >
          <motion.div
            className="blog-placeholder"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <motion.div
              className="icon"
              animate={{ rotate: [0, 10, -10, 0], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              &#9733;
            </motion.div>
            <h2>Blog Posts Coming Soon</h2>
            <p>This space is reserved for articles, updates, and stories from the Cosmos Science Club. Check back soon for our first post.</p>
          </motion.div>
        </motion.div>
      </div>
    </>
  )
}