"use client"
import { useState } from "react"

// Supabase config — replace with your real values
const SUPABASE_URL = "https://YOUR_PROJECT.supabase.co"
const SUPABASE_ANON_KEY = "YOUR_ANON_KEY"

async function saveEmailToSupabase(email: string): Promise<{ error: string | null }> {
  try {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/newsletter_subscribers`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "apikey": SUPABASE_ANON_KEY,
        "Authorization": `Bearer ${SUPABASE_ANON_KEY}`,
        "Prefer": "return=minimal",
      },
      body: JSON.stringify({ email }),
    })

    if (!res.ok) {
      const err = await res.json().catch(() => ({}))
      if (res.status === 409 || err?.code === "23505") return { error: null } // duplicate = fine
      return { error: err?.message ?? "Something went wrong." }
    }

    return { error: null }
  } catch {
    return { error: "Network error — please try again." }
  }
}

const issues = [
  {
    id: 1,
    issue: "Issue 01",
    subtitle: "Our First Issue",
    excerpt: "The inaugural edition of the Cosmos Newsletter — science, discovery, and everything in between. Coming your way soon.",
  },
  {
    id: 2,
    issue: "Issue 02",
    subtitle: "Uncharted Territory",
    excerpt: "From black holes to quantum leaps — our second issue will take you deeper into the frontiers of modern science.",
  },
  {
    id: 3,
    issue: "Issue 03",
    subtitle: "Beyond the Horizon",
    excerpt: "Life at the extremes, the quantum frontier, and breakthroughs you haven't heard about yet. Stay tuned.",
  },
  {
    id: 4,
    issue: "Issue 04",
    subtitle: "The Next Chapter",
    excerpt: "More stories, more science, more Cosmos. Issue 04 is in the making — subscribe so you don't miss it.",
  },
]

export default function NewsletterPage() {
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState("")

  async function handleSubscribe(e: React.FormEvent) {
    e.preventDefault()
    if (!email.trim()) return
    setLoading(true)
    setErrorMsg("")
    const { error } = await saveEmailToSupabase(email.trim())
    setLoading(false)
    if (error) {
      setErrorMsg(error)
    } else {
      setSubscribed(true)
    }
  }

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&family=Inter:wght@300;400;500&display=swap');

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        html, body {
          width: 100%;
          min-height: 100%;
          background: #0A1628;
          font-family: 'Inter', sans-serif;
        }

        /* Spline background */
        .spline-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          z-index: 0;
          pointer-events: none;
        }

        .spline-container iframe {
          width: 100%;
          height: 100%;
          border: none;
          display: block;
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

        /* Header */
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

        /* Nav */
        nav {
          display: flex;
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
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.08));
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.3);
        }

        /* Join button */
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
        }

        .join-btn:hover {
          transform: translateY(-1px);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
        }

        /* Page layout */
        .page {
          position: relative;
          z-index: 1;
          min-height: 100vh;
          background: transparent;
          padding: 120px 60px 100px;
        }

        /* Page title */
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
          color: rgba(255, 255, 255, 0.35);
          letter-spacing: 0.15em;
        }

        /* Section pill headings — same style as CORE COMMITTEE */
        .section-heading {
          max-width: 1200px;
          margin: 0 auto 48px;
          text-align: center;
        }

        .section-label {
          display: inline-block;
          font-family: 'Orbitron', sans-serif;
          font-size: 18px;
          font-weight: 700;
          letter-spacing: 0.3em;
          color: white;
          padding: 12px 40px;
          border-radius: 50px;
          border: 1px solid rgba(255, 255, 255, 0.18);
          background: linear-gradient(
            135deg,
            rgba(255, 255, 255, 0.12) 0%,
            rgba(100, 160, 255, 0.1) 100%
          );
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.25),
            0 8px 32px rgba(0, 0, 0, 0.3);
          text-shadow: 0 0 24px rgba(160, 200, 255, 0.4);
        }

        /* Subscribe card */
        .subscribe-card {
          max-width: 680px;
          margin: 0 auto 80px;
          border-radius: 24px;
          border: 1px solid rgba(255, 255, 255, 0.15);
          background: linear-gradient(
            145deg,
            rgba(255, 255, 255, 0.13) 0%,
            rgba(255, 255, 255, 0.04) 50%,
            rgba(100, 160, 255, 0.07) 100%
          );
          backdrop-filter: blur(28px) saturate(180%);
          -webkit-backdrop-filter: blur(28px) saturate(180%);
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.22),
            0 12px 48px rgba(0, 0, 0, 0.35);
          padding: 44px 52px;
          text-align: center;
        }

        .subscribe-eyebrow {
          font-family: 'Orbitron', sans-serif;
          font-size: 9px;
          letter-spacing: 0.28em;
          color: rgba(160, 200, 255, 0.7);
          text-transform: uppercase;
          margin-bottom: 16px;
        }

        .subscribe-title {
          font-family: 'Orbitron', sans-serif;
          font-size: 26px;
          font-weight: 700;
          color: white;
          letter-spacing: 0.06em;
          margin-bottom: 12px;
          text-shadow: 0 0 32px rgba(160, 200, 255, 0.25);
        }

        .subscribe-sub {
          font-size: 13px;
          color: rgba(255, 255, 255, 0.45);
          line-height: 1.7;
          margin-bottom: 32px;
          max-width: 400px;
          margin-left: auto;
          margin-right: auto;
        }

        .subscribe-form {
          display: flex;
          gap: 10px;
          max-width: 440px;
          margin: 0 auto;
        }

        .subscribe-input {
          flex: 1;
          background: rgba(255, 255, 255, 0.07);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 50px;
          padding: 12px 20px;
          font-family: 'Inter', sans-serif;
          font-size: 13px;
          color: white;
          outline: none;
          transition: all 0.25s ease;
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.08);
        }

        .subscribe-input::placeholder {
          color: rgba(255, 255, 255, 0.28);
        }

        .subscribe-input:focus {
          border-color: rgba(160, 200, 255, 0.4);
          background: rgba(255, 255, 255, 0.1);
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.12),
            0 0 0 3px rgba(100, 160, 255, 0.12);
        }

        .subscribe-btn {
          font-family: 'Orbitron', sans-serif;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.12em;
          color: #0A1628;
          background: linear-gradient(135deg, #ffffff, #c8dcff);
          border: none;
          border-radius: 50px;
          padding: 12px 24px;
          cursor: pointer;
          white-space: nowrap;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
          transition: all 0.25s ease;
        }

        .subscribe-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .subscribe-btn:not(:disabled):hover {
          transform: translateY(-1px);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.35);
        }

        /* Success & error states */
        .subscribed-msg {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          font-size: 14px;
          color: rgba(160, 220, 160, 0.9);
          letter-spacing: 0.04em;
        }

        .error-msg {
          margin-top: 12px;
          font-size: 12px;
          color: rgba(255, 140, 140, 0.85);
          letter-spacing: 0.04em;
        }

        /* Issues grid */
        .issues-grid {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
          gap: 24px;
        }

        /* Issue card */
        .issue-card {
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.13);
          background: linear-gradient(
            145deg,
            rgba(255, 255, 255, 0.13) 0%,
            rgba(255, 255, 255, 0.04) 50%,
            rgba(100, 160, 255, 0.07) 100%
          );
          backdrop-filter: blur(24px) saturate(180%);
          -webkit-backdrop-filter: blur(24px) saturate(180%);
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.22),
            0 8px 32px rgba(0, 0, 0, 0.3);
          overflow: hidden;
          transition: transform 0.28s ease, box-shadow 0.28s ease;
        }

        .issue-card:hover {
          transform: translateY(-6px);
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.3),
            0 24px 56px rgba(0, 0, 0, 0.5);
        }

        /* Card cover area */
        .issue-cover {
          width: 100%;
          height: 170px;
          background: linear-gradient(
            135deg,
            rgba(40, 70, 160, 0.3) 0%,
            rgba(10, 22, 40, 0.7) 100%
          );
          display: flex;
          align-items: center;
          justify-content: center;
          border-bottom: 1px solid rgba(255, 255, 255, 0.07);
          position: relative;
          overflow: hidden;
        }

        .issue-cover img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        /* Atom icon placeholder — pulses softly */
        .issue-cover-placeholder svg {
          opacity: 0.15;
          animation: atomPulse 3s ease-in-out infinite;
        }

        @keyframes atomPulse {
          0%, 100% {
            opacity: 0.15;
            transform: scale(1);
          }
          50% {
            opacity: 0.28;
            transform: scale(1.06);
          }
        }

        /* UPCOMING tag — golden glow */
        .issue-tag {
          position: absolute;
          top: 14px;
          right: 14px;
          font-family: 'Orbitron', sans-serif;
          font-size: 8px;
          font-weight: 700;
          letter-spacing: 0.2em;
          color: rgba(255, 200, 100, 0.95);
          background: rgba(255, 180, 50, 0.12);
          border: 1px solid rgba(255, 200, 100, 0.3);
          border-radius: 50px;
          padding: 4px 10px;
          backdrop-filter: blur(8px);
          animation: tagGlow 2.5s ease-in-out infinite;
        }

        @keyframes tagGlow {
          0%, 100% { box-shadow: 0 0 0 rgba(255, 200, 100, 0); }
          50%       { box-shadow: 0 0 12px rgba(255, 200, 100, 0.2); }
        }

        /* Issue number watermark in cover */
        .issue-number-overlay {
          position: absolute;
          bottom: 14px;
          left: 16px;
          font-family: 'Orbitron', sans-serif;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.22em;
          color: rgba(255, 255, 255, 0.22);
        }

        /* Card body */
        .issue-body {
          padding: 20px 22px 22px;
        }

        .issue-title-upcoming {
          font-family: 'Orbitron', sans-serif;
          font-size: 18px;
          font-weight: 700;
          letter-spacing: 0.15em;
          color: rgba(255, 255, 255, 0.85);
          margin-bottom: 4px;
          text-shadow: 0 0 20px rgba(160, 200, 255, 0.2);
        }

        .issue-subtitle {
          font-family: 'Orbitron', sans-serif;
          font-size: 9px;
          font-weight: 400;
          letter-spacing: 0.18em;
          color: rgba(200, 220, 255, 0.45);
          margin-bottom: 14px;
          text-transform: uppercase;
        }

        /* Golden accent line for upcoming cards */
        .issue-accent {
          width: 28px;
          height: 1.5px;
          background: linear-gradient(90deg, rgba(255, 200, 100, 0.6), rgba(255, 180, 50, 0.1));
          border-radius: 2px;
          margin-bottom: 12px;
        }

        .issue-excerpt {
          font-size: 12px;
          color: rgba(255, 255, 255, 0.38);
          line-height: 1.75;
          margin-bottom: 20px;
        }

        /* Coming soon badge — not a button, just a status indicator */
        .issue-coming-btn {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          font-family: 'Orbitron', sans-serif;
          font-size: 8px;
          font-weight: 700;
          letter-spacing: 0.18em;
          color: rgba(255, 200, 100, 0.75);
          padding: 8px 16px;
          border-radius: 50px;
          border: 1px solid rgba(255, 200, 100, 0.2);
          background: rgba(255, 180, 50, 0.06);
          cursor: default;
          user-select: none;
        }

        /* Pulsing dot inside the badge */
        .coming-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: rgba(255, 200, 100, 0.7);
          flex-shrink: 0;
          animation: dotPulse 1.6s ease-in-out infinite;
        }

        @keyframes dotPulse {
          0%, 100% {
            opacity: 0.4;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.4);
          }
        }
      `}</style>

      {/* Spline 3D background */}
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

      {/* Logo */}
      <a href="/" className="logo">
        <img src="cosmoslogo.png" alt="Cosmos" />
      </a>

      {/* Header nav */}
      <header>
        <nav>
         <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/team">Team</a>
          {/* <a href="/leaderboard">Leaderboard</a> */}
          <a href="/events">Events</a>
          <a href="/newsletter" className="active">Newsletter</a>
          <a href="/blog">Blog</a>
        </nav>
        <a href="/join" className="join-btn">BECOME A MEMBER</a>
      </header>

      <div className="page">

        {/* Page title */}
        <div className="page-title">
          <h1>NEWSLETTER</h1>
          <p>COSMOS · THE SCIENCE CLUB · 2026–2027</p>
        </div>

        {/* Subscribe section */}
        <div className="section-heading">
          <div className="section-label">STAY IN THE LOOP</div>
        </div>

        <div className="subscribe-card">
          <div className="subscribe-eyebrow">Cosmos - The Science club</div>
          <div className="subscribe-title">Be the first to read</div>
          <p className="subscribe-sub">
            Our newsletter is coming soon. Drop your email and you'll be the first to know when we launch.
          </p>

          {subscribed ? (
            <div className="subscribed-msg">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              You're on the list — we'll reach out soon!
            </div>
          ) : (
            <>
              <form className="subscribe-form" onSubmit={handleSubscribe}>
                <input
                  className="subscribe-input"
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                  disabled={loading}
                />
                <button
                  className="subscribe-btn"
                  type="submit"
                  disabled={loading}
                >
                  {loading ? "..." : "NOTIFY ME"}
                </button>
              </form>

              {errorMsg && (
                <div className="error-msg">{errorMsg}</div>
              )}
            </>
          )}
        </div>

        {/* Upcoming issues section */}
        <div className="section-heading" style={{ marginBottom: "40px" }}>
          <div className="section-label">UPCOMING ISSUES</div>
        </div>

        <div className="issues-grid">
          {issues.map(issue => (
            <div key={issue.id} className="issue-card">

              {/* Cover with atom placeholder */}
              <div className="issue-cover">
                <svg
                  width="64"
                  height="64"
                  viewBox="0 0 56 56"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <ellipse cx="28" cy="28" rx="26" ry="10" stroke="white" strokeWidth="1.5" />
                  <ellipse cx="28" cy="28" rx="26" ry="10" stroke="white" strokeWidth="1.5" transform="rotate(60 28 28)" />
                  <ellipse cx="28" cy="28" rx="26" ry="10" stroke="white" strokeWidth="1.5" transform="rotate(120 28 28)" />
                  <circle cx="28" cy="28" r="4" fill="white" opacity="0.6" />
                </svg>

                <div className="issue-tag">UPCOMING</div>
                <div className="issue-number-overlay">{issue.issue}</div>
              </div>

              {/* Card body */}
              <div className="issue-body">
                <div className="issue-title-upcoming">UPCOMING</div>
                <div className="issue-subtitle">{issue.subtitle}</div>
                <div className="issue-accent" />
                <p className="issue-excerpt">{issue.excerpt}</p>
                <div className="issue-coming-btn">
                  <div className="coming-dot" />
                  COMING SOON
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </>
  )
}