import heroImage from '@/assets/hero.png'
export function HeroSection() {
  return (
    <section
      className="relative flex flex-col items-center justify-center text-center px-5 pt-10 pb-16"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Dark overlay */}
      <div className="z-10 absolute inset-0 bg-black/55" />
      <div className="z-20 flex flex-col items-center">
        {/* Country badge */}
        <div className="mt-20 mb-5 inline-flex items-center gap-1.5 px-3 py-1 text-sm text-white/90">
          🇱🇰 SRI LANKA
        </div>

        <h1 className="mb-3 max-w-2xl text-7xl leading-tight font-bold text-white">
          Find Your Perfect
          <br />
          Co-Living Space
        </h1>

        <p className="mb-7 max-w-2xl text-xl leading-relaxed text-white/70">
          Discover affordable, community-driven co-living spaces across Colombo
          and beyond. Live with people who share your ambitions.
        </p>

        {/* Stats */}
        <div className="flex items-center gap-15 text-white">
          <div>
            <p className="text-5xl leading-none font-bold">6+</p>
            <p className="mt-1 text-sm text-orange-200">Properties</p>
          </div>
          <div>
            <p className="text-5xl leading-none font-bold">3</p>
            <p className="mt-1 text-sm text-orange-200">Cities</p>
          </div>
          <div>
            <p className="text-5xl leading-none font-bold">42+</p>
            <p className="mt-1 text-sm text-orange-200">Happy Residents</p>
          </div>
        </div>
      </div>
    </section>
  )
}