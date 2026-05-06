"use client";

import {
  ArrowRight,
  BarChart3,
  Building2,
  ChevronRight,
  Globe2,
  LineChart,
  Mail,
  MapPin,
  Sparkles,
  Target,
  TrendingUp,
  Shield,
  Landmark,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import HeroBackground from "@/components/HeroBackground";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* ═══════════ HERO ═══════════ */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
        {/* Gradient background */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, #C94B72 0%, #D96840 40%, #E89838 70%, #F0B828 100%)",
          }}
        />
        <HeroBackground />

        {/* Slight dark overlay for readability */}
        <div className="absolute inset-0 bg-black/10" />

        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.35em] text-white/70">
            Data-Driven Urban Intelligence
          </p>

          <h1 className="text-5xl font-extrabold leading-tight text-white sm:text-6xl lg:text-7xl">
            City{" "}
            <span className="font-light">
              PRoPH<span className="font-extrabold">+</span>ET
            </span>
          </h1>

          <p className="mx-auto mt-3 max-w-lg text-sm font-medium italic text-white/60">
            City Parametric Records{" "}
            <span className="not-italic font-light">of</span>{" "}
            Performance Heuristics + Economic Trajectories
          </p>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-white/85">
            Empowering municipal administrations with predictive analytics
            and geospatial intelligence to strategically navigate sustainable
            urban development.
          </p>

          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#platform"
              className="group flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-text-primary shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02]"
            >
              Explore Platform
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="flex items-center gap-2 rounded-full border-2 border-white/40 px-8 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:border-white/70 hover:bg-white/10"
            >
              Contact Us
            </a>
          </div>

        </div>
      </section>

      {/* ═══════════ ABOUT ═══════════ */}
      <section id="about" className="relative overflow-hidden bg-white py-28 lg:py-36">
        {/* Background video */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover"
          >
            <source src="/map_animation.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-white/92" />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-coral">
                About
              </p>
              <h2 className="mt-4 text-3xl font-bold text-text-primary sm:text-4xl">
                Understanding Cities Through Data
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-text-secondary">
                City PRoPH+ET leverages data-driven geospatial intelligence,
                financial modeling, and predictive analytics to empower
                decision-makers with algorithmic and computational tools —
                enabling them to strategically understand the present state of
                their cities and navigate future sustainable urban development.
              </p>
            </div>
          </ScrollReveal>

          <div className="mt-20 grid gap-8 sm:grid-cols-3">
            {[
              {
                icon: Globe2,
                title: "Geospatial Intelligence",
                desc: "Parcel-level spatial analytics integrating tax, zoning, land-use, and environmental datasets into unified insights.",
              },
              {
                icon: TrendingUp,
                title: "Predictive Analytics",
                desc: "ML-powered forecasting of financial, environmental, and social return on investment for urban development scenarios.",
              },
              {
                icon: Shield,
                title: "Evidence-Based Decisions",
                desc: "Replace intuition with data-backed strategy. Equip your team with rigorous, transparent analytical frameworks.",
              },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 120}>
                <div className="group rounded-2xl border border-surface-border p-8 transition-all duration-300 hover:border-brand-coral/20 hover:shadow-lg">
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-xl"
                    style={{ background: "var(--gradient-brand-subtle)" }}
                  >
                    <item.icon className="h-6 w-6 text-brand-coral" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-text-primary">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                    {item.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ PLATFORM ═══════════ */}
      <section id="platform" className="bg-background-alt py-28 lg:py-36">
        <div className="mx-auto max-w-6xl px-6">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-orange">
                Platform
              </p>
              <h2 className="mt-4 text-3xl font-bold text-text-primary sm:text-4xl">
                Powered by{" "}
                <span className="font-mono font-bold tracking-tight">
                  PRED<span className="gradient-text">ROI</span>
                </span>
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-text-secondary">
                PREDROI is our urban decision platform — predicting
                return on investment across financial, environmental, and social
                dimensions for municipal development strategies.
              </p>
            </div>
          </ScrollReveal>

          {/* Platform demo video */}
          <ScrollReveal delay={100}>
            <div className="relative mx-auto mt-16 max-w-4xl overflow-hidden rounded-3xl border border-surface-border bg-black p-1 shadow-2xl shadow-brand-coral/5">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full rounded-2xl"
              >
                <source src="/demo_website.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="mt-6 text-center">
              <a
                href="https://predroi.cityprophet.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full px-8 py-3 text-sm font-semibold text-white transition-all duration-300 hover:opacity-90 hover:scale-[1.02]"
                style={{
                  background:
                    "linear-gradient(135deg, #D64C7E 0%, #E07848 100%)",
                }}
              >
                Go to PREDROI
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════ PRODUCTS ═══════════ */}
      <section id="products" className="bg-white py-28 lg:py-36">
        <div className="mx-auto max-w-6xl px-6">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-amber">
                Products
              </p>
              <h2 className="mt-4 text-3xl font-bold text-text-primary sm:text-4xl">
                Two Engines, One Platform
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-text-secondary">
                PREDROI integrates two specialized engines — analytics and prediction —
                to deliver comprehensive urban intelligence.
              </p>
            </div>
          </ScrollReveal>

          <div className="mt-20 grid gap-8 lg:grid-cols-2">
            {/* P0LYMATH */}
            <ScrollReveal delay={0}>
              <div className="group relative overflow-hidden rounded-3xl border border-surface-border bg-white p-10 transition-all duration-500 hover:shadow-xl hover:border-brand-coral/20">
                <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-brand-coral/5 transition-transform duration-500 group-hover:scale-150" />
                <div className="relative">
                  <div className="flex items-center gap-3">
                    <BarChart3 className="h-8 w-8 text-brand-coral" />
                    <h3 className="font-mono text-2xl font-bold text-text-primary">
                      P<span className="gradient-text">0</span>LYMATH
                    </h3>
                  </div>
                  <p className="mt-2 text-sm font-semibold uppercase tracking-wider text-text-tertiary">
                    Urban Analytics Engine
                  </p>

                  <p className="mt-6 text-sm leading-relaxed text-text-secondary">
                    Multi-layer geospatial analysis across tax assessment, zoning,
                    land-use, and environmental datasets — providing comprehensive
                    urban analytics with overlay systems and comparative tools.
                  </p>

                  <ul className="mt-8 space-y-3">
                    {[
                      "Multi-layer overlay analysis system",
                      "Tax, zoning & land-use data integration",
                      "Comparative analytics across parcels",
                      "ArcGIS & GIS data interoperability",
                    ].map((feat) => (
                      <li
                        key={feat}
                        className="flex items-start gap-3 text-sm text-text-secondary"
                      >
                        <ChevronRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-coral" />
                        {feat}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 flex items-center gap-4">
                    <div className="flex gap-1">
                      <BarChart3 className="h-5 w-5 text-text-tertiary" />
                      <LineChart className="h-5 w-5 text-text-tertiary" />
                      <MapPin className="h-5 w-5 text-text-tertiary" />
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* PROD1GY */}
            <ScrollReveal delay={150}>
              <div className="group relative overflow-hidden rounded-3xl border border-surface-border bg-white p-10 transition-all duration-500 hover:shadow-xl hover:border-brand-amber/30">
                <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-brand-amber/5 transition-transform duration-500 group-hover:scale-150" />
                <div className="relative">
                  <div className="flex items-center gap-3">
                    <Sparkles className="h-8 w-8 text-brand-amber" />
                    <h3 className="font-mono text-2xl font-bold text-text-primary">
                      PROD<span className="gradient-text">1</span>GY
                    </h3>
                  </div>
                  <p className="mt-2 text-sm font-semibold uppercase tracking-wider text-text-tertiary">
                    Predictive ROI Engine
                  </p>

                  <p className="mt-6 text-sm leading-relaxed text-text-secondary">
                    ML-based parcel-level prediction of financial, environmental,
                    and social return on investment — enabling scenario simulation
                    and evidence-based development planning.
                  </p>

                  <ul className="mt-8 space-y-3">
                    {[
                      "Parcel-level ROI prediction (F/E/S-ROI)",
                      "Development scenario simulation",
                      "ML-powered predictive modeling",
                      "Impact assessment & decision support",
                    ].map((feat) => (
                      <li
                        key={feat}
                        className="flex items-start gap-3 text-sm text-text-secondary"
                      >
                        <ChevronRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-amber" />
                        {feat}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 flex items-center gap-4">
                    <div className="flex gap-1">
                      <Sparkles className="h-5 w-5 text-text-tertiary" />
                      <Target className="h-5 w-5 text-text-tertiary" />
                      <TrendingUp className="h-5 w-5 text-text-tertiary" />
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══════════ HOW IT WORKS ═══════════ */}
      <section className="bg-background-alt py-28 lg:py-36">
        <div className="mx-auto max-w-6xl px-6">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-orange">
                Process
              </p>
              <h2 className="mt-4 text-3xl font-bold text-text-primary sm:text-4xl">
                How It Works
              </h2>
            </div>
          </ScrollReveal>

          <div className="relative mt-20">
            {/* Connecting line */}
            <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-brand-coral/20 via-brand-orange/20 to-brand-amber/20 lg:block" />

            <div className="grid gap-16 lg:gap-0">
              {[
                {
                  step: "01",
                  title: "Data Integration",
                  desc: "Ingest GIS, tax assessment, zoning, and land-use data at parcel-level granularity. Compatible with ArcGIS and standard geospatial formats.",
                  icon: Globe2,
                  color: "brand-coral",
                },
                {
                  step: "02",
                  title: "P0LYMATH Analysis",
                  desc: "Apply multi-layer overlay analysis to understand current urban conditions — tax performance, zoning classifications, environmental factors.",
                  icon: BarChart3,
                  color: "brand-coral",
                },
                {
                  step: "03",
                  title: "PROD1GY Prediction",
                  desc: "Run ML-powered scenario simulations to predict financial, environmental, and social ROI for development proposals.",
                  icon: Sparkles,
                  color: "brand-orange",
                },
                {
                  step: "04",
                  title: "Strategic Decisions",
                  desc: "Deliver transparent, data-backed insights to decision-makers — enabling evidence-based urban development strategy.",
                  icon: Target,
                  color: "brand-amber",
                },
              ].map((item, i) => (
                <ScrollReveal key={item.step} delay={i * 100}>
                  <div
                    className={`relative flex flex-col items-center gap-6 lg:flex-row ${
                      i % 2 === 1 ? "lg:flex-row-reverse" : ""
                    }`}
                  >
                    <div
                      className={`flex-1 ${
                        i % 2 === 1 ? "lg:text-right" : "lg:text-left"
                      }`}
                    >
                      <span
                        className={`font-mono text-sm font-bold text-${item.color}`}
                      >
                        {item.step}
                      </span>
                      <h3 className="mt-2 text-xl font-bold text-text-primary">
                        {item.title}
                      </h3>
                      <p className="mt-3 max-w-md text-sm leading-relaxed text-text-secondary">
                        {item.desc}
                      </p>
                    </div>

                    <div className="z-10 flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl border border-surface-border bg-white shadow-md">
                      <item.icon className={`h-7 w-7 text-${item.color}`} />
                    </div>

                    <div className="flex-1" />
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ FOR MUNICIPALITIES ═══════════ */}
      <section id="municipalities" className="bg-white py-28 lg:py-36">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <ScrollReveal>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-coral">
                  For Municipalities
                </p>
                <h2 className="mt-4 text-3xl font-bold text-text-primary sm:text-4xl">
                  Built for the Cities
                  <br />
                  of Tomorrow
                </h2>
                <p className="mt-6 text-base leading-relaxed text-text-secondary">
                  City PRoPH+ET is purpose-built for municipal administrations
                  seeking data-driven approaches to urban planning,
                  development, and fiscal strategy.
                </p>

                <div className="mt-10 space-y-6">
                  {[
                    {
                      icon: Landmark,
                      title: "Optimize Land-Use Decisions",
                      desc: "Data-backed insights for zoning, development approvals, and land-use planning.",
                    },
                    {
                      icon: TrendingUp,
                      title: "Forecast Tax Revenue Impact",
                      desc: "Predict fiscal outcomes of development scenarios before committing resources.",
                    },
                    {
                      icon: BarChart3,
                      title: "Multi-Dimensional ROI Assessment",
                      desc: "Evaluate financial, environmental, and social impact simultaneously.",
                    },
                    {
                      icon: Building2,
                      title: "Strategic Development Planning",
                      desc: "Scenario-based modeling for long-term sustainable urban growth.",
                    },
                  ].map((item, i) => (
                    <ScrollReveal key={item.title} delay={i * 80}>
                      <div className="flex gap-4">
                        <div
                          className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg"
                          style={{
                            background: "var(--gradient-brand-subtle)",
                          }}
                        >
                          <item.icon className="h-5 w-5 text-brand-coral" />
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-text-primary">
                            {item.title}
                          </h4>
                          <p className="mt-1 text-sm text-text-secondary">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div
                className="flex aspect-[4/3] items-center justify-center rounded-3xl p-8"
                style={{
                  background:
                    "linear-gradient(135deg, #C94B72 0%, #D96840 40%, #E89838 70%, #F0B828 100%)",
                }}
              >
                <div className="w-full max-w-sm space-y-4 rounded-2xl bg-white/10 p-6 backdrop-blur-sm border border-white/20">
                  <div className="flex items-center gap-3">
                    <div className="h-3 w-3 rounded-full bg-green-400" />
                    <span className="text-xs font-semibold text-white/80">
                      Development Scenario #4
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { label: "F-ROI", value: "+12.4%", color: "#10b981" },
                      { label: "E-ROI", value: "+3.2%", color: "#3b82f6" },
                      { label: "S-ROI", value: "+8.7%", color: "#f59e0b" },
                    ].map((roi) => (
                      <div
                        key={roi.label}
                        className="rounded-lg bg-white/10 p-3 text-center"
                      >
                        <p className="text-[10px] font-medium text-white/50">
                          {roi.label}
                        </p>
                        <p
                          className="mt-1 font-mono text-lg font-bold"
                          style={{ color: roi.color }}
                        >
                          {roi.value}
                        </p>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-2">
                    {[
                      { label: "Tax Revenue", w: "72%" },
                      { label: "Assessment", w: "85%" },
                      { label: "Env. Score", w: "58%" },
                    ].map((bar) => (
                      <div key={bar.label}>
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] text-white/50">
                            {bar.label}
                          </span>
                          <span className="text-[10px] font-mono text-white/50">
                            {bar.w}
                          </span>
                        </div>
                        <div className="mt-1 h-1.5 w-full rounded-full bg-white/10">
                          <div
                            className="h-full rounded-full bg-white/40"
                            style={{ width: bar.w }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-2 pt-2">
                    <button className="flex-1 rounded-lg bg-white/20 py-2 text-xs font-semibold text-white backdrop-blur-sm">
                      Approve
                    </button>
                    <button className="flex-1 rounded-lg border border-white/20 py-2 text-xs font-semibold text-white/60">
                      Compare
                    </button>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══════════ CTA BANNER ═══════════ */}
      <section
        className="relative overflow-hidden py-24"
        style={{
          background:
            "linear-gradient(135deg, #C94B72 0%, #D96840 40%, #E89838 70%, #F0B828 100%)",
        }}
      >
        <div className="absolute inset-0 bg-black/5" />
        <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Ready to Transform Urban Planning?
            </h2>
            <p className="mt-4 text-lg text-white/80">
              Join forward-thinking municipalities already leveraging
              data-driven intelligence for sustainable development decisions.
            </p>
            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-10 py-4 text-sm font-semibold text-text-primary shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02]"
            >
              Schedule a Demo
              <ArrowRight className="h-4 w-4" />
            </a>
            <p className="mt-5 text-sm text-white/60">
              Already have access?{" "}
              <a
                href="https://predroi.cityprophet.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-white underline underline-offset-2 hover:text-white/90"
              >
                Login to PREDROI &rarr;
              </a>
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════ CONTACT ═══════════ */}
      <section id="contact" className="bg-background-alt py-28 lg:py-36">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid items-start gap-16 lg:grid-cols-2">
            <ScrollReveal>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-coral">
                  Contact
                </p>
                <h2 className="mt-4 text-3xl font-bold text-text-primary sm:text-4xl">
                  Get in Touch
                </h2>
                <p className="mt-6 text-base leading-relaxed text-text-secondary">
                  Interested in learning how City PRoPH+ET can support your
                  municipality&apos;s urban development strategy? Reach out to
                  schedule a demo or discuss your needs.
                </p>

                <div className="mt-10 space-y-5">
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-coral/10">
                      <Mail className="h-5 w-5 text-brand-coral" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-text-tertiary">
                        Email
                      </p>
                      <p className="text-sm font-semibold text-text-primary">
                        contact@cityprophet.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="space-y-5 rounded-2xl border border-surface-border bg-white p-8 shadow-sm"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-xs font-semibold text-text-secondary">
                      Name
                    </label>
                    <input
                      type="text"
                      className="w-full rounded-lg border border-surface-border bg-white px-4 py-2.5 text-sm text-text-primary outline-none transition-colors focus:border-brand-coral/40"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs font-semibold text-text-secondary">
                      Organization
                    </label>
                    <input
                      type="text"
                      className="w-full rounded-lg border border-surface-border bg-white px-4 py-2.5 text-sm text-text-primary outline-none transition-colors focus:border-brand-coral/40"
                      placeholder="City / Municipality"
                    />
                  </div>
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-semibold text-text-secondary">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full rounded-lg border border-surface-border bg-white px-4 py-2.5 text-sm text-text-primary outline-none transition-colors focus:border-brand-coral/40"
                    placeholder="you@city.gov"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-semibold text-text-secondary">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full resize-none rounded-lg border border-surface-border bg-white px-4 py-2.5 text-sm text-text-primary outline-none transition-colors focus:border-brand-coral/40"
                    placeholder="Tell us about your urban development goals..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-lg py-3 text-sm font-semibold text-white transition-all duration-300 hover:opacity-90"
                  style={{
                    background:
                      "linear-gradient(135deg, #D64C7E 0%, #E07848 100%)",
                  }}
                >
                  Send Message
                </button>
              </form>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══════════ FOOTER ═══════════ */}
      <footer className="border-t border-surface-border bg-white py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 sm:grid-cols-4">
            <div className="sm:col-span-2">
              <span className="text-lg font-bold text-text-primary">
                City <span className="font-light">PRoPH+ET</span>
              </span>
              <p className="mt-3 max-w-sm text-sm leading-relaxed text-text-secondary">
                City Parametric Records of Performance Heuristics + Economic
                Trajectories — data-driven urban intelligence for sustainable
                municipal development.
              </p>
            </div>
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-text-tertiary">
                Platform
              </h4>
              <ul className="mt-4 space-y-3">
                <li>
                  <a
                    href="https://predroi.cityprophet.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-text-secondary hover:text-text-primary"
                  >
                    PREDROI
                  </a>
                </li>
                <li>
                  <a
                    href="#products"
                    className="text-sm text-text-secondary hover:text-text-primary"
                  >
                    P0LYMATH
                  </a>
                </li>
                <li>
                  <a
                    href="#products"
                    className="text-sm text-text-secondary hover:text-text-primary"
                  >
                    PROD1GY
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-text-tertiary">
                Company
              </h4>
              <ul className="mt-4 space-y-3">
                <li>
                  <a
                    href="#about"
                    className="text-sm text-text-secondary hover:text-text-primary"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-sm text-text-secondary hover:text-text-primary"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="#municipalities"
                    className="text-sm text-text-secondary hover:text-text-primary"
                  >
                    For Municipalities
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 border-t border-surface-border pt-8">
            <p className="text-xs text-text-tertiary">
              &copy; {new Date().getFullYear()} City PRoPH+ET. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
