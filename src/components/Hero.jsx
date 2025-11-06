import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative h-[92vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/30 to-white pointer-events-none dark:from-neutral-900/40 dark:via-neutral-900/40 dark:to-neutral-950" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-widest text-neutral-700/80 dark:text-neutral-300/80">Binaryflow</p>
          <h1 className="mt-3 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-600 dark:from-white dark:via-neutral-200 dark:to-neutral-400">
            Smart ideas. Simple software.
          </h1>
          <p className="mt-4 text-lg text-neutral-700 dark:text-neutral-300">
            We build websites and mobile apps for growing businesses. Our team designs and develops custom software that helps companies run better, save time, and grow faster.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-black text-white dark:bg-white dark:text-black px-6 py-3 font-medium shadow-lg shadow-black/10 dark:shadow-white/10 hover:opacity-90 transition">
              Start your project
            </a>
            <a href="#about" className="inline-flex items-center justify-center rounded-full border border-neutral-300/60 dark:border-neutral-700 px-6 py-3 font-medium text-neutral-800 dark:text-neutral-200 hover:bg-neutral-900/5 dark:hover:bg-white/5 transition">
              Talk to us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
