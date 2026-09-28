'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export type EventTag = 'STARGAZING' | 'COMPETITION' | 'SCREENING' | 'KEYNOTE'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0.1 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.35 },
  },
}

export interface EventItem {
  title: string
  subtitle: string
  date: string
  time: string
  venue: string
  poster: string
  desc: string
  tag: EventTag
}

const allPastEvents: EventItem[] = [
  {
    title: 'Project Hail Mary',
    subtitle: 'Interstellar Movie Screening',
    date: '18 August 2026',
    time: '6:30 PM Onwards',
    venue: 'Manipal University Jaipur',
    poster: '/events/project-hail-mary.jpeg',
    desc: 'Grand finale film screening of Project Hail Mary, concluding COSMOS Week with popcorn and sci-fi cinema under the stars.',
    tag: 'SCREENING',
  },
  {
    title: 'Lunar Lies',
    subtitle: 'Debate Unfiltered',
    date: '17 August 2026',
    time: '6:30 PM – 10:00 PM',
    venue: 'MUJ Classroom',
    poster: '/events/lunar-lies.jpeg',
    desc: 'Intense debate competition debunking cosmic conspiracy theories and testing scientific logic against reality.',
    tag: 'COMPETITION',
  },
  {
    title: 'Habitat 2050',
    subtitle: 'Healthcare Ideathon',
    date: '16 August 2026',
    time: '10:00 AM Onwards',
    venue: 'MUJ Classroom',
    poster: '/events/habitat-2050.jpeg',
    desc: 'Ideathon tackling medical breakthroughs and logistical healthcare frontiers for deep-space missions.',
    tag: 'COMPETITION',
  },
  {
    title: 'Whispers of the Universe 3.0',
    subtitle: 'A Night of Stars & Wonder',
    date: '14 August 2026',
    time: '6:00 PM – 11:00 PM',
    venue: 'Old Amphitheater',
    poster: '/events/whispers-of-the-universe.jpeg',
    desc: 'Stargazing telescopes, constellation setups, and astronomy mini-games under the clear night sky.',
    tag: 'STARGAZING',
  },
  {
    title: 'Wear the Universe',
    subtitle: 'Merch Design Challenge',
    date: '13 August 2026',
    time: '6:20 PM Onwards',
    venue: 'Classroom, MUJ',
    poster: '/events/wear-the-universe.jpeg',
    desc: 'Creative merchandise design challenge bringing cosmic artwork into wearable apparel.',
    tag: 'COMPETITION',
  },
  {
    title: 'Cosmic Capture',
    subtitle: 'Through the Lens of the Universe',
    date: '12 August 2026',
    time: '5:30 PM Onwards',
    venue: 'Old Amphitheatre',
    poster: '/events/cosmic-capture.jpeg',
    desc: 'Astrophotography and light painting workshop capturing long-exposure star trails and night sky scenes.',
    tag: 'STARGAZING',
  },
  {
    title: 'Physics Unplugged',
    subtitle: 'Featuring Prof. H. C. Verma',
    date: '12 March 2026',
    time: '10:00 AM Onwards',
    venue: 'Smt. Vasantipai Auditorium',
    poster: '/events/physics-unplugged.jpeg',
    desc: 'Keynote address, live experiments, and interactive Q&A session with Padma Shri Prof. H. C. Verma.',
    tag: 'KEYNOTE',
  },
  {
    title: 'Whispers of the Universe 2.0',
    subtitle: 'Stargazing & Cosmic Vibes',
    date: '01 February 2026',
    time: '6:00 PM – 11:00 PM',
    venue: 'Old Amphitheater',
    poster: '/events/whispers-of-the-universe-2.jpeg',
    desc: 'Hands-on telescope observations, gaming stalls, interactive setups, and acoustic jamming.',
    tag: 'STARGAZING',
  },
  {
    title: 'TIMELAPSE',
    subtitle: 'A Reverse-Engineering EraThon',
    date: '31 January 2026',
    time: '10:00 AM – 3:00 PM',
    venue: 'Old Mess, MUJ',
    poster: '/events/timelapse.jpg',
    desc: 'Reverse-engineering EraThon exploring past, present, and future technology timelines with cash prizes up to ₹5,000.',
    tag: 'COMPETITION',
  },
  {
    title: 'SINGULARITY',
    subtitle: 'Where space bends & time breaks',
    date: '15 January 2026',
    time: '6:30 PM Onwards',
    venue: 'Online (Webinar)',
    poster: '/events/singularity.jpg',
    desc: 'Astrophysics session led by researcher Shagun Thakur exploring black holes, time dilation, and space reality followed by interactive Q&A.',
    tag: 'KEYNOTE',
  },
  {
    title: "Tesla's Lost Inventions",
    subtitle: 'The Campus Treasure Hunt',
    date: '11 October 2025',
    time: '11:00 AM – 5:00 PM',
    venue: 'Old Mess, MUJ Campus',
    poster: '/events/teslas-lost-inventions.jpeg',
    desc: 'Solve electromagnetic riddles and uncover Nikola Tesla’s forgotten masterworks across campus.',
    tag: 'COMPETITION',
  },
  {
    title: 'Nebula Nexus',
    subtitle: 'Code The Cosmos Hackathon',
    date: '20 July 2025',
    time: 'Full Day Event',
    venue: 'Online (Unstop)',
    poster: '/events/nebula-nexus.jpeg',
    desc: 'Pan-India frontend web hackathon designing interstellar user interfaces and space apps.',
    tag: 'COMPETITION',
  },
  {
    title: 'Innovaite',
    subtitle: 'Fueling Tomorrow with Smart Ideas',
    date: '18–19 April 2025',
    time: 'Online / Presentation',
    venue: 'MUJ Campus & Virtual',
    poster: '/events/innovaite.jpeg',
    desc: 'National presentation and pitching ideathon driving sustainable innovations and artificial intelligence.',
    tag: 'COMPETITION',
  },
  {
    title: 'Nebula Nights',
    subtitle: 'Cosmos x Randomize (Fest 2.0)',
    date: '05 April 2025',
    time: '6:30 PM Onwards',
    venue: 'Old Amphitheatre',
    poster: '/events/nebula-nights.jpeg',
    desc: 'An open-air evening blending gaming setups, interactive science stalls, telescope viewings, and acoustic music.',
    tag: 'STARGAZING',
  },

  {
    title: 'CosmoZone Hackathon',
    subtitle: 'Cosmos x Ozone Space (Oneiros)',
    date: '21–22 February 2025',
    time: 'Starts 10:00 AM',
    venue: 'Vasanti Pai Audi',
    poster: '/events/cosmozone-hackathon.jpeg',
    desc: 'Interstellar tech hackathon with a ₹1 Lakh prize pool and exclusive internship offers.',
    tag: 'COMPETITION',
  },
  {
    title: 'Celestial Serenade',
    subtitle: 'Under The Moonlit Sky',
    date: '20 February 2025',
    time: '6:00 PM – 10:00 PM',
    venue: 'Old Amphitheater',
    poster: '/events/celestial-serenade.jpeg',
    desc: 'A fusion of astrophysics discussions and live sky observing with the Department of Physics.',
    tag: 'STARGAZING',
  },

  {
    title: 'Grah Sanrekhan',
    subtitle: 'Planetary Alignment Night',
    date: '25 January 2025',
    time: '6:00 PM – 10:00 PM',
    venue: 'Old Amphitheatre',
    poster: '/events/grah-sanrekhan.jpeg',
    desc: 'Planetary observation session organized on the eve of Republic Day with the Department of Physics.',
    tag: 'STARGAZING',
  },
  {
    title: 'Quigencia 8.0',
    subtitle: 'The Nuclear Fallout Hunt',
    date: '30 November 2024',
    time: '10:00 AM',
    venue: 'Old Mess',
    poster: '/events/quigencia-8.jpeg',
    desc: 'Post-apocalyptic fallout treasure hunt across campus with a ₹10,000 prize pool.',
    tag: 'COMPETITION',
  },
]

