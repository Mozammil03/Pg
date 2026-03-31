/*
  Claymorphism Mobile UI
  - React + TailwindCSS
  - Single-file component (App.jsx) that demonstrates two mobile pages from the screenshot
  Setup notes (put in your project root, not repeated in chat):
    - Tailwind must be configured (postcss + tailwind.config.js)
    - Import the generated CSS that includes the Tailwind directives (see comment below)

  Usage: create-react-app or Vite + Tailwind. Then replace App.jsx with this file and ensure Tailwind CSS is imported in index.css.
*/

import React, { useState } from "react";

// Clay shadow helper (we use inline style objects for exact shadow control)
const clayShadow = {
  boxShadow:
    "12px 12px 24px rgba(0,0,0,0.08), -12px -12px 24px rgba(255,255,255,0.9), inset 6px 6px 12px rgba(0,0,0,0.03), inset -6px -6px 12px rgba(255,255,255,0.8)",
};

const smallClay = {
  boxShadow:
    "6px 6px 14px rgba(0,0,0,0.06), -6px -6px 12px rgba(255,255,255,0.85), inset 3px 3px 8px rgba(0,0,0,0.02), inset -3px -3px 8px rgba(255,255,255,0.85)",
};

export default function Clay() {
  const [page, setPage] = useState("home");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#ffffff] to-[#e9f0f8] p-6">
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left card - Credit card mockup */}
        <div className="flex items-center justify-center">
          <div
            className="w-full max-w-sm rounded-2xl bg-[#ecf3fb] p-6 relative"
            style={clayShadow}
          >
            <div className="flex justify-between items-start">
              <div>
                <div className="text-xs text-slate-500">by Alexander Plyuto</div>
              </div>
              <div className="flex space-x-2">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center" style={smallClay}></div>
              </div>
            </div>

            <div className="mt-6">
              <div
                className="rounded-xl p-4 bg-gradient-to-tr from-white/80 to-white/60"
                style={{
                  ...smallClay,
                  backgroundImage:
                    "linear-gradient(180deg, rgba(255,255,255,0.9), rgba(245,249,255,0.7))",
                }}
              >
                {/* Card visual */}
                <div className="bg-white rounded-lg p-4" style={{ ...clayShadow }}>
                  <div className="flex justify-between items-start">
                    <div className="text-lg font-semibold text-slate-700">HRTBT</div>
                    <div className="w-10 h-8 rounded-md bg-[#f3f6fb] flex items-center justify-center text-xs text-slate-500">chip</div>
                  </div>

                  <div className="mt-6 tracking-wider text-slate-600 font-mono text-sm">5303 6084 2402 3649</div>
                  <div className="mt-6 flex justify-between items-center">
                    <div className="text-xs text-slate-500">09/24</div>
                    <div className="w-8 h-4 rounded-full bg-[#f3f6fb] flex items-center justify-center"></div>
                  </div>
                </div>

                <div className="mt-6">
                  <div className="flex justify-between items-center">
                    <div className="text-slate-600 font-semibold">Balance</div>
                    <div className="text-slate-700 font-bold text-lg">$ 14,020.44</div>
                  </div>

                  <div className="mt-3 bg-[#f2f6fb] rounded-full h-3" style={{ boxShadow: "inset 3px 3px 6px rgba(0,0,0,0.03), inset -3px -3px 6px rgba(255,255,255,0.8)" }}>
                    <div className="h-3 rounded-full bg-white" style={{ width: "22%" }}></div>
                  </div>

                  <div className="mt-2 text-xs text-slate-500">Credit limit <span className="float-right">$ 220 / $ 1000</span></div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
              <div className="flex space-x-3">
                <div className="w-2.5 h-2.5 rounded-full bg-[#cfd9e9]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#cfd9e9]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#cfd9e9]" />
              </div>
            </div>
          </div>
        </div>

        {/* Right panel - Statistics */}
        <div className="flex items-center justify-center">
          <div className="w-full max-w-sm rounded-2xl bg-[#eef6fb] p-6" style={clayShadow}>
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold text-slate-700">Statistic</h3>
              <div className="text-xs text-slate-500 flex items-center space-x-2">
                <div className="px-3 py-2 rounded-full bg-white" style={smallClay}>Last 30 days</div>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-center">
              {/* Circular clay chart */}
              <div className="relative w-48 h-48 flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="w-48 h-48">
                  <defs>
                    <linearGradient id="g1" x1="0" x2="1">
                      <stop offset="0%" stopColor="#ffb37d" />
                      <stop offset="100%" stopColor="#ff7a59" />
                    </linearGradient>
                  </defs>
                  <circle cx="50" cy="50" r="40" fill="#f3f7fb" stroke="#e6eef6" strokeWidth="6" />
                  {/* wedge */}
                  <path d="M50 50 L50 10 A40 40 0 0 1 82 28 Z" fill="url(#g1)" />
                </svg>

                {/* center button */}
                <div className="absolute w-12 h-12 rounded-full flex items-center justify-center" style={{ background: "radial-gradient(circle at 30% 30%, #fff, #ffd8d0)", boxShadow: "6px 6px 12px rgba(0,0,0,0.08), -6px -6px 12px rgba(255,255,255,0.9)" }}>
                  <div className="w-7 h-7 rounded-full bg-[#ff5252] flex items-center justify-center text-white text-xs">↗</div>
                </div>
              </div>
            </div>

            <div className="mt-6 bg-white rounded-xl p-4" style={smallClay}>
              <div className="flex justify-between items-center">
                <div className="text-slate-600 text-sm">Restaurants</div>
                <div className="text-slate-700 font-semibold">$ 1,593.58</div>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between">
              <div className="flex space-x-3">
                <button
                  onClick={() => setPage("home")}
                  className={`w-12 h-12 rounded-xl flex items-center justify-center ${page === "home" ? "bg-white" : "bg-[#f3f7fb]"}`}
                  style={smallClay}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M3 10L12 3l9 7v8a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1v-8z" stroke="#6b7280" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </button>

                <button
                  onClick={() => setPage("cards")}
                  className={`w-12 h-12 rounded-xl flex items-center justify-center ${page === "cards" ? "bg-white" : "bg-[#f3f7fb]"}`}
                  style={smallClay}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><rect x="3" y="5" width="18" height="14" rx="2" stroke="#6b7280" strokeWidth="1.2"/></svg>
                </button>

                <button className="w-12 h-12 rounded-xl flex items-center justify-center bg-[#f3f7fb]" style={smallClay}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M12 5v14M5 12h14" stroke="#6b7280" strokeWidth="1.2"/></svg>
                </button>
              </div>

              <div className="text-xs text-slate-500">Settings</div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile bottom sheet - switch page view to mimic mobile single column */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 md:hidden">
        <div className="flex items-center space-x-3">
          <button onClick={() => setPage("home")} className={`px-4 py-2 rounded-2xl ${page === "home" ? "bg-white" : "bg-[#eef6fb]"}`} style={smallClay}>Home</button>
          <button onClick={() => setPage("cards")} className={`px-4 py-2 rounded-2xl ${page === "cards" ? "bg-white" : "bg-[#eef6fb]"}`} style={smallClay}>Stats</button>
        </div>
      </div>

      {/* Floating responsive preview container - switches the main content depending on page state for mobile */}
      <style jsx>{`
        @media (max-width: 768px) {
          /* On small screens, show single column stack and adjust sizes */
        }
      `}</style>
    </div>
  );
}
