"use client";

import React from "react";

// MUI Lab Timeline
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";

// MUI Core
import { Box, Typography } from "@mui/material";

// Icons
import { HiOutlineSparkles } from "react-icons/hi2";
import { FaRegHandshake } from "react-icons/fa6";
import { PiPaintBrushBroadFill } from "react-icons/pi";
import { BsFillPatchCheckFill } from "react-icons/bs";

const PROCESS = [
  {
    step: "Step 01",
    title: "Concept & Wall Review",
    desc: "Share your wall photos, size, and preferred style. We recommend themes, palettes, and the right finish for your space.",
    icon: <HiOutlineSparkles size={18} />,
    dotColor: "#ff6b35", // orange
  },
  {
    step: "Step 02",
    title: "Design & Approval",
    desc: "We create a clean mockup with placement, colors, and layout. You approve before we begin execution.",
    icon: <FaRegHandshake size={18} />,
    dotColor: "#06b6d4", // ocean blue
  },
  {
    step: "Step 03",
    title: "Painting / Installation",
    desc: "Our team executes with proper surface prep, masking, alignment, and neat finishing using durable materials.",
    icon: <PiPaintBrushBroadFill size={18} />,
    dotColor: "#22c55e", // parrot green
  },
  {
    step: "Step 04",
    title: "Finishing & Handover",
    desc: "Final touch-ups, sealing (if needed), cleanup, and care tips so your wall art stays vibrant for long.",
    icon: <BsFillPatchCheckFill size={18} />,
    dotColor: "#fbbf24", // sunny yellow
  },
];

export default function WallArtProcessTimeline() {
  return (
    <section className="w-full py-20 bg-secondary/10">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header (Tailwind) */}
        <div className="text-center mb-12">
          <p className="font-dance text-xl text-secondary">
            Clear steps, smooth execution
          </p>
          <h2 className="font-yatra text-3xl sm:text-4xl text-primary mt-2">
            Our Wall Art Process
          </h2>
          <p className="font-poppins text-sm sm:text-base text-neutral-600 mt-2">
            From first idea to final finish — simple, transparent, and guided.
          </p>
        </div>

        {/* Timeline (MUI) */}
        <Box
          sx={{
            "& .MuiTimelineItem-root:before": { flex: 0, padding: 0 }, // remove default left padding line
          }}
        >
          <Timeline position="alternate">
            {PROCESS.map((p, idx) => (
              <TimelineItem key={idx}>
                {/* Opposite side (Step label) */}
                <TimelineOppositeContent
                  sx={{
                    color: "text.secondary",
                    fontFamily: "Poppins, system-ui, sans-serif",
                    fontSize: 12,
                    paddingTop: "16px",
                  }}
                >
                  {p.step}
                </TimelineOppositeContent>

                {/* Center dots + connectors */}
                <TimelineSeparator>
                  <TimelineDot
                    sx={{
                      bgcolor: p.dotColor,
                      boxShadow: `0 0 0 6px rgba(255,255,255,0.75), 0 10px 25px -15px rgba(0,0,0,0.45)`,
                    }}
                  >
                    <span style={{ color: "#0b0b0b" }}>{p.icon}</span>
                  </TimelineDot>

                  {idx !== PROCESS.length - 1 && (
                    <TimelineConnector
                      sx={{
                        backgroundColor: "#cad5e2", // as requested
                        opacity: 1,
                        width: "2px",
                      }}
                    />
                  )}
                </TimelineSeparator>

                {/* Content card */}
                <TimelineContent sx={{ py: "12px", px: 2 }}>
                  <Box
                    sx={{
                      bgcolor: "white",
                      border: "1px solid rgba(0,0,0,0.08)",
                      borderRadius: "16px",
                      padding: "16px",
                      boxShadow: "0 18px 40px -30px rgba(0,0,0,0.35)",
                      maxWidth: 420,
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: '"Yatra One", system-ui, serif',
                        fontSize: 18,
                        color: "var(--color-primary)",
                        lineHeight: 1.2,
                      }}
                    >
                      {p.title}
                    </Typography>

                    <Typography
                      sx={{
                        fontFamily: "Poppins, system-ui, sans-serif",
                        fontSize: 14,
                        color: "rgba(15,15,15,0.68)",
                        marginTop: "8px",
                        lineHeight: 1.65,
                      }}
                    >
                      {p.desc}
                    </Typography>
                  </Box>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </Box>
      </div>
    </section>
  );
}
