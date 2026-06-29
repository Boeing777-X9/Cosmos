'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const bentoVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
}

const bentoItemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
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

const stats = [
  { value: '50+', label: 'Events Organized' },
  { value: '200+', label: 'Active Members' },
  { value: '5+', label: 'Years Active' },
  { value: '15+', label: 'Workshops & Seminars' },
]

const activities = [
  {
    title: 'Technical & Scientific Events',
    desc: 'Workshops, seminars, and technical competitions that push the boundaries of practical knowledge. From coding sprints to robotics battles, members gain hands-on expertise in cutting-edge fields.',
    icon: '\u2699',
    color: '#5eead4',
    span: 'wide',
  },
  {
    title: 'Astronomy & Exploration',
    desc: 'Stargazing nights, planetarium excursions, and deep dives into space science. Track constellations, chase meteor showers, and explore the cosmos through professional telescopes.',
    icon: '\u2606',
    color: '#a78bfa',
    span: 'narrow',
  },
  {
    title: 'Innovation Platforms',
    desc: 'Ideation forums, research presentations, and innovation challenges for budding scientists. Pitch your ideas, collaborate on projects, and turn concepts into real-world impact.',
    icon: '\u2728',
    color: '#f472b6',
    span: 'narrow',
  },
  {
    title: 'Campus Engagement',
    desc: 'Interactive events, science festivals, and outreach programs that bring science to campus life. Quiz competitions, model exhibitions, and demo fairs that spark curiosity across disciplines.',
    icon: '\u2637',
    color: '#fb923c',
    span: 'wide',
  },
  {
    title: 'Social Outreach',
    desc: 'Community service initiatives and educational programs making science accessible to all. School visits, science fairs in underserved communities, and public awareness campaigns.',
    icon: '\u2617',
    color: '#2dd4bf',
    span: 'narrow',
  },
  {
    title: 'Guest Lectures & Seminars',
    desc: 'Regular talks from researchers, industry professionals, and academicians. Gain insights into cutting-edge developments in astrophysics, quantum technology, AI, and space exploration.',
    icon: '\u25C7',
    color: '#38bdf8',
    span: 'wide',
  },
  {
    title: 'Research & Publication',
    desc: 'Undergraduate research opportunities, paper writing mentorship, and symposium presentations. Work alongside faculty on projects spanning astronomy, condensed matter physics, and computational science.',
    icon: '\u2727',
    color: '#c084fc',
    span: 'full',
  },
]

const team = [
  { role: 'Faculty Advisor', name: 'Dr. A. Sharma', dept: 'Department of Physics' },
  { role: 'President', name: 'Riya Verma', dept: 'B.Tech CSE' },
  { role: 'Vice President', name: 'Arjun Singh', dept: 'B.Tech ME' },
  { role: 'Secretary', name: 'Priya Patel', dept: 'B.Sc. Physics' },
]

