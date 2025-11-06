import { Rocket, Smartphone, Settings, Workflow, Wrench } from 'lucide-react';

const services = [
  {
    key: 'web',
    icon: Rocket,
    title: 'Web applications',
    desc: 'Custom websites and online systems built for your business.',
    bullets: ['Fast and secure', 'Easy to use', 'Works on all devices'],
  },
  {
    key: 'mobile',
    icon: Smartphone,
    title: 'Mobile apps',
    desc: 'Simple, user-friendly apps for Android and iOS.',
    bullets: ['Native or hybrid apps', 'Smooth design', 'Reliable performance'],
  },
  {
    key: 'upgrades',
    icon: Settings,
    title: 'System upgrades',
    desc: 'We improve or replace old tools with better, faster software.',
    bullets: ['Modern interfaces', 'Better speed', 'Data migration'],
  },
  {
    key: 'automation',
    icon: Workflow,
    title: 'Automation tools',
    desc: 'We help you save time by automating daily tasks.',
    bullets: ['Less manual work', 'Accurate results', 'Custom logic'],
  },
  {
    key: 'custom',
    icon: Wrench,
    title: 'Custom software',
    desc: 'Tools made for your exact needs — no unnecessary features.',
    bullets: ['Made for your workflow', 'Easy to maintain', 'Cloud ready'],
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-28 bg-gradient-to-b from-white to-neutral-50 dark:from-neutral-950 dark:to-neutral-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-widest text-neutral-600 dark:text-neutral-400">Our services</p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">
            We create modern software for web and mobile.
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ key, icon: Icon, title, desc, bullets }) => (
            <div
              key={key}
              className="group rounded-2xl border border-neutral-200/70 dark:border-neutral-800 bg-white/80 dark:bg-neutral-900/60 backdrop-blur p-6 hover:shadow-xl hover:-translate-y-0.5 transition-all"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-amber-400 text-white shadow-md">
                <Icon size={22} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-neutral-900 dark:text-white">{title}</h3>
              <p className="mt-1 text-neutral-600 dark:text-neutral-300">{desc}</p>
              <ul className="mt-4 space-y-1 text-sm text-neutral-700 dark:text-neutral-300">
                {bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-neutral-400/80" /> {b}
                  </li>
                ))}
              </ul>
              <div className="mt-5">
                <a href="#services" className="text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:underline">
                  See all services
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
