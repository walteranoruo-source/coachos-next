"use client";

import { useRef, useState } from "react";

export default function ComposerStub() {
  const ref = useRef(null);
  const [points, setPoints] = useState([]);

  function onClick(e) {
    const rect = ref.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setPoints((p) => [...p, { x, y }]);
  }

  function clear() {
    setPoints([]);
  }

  return (
    <div>
      <div style={{ marginBottom: 8 }}>
        <button onClick={clear}>Clear</button>
      </div>
      <div
        ref={ref}
        onClick={onClick}
        style={{
          position: "relative",
          width: "100%",
          maxWidth: 900,
          height: 480,
          background: "#065f46",
          borderRadius: 12,
          overflow: "hidden",
          border: "1px solid #e5e7eb",
          cursor: "crosshair"
        }}
      >
        {/* Pitch lines */}
        <div style={{ position: "absolute", inset: 16, border: "2px solid rgba(255,255,255,.6)", borderRadius: 10 }} />
        <div style={{ position: "absolute", top: 16, bottom: 16, left: "50%", width: 2, background: "rgba(255,255,255,.4)" }} />

        {/* Path (polyline) */}
        <svg style={{ position: "absolute", inset: 16, width: "calc(100% - 32px)", height: "calc(100% - 32px)" }}>
          {points.length > 1 && (
            <polyline
              fill="none"
              stroke="white"
              strokeOpacity="0.8"
              strokeWidth="3"
              points={points.map(p => `${p.x}%,${p.y}%`).join(" ")}
            />
          )}
        </svg>

        {/* Points */}
        {points.map((p, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              left: `${p.x}%`,
              top: `${p.y}%`,
              transform: "translate(-50%, -50%)",
              width: 12,
              height: 12,
              borderRadius: 6,
              background: "white",
              boxShadow: "0 0 0 1px rgba(0,0,0,.25)"
            }}
            title={`Step ${i + 1}`}
          />
        ))}
      </div>
      <p style={{ fontSize: 12, color: "#6b7280", marginTop: 8 }}>
        Tip: click on the pitch to add points; “Clear” to reset.
      </p>
    </div>
  );
}
