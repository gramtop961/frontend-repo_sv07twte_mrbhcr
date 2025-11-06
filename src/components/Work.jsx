export default function Work() {
  const projects = [
    {
      title: 'Learning management system (LMS)',
      badge: ['Web app', 'Education', 'LMS'],
      desc:
        'An online learning platform with live classes, student dashboards, and progress tracking. Built for schools and training centers to manage courses and run online sessions easily.',
    },
    {
      title: 'Retail and booking platform',
      badge: ['Web app', 'E-commerce', 'Booking system'],
      desc:
        'A complete web solution for resorts, homestays, and retail stores. Includes online booking, payments, availability calendar, and an admin control panel for managing guests and sales.',
    },
    {
      title: 'Retail POS and stock app',
      badge: ['Mobile app', 'Retail', 'POS'],
      desc:
        'A mobile and web app that connects store billing with stock, reports, and centralized inventory in real time.',
    },
  ];

  return (
    <section id="work" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-widest text-neutral-600 dark:text-neutral-400">Our work</p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">
            A few examples of real projects we’ve built.
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <article key={p.title} className="rounded-2xl border border-neutral-200/70 dark:border-neutral-800 bg-white/80 dark:bg-neutral-900/60 backdrop-blur p-6 hover:shadow-xl transition">
              <h3 className="text-xl font-semibold text-neutral-900 dark:text-white">{p.title}</h3>
              <div className="mt-2 flex flex-wrap gap-2">
                {p.badge.map((b) => (
                  <span key={b} className="inline-flex items-center rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 px-2.5 py-1 text-xs">
                    {b}
                  </span>
                ))}
              </div>
              <p className="mt-3 text-neutral-600 dark:text-neutral-300">{p.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
