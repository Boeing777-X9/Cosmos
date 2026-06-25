"use client";

import { useState } from "react";
// import { supabase } from "./lib/supabaseClient"; // add Supabase client later

const YEARS = ["1", "2", "3", "4"];
const STAY_OPTIONS = ["Dayscholar", "Hostel (GHS)", "PG (Outside)"];

export default function MembershipPage() {
  const [form, setForm] = useState({
    name: "",
    regNumber: "",
    email: "",
    phone: "",
    year: "",
    stay: "",
    course: "",
    branch: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const update = (key: string, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name || !form.regNumber || !form.email || !form.phone || !form.year || !form.stay) {
      setStatus("error");
      setErrorMsg("Please fill in all required fields.");
      return;
    }

    if (!form.email.toLowerCase().endsWith("@muj.manipal.edu")) {
      setStatus("error");
      setErrorMsg("Please use your MUJ email id.");
      return;
    }

    setStatus("submitting");
    setErrorMsg("");

    // ---- Supabase insert (add back when ready) ----
    // const { error } = await supabase.from("members").insert([
    //   {
    //     name: form.name,
    //     reg_number: form.regNumber,
    //     email: form.email,
    //     phone: form.phone,
    //     year: form.year,
    //     stay_type: form.stay,
    //     course: form.course,
    //     branch: form.branch,
    //   },
    // ]);
    //
    // if (error) {
    //   setStatus("error");
    //   setErrorMsg(error.message || "Something went wrong. Please try again.");
    //   return;
    // }

    console.log("Form submitted (Supabase not connected yet):", form);

    setStatus("success");
    setForm({
      name: "",
      regNumber: "",
      email: "",
      phone: "",
      year: "",
      stay: "",
      course: "",
      branch: "",
    });
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

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

        .spline-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          z-index: 0;
        }

        .spline-container iframe {
          width: 100%;
          height: 100%;
          border: none;
          display: block;
        }

        .page-overlay {
          position: relative;
          z-index: 1;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 100px 24px 60px;
        }

        .glass-card {
          width: 100%;
          max-width: 560px;
          border-radius: 28px;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.16);
          background: linear-gradient(
            135deg,
            rgba(255, 255, 255, 0.16) 0%,
            rgba(255, 255, 255, 0.05) 50%,
            rgba(255, 245, 225, 0.06) 100%
          );
          backdrop-filter: blur(36px) saturate(180%) brightness(1.08);
          -webkit-backdrop-filter: blur(36px) saturate(180%) brightness(1.08);
          box-shadow:
            inset 0 1.5px 0 rgba(255, 255, 255, 0.35),
            inset 1px 0 0 rgba(255, 255, 255, 0.18),
            0 20px 60px rgba(0, 0, 0, 0.45);
          padding: 40px 36px 36px;
        }

        .card-eyebrow {
          font-family: 'Orbitron', sans-serif;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.22em;
          color: rgba(255, 255, 255, 0.55);
          text-transform: uppercase;
        }

        .card-title {
          font-family: 'Orbitron', sans-serif;
          font-size: 24px;
          font-weight: 700;
          letter-spacing: 0.04em;
          color: #fff;
          margin-top: 8px;
          margin-bottom: 4px;
        }

        .card-sub {
          font-size: 13px;
          color: rgba(255, 255, 255, 0.55);
          margin-bottom: 28px;
        }

        .field-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        .field-grid .full {
          grid-column: 1 / -1;
        }

        .field {
          display: flex;
          flex-direction: column;
          gap: 6px;
          margin-bottom: 16px;
        }

        label {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.65);
        }

        input, select {
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          color: #fff;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.14);
          border-radius: 14px;
          padding: 12px 14px;
          outline: none;
          transition: all 0.2s ease;
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.08);
          appearance: none;
        }

        input::placeholder {
          color: rgba(255, 255, 255, 0.32);
        }

        input:focus, select:focus {
          border-color: rgba(255, 255, 255, 0.4);
          background: rgba(255, 255, 255, 0.1);
        }

        select {
          cursor: pointer;
        }

        select option {
          background: #0A1628;
          color: #fff;
        }

        .submit-btn {
          width: 100%;
          font-family: 'Orbitron', sans-serif;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.12em;
          color: #0A1628;
          background: linear-gradient(135deg, #ffffff, #e8e0d2);
          border: none;
          border-radius: 50px;
          padding: 14px 0;
          margin-top: 8px;
          cursor: pointer;
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
          transition: all 0.25s ease;
        }

        .submit-btn:hover {
          transform: translateY(-1px);
          box-shadow: 0 8px 26px rgba(0, 0, 0, 0.35);
        }

        .submit-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
          transform: none;
        }

        .status-msg {
          margin-top: 14px;
          font-size: 12.5px;
          text-align: center;
          border-radius: 12px;
          padding: 10px 12px;
        }

        .status-error {
          background: rgba(255, 90, 90, 0.12);
          border: 1px solid rgba(255, 120, 120, 0.3);
          color: #ffb4b4;
        }

        .status-success {
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.25);
          color: #fff;
        }

        @media (max-width: 520px) {
          .field-grid {
            grid-template-columns: 1fr;
          }
          .glass-card {
            padding: 32px 22px 28px;
          }
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

      <div className="page-overlay">
        <form className="glass-card" onSubmit={handleSubmit}>
          <div className="card-eyebrow">Cosmos · Membership</div>
          <div className="card-title">Become a Member</div>
          <div className="card-sub">Fill in your details to join Cosmos.</div>

          <div className="field full">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              placeholder="Full name"
              value={form.name}
              onChange={(e) => update("name", e.target.value)}
            />
          </div>

          <div className="field-grid">
            <div className="field">
              <label htmlFor="regNumber">Registration Number</label>
              <input
                id="regNumber"
                type="text"
                placeholder="e.g. 23XXXXXXXX"
                value={form.regNumber}
                onChange={(e) => update("regNumber", e.target.value)}
              />
            </div>

            <div className="field">
              <label htmlFor="phone">Phone Number</label>
              <input
                id="phone"
                type="tel"
                placeholder="10-digit number"
                value={form.phone}
                onChange={(e) => update("phone", e.target.value)}
              />
            </div>
          </div>

          <div className="field full">
            <label htmlFor="email">MUJ Email ID</label>
            <input
              id="email"
              type="email"
              placeholder="yourname@muj.manipal.edu"
              value={form.email}
              onChange={(e) => update("email", e.target.value)}
            />
          </div>

          <div className="field-grid">
            <div className="field">
              <label htmlFor="year">Year</label>
              <select id="year" value={form.year} onChange={(e) => update("year", e.target.value)}>
                <option value="">Select year</option>
                {YEARS.map((y) => (
                  <option key={y} value={y}>
                    {y}
                  </option>
                ))}
              </select>
            </div>

            <div className="field">
              <label htmlFor="stay">Stay Type</label>
              <select id="stay" value={form.stay} onChange={(e) => update("stay", e.target.value)}>
                <option value="">Select option</option>
                {STAY_OPTIONS.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="field-grid">
            <div className="field">
              <label htmlFor="course">Course</label>
              <input
                id="course"
                type="text"
                placeholder="e.g. B.Tech"
                value={form.course}
                onChange={(e) => update("course", e.target.value)}
              />
            </div>

            <div className="field">
              <label htmlFor="branch">Branch</label>
              <input
                id="branch"
                type="text"
                placeholder="e.g. CSE"
                value={form.branch}
                onChange={(e) => update("branch", e.target.value)}
              />
            </div>
          </div>

          <button className="submit-btn" type="submit" disabled={status === "submitting"}>
            {status === "submitting" ? "SUBMITTING..." : "SUBMIT"}
          </button>

          {status === "error" && <div className="status-msg status-error">{errorMsg}</div>}
          {status === "success" && (
            <div className="status-msg status-success">You're in! Welcome to Cosmos.</div>
          )}
        </form>
      </div>
    </>
  );
}