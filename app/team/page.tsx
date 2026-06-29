"use client"
import { useState } from "react"

// icons - kept inline so we don't pull in a whole icon library for two svgs
const LinkedInIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

const GitHubIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
)

type Member = {
  name: string
  role: string
  photo: string
  linkedin?: string
  github?: string
  quote?: string
}

// click anywhere on the card to flip it - quote/links live on the back.
// no "tap to flip" hint on purpose, it's nicer when people just discover it
function FlipCard({ name, role, photo, linkedin = "", github = "", quote = "" }: Member) {
  const [flipped, setFlipped] = useState(false)
  const hasLinks = linkedin || github

  return (
    <div className="flip-card" onClick={() => setFlipped(f => !f)}>
      <div className={`flip-card-inner${flipped ? " is-flipped" : ""}`}>

        <div className="flip-card-front member-card">
          <div className="card-photo">
            {photo ? (
              <img src={photo} alt={name} />
            ) : (
              <div className="card-photo-placeholder">👤</div>
            )}
          </div>
          <div className="card-info">
            <div className="card-name">{name}</div>
            <div className="card-accent-line" />
            <div className="card-role">{role}</div>

            {hasLinks && (
              <div className="card-links">
                {linkedin && (
                  // stopPropagation so clicking the icon opens the link instead of flipping the card back
                  <a href={linkedin} className="card-link" target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()}>
                    <LinkedInIcon />
                  </a>
                )}
                {github && (
                  <a href={github} className="card-link" target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()}>
                    <GitHubIcon />
                  </a>
                )}
              </div>
            )}
          </div>
        </div>

        <div className="flip-card-back member-card">
          <div className="card-back-inner">
            {/* quotes are mostly empty for now until everyone sends theirs in */}
            <p className="card-back-quote" style={{ opacity: quote ? 1 : 0.2 }}>
              {quote || "✦"}
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}

// little pill heading, reused for Executive Committee / Core Committee
function SectionHeading({ title }: { title: string }) {
  return (
    <div className="section-heading">
      <div className="section-heading-label">{title}</div>
    </div>
  )
}