const FILTER_TAGS = ['ALL', 'STARGAZING', 'COMPETITION', 'SCREENING', 'KEYNOTE'] as const

const TAG_ICONS: Record<EventTag, string> = {
  STARGAZING: '✨',
  COMPETITION: '🏆',
  SCREENING: '🎬',
  KEYNOTE: '🎤',
}

function PosterSpace({ src, alt, tag, venue }: { src: string; alt: string; tag: EventTag; venue: string }) {
  const [imgSrc, setImgSrc] = useState(src)
  const [error, setError] = useState(false)

  const handleImageError = () => {
    if (imgSrc.endsWith('.jpg')) {
      setImgSrc(imgSrc.replace('.jpg', '.png'))
    } else if (imgSrc.endsWith('.png')) {
      setImgSrc(imgSrc.replace('.png', '.jpeg'))
    } else {
      setError(true)
    }
  }

  return (
    <div className="poster-space">
      <span className={`tag-badge tag-${tag.toLowerCase()}`}>
        {tag}
      </span>
      {error || !imgSrc ? (
        <div className={`poster-glass-placeholder tag-bg-${tag.toLowerCase()}`}>
          <span className="placeholder-icon">{TAG_ICONS[tag]}</span>
          <span className="placeholder-text">📍 {venue}</span>
        </div>
      ) : (
        <img
          src={imgSrc}
          alt={alt}
          loading="lazy"
          onError={handleImageError}
        />
      )}
    </div>
  )
}

