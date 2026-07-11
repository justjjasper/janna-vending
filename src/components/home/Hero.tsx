import { motion, useReducedMotion } from "motion/react";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";

import machineImg from "../../assets/janna-vending-machine-hero.png";
import bakedLays from "../../assets/products/baked-lays-bbq.png";
import celsius from "../../assets/products/celsius.png";
import fairlife from "../../assets/products/fairlife.png";
import questChips from "../../assets/products/quest-chips.png";
import skinnyPop from "../../assets/products/skinny-pop.png";
import snickers from "../../assets/products/snickers.png";
import gatorade from "../../assets/products/gatorade.png";
import kitkat from "../../assets/products/kitkat.png";
import muscleMilk from "../../assets/products/muscle-milk.png";

const transition = {
  duration: 0.8,
  ease: [0.16, 1, 0.3, 1] as const,
};

const products = [
  { src: bakedLays, alt: "Baked Lays BBQ" },
  { src: questChips, alt: "Quest Protein Chips" },
  { src: skinnyPop, alt: "SkinnyPop Popcorn" },
  { src: snickers, alt: "Snickers" },
  { src: kitkat, alt: "KitKat" },
  { src: celsius, alt: "Celsius Energy" },
  { src: gatorade, alt: "Gatorade" },
  { src: fairlife, alt: "Fairlife Protein Shake" },
  { src: muscleMilk, alt: "Muscle Milk" },
];

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden bg-background pt-28 pb-20 sm:pt-36 sm:pb-28 lg:pt-40 lg:pb-36"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 right-[10%] -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-primary/[0.04] blur-[120px]"
      />

      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-[1fr_1.2fr] lg:gap-12 xl:gap-20">
          {/* ── Text column ── */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...transition, delay: 0.1 }}
          >
            <p className="inline-flex items-center rounded-full border border-primary/30 px-3.5 py-1 text-xs font-medium tracking-wide text-primary">
              Los Angeles vending service
            </p>

            <h1
              id="hero-heading"
              className="mt-6 font-display text-4xl font-bold tracking-tighter text-charcoal sm:text-5xl lg:text-[3.5rem] lg:leading-[1.05]"
            >
              Smart vending for
              <br className="hidden sm:block" />
              modern workplaces
            </h1>

            <p className="mt-6 max-w-[44ch] text-lg leading-relaxed text-muted">
              Premium snacks and drinks for the teams that keep LA moving. Zero
              hassle, zero upfront cost.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Button to="/contact" size="lg" arrow>
                Get Started
              </Button>
              <Button to="/machines" variant="secondary" size="lg">
                View Our Machines
              </Button>
            </div>
          </motion.div>

          {/* ── Image column — asymmetric layered composition ── */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...transition, delay: 0.25 }}
            className="relative flex items-center justify-center lg:justify-end"
          >
            {/* Green gradient glow — left side of machine */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute top-1/2 left-0 -translate-x-1/3 -translate-y-1/2 h-[500px] w-[300px] rounded-full bg-primary/[0.10] blur-[100px] lg:h-[600px] lg:w-[350px]"
            />

            {/* Main vending machine */}
            <div className="relative z-10 w-full max-w-[340px] sm:max-w-[400px] lg:max-w-[420px] xl:max-w-[460px]">
              <img
                src={machineImg}
                alt="Janna Vending smart vending machine — fully stocked with snacks and drinks"
                className="relative z-10 h-auto w-full rounded-2xl object-cover drop-shadow-[0_20px_80px_rgba(16,185,129,0.12)]"
                width={460}
                height={690}
              />
            </div>

            {/* Floating product showcase card */}
            <motion.div
              initial={reduce ? false : { opacity: 0, x: -20, y: 12 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ ...transition, delay: 0.55 }}
              className="absolute -bottom-4 -left-4 z-20 sm:bottom-4 sm:-left-6 lg:-left-12 lg:bottom-8 xl:-left-16"
            >
              <div className="rotate-[-4deg] rounded-2xl border border-border/60 bg-section/90 p-3 shadow-elevated backdrop-blur-md sm:p-4">
                <div className="grid grid-cols-3 gap-2 sm:gap-2.5">
                  {products.map((p) => (
                    <div
                      key={p.alt}
                      className="flex h-16 w-16 items-center justify-center rounded-xl bg-background/60 p-1.5 sm:h-[4.5rem] sm:w-[4.5rem] sm:p-2"
                    >
                      <img
                        src={p.src}
                        alt={p.alt}
                        className="h-full w-full object-contain"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
