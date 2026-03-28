import type { CSSProperties, ReactNode } from "react";

type Project = {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  accentClasses: string;
  subtitleClasses: string;
  featured?: boolean;
};

const projects: Project[] = [
  {
    title: "Kujo’s Coffee, Visual Direction",
    subtitle: "hard meets sweet",
    description:
      "A sharper visual system for Kujo’s that keeps the bite of the existing identity but pushes it into a fuller world across social, merch, drinks, and in-store visuals.",
    tags: ["branding", "social", "merch"],
    accentClasses: "from-red-950 to-red-800",
    subtitleClasses: "text-white/55",
    featured: true,
  },
  {
    title: "Seasonal Drink Drop",
    subtitle: "sweet, loud, postable",
    description:
      "A campaign direction for monthly specials built around zodiac-based drops that change with each sign’s season, creating a reason for people to come back regularly and engage with the brand in a more personal way. Each drink ties into a sign’s energy, visuals, and mood, making the experience feel more interactive and culturally relevant.",
    tags: ["campaign", "instagram", "menu design"],
    accentClasses: "from-white to-zinc-300",
    subtitleClasses: "text-red-800/90",
  },
  {
    title: "Kujo’s Nights",
    subtitle: "after-hours concept",
    description:
      "A nightlife-leaning flyer and event rollout for DJ sets, open mics, and creative nights. More underground, more texture, more tension, still recognizably Kujo’s.",
    tags: ["flyer", "events", "creative direction"],
    accentClasses: "from-zinc-800 to-red-900",
    subtitleClasses: "text-red-800/90",
  },
];

const services = [
  "brand identity",
  "social design",
  "menus + merch",
  "campaign concepts",
  "creative direction",
];

const monoStyle: CSSProperties = {
  fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
};

