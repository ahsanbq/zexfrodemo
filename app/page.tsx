import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans text-zinc-900">
      {/* Navbar */}
      <header className="fixed inset-x-0 top-0 z-20 bg-[#0033Cd] shadow-lg">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10 lg:px-16">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-sm font-bold text-[#0033CC]">
              ZF
            </span>
            <span className="text-base font-bold tracking-tight text-white">
              ZEXFRO
            </span>
          </div>
          <nav className="hidden items-center gap-8 text-sm font-medium text-white md:flex">
            <a href="#" className="hover:text-[#8CD600] transition-colors">
              Home
            </a>
            <a href="#" className="hover:text-[#8CD600] transition-colors">
              Services
            </a>
            <a href="#" className="hover:text-[#8CD600] transition-colors">
              Work
            </a>
            <a href="#" className="hover:text-[#8CD600] transition-colors">
              About
            </a>
            <a href="#" className="hover:text-[#8CD600] transition-colors">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main className="flex min-h-screen w-full flex-col justify-center px-0 pt-0">
        {/* Hero Section */}
        <section className="relative min-h-screen w-full pt-[72px]">
          {/* Subtle hero background using import-3, full-width */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0  bg-[url('/hero/import-3.jpg')] bg-cover bg-center opacity-100"
          >
            <div className="absolute inset-0 bg-white/85" />
          </div>

          {/* Content container with max width */}
          <div className="relative mx-auto grid h-full w-full max-w-7xl items-stretch gap-12 px-6 md:px-10 lg:px-16 md:grid-cols-[minmax(0,1.05fr)_minmax(0,1.2fr)]">
            {/* Decorative SVG + gradient behind text */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-10 -left-10 -z-10 hidden w-[420px] md:block"
            >
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-100 via-sky-50 to-purple-100 opacity-60" />
              <svg
                viewBox="0 0 400 260"
                className="absolute -left-8 -top-10 h-72 w-[440px] text-indigo-100"
              >
                <defs>
                  <linearGradient id="heroShapeGradient" x1="0" x2="1" y1="0" y2="1">
                    <stop offset="0%" stopColor="#4f46e5" stopOpacity="0.3" />
                    <stop offset="40%" stopColor="#22c1c3" stopOpacity="0.18" />
                    <stop offset="100%" stopColor="#9333ea" stopOpacity="0.12" />
                  </linearGradient>
                </defs>
                <path
                  d="M36 28C93 -14 215 -5 284 20c52 19 93 63 93 121 0 64-45 104-103 109-55 5-126-20-176-43C42 184 10 156 4 123-3 84 4 52 36 28Z"
                  fill="url(#heroShapeGradient)"
                />
              </svg>
            </div>

            {/* Left: Text */}
            <div className="relative flex h-full flex-col justify-center space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Modern hero exploration
            </div>

            <div className="space-y-4">
              <h1 className="text-balance text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl">
                Dummy headline for your
                <span className="relative whitespace-nowrap">
                  {" "}
                  standout hero
                  <span className="pointer-events-none absolute inset-x-0 bottom-0 h-2 translate-y-1 bg-gradient-to-r from-indigo-300/80 via-sky-300/70 to-fuchsia-300/70" />
                </span>
              </h1>
              <p className="max-w-xl text-pretty text-base leading-relaxed text-zinc-600 sm:text-lg">
                Replace this with your own value proposition. A clear one–two sentence
                explanation of what you do, who you help, and why it matters. Keep it
                short, confident, and specific.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <button className="inline-flex items-center justify-center rounded-full bg-[#0033CC] px-7 py-3 text-sm font-semibold text-white shadow-[0_16px_40px_rgba(0,51,204,0.35)] transition hover:bg-[#0025a0] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0033CC]/70">
                Explore Our Global Services
              </button>
              <button className="inline-flex items-center justify-center rounded-full border border-[#0033CC] bg-white px-7 py-3 text-sm font-semibold text-[#0033CC] shadow-sm transition hover:bg-[#0033CC] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0033CC]/12">
                Partner With Us
              </button>
            </div>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-zinc-500">
              <div className="flex items-center gap-2">
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-[10px] font-semibold text-emerald-700">
                  ✓
                </span>
                <span>Dummy benefit one</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-sky-100 text-[10px] font-semibold text-sky-700">
                  ✓
                </span>
                <span>Dummy benefit two</span>
              </div>
            </div>
          </div>

            {/* Right: 2x2 grid – first row = 2 images side by side, second row = 1 image full width */}
            <div className="relative h-[50%] self-center md:pl-6">
              <div className="grid h-full w-full grid-cols-2 grid-rows-2 gap-0 overflow-hidden">
                {/* Row 1, Col 1 */}
                <div className="relative h-full overflow-hidden  p-[2px] sm:p-[3px]">
        <Image
                    src="/hero/import-1.jpeg"
                    alt="Hero visual 1"
                    width={1000}
                    height={1000}
                    className="h-full w-full object-cover"
          priority
        />
                </div>

                {/* Row 1, Col 2 */}
                <div className="relative h-full overflow-hidden  p-[2px] sm:p-[3px]">
                  <Image
                    src="/hero/import-3.jpg"
                    alt="Hero visual 2"
                    width={1000}
                    height={1000}
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Row 2, spans both columns */}
                <div className="relative col-span-2 h-full overflow-hidden p-[2px] sm:p-[3px]">
                  <Image
                    src="/hero/import-2.jpeg"
                    alt="Hero visual 3"
                    width={1000}
                    height={1000}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Preview Section */}
        <section className="w-full bg-white py-24">
          <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
            <div className="grid gap-12 md:grid-cols-2 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold tracking-tight text-[#1A1A1A] sm:text-4xl">
                  Who We Are
                </h2>
                <p className="text-base leading-relaxed text-zinc-600 sm:text-lg">
                  ZEXFRO International Ltd. is a global trading organization specializing in import, export & logistics management. With a strong commitment to quality and compliance, we operate in multiple regions worldwide.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-[#0033CC] font-semibold hover:gap-3 transition-all"
                >
                  Learn More About Us
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
              <div className="relative h-[400px] overflow-hidden rounded-2xl bg-zinc-100 shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0033CC]/10 to-[#000814]/5" />
              </div>
            </div>
          </div>
        </section>

        {/* Global Activity Section */}
        <section className="w-full bg-gradient-to-br from-[#F5F6FA] to-white py-24">
          <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight text-[#1A1A1A] sm:text-4xl">
                Our Global Presence
              </h2>
              <p className="mt-4 text-base text-zinc-600 sm:text-lg">
                We operate in over 12 international markets—connecting suppliers & distributors through a seamless trading ecosystem.
              </p>
            </div>

            {/* Map placeholder */}
            <div className="relative mb-12 h-[300px] overflow-hidden rounded-2xl bg-gradient-to-br from-[#000814] to-[#0033CC] shadow-xl">
              <div className="absolute inset-0 opacity-20">
                <svg viewBox="0 0 800 400" className="h-full w-full">
                  <defs>
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <svg className="mx-auto h-16 w-16 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-sm font-medium opacity-90">Global Network Map</p>
                </div>
              </div>
            </div>

            {/* 3 Highlight Cards */}
            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#0033CC]/10 text-2xl">
                  🌍
                </div>
                <h3 className="mb-2 text-lg font-semibold text-[#1A1A1A]">
                  Asia Region Operations
                </h3>
                <p className="text-sm text-zinc-600">
                  Shipment & sourcing networks
                </p>
              </div>

              <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#0033CC]/10 text-2xl">
                  🚢
                </div>
                <h3 className="mb-2 text-lg font-semibold text-[#1A1A1A]">
                  European Import Routes
                </h3>
                <p className="text-sm text-zinc-600">
                  Compliance-focused processes
                </p>
              </div>

              <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#0033CC]/10 text-2xl">
                  🏗️
                </div>
                <h3 className="mb-2 text-lg font-semibold text-[#1A1A1A]">
                  Middle East Supply Chain
                </h3>
                <p className="text-sm text-zinc-600">
                  Bulk commodity distribution
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Import/Export Product Highlights */}
        <section className="relative w-full py-24">
          {/* Subtle background using import-2, full-width */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[url('/hero/import-2.jpeg')] bg-cover bg-center opacity-100"
          >
            <div className="absolute inset-0 bg-white/85" />
          </div>

          <div className="relative mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight text-[#1A1A1A] sm:text-4xl">
                Our Products
              </h2>
              <p className="mt-4 text-base text-zinc-600 sm:text-lg">
                We import & export a wide range of certified products.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { title: "Premium Industrial Chemicals", desc: "High-grade chemicals for manufacturing" },
                { title: "Heavy Construction Materials", desc: "Bulk materials for infrastructure projects" },
                { title: "Agricultural Commodities", desc: "Quality produce and farming supplies" },
                { title: "Consumer & FMCG Items", desc: "Fast-moving consumer goods" }
              ].map((product, idx) => (
                <div key={idx} className="group rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm hover:shadow-lg transition-all">
                  <div className="mb-4 h-40 overflow-hidden rounded-xl bg-gradient-to-br from-zinc-100 to-zinc-50">
                    <div className="flex h-full items-center justify-center text-4xl opacity-40">
                      📦
                    </div>
                  </div>
                  <h3 className="mb-2 text-base font-semibold text-[#1A1A1A]">
                    {product.title}
                  </h3>
                  <p className="text-sm text-zinc-600">
                    {product.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <a
                href="#"
                className="inline-flex items-center gap-2 text-[#0033CC] font-semibold hover:gap-3 transition-all"
              >
                View All Products
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="w-full bg-gradient-to-br from-[#0033CC]/5 via-[#F5F6FA] to-white py-24">
          <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight text-[#1A1A1A] sm:text-4xl">
                Why ZEXFRO?
              </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <div className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm">
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#8CD600]/10">
                  <svg className="h-7 w-7 text-[#8CD600]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="mb-3 text-xl font-semibold text-[#1A1A1A]">
                  Global Compliance Standard
                </h3>
                <p className="text-sm leading-relaxed text-zinc-600">
                  We maintain top-tier certification & quality assurance.
                </p>
              </div>

              <div className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm">
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#8CD600]/10">
                  <svg className="h-7 w-7 text-[#8CD600]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="mb-3 text-xl font-semibold text-[#1A1A1A]">
                  Transparent Supply Chain
                </h3>
                <p className="text-sm leading-relaxed text-zinc-600">
                  Real-time updates & communication.
                </p>
              </div>

              <div className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm">
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#8CD600]/10">
                  <svg className="h-7 w-7 text-[#8CD600]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <h3 className="mb-3 text-xl font-semibold text-[#1A1A1A]">
                  Strong Trade Network
                </h3>
                <p className="text-sm leading-relaxed text-zinc-600">
                  Partnered with 40+ international companies.
          </p>
        </div>
            </div>

            <div className="mt-10 text-center">
              <a
                href="#"
                className="inline-flex items-center gap-2 text-[#0033CC] font-semibold hover:gap-3 transition-all"
              >
                Read Mission, Vision & Values
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* Case Studies Preview */}
        <section className="w-full bg-white py-24">
          <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight text-[#1A1A1A] sm:text-4xl">
                Case Studies
              </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <div className="group rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm hover:shadow-lg transition-all">
                <div className="mb-4 inline-flex items-center gap-2 text-xs font-semibold text-[#0033CC]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#0033CC]" />
                  SUCCESS STORY
                </div>
                <h3 className="mb-3 text-xl font-semibold text-[#1A1A1A]">
                  Improving Chemical Supply Chain Efficiency for Asian Clients
                </h3>
                <p className="mb-4 text-sm text-zinc-600">
                  How we streamlined logistics and reduced delivery times by 35% for a major manufacturing partner.
                </p>
                <a href="#" className="inline-flex items-center gap-2 text-sm font-semibold text-[#0033CC] hover:gap-3 transition-all">
                  Read Case Study
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>

              <div className="group rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm hover:shadow-lg transition-all">
                <div className="mb-4 inline-flex items-center gap-2 text-xs font-semibold text-[#0033CC]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#0033CC]" />
                  SUCCESS STORY
                </div>
                <h3 className="mb-3 text-xl font-semibold text-[#1A1A1A]">
                  Streamlined Export Workflow for European Buyers
                </h3>
                <p className="mb-4 text-sm text-zinc-600">
                  Implementing compliance-first processes that accelerated customs clearance and improved satisfaction.
                </p>
                <a href="#" className="inline-flex items-center gap-2 text-sm font-semibold text-[#0033CC] hover:gap-3 transition-all">
                  Read Case Study
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="mt-10 text-center">
              <a
                href="#"
                className="inline-flex items-center gap-2 text-[#0033CC] font-semibold hover:gap-3 transition-all"
              >
                View All Case Studies
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* Blog / Resources Section */}
        <section className="relative w-full py-24">
          {/* Subtle background using import-1, full-width */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[url('/hero/import-1.jpeg')] bg-cover bg-center opacity-100"
          >
            <div className="absolute inset-0 bg-white/85" />
          </div>

          <div className="relative mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight text-[#1A1A1A] sm:text-4xl">
                Latest Insights & Resources
              </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <article className="group rounded-2xl border border-zinc-200 bg-white shadow-sm hover:shadow-lg transition-all overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-[#0033CC]/10 to-zinc-100" />
                <div className="p-6">
                  <div className="mb-2 text-xs font-semibold text-zinc-500">
                    INDUSTRY TRENDS
                  </div>
                  <h3 className="mb-3 text-lg font-semibold text-[#1A1A1A]">
                    Global Trade Trends for 2025
                  </h3>
                  <p className="mb-4 text-sm text-zinc-600">
                    Learn how markets are shifting worldwide.
                  </p>
                  <a href="#" className="inline-flex items-center gap-2 text-sm font-semibold text-[#0033CC] hover:gap-3 transition-all">
                    Read Article
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </article>

              <article className="group rounded-2xl border border-zinc-200 bg-white shadow-sm hover:shadow-lg transition-all overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-[#8CD600]/10 to-zinc-100" />
                <div className="p-6">
                  <div className="mb-2 text-xs font-semibold text-zinc-500">
                    COMPLIANCE
                  </div>
                  <h3 className="mb-3 text-lg font-semibold text-[#1A1A1A]">
                    How Import Compliance Works
                  </h3>
                  <p className="mb-4 text-sm text-zinc-600">
                    A comprehensive guide to international regulations.
                  </p>
                  <a href="#" className="inline-flex items-center gap-2 text-sm font-semibold text-[#0033CC] hover:gap-3 transition-all">
                    Read Article
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </article>

              <article className="group rounded-2xl border border-zinc-200 bg-white shadow-sm hover:shadow-lg transition-all overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-[#000814]/10 to-zinc-100" />
                <div className="p-6">
                  <div className="mb-2 text-xs font-semibold text-zinc-500">
                    SUPPLY CHAIN
                  </div>
                  <h3 className="mb-3 text-lg font-semibold text-[#1A1A1A]">
                    Top 5 Strategies to Reduce Supply Chain Costs
                  </h3>
                  <p className="mb-4 text-sm text-zinc-600">
                    Proven methods to optimize your logistics.
                  </p>
                  <a href="#" className="inline-flex items-center gap-2 text-sm font-semibold text-[#0033CC] hover:gap-3 transition-all">
                    Read Article
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </article>
            </div>

            <div className="mt-10 text-center">
              <a
                href="#"
                className="inline-flex items-center gap-2 text-[#0033CC] font-semibold hover:gap-3 transition-all"
              >
                Browse All Blogs
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#0033CC] via-[#000814] to-[#001a66] py-24">
          {/* World map texture overlay */}
          <div className="pointer-events-none absolute inset-0 opacity-10">
            <svg viewBox="0 0 1200 600" className="h-full w-full">
              <defs>
                <pattern id="worldGrid" width="60" height="60" patternUnits="userSpaceOnUse">
                  <circle cx="30" cy="30" r="1" fill="white" />
                  <path d="M 60 30 L 0 30 M 30 60 L 30 0" stroke="white" strokeWidth="0.5" opacity="0.3" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#worldGrid)" />
            </svg>
          </div>

          <div className="relative mx-auto max-w-7xl px-6 text-center md:px-10 lg:px-16">
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Ready to Work With a Trusted Global Trade Company?
            </h2>
            <p className="mx-auto mb-10 max-w-2xl text-base text-white/90 sm:text-lg">
              Partner with ZEXFRO International for seamless import, export, and supply chain solutions worldwide.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button className="inline-flex items-center justify-center rounded-xl bg-white px-8 py-4 text-base font-semibold text-[#0033CC] shadow-xl transition hover:bg-zinc-50">
                Request a Quote
              </button>
              <button className="inline-flex items-center justify-center rounded-xl border-2 border-white bg-transparent px-8 py-4 text-base font-semibold text-white transition hover:bg-white/10">
                Contact Our Team
              </button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="w-full border-t border-zinc-200 bg-white py-12">
          <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
            <div className="grid gap-8 md:grid-cols-4">
              {/* Company Info */}
              <div className="md:col-span-2">
                <div className="mb-4 flex items-center gap-2">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#0033CC] text-sm font-semibold text-white">
                    ZF
                  </span>
                  <span className="text-lg font-bold tracking-tight text-zinc-900">
                    ZEXFRO International Ltd.
                  </span>
                </div>
                <p className="mb-4 text-sm text-zinc-600">
                  Import | Export | Global Logistics
                </p>
                <div className="flex items-center gap-4">
                  <a href="#" className="text-zinc-600 hover:text-[#0033CC] transition-colors">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                  <a href="#" className="text-zinc-600 hover:text-[#0033CC] transition-colors">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                    </svg>
                  </a>
                  <a href="#" className="text-zinc-600 hover:text-[#0033CC] transition-colors">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                    </svg>
          </a>
        </div>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="mb-4 text-sm font-semibold text-[#1A1A1A]">Quick Links</h4>
                <ul className="space-y-2 text-sm text-zinc-600">
                  <li><a href="#" className="hover:text-[#0033CC] transition-colors">Home</a></li>
                  <li><a href="#" className="hover:text-[#0033CC] transition-colors">About</a></li>
                  <li><a href="#" className="hover:text-[#0033CC] transition-colors">Products</a></li>
                  <li><a href="#" className="hover:text-[#0033CC] transition-colors">Blog</a></li>
                  <li><a href="#" className="hover:text-[#0033CC] transition-colors">Contact</a></li>
                </ul>
              </div>

              {/* Compliance Links */}
              <div>
                <h4 className="mb-4 text-sm font-semibold text-[#1A1A1A]">Compliance</h4>
                <ul className="space-y-2 text-sm text-zinc-600">
                  <li><a href="#" className="hover:text-[#0033CC] transition-colors">Terms & Conditions</a></li>
                  <li><a href="#" className="hover:text-[#0033CC] transition-colors">Privacy Policy</a></li>
                  <li><a href="#" className="hover:text-[#0033CC] transition-colors">Compliance</a></li>
                </ul>
              </div>
            </div>

            <div className="mt-8 border-t border-zinc-200 pt-8 text-center text-sm text-zinc-500">
              © {new Date().getFullYear()} ZEXFRO International Ltd. All rights reserved.
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
