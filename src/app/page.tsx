import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="relative flex min-height-screen flex-col items-center justify-center overflow-hidden px-4">
      {/* Decorative "Canyon" Waves */}
      <div className="absolute top-0 left-0 w-full opacity-30">
        <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
          <path 
            fill="#F4A261" 
            d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,149.3C672,149,768,203,864,213.3C960,224,1056,192,1152,165.3C1248,139,1344,117,1392,106.7L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </div>

      <div className="z-10 text-center">
        <h1 className="mb-4 text-6xl font-bold tracking-tighter text-white md:text-8xl">
          ANTELOPE <span className="text-canyon-light">NATION</span>
        </h1>
        <p className="mb-8 text-lg font-medium text-orange-100 md:text-xl">
          Track your F-1 career journey through the twists and turns of the job market.
        </p>

        <div className="glass-card mx-auto max-w-md p-8 shadow-2xl">
          <h2 className="mb-6 text-2xl font-semibold">Get Started</h2>
          <div className="flex flex-col gap-4">
            <Link 
              href="/signup" 
              className="w-full rounded-lg bg-white px-6 py-3 font-bold text-canyon-deep transition-colors hover:bg-orange-50"
            >
              Create Account
            </Link>
            <Link 
              href="/login" 
              className="w-full rounded-lg border-2 border-white px-6 py-3 font-bold text-white transition-all hover:bg-white/10"
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>

      {/* Footer Info */}
      <footer className="absolute bottom-4 text-sm text-orange-200/60">
        May 2026 Graduation Cohort
      </footer>
    </main>
  );
}