function VisualCard({
  title,
  label,
  children,
}: {
  title: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-950 p-4 shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:border-[#7a0f0f]/40">
      <div className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
        <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-[#7a0f0f]/20 blur-3xl" />
      </div>
      <div className="relative">
        <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.34em] text-red-800/80">
          {label}
        </p>
        <div className="rounded-[1.5rem] border border-white/10 bg-black p-4">{children}</div>
        <h4 className="mt-4 break-words text-xl font-black uppercase tracking-[-0.04em] text-white md:text-2xl">
          {title}
        </h4>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-black text-white"
      style={{
        backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')",
        backgroundSize: "cover",
        opacity: 1,
        fontFamily:
          'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      }}
    >
      <section className="relative overflow-hidden border-b border-white/10 bg-black">
        <div className="absolute inset-0">
          <div className="absolute left-[-8rem] top-10 h-80 w-80 rounded-full bg-[#7a0f0f]/15 blur-3xl" />
          <div className="absolute right-[-6rem] top-0 h-96 w-96 rounded-full bg-white/5 blur-3xl" />
          <div className="absolute bottom-[-4rem] left-1/3 h-60 w-60 rounded-full bg-red-950/20 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_35%)]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
          <div className="grid gap-12 md:grid-cols-[1.18fr_0.82fr] md:items-end">
            <div className="min-w-0"><div className="mb-6 inline-flex max-w-full flex-wrap items-center gap-3 rounded-full border border-[#7a0f0f]/40 bg-[#7a0f0f]/10 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-white/90 backdrop-blur-sm shadow-[0_0_30px_rgba(122,15,15,0.18)] sm:text-[11px] sm:tracking-[0.32em]">
                <span className="h-2 w-2 rounded-full bg-[#7a0f0f]" />
                ash farias, graphic designer
              </div>

              <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.24em] text-red-800/90 sm:text-[11px] sm:tracking-[0.38em]">
                branding / culture / visuals that hit
              </p>

              <h1 className="max-w-5xl break-words text-4xl font-black uppercase leading-[0.9] tracking-[-0.04em] text-white sm:text-5xl md:text-8xl md:tracking-[-0.06em]">
                design that
                <br />
                feels loud
                <br />
                before it even
                <br />
                says anything.
              </h1>

              <p
                className="mt-6 max-w-2xl text-base font-medium leading-8 tracking-[0.01em] text-white/80 md:text-lg"
                style={monoStyle}
              >
                i make branding, social content, merch, and visual systems that feel current,
                magnetic, and hard to ignore. i’m especially into coffee shops, music spaces,
                fashion-adjacent brands, and anything that needs more edge, taste, and presence.
                built with spaces like kujo’s in mind.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#work"
                  className="rounded-2xl border border-[#7a0f0f] bg-[#7a0f0f] px-6 py-3 text-sm font-black uppercase tracking-[0.18em] text-white shadow-[0_0_25px_rgba(122,15,15,0.35)] transition duration-300 hover:-translate-y-1 hover:rotate-[-1deg] hover:bg-[#5c0c0c]"
                >
                  view work
                </a>
                <a
                  href="#contact"
                  className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-black uppercase tracking-[0.18em] text-white transition duration-300 hover:-translate-y-1 hover:rotate-[1deg] hover:bg-white/10"
                >
                  let’s talk
                </a>
              </div>
            </div>

            <div className="relative min-w-0"><div className="rounded-[2rem] border border-white/10 bg-zinc-950 p-5 text-white shadow-2xl md:rotate-[-2deg] md:rounded-[2.2rem] md:p-7">
                <div className="mb-5 flex flex-wrap items-center justify-between gap-2 text-[10px] uppercase tracking-[0.18em] text-white/45 sm:tracking-[0.28em]">
                  <span>featured concept</span>
                  <span>kujo’s coffee shop</span>
                </div>

                <div className="rounded-[1.6rem] border border-white/10 bg-gradient-to-br from-red-950 via-black to-black p-6">
                  <p className="text-[10px] uppercase tracking-[0.28em] text-white/45">
                    brand expansion system
                  </p>
                  <h2 className="mt-3 break-words text-3xl font-black uppercase leading-none sm:text-4xl md:text-6xl">
                    hard.
                    <br />
                    sweet.
                    <br />
                    unforgettable.
                  </h2>
                  <p
                    className="mt-4 max-w-md text-sm font-medium leading-7 tracking-[0.01em] text-white/85"
                    style={monoStyle}
                  >
                    a visual direction that keeps kujo’s sharp, aggressive identity intact while
                    opening up a sweeter, more magnetic world for drinks, campaigns, and
                    culture-driven content.
                  </p>

                  <div className="mt-6 grid grid-cols-3 gap-3">
                    <div className="rounded-2xl border border-white/10 p-3">
                      <div className="h-11 rounded-xl bg-[#7a0f0f]" />
                      <p className="mt-3 text-[10px] uppercase tracking-[0.24em] text-white/65">
                        blood red
                      </p>
                    </div>
                    <div className="rounded-2xl border border-white/10 p-3">
                      <div className="h-11 rounded-xl bg-black" />
                      <p className="mt-3 text-[10px] uppercase tracking-[0.24em] text-white/65">
                        black
                      </p>
                    </div>
                    <div className="rounded-2xl border border-white/10 p-3">
                      <div className="h-11 rounded-xl bg-white" />
                      <p className="mt-3 text-[10px] uppercase tracking-[0.24em] text-white/65">
                        white
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute left-0 top-full mt-4 rounded-2xl border border-white/10 bg-white px-4 py-3 text-black shadow-xl md:-bottom-5 md:left-4 md:top-auto md:mt-0 md:rotate-[3deg]">
                <p className="text-[10px] uppercase tracking-[0.26em] text-black/45">
                  current focus
                </p>
                <p className="mt-1 text-sm font-semibold uppercase">branding, social, merch</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl overflow-x-hidden px-6 py-16 md:px-10">
        <div className="grid gap-6 md:grid-cols-[0.8fr_1.2fr] md:items-start">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-red-800/90">
              about
            </p>
            <h3 className="mt-3 break-words text-3xl font-black uppercase leading-none text-white md:text-5xl">
              rooted in art.
              <br />
              built by instinct.
            </h3>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-zinc-950 p-7 shadow-sm md:p-9">
            <p className="text-base font-medium leading-8 tracking-[0.01em] text-white/85 md:text-lg" style={monoStyle}>
              i’m a self-taught graphic designer and artist born and raised in palmetto bay,
              florida. i moved to dallas at 14, spent years moving through different parts of the
              south and nearby states, and came back home in august 2024. that mix of places
              shaped my eye a lot, from heavier southern visuals and underground music culture to
              cleaner, louder internet-driven design language.
            </p>
            <p className="mt-5 text-base font-medium leading-8 tracking-[0.01em] text-white/85 md:text-lg" style={monoStyle}>
              my first time on a computer was around age 8, and the first program i ever got
              obsessed with was microsoft paint. unsupervised internet access at a young age
              definitely had its pros. i’ve been in art classes my entire life, and art has always
              been one of the core parts of who i am right alongside music.
            </p>
            <p className="mt-5 text-base font-medium leading-8 tracking-[0.01em] text-white/85 md:text-lg" style={monoStyle}>
              a lot of what i love pulls from the south in different ways, the grit and rawness of
              underground visuals, the way artists like suicideboys turned new orleans darkness
              into a whole visual world, the boldness of texas design culture, and the emotional
              weight that good local brands can carry when they actually reflect their people.
              that’s what i care about most: helping communities and businesses grow without
              sanding off their heart and soul. especially in places like miami-dade, where the
              real culture is still alive through locals and small businesses, that’s the energy i
              always want to protect and amplify.
            </p>
          </div>
        </div>
      </section>

      <section id="visuals" className="mx-auto max-w-7xl overflow-x-hidden px-6 py-6 md:px-10 md:py-10">
        <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-red-800/90">
              selected visual
            </p>
            <h3 className="mt-3 break-words text-3xl font-black uppercase leading-none text-white md:text-6xl">
              shirt design concept.
            </h3>
          </div>
          <p className="max-w-xl text-sm font-medium leading-7 tracking-[0.01em] text-white/75 md:text-base" style={monoStyle}>
            a more wearable, streetwear-inspired direction for kujo’s merch, built to feel less like a logo on a shirt and more like something people would actually choose to wear.
          </p>
        </div>

        <div className="max-w-3xl">
          <VisualCard title="shirt design concept" label="product concept">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.1rem] border border-white/10 bg-black">
              <img
                src="/kujos-shirt.png"
                alt="kujo's coffee shop shirt design"
                className="h-full w-full object-cover transition-all duration-300 group-hover:scale-[1.02]"
              />
            </div>
          </VisualCard>
        </div>
      </section>

      <section className="mx-auto max-w-7xl overflow-x-hidden px-6 py-16 md:px-10">
        <div className="rounded-[2rem] border border-white/10 bg-zinc-950 p-7 md:p-9">
          <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-red-800/90">
            strategy
          </p>
          <h3 className="mt-3 break-words text-3xl font-black uppercase leading-none text-white md:text-5xl">
            why younger audiences matter.
          </h3>
          <p className="mt-5 text-base font-medium leading-8 tracking-[0.01em] text-white/85 md:text-lg" style={monoStyle}>
            younger customers are driving how coffee culture is evolving right now. they’re the
            ones choosing iced, sweeter, more customizable drinks and coming back consistently for
            new drops instead of sticking to the same order. they’re also the group most actively
            supporting small businesses, especially ones that feel authentic, creative, and
            community-driven.
          </p>
          <p className="mt-5 text-base font-medium leading-8 tracking-[0.01em] text-white/85 md:text-lg" style={monoStyle}>
            building seasonal drops like zodiac drinks creates a reason to return, share, and talk
            about the brand. it turns the menu into something that evolves with culture instead of
            staying static. for a space like kujo’s, that kind of consistency and identity can turn
            regulars into a real community.
          </p>
        </div>
      </section>

      <section id="work" className="mx-auto max-w-7xl overflow-x-hidden px-6 py-16 md:px-10">
        <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-red-800/90">
              selected work
            </p>
            <h3 className="mt-3 break-words text-3xl font-black uppercase leading-none text-white md:text-6xl">
              concepts with teeth.
            </h3>
          </div>
          <p className="max-w-xl text-sm font-medium leading-7 tracking-[0.01em] text-white/75 md:text-base" style={monoStyle}>
            this portfolio is built to show how i think, how i shape a visual world, and how i
            carry an idea across social, physical, and digital touchpoints.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className={[
                "group relative overflow-hidden rounded-[2rem] border p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-2xl",
                project.featured
                  ? "border-[#7a0f0f]/40 bg-gradient-to-b from-zinc-950 to-black text-white"
                  : "border-white/10 bg-zinc-950",
              ].join(" ")}
            >
              <div className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
                <div
                  className={[
                    "absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br opacity-25 blur-3xl",
                    project.accentClasses,
                  ].join(" ")}
                />
              </div>

              <div className="relative">
                <p className={["text-[10px] uppercase tracking-[0.28em]", project.subtitleClasses].join(" ")}>
                  {project.subtitle}
                </p>
                <h4 className="mt-3 break-words text-2xl font-black uppercase leading-none text-white md:text-3xl">
                  {project.title}
                </h4>
                <p className="mt-4 text-sm font-medium leading-7 text-white/85" style={monoStyle}>
                  {project.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={[
                        "rounded-full border px-3 py-1 text-[10px] uppercase tracking-[0.18em]",
                        project.featured
                          ? "border-white/15 bg-white/10 text-white"
                          : "border-white/10 bg-black text-white",
                      ].join(" ")}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl overflow-x-hidden px-6 py-4 md:px-10 md:py-10">
        <div className="grid gap-6 md:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2rem] border border-white/10 bg-zinc-950 p-8 text-white shadow-2xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-red-800/80">
              services
            </p>
            <div className="mt-6 space-y-4">
              {services.map((item) => (
                <div key={item} className="flex items-center justify-between border-b border-white/10 pb-4">
                  <span className="text-lg font-semibold uppercase md:text-xl">{item}</span>
                  <span className="text-red-800/70">✦</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,#111111_0%,#0a0a0a_100%)] p-8 shadow-sm md:p-10">
            <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-red-800/90">
              approach
            </p>
            <h3 className="mt-3 break-words text-3xl font-black uppercase leading-none text-white md:text-5xl">
              not just pretty.
              <br />
              precise.
            </h3>
            <p className="mt-5 text-base font-medium leading-8 tracking-[0.01em] text-white/85 md:text-lg" style={monoStyle}>
              i’m interested in work that feels distinct, not disposable. i want the visuals to say
              something immediately, whether that means making a coffee shop feel more iconic
              online, making merch feel wearable instead of filler, or building a campaign people
              actually want to repost.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl overflow-x-hidden px-6 pb-20 pt-16 md:px-10">
        <div className="relative overflow-hidden rounded-[2.4rem] border border-red-900/50 bg-[#7a0f0f] p-8 text-white shadow-2xl md:p-12">
          <div className="absolute right-0 top-0 h-56 w-56 rounded-full bg-black/25 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-44 w-44 rounded-full bg-white/10 blur-3xl" />

          <div className="relative">
            <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-white/80">
              contact
            </p>
            <h3 className="mt-3 max-w-4xl text-4xl font-black uppercase leading-[0.95] md:text-6xl">
              let’s make something impossible to scroll past.
            </h3>
            <p className="mt-5 max-w-2xl text-base font-medium leading-8 tracking-[0.01em] text-white/95 md:text-lg" style={monoStyle}>
              available for freelance, collaborations, and in-house creative work.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              <a href="mailto:ashfariasfl@gmail.com" className="rounded-2xl border border-white bg-white px-5 py-4 text-sm font-black uppercase tracking-[0.12em] text-black transition duration-300 hover:-translate-y-1 hover:rotate-[-1deg] sm:tracking-[0.18em] break-all"
              >
                ashfariasfl@gmail.com
              </a>
              <a href="tel:2148757678" className="rounded-2xl border border-white/20 bg-black/15 px-5 py-4 text-sm font-black uppercase tracking-[0.12em] text-white transition duration-300 hover:-translate-y-1 hover:rotate-[1deg] sm:tracking-[0.18em]"
              >
                (214) 875-7678
              </a>
              <a href="https://instagram.com/ashsyrin" target="_blank" rel="noreferrer" className="rounded-2xl border border-white/20 bg-black/15 px-5 py-4 text-sm font-black uppercase tracking-[0.12em] text-white transition duration-300 hover:-translate-y-1 hover:rotate-[-1deg] sm:tracking-[0.18em]"
              >
                @ashsyrin
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
