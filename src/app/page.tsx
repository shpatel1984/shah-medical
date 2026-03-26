"use client";

import { useState, useEffect, useRef } from "react";

/* ─── Icons (inline SVGs to avoid dependencies) ─── */
const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
  </svg>
);

const MapPinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
  </svg>
);

const ClockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const StarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
  </svg>
);

const XIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

/* ─── Intersection Observer Hook ─── */
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return { ref, inView };
}

/* ─── Data ─── */
const services = [
  {
    title: "Preventative Care",
    description: "Annual physicals, screenings, immunizations, and wellness programs designed to keep you healthy and detect issues early.",
    icon: "🛡️",
  },
  {
    title: "Chronic Disease Management",
    description: "Expert management of diabetes, hypertension, heart disease, and other chronic conditions with evidence-based protocols.",
    icon: "📋",
  },
  {
    title: "Acute Care",
    description: "Same-day and urgent appointments for sudden illness, infections, injuries, and other conditions requiring prompt attention.",
    icon: "⚡",
  },
  {
    title: "Women's Health",
    description: "Comprehensive women's healthcare including gynecological exams, family planning, and menopause management.",
    icon: "💐",
  },
  {
    title: "Pediatric Care",
    description: "Well-child visits, developmental screenings, vaccinations, and care for common childhood illnesses.",
    icon: "👶",
  },
  {
    title: "Mental Health",
    description: "Screening and treatment for anxiety, depression, and stress-related conditions with compassionate, holistic support.",
    icon: "🧠",
  },
];

const testimonials = [
  {
    name: "Hiroshi G.",
    rating: 5,
    text: "I have been a patient here for several months and I am so grateful to have found such a wonderful family practice. Dr. Shah is incredibly caring and knowledgeable.",
  },
  {
    name: "Eric C.",
    rating: 5,
    text: "Dr. Shah was attentive and I really appreciated how he took the time to explain my diagnosis and treatment options. The office staff was very friendly.",
  },
  {
    name: "Zelda D.",
    rating: 5,
    text: "Genuinely impressed with the level of care I received. Dr. Shah took the time to listen to my concerns and explain everything clearly.",
  },
];