export default function Events() {
  const [activeFilter, setActiveFilter] = useState<string>('ALL')
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null)

  const filteredEvents = activeFilter === 'ALL'
    ? allPastEvents
    : allPastEvents.filter((evt) => evt.tag === activeFilter)

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@600;700;800;900&family=Inter:wght@300;400;500;600;700&display=swap');

        * { margin: 0; padding: 0; box-sizing: border-box; }

        html, body {
          width: 100%;
          min-height: 100%;
          background: #060d19;
          font-family: 'Inter', sans-serif;
          color: #e2e8f0;
        }

        /* Top gradient backdrop to prevent content bleeding above fixed header when scrolling */
        body::before {
          content: '';
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 95px;
          background: linear-gradient(180deg, #060d19 0%, rgba(6, 13, 25, 0.85) 65%, transparent 100%);
          z-index: 9;
          pointer-events: none;
        }

        .spline-container {
          position: fixed;
          top: 0; left: 0;
          width: 100vw; height: 100vh;
          z-index: 0;
          pointer-events: none;
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
          border: 1px solid rgba(255, 255, 255, 0.18);
          background: linear-gradient(135deg, rgba(255,255,255,0.16), rgba(255,255,255,0.04) 50%, rgba(120,180,255,0.1));
          backdrop-filter: blur(32px) saturate(200%) brightness(1.1);
          -webkit-backdrop-filter: blur(32px) saturate(200%) brightness(1.1);
          box-shadow: inset 0 1.5px 0 rgba(255,255,255,0.35), inset 1px 0 0 rgba(255,255,255,0.2), 0 8px 40px rgba(0,0,0,0.5);
        }

        .logo {
          position: fixed;
          top: 10px;
          left: 20px;
          z-index: 20;
          display: flex;
          align-items: center;
          text-decoration: none;
        }
        .logo img {
          height: 64px;
          width: auto;
          object-fit: contain;
        }

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
          padding: 130px 48px 80px;
          max-width: 1280px;
          margin: 0 auto;
        }

        .header-section {
          text-align: center;
          margin-bottom: 40px;
        }

        .page-title {
          font-family: 'Orbitron', sans-serif;
          font-size: 44px;
          font-weight: 900;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: white;
          margin-bottom: 10px;
          text-shadow: 0 0 35px rgba(167,139,250,0.4);
        }

        .page-subtitle {
          font-size: 13px;
          letter-spacing: 0.2em;
          color: rgba(255,255,255,0.5);
          text-transform: uppercase;
        }

        /* Filter Pills */
        .filter-bar {
          display: flex;
          justify-content: center;
          gap: 10px;
          flex-wrap: wrap;
          margin-bottom: 50px;
        }

        .filter-btn {
          font-family: 'Orbitron', sans-serif;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.12em;
          padding: 10px 22px;
          border-radius: 50px;
          border: 1px solid rgba(255, 255, 255, 0.15);
          background: rgba(255, 255, 255, 0.05);
          color: rgba(255, 255, 255, 0.6);
          cursor: pointer;
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .filter-btn:hover {
          color: white;
          background: rgba(255, 255, 255, 0.12);
          border-color: rgba(255, 255, 255, 0.3);
        }

        .filter-btn.active {
          color: white;
          background: linear-gradient(135deg, rgba(167, 139, 250, 0.4), rgba(96, 165, 250, 0.25));
          border-color: rgba(167, 139, 250, 0.7);
          box-shadow: 0 0 24px rgba(167, 139, 250, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.4);
        }

        /* Liquid Glass Cards Grid with Poster Space */
        .events-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 26px;
        }

        .event-card {
          display: flex;
          flex-direction: column;
          background: linear-gradient(135deg, rgba(255,255,255,0.14), rgba(255,255,255,0.03) 50%, rgba(120,180,255,0.08));
          backdrop-filter: blur(32px) saturate(200%);
          -webkit-backdrop-filter: blur(32px) saturate(200%);
          border: 1px solid rgba(255,255,255,0.18);
          border-radius: 24px;
          padding: 0 0 20px 0;
          cursor: pointer;
          transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: inset 0 1.5px 0 rgba(255,255,255,0.3), inset 1px 0 0 rgba(255,255,255,0.15), 0 10px 40px rgba(0,0,0,0.45);
          position: relative;
          overflow: hidden;
        }

        .event-card:hover {
          transform: translateY(-5px) scale(1.01);
          border-color: rgba(167,139,250,0.55);
          box-shadow: inset 0 1.5px 0 rgba(255,255,255,0.4), 0 20px 50px rgba(0,0,0,0.6), 0 0 30px rgba(167,139,250,0.25);
          background: linear-gradient(135deg, rgba(255,255,255,0.18), rgba(255,255,255,0.05) 50%, rgba(120,180,255,0.14));
        }

        /* Dedicated Poster Space Frame matching standard vertical poster proportions */
        .poster-space {
          width: 100%;
          aspect-ratio: 3 / 4;
          overflow: hidden;
          position: relative;
          background: linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02));
          border-bottom: 1px solid rgba(255, 255, 255, 0.14);
        }

        .poster-space img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.5s ease;
        }

        .event-card:hover .poster-space img {
          transform: scale(1.05);
        }

        .poster-glass-placeholder {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 6px;
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
        }

        .poster-glass-placeholder.tag-bg-stargazing {
          background: linear-gradient(135deg, rgba(56, 189, 248, 0.22), rgba(10, 22, 40, 0.5));
        }
        .poster-glass-placeholder.tag-bg-competition {
          background: linear-gradient(135deg, rgba(192, 132, 252, 0.22), rgba(10, 22, 40, 0.5));
        }
        .poster-glass-placeholder.tag-bg-screening {
          background: linear-gradient(135deg, rgba(251, 191, 36, 0.22), rgba(10, 22, 40, 0.5));
        }
        .poster-glass-placeholder.tag-bg-keynote {
          background: linear-gradient(135deg, rgba(52, 211, 153, 0.22), rgba(10, 22, 40, 0.5));
        }

        .placeholder-icon {
          font-size: 32px;
          filter: drop-shadow(0 0 10px rgba(255,255,255,0.3));
        }

        .placeholder-text {
          font-family: 'Inter', sans-serif;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.04em;
          color: rgba(255, 255, 255, 0.75);
          text-align: center;
          padding: 0 14px;
        }

        .tag-badge {
          position: absolute;
          top: 12px;
          right: 12px;
          font-family: 'Orbitron', sans-serif;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.12em;
          padding: 5px 12px;
          border-radius: 50px;
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          box-shadow: 0 4px 12px rgba(0,0,0,0.3);
          z-index: 2;
        }

        .tag-badge.tag-stargazing {
          color: #38bdf8;
          background: rgba(14, 116, 144, 0.75);
          border: 1px solid rgba(56, 189, 248, 0.5);
        }

        .tag-badge.tag-competition {
          color: #c084fc;
          background: rgba(126, 34, 206, 0.75);
          border: 1px solid rgba(192, 132, 252, 0.5);
        }

        .tag-badge.tag-screening {
          color: #fbbf24;
          background: rgba(180, 83, 9, 0.75);
          border: 1px solid rgba(251, 191, 36, 0.5);
        }

        .tag-badge.tag-keynote {
          color: #34d399;
          background: rgba(4, 120, 87, 0.75);
          border: 1px solid rgba(52, 211, 153, 0.5);
        }

        .event-card-body {
          display: flex;
          flex-direction: column;
          flex-grow: 1;
          padding: 16px 20px 0 20px;
        }

        .event-meta-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 8px;
        }

        .event-date {
          font-size: 11px;
          color: #a78bfa;
          font-weight: 600;
          letter-spacing: 0.05em;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .event-date::before {
          content: '';
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #a78bfa;
          box-shadow: 0 0 8px #a78bfa;
        }

        .event-title {
          font-family: 'Orbitron', sans-serif;
          font-size: 18px;
          font-weight: 800;
          letter-spacing: 0.04em;
          color: white;
          margin-bottom: 4px;
          line-height: 1.3;
        }

        .event-one-liner {
          font-size: 12.5px;
          color: rgba(255, 255, 255, 0.65);
          line-height: 1.5;
          margin-bottom: 18px;
          flex-grow: 1;
        }

        .card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 12px;
          border-top: 1px solid rgba(255, 255, 255, 0.12);
        }

        .event-venue {
          font-size: 10.5px;
          color: rgba(255, 255, 255, 0.45);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          max-width: 55%;
        }

        .know-more-btn {
          font-family: 'Orbitron', sans-serif;
          font-size: 9.5px;
          font-weight: 700;
          letter-spacing: 0.12em;
          color: #0A1628;
          background: linear-gradient(135deg, #ffffff, #c8dcff);
          border: none;
          border-radius: 50px;
          padding: 7px 15px;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 5px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.25);
          transition: all 0.25s ease;
        }

        .event-card:hover .know-more-btn {
          transform: translateX(2px);
          box-shadow: 0 6px 18px rgba(255,255,255,0.3);
        }

        /* Interactive Liquid Glass Modal */
        .modal-overlay {
          position: fixed;
          inset: 0;
          z-index: 100;
          background: rgba(6, 13, 25, 0.78);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
        }

        .modal-card {
          width: 100%;
          max-width: 640px;
          background: linear-gradient(145deg, rgba(255,255,255,0.18), rgba(255,255,255,0.05) 50%, rgba(120,180,255,0.12));
          backdrop-filter: blur(36px) saturate(200%);
          -webkit-backdrop-filter: blur(36px) saturate(200%);
          border: 1px solid rgba(255,255,255,0.22);
          border-radius: 28px;
          padding: 32px;
          position: relative;
          box-shadow: inset 0 1.5px 0 rgba(255,255,255,0.35), 0 25px 60px rgba(0,0,0,0.75);
          color: white;
          max-height: 90vh;
          overflow-y: auto;
        }

        .modal-close {
          position: absolute;
          top: 20px;
          right: 20px;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.2);
          background: rgba(255,255,255,0.08);
          color: white;
          font-size: 16px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
          z-index: 10;
        }
        .modal-close:hover {
          background: rgba(255,255,255,0.2);
          border-color: rgba(255,255,255,0.4);
        }

        .modal-poster {
          width: 100%;
          max-height: 420px;
          object-fit: contain;
          background: rgba(0, 0, 0, 0.4);
          border-radius: 18px;
          margin-bottom: 20px;
          border: 1px solid rgba(255, 255, 255, 0.15);
        }

        .modal-title {
          font-family: 'Orbitron', sans-serif;
          font-size: 26px;
          font-weight: 800;
          letter-spacing: 0.05em;
          margin-bottom: 6px;
          line-height: 1.3;
        }

        .modal-subtitle {
          font-size: 14px;
          color: #93c5fd;
          font-weight: 500;
          margin-bottom: 20px;
        }

        .modal-meta-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
          padding: 16px;
          border-radius: 16px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          font-size: 12px;
          color: rgba(255,255,255,0.8);
          margin-bottom: 20px;
        }

        .modal-meta-item strong {
          display: block;
          font-size: 10px;
          letter-spacing: 0.08em;
          color: rgba(255,255,255,0.45);
          text-transform: uppercase;
          margin-bottom: 3px;
        }

        .modal-desc {
          font-size: 13.5px;
          color: rgba(255,255,255,0.85);
          line-height: 1.75;
        }

        @media (max-width: 1024px) {
          .events-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 768px) {
          .logo {
            top: 10px;
            left: 12px;
          }
          .logo img {
            height: 52px;
            width: auto;
          }

          header {
            top: 10px;
            right: 12px;
            left: auto;
            transform: none;
            width: auto;
            max-width: calc(100% - 76px);
            height: 52px;
            padding: 2px 8px;
            border-radius: 50px;
          }

          nav {
            overflow-x: auto;
            max-width: 100%;
            scrollbar-width: none;
            -ms-overflow-style: none;
          }
          nav::-webkit-scrollbar {
            display: none;
          }

          nav a {
            font-size: 9px;
            padding: 5px 9px;
          }

          .join-btn {
            font-size: 8.5px;
            padding: 6px 10px;
            margin-left: 4px;
          }

          .content {
            padding: 90px 16px 60px;
          }
          .events-grid {
            grid-template-columns: 1fr;
          }
          .page-title {
            font-size: 28px;
          }
          .modal-card {
            padding: 20px;
          }
          .modal-meta-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="spline-container">
        <iframe
          src="https://my.spline.design/thebluemarble-3BkvTwYV0pmMUmjMet2lcF95/"
          frameBorder="0"
          width="100%"
          height="100%"
          title="The Blue Marble - Events"
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
          <a href="/events" className="active">Events</a>
          <a href="/newsletter">Newsletter</a>
          <a href="/blog">Blog</a>
        </nav>
        <a href="/join" className="join-btn">BECOME A MEMBER</a>
      </header>

      <div className="content">
        <div className="header-section">
          <motion.h1
            className="page-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            EVENTS ARCHIVE
          </motion.h1>

          <motion.p
            className="page-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            Explore past chapters and cosmic voyages
          </motion.p>
        </div>

        <motion.div
          className="filter-bar"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          {FILTER_TAGS.map((tag) => (
            <button
              key={tag}
              className={`filter-btn ${activeFilter === tag ? 'active' : ''}`}
              onClick={() => setActiveFilter(tag)}
            >
              {tag}
            </button>
          ))}
        </motion.div>

        <motion.div
          className="events-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          key={activeFilter}
        >
          <AnimatePresence mode="popLayout">
            {filteredEvents.map((evt) => (
              <motion.div
                key={evt.title + evt.date}
                className="event-card"
                variants={cardVariants}
                layout
                onClick={() => setSelectedEvent(evt)}
              >
                {/* Poster Space Frame */}
                <PosterSpace src={evt.poster} alt={evt.title} tag={evt.tag} venue={evt.venue} />

                <div className="event-card-body">
                  <div className="event-meta-row">
                    <span className="event-date">{evt.date}</span>
                  </div>

                  <h2 className="event-title">{evt.title}</h2>
                  <p className="event-one-liner">{evt.subtitle}</p>

                  <div className="card-footer">
                    <span className="event-venue">📍 {evt.venue}</span>
                    <button className="know-more-btn">
                      KNOW MORE <span aria-hidden="true">→</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Full Data Liquid Glass Modal */}
      <AnimatePresence>
        {selectedEvent && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedEvent(null)}
          >
            <motion.div
              className="modal-card"
              initial={{ scale: 0.92, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 15 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="modal-close" onClick={() => setSelectedEvent(null)}>✕</button>
              
              {/* Render poster image inside modal */}
              {selectedEvent.poster && (
                <img
                  className="modal-poster"
                  src={selectedEvent.poster}
                  alt={selectedEvent.title}
                  onError={(e) => { e.currentTarget.style.display = 'none' }}
                />
              )}

              <span className={`tag-badge tag-${selectedEvent.tag.toLowerCase()}`}>
                {selectedEvent.tag}
              </span>

              <h2 className="modal-title" style={{ marginTop: '12px' }}>{selectedEvent.title}</h2>
              <div className="modal-subtitle">{selectedEvent.subtitle}</div>

              <div className="modal-meta-grid">
                <div className="modal-meta-item">
                  <strong>Date</strong>
                  📅 {selectedEvent.date}
                </div>
                <div className="modal-meta-item">
                  <strong>Time</strong>
                  🕒 {selectedEvent.time}
                </div>
                <div className="modal-meta-item">
                  <strong>Venue</strong>
                  📍 {selectedEvent.venue}
                </div>
              </div>

              <p className="modal-desc">{selectedEvent.desc}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}