export default function TeamPage() {
  const facultyCoordinator: Member = {
    name: "Dr. Rashi Nathawat",
    role: "Faculty Coordinator, COSMOS",
    photo: "/team/rashi-nathawat.jpeg",
    linkedin: "https://www.linkedin.com/in/rashi-nathawat-phd-54a31663",
  }

  const executiveCommittee: Member[] = [
    { name: "Saksham Agrawal", role: "President", photo: "/team/saksham.png", linkedin: "https://www.linkedin.com/in/saksham-agrawal-8b472836a", quote:"Hi, I'm Saksham. Just trying to learn, grow, and enjoy the journey." },
    { name: "Aniqa Aziz", role: "Vice President", photo: "/team/aniqa.jpeg", linkedin: "https://www.linkedin.com/in/aniqa-aziz-4b964032b", quote:"The stars remind me there's always another zenith to reach" },
    { name: "Ojasvi Gautam", role: "General Secretary", photo: "/team/ojasvi.jpg", linkedin: "https://www.linkedin.com/in/ojasvi-gautam-789760344", quote:" 'For my part I know nothing with any certainty, but the sight of stars make me dream' ~ Vincent Van Gogh " },
    { name: "Daivik Garg", role: "Treasurer", photo: "/team/daivik.jpeg", linkedin: "https://www.linkedin.com/in/daivik-garg-90163a350", quote:"Managing your finances is not a luxuary for the rich,it is hygiene for everyone" },
    { name: "Saransh Verma", role: "Technical Secretary", photo: "/team/saransh.jpg", linkedin: "https://www.linkedin.com/in/saransh-verma-22b1ba179", github: "https://github.com/Saransh78", quote:"Not chasing perfection—just making the next move better." },
    { name: "Shriya Desai", role: "Managing Director", photo: "/team/shriya.jpg", linkedin: "#" },
    { name: "Vasavadatta Vishen", role: "Director of Operations", photo: "/team/vasavadatta.jpg", linkedin: "https://www.linkedin.com/in/vasavadatta-vishen-620b60321", quote:"Music gives a soul to the universe , wings to the mind , flight to the imagination, and life to everything "
     },
    { name: "Gurbani", role: "Creative Director", photo: "/team/gurbani.jpg", linkedin: "https://www.linkedin.com/in/gurbani-47ba87340", quote:"No one can take away the constellations that exist within you"},
    { name: "Aarna Gupta", role: "Director of External Affairs", photo: "/team/aarna.JPEG", linkedin: "https://www.linkedin.com/in/aarna-gupta-3294aa368", quote:"Curious by nature, always eager to learn something new, connect with people, and be part of meaningful initiatives." },
  ]
  const coreTeams: { domain: string; members: Member[] }[] = [
    {
      domain: "Head of Technical Projects",
      members: [
        { name: "Prakhar Upadhyay", photo: "/team/prakhar.jpeg",github: "https://github.com/FT-snow", quote:"chimichangas" },
        { name: "Mohammed Faisal", photo: "/team/faisal.jpeg", linkedin: "https://www.linkedin.com/in/mohammed-faisal-833a81375", github: "https://github.com/Boeing777-X9", quote:"One day, I'll fly the Boeing 777-9 ✈️. Until then, I'll keep building things that move the world forward 💻🚀." },
      ],
    },
    {
      domain: "Head of Events",
      members: [
        { name: "Ojash Bhatnagar", photo: "/team/ojash.jpg", linkedin: "https://in.linkedin.com/in/ojash-bhatnagar-35b37a380",quote:"Somewhere between Earth and Delusion" },
        { name: "Shailey Singh", photo: "/team/shailey.jpg", quote:"to live for the hope of it all" },
      ],
    },
    {
      domain: "Head of Logistics",
      members: [
        { name: "Nidhish Kumar", photo: "/team/nidhish.jpeg", linkedin: "https://www.linkedin.com/in/nidhish-kumar-9b5915270", quote:"B.Tech CSE,2nd year. Always look up at the stars and not down at your feet." },
        { name: "Aayan Kundu", photo: "/team/aayan.jpg", linkedin: "https://www.linkedin.com/in/aayan-kundu-734008371",github:"https://github.com/AayanKundu1303", quote:"I am Aayan Kundu (2nd Year B.Tech). Head of Logistics " },
        { name: "Abhisri Mishra", photo: "/team/abhisri.jpg", linkedin: "https://www.linkedin.com/in/abhisri-mishra-86b2503a4", quote:"Even the darkest sky is just a canvas for the next sunrise. "},
      ],
    },
    {
      domain: "Head of Operations",
      members: [
        { name: "Kyna Gupta", photo: "/team/kyna.jpeg", linkedin: "https://www.linkedin.com/in/kyna-gupta-119321399", quote:"Like gravity holds galaxies together, she keeps every mission aligned." },
        { name: "Adarsh Raj", photo: "/team/adarsh.jpeg", linkedin: "https://www.linkedin.com/in/adarsh-raj-a406a7366" },
      ],
    },
    {
      domain: "Head of Content",
      members: [
        { name: "Anubhav Das Sharma", photo: "/team/anubhav.jpg", linkedin: "https://www.linkedin.com/in/anubhav-das-sharma-739135294", quote:"Making ideas take flight" },
        { name: "Shivam Kumar", photo: "/team/shivam.png", linkedin: "https://www.linkedin.com/in/shivam-kumar-5b1965338", quote:"Your presence of mind solves half your problems" },
      ],
    },
    {
      domain: "Head of Promotions",
      members: [
        { name: "Pranay Gupta", photo: "/team/pranay.jpg", linkedin: "https://www.linkedin.com/in/pranay-gupta-b2a7b02a7", quote:"The Cosmos is limitless, and so is our potential" },
        { name: "Akshat Malik", photo: "/team/akshat.jpg", linkedin: "https://www.linkedin.com/in/akshat-malik-938229397", quote:"Not the Last time you're gonna hear my name 😎" },
        { name: "Tanushi Goyal", photo: "/team/tanushi.jpeg", linkedin: "https://www.linkedin.com/in/tanushi-goyal-3b6774373", quote:"Driven by curiosity, stardust and kindness." },
      ],
    },
    {
      domain: "Head of Graphic Design",
      members: [
        { name: "Devanshu Yadav", photo: "/team/devanshu.jpg", linkedin: "https://www.linkedin.com/in/devanshu-yadav-a1592b367", github:"https://github.com/devanshu1907", quote:"https://github.com/devanshu1907" },
        { name: "Karan Bishnoi", photo: "/team/karan.jpg", quote: "The universe expands endlessly ,so can your potential" },
        { name: "Abhilasha Bhandari", photo: "/team/abhilasha.jpg", linkedin: "https://www.linkedin.com/in/abhilasha-bhandari-005475377", quote:"Currently buffering between circuits and constellations. ECE student and graphic designer, driven by curiosity, creativity, and an impressive collection of browser tabs😭✨️" },
      ],
    },
    {
      domain: "Head of Media & Coverage",
      members: [
        { name: "Priyanshu Bagra", photo: "/team/priyanshu.jpeg", quote:"Leading with creativity, driven by innovation, and always learning. Turning ideas into impact—one project at a time." },
        { name: "Namit Agarwal", photo: "/team/namit.png", linkedin: "https://www.linkedin.com/in/namit-agarwal-b7b504396", github:"https://github.com/namit747", quote:"Turning Potential into Proof" },
      ],
    },
    {
      domain: "Head of Social Media",
      members: [
        { name: "Tanish Sharma", photo: "/team/tanish.jpg", linkedin: "https://www.linkedin.com/in/shrtanish", quote:"You can't cling to the past. Because no matter how tightly you hold on, it's already gone" },
        { name: "Shubhonkar Banerjee", photo: "/team/shubhonkar.jpeg", quote:"Loyalty is two way street, if I am asking it from you then you are getting it from me." },
      ],
    },
    {
      domain: "Head of Corporate Affairs",
      members: [
        { name: "Pranjal Raj", photo: "/team/pranjal.jpg", linkedin: "https://www.linkedin.com/in/pranjalrajverma?",quote:"A supernova begins with a star collapsing" },
        { name: "Snehal Sinha", photo: "/team/snehal.jpg", linkedin: "https://www.linkedin.com/in/snehal-sinha-5441853b5", quote:"Nabhah Sparsham Diptam" },
      ],
    },
    {
      domain: "Head of Art & Crafts",
      members: [
        { name: "Mahika", photo: "/team/mahika.jpg", quote:"A restless imagination finding poetry in everything." },
        { name: "Palak Goyal", photo: "/team/palak.jpg", quote:"Finding stories in books, inspiration in the stars, and creativity in between. ✨📚🌌" },
      ],
    },
  ]

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&family=Inter:wght@300;400;500&display=swap');

        * { margin: 0; padding: 0; box-sizing: border-box; }

        html, body {
          width: 100%;
          min-height: 100%;
          background: #0A1628;
          font-family: 'Inter', sans-serif;
        }

        /* background spline scene, sits behind everything */
        .spline-container {
          position: fixed;
          inset: 0;
          z-index: 0;
          pointer-events: none;
        }
        .spline-container iframe {
          width: 100%;
          height: 100%;
          border: none;
          display: block;
        }

        .page {
          position: relative;
          z-index: 1;
          min-height: 100vh;
          padding: 120px 60px 80px;
        }

        .page-title {
          text-align: center;
          margin-bottom: 70px;
        }
        .page-title h1 {
          font-family: 'Orbitron', sans-serif;
          font-size: 42px;
          font-weight: 700;
          color: white;
          letter-spacing: 0.2em;
          margin-bottom: 10px;
        }
        .page-title p {
          font-size: 13px;
          color: rgba(255,255,255,0.35);
          letter-spacing: 0.15em;
        }

        /* pill-style heading used between sections */
        .section-heading {
          max-width: 1200px;
          margin: 0 auto 40px;
          text-align: center;
        }
        .section-heading-label {
          display: inline-block;
          font-family: 'Orbitron', sans-serif;
          font-size: 22px;
          font-weight: 700;
          letter-spacing: 0.3em;
          color: white;
          padding: 14px 48px;
          border-radius: 50px;
          border: 1px solid rgba(255,255,255,0.18);
          background: linear-gradient(135deg, rgba(255,255,255,0.12), rgba(100,160,255,0.1));
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.25), 0 8px 32px rgba(0,0,0,0.3);
          text-shadow: 0 0 24px rgba(160,200,255,0.4);
        }

        .domain-section {
          max-width: 1200px;
          margin: 0 auto 60px;
        }
        .domain-title {
          font-family: 'Orbitron', sans-serif;
          font-size: 11px;
          font-weight: 400;
          letter-spacing: 0.25em;
          color: rgba(255,255,255,0.35);
          text-transform: uppercase;
          margin-bottom: 20px;
          padding-bottom: 12px;
          border-bottom: 1px solid rgba(255,255,255,0.07);
          text-align: center;
        }

        .cards-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 18px;
          justify-content: center;
        }

        /* the flip card itself - front has the photo/name, back has the quote */
        .flip-card {
          width: 210px;
          height: 300px;
          perspective: 1000px;
          cursor: pointer;
          flex-shrink: 0;
        }
        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transform-style: preserve-3d;
          transition: transform 0.55s cubic-bezier(0.45, 0.05, 0.55, 0.95);
        }
        .flip-card-inner.is-flipped {
          transform: rotateY(180deg);
        }

        .flip-card-front,
        .flip-card-back {
          position: absolute;
          inset: 0;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          border-radius: 20px;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.13);
          background: linear-gradient(145deg, rgba(255,255,255,0.13), rgba(255,255,255,0.04) 50%, rgba(100,160,255,0.07));
          backdrop-filter: blur(24px) saturate(180%);
          -webkit-backdrop-filter: blur(24px) saturate(180%);
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.22), 0 8px 32px rgba(0,0,0,0.3);
          transition: box-shadow 0.25s ease;
        }
        .flip-card:hover .flip-card-front,
        .flip-card:hover .flip-card-back {
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.28), 0 20px 48px rgba(0,0,0,0.45);
        }

        .flip-card-back {
          transform: rotateY(180deg);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .card-photo {
          width: 100%;
          height: 190px;
          background: rgba(255,255,255,0.04);
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          border-bottom: 1px solid rgba(255,255,255,0.07);
        }
        .card-photo img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top center;
          display: block;
        }
        .card-photo-placeholder {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.12);
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(255,255,255,0.2);
          font-size: 32px;
        }

        .card-info {
          padding: 10px 14px 12px;
        }
        .card-name {
          font-size: 13px;
          font-weight: 500;
          color: rgba(255,255,255,0.9);
          margin-bottom: 5px;
          line-height: 1.4;
        }
        .card-accent-line {
          width: 28px;
          height: 1.5px;
          background: linear-gradient(90deg, rgba(160,200,255,0.7), rgba(100,160,255,0.2));
          border-radius: 2px;
          margin-bottom: 5px;
        }
        .card-role {
          font-size: 10px;
          color: rgba(255,255,255,0.38);
          letter-spacing: 0.08em;
          line-height: 1.4;
        }
        .card-links {
          display: flex;
          gap: 8px;
          margin-top: 10px;
        }
        .card-link {
          width: 30px;
          height: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 8px;
          border: 1px solid rgba(255,255,255,0.1);
          background: rgba(255,255,255,0.05);
          text-decoration: none;
          color: rgba(255,255,255,0.4);
          transition: all 0.2s ease;
        }
        .card-link:hover {
          color: white;
          background: rgba(255,255,255,0.12);
          border-color: rgba(255,255,255,0.22);
        }

        .card-back-inner {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px 20px;
          width: 100%;
          height: 100%;
        }
        .card-back-quote {
          font-size: 11px;
          font-style: italic;
          color: rgba(255,255,255,0.55);
          text-align: center;
          line-height: 1.7;
          letter-spacing: 0.02em;
        }

        /* nav bar */
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
      `}</style>

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

      <a href="/" className="logo">
        <img src="cosmoslogo.png" alt="Cosmos" />
      </a>

      <header>
        <nav>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/team" className="active">Team</a>
          {/* <a href="/leaderboard">Leaderboard</a> */}
          <a href="/events">Events</a>
          <a href="/newsletter">Newsletter</a>
          <a href="/blog">Blog</a>
        </nav>
        <a href="/join" className="join-btn">BECOME A MEMBER</a>
      </header>

      <div className="page">
        <div className="page-title">
          <h1>THE TEAM</h1>
          <p>COSMOS · THE SCIENCE CLUB · 2026–2027</p>
        </div>

        <div className="domain-section">
          <div className="domain-title">Faculty Coordinator</div>
          <div className="cards-grid">
            <FlipCard {...facultyCoordinator} />
          </div>
        </div>

        <SectionHeading title="EXECUTIVE COMMITTEE" />
        <div className="domain-section">
          <div className="cards-grid">
            {executiveCommittee.map(m => <FlipCard key={m.name} {...m} />)}
          </div>
        </div>

        <SectionHeading title="CORE COMMITTEE" />
        {coreTeams.map(team => (
          <div key={team.domain} className="domain-section">
            <div className="domain-title">{team.domain}</div>
            <div className="cards-grid">
              {team.members.map(m => (
                <FlipCard key={m.name} {...m} role={team.domain} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  )
}