/* ─── Components ─── */

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const links = [
    ["About", "#about"],
    ["Recognition", "#recognition"],
    ["Services", "#services"],
    ["Testimonials", "#testimonials"],
    ["Contact", "#contact"],
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-navy/90 backdrop-blur-xl shadow-lg shadow-black/10 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-gold flex items-center justify-center text-navy font-bold text-sm font-display">
            HS
          </div>
          <div>
            <span className="text-lg font-display font-semibold tracking-wide">
              Dr. Shah
            </span>
            <span className="hidden sm:inline text-xs text-white/40 ml-2 tracking-widest uppercase">
              Family Medicine
            </span>
          </div>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="text-sm text-white/60 hover:text-white transition-colors duration-300 tracking-wide"
            >
              {label}
            </a>
          ))}
          <a
            href="tel:+12014207373"
            className="ml-4 px-5 py-2.5 bg-gradient-to-r from-accent to-accent-light text-navy text-sm font-semibold rounded-full hover:shadow-lg hover:shadow-accent/20 transition-all duration-300"
          >
            Book Appointment
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white/70"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <XIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-navy-light/95 backdrop-blur-xl border-t border-white/5 animate-fade-in">
          <div className="px-6 py-6 flex flex-col gap-4">
            {links.map(([label, href]) => (
              <a
                key={label}
                href={href}
                onClick={() => setMobileOpen(false)}
                className="text-white/70 hover:text-white py-2 transition-colors"
              >
                {label}
              </a>
            ))}
            <a
              href="tel:+12014207373"
              className="mt-2 px-5 py-3 bg-gradient-to-r from-accent to-accent-light text-navy text-sm font-semibold rounded-full text-center"
            >
              Book Appointment
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-accent/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-gold/5 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-accent/[0.02] blur-3xl" />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 py-32 md:py-0">
        <div className="max-w-3xl">
          <div className="animate-fade-up opacity-0">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.06] text-xs tracking-widest uppercase text-gold mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              Accepting New Patients
            </span>
          </div>

          <h1 className="animate-fade-up opacity-0 animation-delay-200 font-display text-5xl sm:text-6xl md:text-7xl font-semibold leading-[1.1] tracking-tight mb-6">
            Your Health,{" "}
            <span className="gradient-text">Our Priority</span>
          </h1>

          <p className="animate-fade-up opacity-0 animation-delay-400 text-lg md:text-xl text-white/50 leading-relaxed max-w-xl mb-10">
            Comprehensive family healthcare delivered with compassion by
            Dr.&nbsp;Hemant Shah in the heart of Jersey City.
          </p>

          <div className="animate-fade-up opacity-0 animation-delay-600 flex flex-col sm:flex-row gap-4">
            <a
              href="tel:+12014207373"
              className="group px-8 py-4 bg-gradient-to-r from-accent to-accent-light text-navy font-semibold rounded-full flex items-center justify-center gap-2 hover:shadow-xl hover:shadow-accent/20 transition-all duration-300"
            >
              <PhoneIcon />
              Schedule a Visit
            </a>
            <a
              href="#about"
              className="px-8 py-4 border border-white/10 rounded-full text-white/70 hover:text-white hover:border-white/20 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Learn More
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>

          {/* Quick stats */}
          <div className="animate-fade-up opacity-0 animation-delay-800 mt-16 grid grid-cols-3 gap-8 max-w-md">
            {[
              ["20+", "Years Experience"],
              ["5,000+", "Patients Served"],
              ["4.9", "Patient Rating"],
            ].map(([value, label]) => (
              <div key={label}>
                <div className="text-2xl font-display font-semibold text-white">
                  {value}
                </div>
                <div className="text-xs text-white/30 mt-1 tracking-wide">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in opacity-0 animation-delay-800">
        <div className="w-6 h-10 rounded-full border border-white/10 flex items-start justify-center p-1.5">
          <div className="w-1 h-2.5 rounded-full bg-white/30 animate-bounce" />
        </div>
      </div>
    </section>
  );
}

function About() {
  const { ref, inView } = useInView();

  return (
    <section id="about" className="relative py-32" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left — image placeholder */}
          <div
            className={`relative transition-all duration-1000 ${
              inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-navy-light to-navy-lighter border border-white/5 overflow-hidden relative glow">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-gold/10" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-accent/20 to-gold/20 flex items-center justify-center mb-6">
                    <span className="text-5xl font-display font-bold gradient-text">HS</span>
                  </div>
                  <p className="text-xl font-display font-semibold">Dr. Hemant Shah</p>
                  <p className="text-white/40 text-sm mt-1">MD, Family Medicine</p>
                </div>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-xl bg-gold/10 border border-gold/20 -z-10" />
          </div>

          {/* Right — text */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <span className="text-xs tracking-[0.3em] uppercase text-gold mb-4 block">
              About Dr. Shah
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight mb-6">
              Dedicated to Your
              <br />
              <span className="gradient-text">Family&apos;s Wellness</span>
            </h2>
            <div className="space-y-4 text-white/50 leading-relaxed">
              <p>
                As a seasoned family practice physician in Jersey City,
                Dr.&nbsp;Hemant Shah delivers comprehensive healthcare tailored
                to each patient&apos;s unique needs.
              </p>
              <p>
                With a focus on preventative care and chronic disease management,
                he employs evidence-based practices to enhance patient outcomes.
                His expertise spans from routine check-ups to complex health
                issues, ensuring holistic treatment for patients of all ages.
              </p>
              <p>
                Committed to fostering a supportive environment, Dr.&nbsp;Shah
                emphasizes patient education and active involvement, helping
                families navigate their health journey with confidence.
              </p>
            </div>

            <div className="mt-8 flex items-center gap-6">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} />
                ))}
              </div>
              <span className="text-sm text-white/40">
                Rated 4.9 by patients
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Recognition() {
  const { ref, inView } = useInView();

  return (
    <section id="recognition" className="relative py-32 overflow-hidden" ref={ref}>
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold/[0.03] to-transparent" />

      <div className="relative max-w-6xl mx-auto px-6">
        <div
          className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-xs tracking-[0.3em] uppercase text-gold mb-4 block">
            Community Recognition
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-semibold mb-4">
            Honored for <span className="gradient-text">Excellence</span>
          </h2>
          <p className="text-white/40">
            A legacy of service to the Hudson County community, recognized by
            CarePoint Health and civic leaders.
          </p>
        </div>

        {/* Feature card */}
        <div
          className={`max-w-4xl mx-auto transition-all duration-1000 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <div className="relative rounded-3xl border border-gold/15 bg-gradient-to-br from-navy-light to-navy-lighter overflow-hidden">
            {/* Decorative gold border glow */}
            <div className="absolute -top-px -left-px -right-px h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

            <div className="p-10 md:p-14">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 border border-gold/20 text-gold text-xs tracking-widest uppercase mb-8">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                CarePoint Health Honor
              </div>

              <h3 className="font-display text-2xl md:text-3xl font-semibold leading-snug mb-6">
                CarePoint Health Dedicates Hoboken
                <br className="hidden md:block" />
                {" "}Auditorium in Dr. Shah&apos;s Name
              </h3>

              <p className="text-white/50 leading-relaxed mb-8 max-w-2xl">
                In recognition of his extraordinary contributions to the Hudson
                County community, CarePoint Health dedicated a modernized
                auditorium and community center at Hoboken University Medical
                Center in Dr. Shah&apos;s honor. The ceremony featured a
                proclamation from Hoboken Councilman-at-Large Joe Quintero on
                behalf of Mayor Ravi Bhalla.
              </p>

              {/* Quote */}
              <div className="relative pl-6 border-l-2 border-gold/30 mb-10">
                <p className="text-white/70 italic leading-relaxed text-lg font-display">
                  &ldquo;Once you&apos;ve made it in your career and you have done what
                  you want to accomplish, giving back is such a simple way to
                  pay it forward to future generations.&rdquo;
                </p>
                <p className="text-gold/70 text-sm mt-3 tracking-wide">
                  &mdash; Dr. Hemant Shah
                </p>
              </div>

              {/* Highlights */}
              <div className="grid sm:grid-cols-3 gap-6 mb-10">
                {[
                  {
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21" />
                      </svg>
                    ),
                    label: "Attending Physician",
                    detail: "Hoboken University Medical Center & Christ Hospital",
                  },
                  {
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197" />
                      </svg>
                    ),
                    label: "Former Health Commissioner",
                    detail: "Jersey City, NJ",
                  },
                  {
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                      </svg>
                    ),
                    label: "Philanthropist",
                    detail: "Local & global charitable impact",
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/5"
                  >
                    <div className="w-9 h-9 rounded-lg bg-gold/10 flex items-center justify-center text-gold shrink-0 mt-0.5">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white/80">
                        {item.label}
                      </p>
                      <p className="text-xs text-white/40 mt-0.5">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <a
                href="https://www.carepointhealth.org/2024/08/09/carepoint-honors-dr-hemant-shah-with-dedication-of-hoboken-auditorium/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors text-sm font-medium"
              >
                Read the Full Article
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              </a>
            </div>

            {/* Bottom decorative gold line */}
            <div className="h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  const { ref, inView } = useInView();

  return (
    <section id="services" className="relative py-32" ref={ref}>
      {/* Subtle bg accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/[0.02] to-transparent" />

      <div className="relative max-w-6xl mx-auto px-6">
        <div
          className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-xs tracking-[0.3em] uppercase text-gold mb-4 block">
            What We Offer
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-semibold mb-4">
            Comprehensive <span className="gradient-text">Services</span>
          </h2>
          <p className="text-white/40">
            From preventative wellness to complex care, our practice provides a
            full spectrum of family medicine services.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`group glass-card rounded-2xl p-8 hover:bg-white/[0.05] hover:border-white/10 transition-all duration-500 ${
                inView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{
                transitionDelay: inView ? `${i * 100}ms` : "0ms",
              }}
            >
              <div className="text-3xl mb-4">{service.icon}</div>
              <h3 className="font-display text-xl font-semibold mb-3 group-hover:text-accent-light transition-colors">
                {service.title}
              </h3>
              <p className="text-sm text-white/40 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const { ref, inView } = useInView();

  return (
    <section id="testimonials" className="relative py-32" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <div
          className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-xs tracking-[0.3em] uppercase text-gold mb-4 block">
            Patient Stories
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-semibold mb-4">
            Trusted by <span className="gradient-text">Families</span>
          </h2>
          <p className="text-white/40">
            See what our patients have to say about their experience at our
            practice.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`glass-card rounded-2xl p-8 transition-all duration-700 ${
                inView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: inView ? `${i * 150}ms` : "0ms" }}
            >
              {/* Quote mark */}
              <div className="text-4xl text-accent/20 font-display leading-none mb-4">
                &ldquo;
              </div>
              <p className="text-white/60 text-sm leading-relaxed mb-6">
                {t.text}
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-sm">{t.name}</p>
                  <div className="flex gap-0.5 mt-1">
                    {[...Array(t.rating)].map((_, j) => (
                      <StarIcon key={j} />
                    ))}
                  </div>
                </div>
                <span className="text-xs text-white/20">Verified Patient</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const { ref, inView } = useInView();

  return (
    <section id="contact" className="relative py-32" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold/[0.02] to-transparent" />

      <div className="relative max-w-6xl mx-auto px-6">
        <div
          className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-xs tracking-[0.3em] uppercase text-gold mb-4 block">
            Get In Touch
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-semibold mb-4">
            Visit <span className="gradient-text">Our Office</span>
          </h2>
          <p className="text-white/40">
            We&apos;re conveniently located in the Heights neighborhood of Jersey
            City. Walk-ins welcome.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Map */}
          <div
            className={`rounded-2xl overflow-hidden border border-white/5 transition-all duration-700 ${
              inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <iframe
              title="Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.3!2d-74.0501!3d40.7452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ0JzQyLjciTiA3NMKwMDMnMDAuNCJX!5e0!3m2!1sen!2sus!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Info cards */}
          <div
            className={`space-y-6 transition-all duration-700 delay-200 ${
              inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            {/* Address */}
            <div className="glass-card rounded-2xl p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent shrink-0">
                  <MapPinIcon />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Address</h3>
                  <p className="text-white/50 text-sm">
                    297 Central Ave A<br />
                    Jersey City, NJ 07307
                  </p>
                  <a
                    href="https://maps.google.com/?q=297+Central+Ave+A+Jersey+City+NJ+07307"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent text-sm mt-2 inline-block hover:text-accent-light transition-colors"
                  >
                    Get Directions &rarr;
                  </a>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="glass-card rounded-2xl p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center text-gold shrink-0">
                  <PhoneIcon />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Phone</h3>
                  <a
                    href="tel:+12014207373"
                    className="text-white/50 text-sm hover:text-white transition-colors"
                  >
                    (201) 420-7373
                  </a>
                  <p className="text-white/30 text-xs mt-1">
                    Call to schedule your appointment
                  </p>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="glass-card rounded-2xl p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent shrink-0">
                  <ClockIcon />
                </div>
                <div>
                  <h3 className="font-semibold mb-3">Office Hours</h3>
                  <div className="space-y-2 text-sm">
                    {[
                      ["Monday – Friday", "9:00 AM – 5:00 PM"],
                      ["Saturday", "9:00 AM – 1:00 PM"],
                      ["Sunday", "Closed"],
                    ].map(([day, time]) => (
                      <div
                        key={day}
                        className="flex justify-between gap-4"
                      >
                        <span className="text-white/50">{day}</span>
                        <span className="text-white/70 font-medium">
                          {time}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <a
              href="tel:+12014207373"
              className="block w-full text-center px-8 py-4 bg-gradient-to-r from-accent to-accent-light text-navy font-semibold rounded-full hover:shadow-xl hover:shadow-accent/20 transition-all duration-300"
            >
              Call to Book Your Appointment
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/5 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent to-gold flex items-center justify-center text-navy font-bold text-xs font-display">
              HS
            </div>
            <span className="text-sm text-white/40">
              &copy; {new Date().getFullYear()} Hemant Shah, MD. All rights
              reserved.
            </span>
          </div>
          <div className="flex items-center gap-6 text-xs text-white/30">
            <span>297 Central Ave A, Jersey City, NJ 07307</span>
            <span>|</span>
            <a
              href="tel:+12014207373"
              className="hover:text-white/60 transition-colors"
            >
              (201) 420-7373
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ─── Page ─── */
export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Recognition />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
