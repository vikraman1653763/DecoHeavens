import React from "react";
import { Timeline } from "@/components/ui/timeline";

export default function TimelineEvent() {
  const data = [
    {
      title: "Weddings",
      content: (
        <div>
          <p className="mb-6 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Engagement, haldi, sangeet, reception — we plan the full wedding flow
            with theme styling, decor, vendor coordination, and on-day management.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1529634806980-85c3dd6d34ac?q=80&w=1200&auto=format&fit=crop"
              alt="wedding planning"
              className="h-28 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04)] md:h-44 lg:h-60"
            />
            <img
              src="https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=1200&auto=format&fit=crop"
              alt="wedding decor"
              className="h-28 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04)] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Cultural Functions",
      content: (
        <div>
          <p className="mb-6 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Traditional events planned with cultural accuracy — timing, guest
            flow, stage setup, rituals support, and seamless coordination.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1606214174585-fe31582dc6ee?q=80&w=1200&auto=format&fit=crop"
              alt="cultural celebration"
              className="h-28 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04)] md:h-44 lg:h-60"
            />
            <img
              src="https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=1200&auto=format&fit=crop"
              alt="event gathering"
              className="h-28 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04)] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Corporate Events",
      content: (
        <div>
          <p className="mb-6 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Product launches, team events, brand activations — professional
            planning with AV, staging, seating, and disciplined execution.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1200&auto=format&fit=crop"
              alt="corporate event"
              className="h-28 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04)] md:h-44 lg:h-60"
            />
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop"
              alt="team coordination"
              className="h-28 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04)] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Private Celebrations",
      content: (
        <div>
          <p className="mb-6 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Birthdays, anniversaries, baby showers, housewarming — themed decor,
            custom setups, and stress-free coordination.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=1200&auto=format&fit=crop"
              alt="birthday celebration"
              className="h-28 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04)] md:h-44 lg:h-60"
            />
            <img
              src="https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=1200&auto=format&fit=crop"
              alt="party gathering"
              className="h-28 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04)] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Proposals & Surprises",
      content: (
        <div>
          <p className="mb-6 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Surprise setups and intimate moments — concept, location styling,
            timing coordination, and picture-perfect execution.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1508672019048-805c876b67e2?q=80&w=1200&auto=format&fit=crop"
              alt="romantic setup"
              className="h-28 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04)] md:h-44 lg:h-60"
            />
            <img
              src="https://images.unsplash.com/photo-1529634806980-85c3dd6d34ac?q=80&w=1200&auto=format&fit=crop"
              alt="celebration moment"
              className="h-28 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04)] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}