export default function About() {
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
          max-width: 1100px;
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

        .about-glass {
          background: linear-gradient(
            135deg,
            rgba(255, 255, 255, 0.08) 0%,
            rgba(255, 255, 255, 0.02) 50%,
            rgba(120, 180, 255, 0.04) 100%
          );
          backdrop-filter: blur(20px) saturate(180%);
          -webkit-backdrop-filter: blur(20px) saturate(180%);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 24px;
          padding: 48px;
          margin-bottom: 60px;
        }

        .about-glass h2 {
          font-size: 28px;
          font-weight: 800;
          letter-spacing: 0.08em;
          color: white;
          margin-bottom: 20px;
          text-transform: uppercase;
        }

        .about-glass h2 span {
          background: linear-gradient(120deg, #5eead4, #a78bfa);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .about-glass p {
          font-size: 11px;
          font-weight: 400;
          letter-spacing: 0.08em;
          line-height: 1.8;
          color: rgba(255, 255, 255, 0.6);
          margin-bottom: 16px;
        }

        .about-glass p:last-child {
          margin-bottom: 0;
        }

        .about-highlight {
          display: inline-block;
          padding: 3px 10px;
          border-radius: 6px;
          background: rgba(94, 234, 212, 0.1);
          border: 1px solid rgba(94, 234, 212, 0.15);
          color: #5eead4;
          font-size: 9px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .bento-grid {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 16px;
          margin-bottom: 80px;
        }

        .bento-card {
          background: linear-gradient(
            135deg,
            rgba(255, 255, 255, 0.08) 0%,
            rgba(255, 255, 255, 0.02) 50%,
            rgba(120, 180, 255, 0.04) 100%
          );
          backdrop-filter: blur(20px) saturate(180%);
          -webkit-backdrop-filter: blur(20px) saturate(180%);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 20px;
          padding: 32px 28px;
          transition: all 0.35s ease;
          position: relative;
          overflow: hidden;
        }

        .bento-card::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 20px;
          opacity: 0;
          transition: opacity 0.35s ease;
          background: linear-gradient(
            135deg,
            rgba(94, 234, 212, 0.05) 0%,
            rgba(167, 139, 250, 0.05) 100%
          );
        }

        .bento-card:hover::before {
          opacity: 1;
        }

        .bento-card:hover {
          transform: translateY(-4px);
          border-color: rgba(255, 255, 255, 0.18);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.3);
        }

        .bento-card.wide {
          grid-column: span 2;
        }

        .bento-card.full {
          grid-column: span 3;
        }

        .bento-icon-wrap {
          width: 40px;
          height: 40px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 16px;
          font-size: 18px;
          border: 1px solid rgba(255, 255, 255, 0.06);
          transition: all 0.3s ease;
        }

        .bento-card:hover .bento-icon-wrap {
          transform: scale(1.05);
        }

        .bento-card h3 {
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.08em;
          color: rgba(255, 255, 255, 0.85);
          margin-bottom: 10px;
          text-transform: uppercase;
        }

        .bento-card p {
          font-size: 9px;
          font-weight: 400;
          letter-spacing: 0.06em;
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.4);
        }

        .bento-accent {
          position: absolute;
          top: 0;
          left: 0;
          width: 3px;
          height: 100%;
          border-radius: 20px 0 0 20px;
        }

        .bento-accent.teal {
          background: linear-gradient(180deg, #5eead4, rgba(94, 234, 212, 0.2));
        }

        .bento-accent.violet {
          background: linear-gradient(180deg, #a78bfa, rgba(167, 139, 250, 0.2));
        }

        .bento-accent.magenta {
          background: linear-gradient(180deg, #f472b6, rgba(244, 114, 182, 0.2));
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
          margin-bottom: 60px;
        }

        .stat-card {
          background: linear-gradient(
            135deg,
            rgba(255, 255, 255, 0.06) 0%,
            rgba(255, 255, 255, 0.02) 100%
          );
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 16px;
          padding: 24px 16px;
          text-align: center;
          transition: all 0.3s ease;
        }

        .stat-card:hover {
          transform: translateY(-2px);
          border-color: rgba(255, 255, 255, 0.14);
          background: rgba(255, 255, 255, 0.08);
        }

        .stat-value {
          font-size: 32px;
          font-weight: 900;
          letter-spacing: 0.02em;
          background: linear-gradient(135deg, #5eead4, #a78bfa);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          margin-bottom: 6px;
        }

        .stat-label {
          font-size: 9px;
          font-weight: 500;
          letter-spacing: 0.12em;
          color: rgba(255, 255, 255, 0.4);
          text-transform: uppercase;
        }

        .team-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
          margin-bottom: 80px;
        }

        .team-card {
          background: linear-gradient(
            135deg,
            rgba(255, 255, 255, 0.08) 0%,
            rgba(255, 255, 255, 0.02) 100%
          );
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 16px;
          padding: 28px 20px;
          text-align: center;
          transition: all 0.3s ease;
        }

        .team-card:hover {
          transform: translateY(-3px);
          border-color: rgba(255, 255, 255, 0.15);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.25);
        }

        .team-avatar {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          margin: 0 auto 14px;
          background: linear-gradient(135deg, rgba(94, 234, 212, 0.15), rgba(167, 139, 250, 0.15));
          border: 1px solid rgba(255, 255, 255, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          color: rgba(255, 255, 255, 0.5);
        }

        .team-role {
          font-size: 8px;
          font-weight: 600;
          letter-spacing: 0.15em;
          color: #5eead4;
          text-transform: uppercase;
          margin-bottom: 6px;
        }

        .team-name {
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.05em;
          color: rgba(255, 255, 255, 0.8);
          margin-bottom: 4px;
        }

        .team-dept {
          font-size: 8px;
          font-weight: 400;
          letter-spacing: 0.08em;
          color: rgba(255, 255, 255, 0.3);
        }

        @media (max-width: 768px) {
          .content {
            padding: 120px 24px 60px;
          }
          .page-title {
            font-size: 32px;
          }
          .about-glass {
            padding: 28px 20px;
          }
          .about-glass h2 {
            font-size: 20px;
          }
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .bento-grid {
            grid-template-columns: 1fr;
          }
          .bento-card.wide,
          .bento-card.full {
            grid-column: span 1;
          }
          .team-grid {
            grid-template-columns: repeat(2, 1fr);
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
              className={label === 'About' ? 'active' : ''}
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
        <iframe src="https://my.spline.design/thebluemarble-3BkvTwYV0pmMUmjMet2lcF95/" frameBorder="0" width="100%" height="100%" title="The Blue Marble - About" allow="autoplay; fullscreen; xr-spatial-tracking" />
      </div>

      <div className="content">
        <motion.h1
          className="page-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          About
        </motion.h1>
        <motion.p
          className="page-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Discover Cosmos
        </motion.p>

        <motion.div
          className="about-glass"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: 'easeOut' }}
        >
          <h2>
            COSMOS — <span>The Science Club</span>
          </h2>
          <p>
            Operating under the Department of Physics at Manipal University Jaipur, COSMOS unites students driven by curiosity in science, astronomy, technology, and innovation. The club serves as a launchpad for scientific exploration, hands-on learning, and community impact.
          </p>
          <p>
            With a growing membership and consistent year-round programming, COSMOS has established itself as one of the most active and visible student organizations on campus.
          </p>
          <div className="about-highlight">Established at MUJ &middot; Department of Physics</div>
        </motion.div>

        <motion.div
          className="stats-grid"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
        >
          {stats.map((s) => (
            <motion.div
              key={s.label}
              className="stat-card"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="stat-value">{s.value}</div>
              <div className="stat-label">{s.label}</div>
            </motion.div>
          ))}
        </motion.div>

        <SectionTitle>Areas of Activity</SectionTitle>
        <motion.div
          className="bento-grid"
          variants={bentoVariants}
          initial="hidden"
          animate="visible"
        >
          {activities.map((a, i) => (
            <motion.div
              key={a.title}
              className={`bento-card ${a.span === 'wide' ? 'wide' : ''} ${a.span === 'full' ? 'full' : ''}`}
              variants={bentoItemVariants}
              whileHover={{ scale: 1.02, y: -4 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="bento-accent" style={{ background: `linear-gradient(180deg, ${a.color}, rgba(255,255,255,0.05))` }} />
              <div className="bento-icon-wrap" style={{ background: `${a.color}15`, borderColor: `${a.color}25`, color: a.color }}>{a.icon}</div>
              <h3>{a.title}</h3>
              <p>{a.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        <SectionTitle>Leadership</SectionTitle>
        <motion.div
          className="team-grid"
          variants={bentoVariants}
          initial="hidden"
          animate="visible"
        >
          {team.map((m) => (
            <motion.div
              key={m.name}
              className="team-card"
              variants={bentoItemVariants}
              whileHover={{ scale: 1.03, y: -3 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="team-avatar">{m.name.charAt(0)}</div>
              <div className="team-role">{m.role}</div>
              <div className="team-name">{m.name}</div>
              <div className="team-dept">{m.dept}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  )
}
