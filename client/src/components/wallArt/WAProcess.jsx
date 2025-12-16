"use client";

import React from "react";

// AOS
import AOS from "aos";
import "aos/dist/aos.css";

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

import { MagicCard } from "../ui/magic-card";

const PROCESS = [
  {
    step: "Step 01",
    title: "Concept & Wall Review",
    desc: "Share your wall photos, size, and preferred style. We recommend themes, palettes, and the right finish for your space.",
    icon: <HiOutlineSparkles size={18} />,
    dotColor: "#ff6b35",
    // optional better crop (portrait-ish)
    img: "https://images.unsplash.com/photo-1523726491678-bf852e717f6a?q=80&w=700&h=900&auto=format&fit=crop",
  },
  {
    step: "Step 02",
    title: "Design & Approval",
    desc: "We create a clean mockup with placement, colors, and layout. You approve before we begin execution.",
    icon: <FaRegHandshake size={18} />,
    dotColor: "#06b6d4",
    img: "https://plus.unsplash.com/premium_photo-1661770132071-026114fffb61?q=80&w=700&h=900&auto=format&fit=crop",
  },
  {
    step: "Step 03",
    title: "Painting / Installation",
    desc: "Our team executes with proper surface prep, masking, alignment, and neat finishing using durable materials.",
    icon: <PiPaintBrushBroadFill size={18} />,
    dotColor: "#22c55e",
    img: "https://plus.unsplash.com/premium_photo-1674815846758-5423378481b5?q=80&w=700&h=900&auto=format&fit=crop",
  },
  {
    step: "Step 04",
    title: "Finishing & Handover",
    desc: "Final touch-ups, sealing, cleanup, and care tips so your wall art stays vibrant for long.",
    icon: <BsFillPatchCheckFill size={18} />,
    dotColor: "#fbbf24",
    img: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?q=80&w=700&h=900&auto=format&fit=crop",
  },
];

export default function WallArtProcessTimeline() {
  React.useEffect(() => {
    AOS.init({
      once: true,
      duration: 900,
      easing: "ease-out-cubic",
      offset: 120,
    });
  }, []);

  return (
    <section className="w-full py-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
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

        <Box sx={{ "& .MuiTimelineItem-root:before": { flex: 0, padding: 0 } }}>
          <Timeline position="alternate">
            {PROCESS.map((p, idx) => (
              <TimelineItem key={idx}>
                {/* Step label */}
                <TimelineOppositeContent
                  sx={{
                    fontSize: 12,
                    color: "text.secondary",
                    paddingTop: "16px",
                    display: { xs: "none", md: "block" },
                  }}
                >
                  {p.step}
                </TimelineOppositeContent>

                {/* Dot */}
                <TimelineSeparator>
                  <TimelineDot
                    sx={{
                      bgcolor: p.dotColor,
                      boxShadow:
                        "0 0 0 6px rgba(255,255,255,0.75), 0 10px 25px -15px rgba(0,0,0,0.45)",
                    }}
                  >
                    {p.icon}
                  </TimelineDot>

                  {idx !== PROCESS.length - 1 && (
                    <TimelineConnector
                      sx={{ backgroundColor: "#cad5e2", width: "2px" }}
                    />
                  )}
                </TimelineSeparator>

                {/* Card */}
                <TimelineContent sx={{ py: "12px", px: 2 }}>
                  <div
                    data-aos={idx % 2 === 0 ? "fade-up-right" : "fade-up-left"}
                    data-aos-delay={idx * 120}
                  >
                    <MagicCard className="rounded-2xl overflow-hidden">
                      <Box
                        sx={{
                          display: "flex",
                          height:210,
                          flexDirection: { xs: "column", sm: "row" },
                          backgroundColor: "#ffffff6e",
                          maxWidth: 520,
                        }} 
                      >
                        {/* ✅ Image column now stretches to full card height */}
                        <Box
                          sx={{
                            width: { xs: "100%", sm: 220 },
                            flexShrink: 0,
                            display: "flex",
                          }}
                        >
                          <Box
                            component="img"
                            src={p.img}
                            alt={p.title}
                            loading="lazy"
                            sx={{
                              width: "100%",
                              height: "100%", 
                              objectFit: "cover",
                              display: "block",
                            }}
                          />
                        </Box>

                        {/* Content */}
                        <Box
                          sx={{
                            p: 2,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                          }}
                        >
                          <Typography
                            sx={{
                              display: { xs: "block", md: "none" },
                              fontSize: 12,
                              color: "text.secondary",
                              mb: 0.5,
                            }}
                          >
                            {p.step}
                          </Typography>

                          <Typography
                            sx={{
                              fontFamily: '"Dancing Script", serif',
                              fontSize: 18,
                              color: "var(--color-primary)",
                            }}
                          >
                            {p.title}
                          </Typography>

                          <Typography
                            sx={{
                              fontSize: 14,
                              color: "rgba(15,15,15,0.68)",
                              mt: 1,
                              lineHeight: 1.65,
                              textAlign: "left",
                            }}
                          >
                            {p.desc}
                          </Typography>

                          {/* Decorative SVG */}
                          <Box
                            component="img"
                            src="/assets/design07.svg"
                            alt=""
                            sx={{
                              height: 55,
                              width: "auto",
                              mt: 1.5,
                              display: "block",
                              alignSelf: "flex-start",
                            }}
                          />
                        </Box>
                      </Box>
                    </MagicCard>
                  </div>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </Box>
      </div>
    </section>
  );
}
