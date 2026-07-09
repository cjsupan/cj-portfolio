import type { Variants } from "motion/react";

// Reduced offset (32 -> 20) and duration (0.55 -> 0.4) for a snappier, mechanical feel
export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export const stagger: Variants = {
  hidden: {},
  visible: {
    transition: {
      // Cut in half. Now 10 mobile items will reveal in the time it used to take 5.
      staggerChildren: 0.05,
      delayChildren: 0.05,
    },
  },
};

// Replaced the dangerous margin with a reliable intersection threshold.
// amount: 0.1 means the animation fires the moment 10% of the element is visible,
// guaranteeing terminal elements will always render.
export const viewport = { once: true, amount: 0.1 } as const;
