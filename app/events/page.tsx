'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: 'spring' as const, stiffness: 120, damping: 20 },
  },
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div
      ref={ref}
      className="section-title"
      initial={{ opacity: 0, x: -30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <span className="glow" />
      {children}
    </motion.div>
  )
}

export default function Events() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&display=swap');

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        html, body {
          width: 100%;
          min-height: 100%;
          background: #0A1628;
          font-family: 'Orbitron', sans-serif;
        }

        .spline-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          z-index: 0;
        }

        iframe {
          width: 100%;
          height: 100%;
          border: none;
          display: block;
        }

        header {
          position: fixed;
          top: 16px;
          left: 50%;
          transform: translateX(-50%);
          width: calc(100% - 64px);
          max-width: 900px;
          z-index: 10;
          padding: 2px 16px;
          height: 70px;
          border-radius: 24px;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.15);
          background: linear-gradient(
            135deg,
            rgba(255, 255, 255, 0.18) 0%,
            rgba(255, 255, 255, 0.06) 50%,
            rgba(120, 180, 255, 0.1) 100%
          );
          backdrop-filter: blur(32px) saturate(200%) brightness(1.1);
          -webkit-backdrop-filter: blur(32px) saturate(200%) brightness(1.1);
          box-shadow:
            inset 0 1.5px 0 rgba(255, 255, 255, 0.35),
            inset 1px 0 0 rgba(255, 255, 255, 0.2),
            0 8px 40px rgba(0, 0, 0, 0.4);
        }

        .logo {
          position: fixed;
          top: -120px;
          left: -120px;
          z-index: 20;
          text-decoration: none;
        }

        .logo img {
          height: 400px;
          width: auto;
        }

        .header-start, .header-end {
          display: none;
        }

        nav {
          display: flex;
          width: fit-content;
          margin: 0 auto;
          align-items: center;
          gap: 2px;
          padding: 4px 6px;
          border-radius: 50px;
          border: 1px solid rgba(255, 255, 255, 0.12);
          background: rgba(255, 255, 255, 0.07);
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15);
        }

        nav a {
          font-family: 'Orbitron', sans-serif;
          font-size: 10px;
          font-weight: 400;
          letter-spacing: 0.1em;
          color: rgba(255, 255, 255, 0.6);
          text-decoration: none;
          padding: 7px 15px;
          border-radius: 50px;
          transition: all 0.25s ease;
          white-space: nowrap;
        }

        nav a:hover {
          color: white;
          background: rgba(255, 255, 255, 0.12);
        }

        nav a.active {
          color: white;
          background: linear-gradient(
            135deg,
            rgba(255, 255, 255, 0.2),
            rgba(255, 255, 255, 0.08)
          );
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.3);
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
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
          transition: all 0.25s ease;
          position: absolute;
          right: 16px;
          top: 50%;
          transform: translateY(-50%);
        }

        .join-btn:hover {
          transform: translateY(calc(-50% - 1px));
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
        }

        .content {
          position: relative;
          z-index: 1;
          padding: 120px 64px 80px;
          max-width: 1200px;
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
          text-shadow: 0 0 40px rgba(120, 180, 255, 0.3);
        }

        .page-subtitle {
          font-size: 12px;
          font-weight: 400;
          letter-spacing: 0.3em;
          color: rgba(255, 255, 255, 0.5);
          text-align: center;
          margin-bottom: 60px;
          text-transform: uppercase;
        }

        .section-title {
          font-size: 20px;
          font-weight: 700;
          letter-spacing: 0.15em;
          color: white;
          text-transform: uppercase;
          margin-bottom: 24px;
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .section-title .glow {
          display: inline-block;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #5eead4;
          box-shadow: 0 0 12px #5eead4, 0 0 24px rgba(94, 234, 212, 0.4);
          animation: pulse 2s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.8); }
        }

        .events-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 20px;
          margin-bottom: 80px;
        }

        .past-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin-bottom: 80px;
        }

        .poster-placeholder {
          width: 100%;
          aspect-ratio: 16 / 9;
          border-radius: 12px;
          background: linear-gradient(
            135deg,
            rgba(94, 234, 212, 0.06),
            rgba(167, 139, 250, 0.06)
          );
          border: 1px dashed rgba(255, 255, 255, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 16px;
          font-size: 24px;
          color: rgba(255, 255, 255, 0.15);
          transition: all 0.3s ease;
        }

        .event-card:hover .poster-placeholder {
          border-color: rgba(255, 255, 255, 0.2);
          background: linear-gradient(
            135deg,
            rgba(94, 234, 212, 0.1),
            rgba(167, 139, 250, 0.1)
          );
        }

        .event-card {
          background: linear-gradient(
            135deg,
            rgba(255, 255, 255, 0.1) 0%,
            rgba(255, 255, 255, 0.03) 50%,
            rgba(120, 180, 255, 0.06) 100%
          );
          backdrop-filter: blur(20px) saturate(180%);
          -webkit-backdrop-filter: blur(20px) saturate(180%);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          padding: 28px;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .event-card:hover {
          transform: translateY(-4px);
          border-color: rgba(255, 255, 255, 0.2);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.3);
          background: linear-gradient(
            135deg,
            rgba(255, 255, 255, 0.14) 0%,
            rgba(255, 255, 255, 0.05) 50%,
            rgba(120, 180, 255, 0.1) 100%
          );
        }

        .event-date {
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.15em;
          color: #5eead4;
          text-transform: uppercase;
          margin-bottom: 12px;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .event-date::before {
          content: '';
          display: inline-block;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #5eead4;
          box-shadow: 0 0 8px #5eead4;
        }

        .event-card h3 {
          font-size: 16px;
          font-weight: 700;
          letter-spacing: 0.05em;
          color: white;
          margin-bottom: 10px;
        }

        .event-card p {
          font-size: 10px;
          font-weight: 400;
          letter-spacing: 0.08em;
          color: rgba(255, 255, 255, 0.55);
          line-height: 1.6;
        }

        .event-tag {
          display: inline-block;
          font-size: 8px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          padding: 4px 12px;
          border-radius: 50px;
          margin-top: 14px;
          border: 1px solid rgba(255, 255, 255, 0.12);
          background: rgba(255, 255, 255, 0.05);
          color: rgba(255, 255, 255, 0.5);
        }

        .event-tag.live {
          border-color: rgba(94, 234, 212, 0.3);
          color: #5eead4;
          background: rgba(94, 234, 212, 0.08);
          box-shadow: 0 0 12px rgba(94, 234, 212, 0.1);
        }

        .event-tag.past {
          border-color: rgba(167, 139, 250, 0.3);
          color: #a78bfa;
          background: rgba(167, 139, 250, 0.08);
        }

        @media (max-width: 768px) {
          .content {
            padding: 120px 24px 60px;
          }
          .page-title {
            font-size: 32px;
          }
          .events-grid {
            grid-template-columns: 1fr;
          }
          .past-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
      <a href="/" className="logo">
        <img src="/cosmoslogo.png" alt="Cosmos" />
      </a>

      <motion.header
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="header-start" />
        <nav>
          {['Home', 'About', 'Team', 'Events', 'Blog'].map((label, i) => (
            <motion.a
              key={label}
              href={label === 'Home' ? '/' : `/${label.toLowerCase()}`}
              className={label === 'Events' ? 'active' : ''}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.08, duration: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {label}
            </motion.a>
          ))}
        </nav>
        <div className="header-end" />
        <motion.a
          href="/join"
          className="join-btn"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9, duration: 0.4 }}
          whileHover={{ scale: 1.05, boxShadow: '0 8px 28px rgba(0,0,0,0.4)' }}
          whileTap={{ scale: 0.95 }}
        >
          BECOME A MEMBER
        </motion.a>
      </motion.header>

      <div className="spline-container">
        <iframe src="https://my.spline.design/thebluemarble-3BkvTwYV0pmMUmjMet2lcF95/" frameBorder="0" width="100%" height="100%" title="The Blue Marble - Events" allow="autoplay; fullscreen; xr-spatial-tracking" />
      </div>

      <div className="content">
        <motion.h1
          className="page-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Events
        </motion.h1>
        <motion.p
          className="page-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Explore our cosmic calendar
        </motion.p>

        <SectionTitle>Upcoming Events</SectionTitle>
        <motion.div
          className="events-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="event-card"
            variants={cardVariants}
            whileHover={{ scale: 1.02, y: -6 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="event-date">Coming Soon</div>
            <h3>Nebula Nexus</h3>
            <p>A frontend hackathon where creativity meets the cosmos. Build stunning interstellar UIs and compete to win the Nebula Nexus trophy.</p>
            <span className="event-tag live">Register Open</span>
          </motion.div>
        </motion.div>

        <SectionTitle>Past Events</SectionTitle>
        <motion.div
          className="past-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="event-card"
            variants={cardVariants}
            whileHover={{ scale: 1.02, y: -6 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="poster-placeholder">&#128247;</div>
            <div className="event-date">June 2026</div>
            <h3>Nebula Nexus</h3>
            <p>A frontend hackathon where creativity meets the cosmos. Participants built stunning interstellar UIs and competed for the Nebula Nexus trophy.</p>
            <span className="event-tag past">Completed</span>
          </motion.div>
          <motion.div
            className="event-card"
            variants={cardVariants}
            whileHover={{ scale: 1.02, y: -6 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="poster-placeholder">&#128247;</div>
            <div className="event-date">April 2026</div>
            <h3>Physics Unplugged</h3>
            <p>An immersive event exploring fundamental physics through interactive demonstrations, experiments, and engaging talks by faculty and students.</p>
            <span className="event-tag past">Completed</span>
          </motion.div>
          <motion.div
            className="event-card"
            variants={cardVariants}
            whileHover={{ scale: 1.02, y: -6 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="poster-placeholder">&#128247;</div>
            <div className="event-date">February 2026</div>
            <h3>Whispers of the Universe 2.0</h3>
            <p>A cosmic journey through astrophysics, featuring guest lectures on black holes, neutron stars, and the latest discoveries from the edge of space.</p>
            <span className="event-tag past">Completed</span>
          </motion.div>
        </motion.div>
      </div>
    </>
  )
}
