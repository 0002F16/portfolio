"use client";

import { useEffect, useRef, useState } from "react";
import { AccentLink } from "./AccentLink";

const ROLES = ["UX Design", "UX Research", "Product Design"];
const HOLD_MS = 2200;

export function Hero() {
  const [role, setRole] = useState(ROLES[0]);
  const [fading, setFading] = useState(false);
  const idx = useRef(0);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || ROLES.length < 2) return;

    const timer = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        idx.current = (idx.current + 1) % ROLES.length;
        setRole(ROLES[idx.current]);
        setFading(false);
      }, 350);
    }, HOLD_MS);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="pt-[30px] pb-2">
      <p className="font-sans text-[14px] font-medium text-accent-link mb-10">
        Hi! I&apos;m John! 👋
      </p>

      <h1 className="font-serif text-[40px] leading-[44px] font-normal text-foreground mb-[30px]">
        I love building products.
      </h1>

      <p className="font-serif text-[40px] leading-[44px] font-normal text-foreground mb-[30px]">
        {/* Currently a Product Manager. */}
        Currently unemployed.
        <br />
        Previously did{" "}
        <span
          aria-live="polite"
          className="text-accent-link transition-opacity duration-[350ms]"
          style={{ opacity: fading ? 0 : 1 }}
        >
          {role}
        </span>
        .
        {/* <br />
        Now at{" "}
        <AccentLink href="https://www.dayforce.com">Dayforce</AccentLink>. */}
      </p>
    </section>
  );
}
