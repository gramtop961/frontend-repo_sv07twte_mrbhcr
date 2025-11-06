export default function Footer() {
  return (
    <footer id="contact" className="relative border-t border-black/5 dark:border-white/10 bg-white/80 dark:bg-neutral-950/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold">Let's build something great</h3>
            <p className="mt-2 text-neutral-600 dark:text-neutral-300">Have a project in mind? We’d love to talk about it.</p>
            <div className="mt-4 flex flex-col sm:flex-row gap-3">
              <a href="mailto:contact@binaryflow.in" className="inline-flex items-center justify-center rounded-full bg-black text-white dark:bg-white dark:text-black px-5 py-2.5 font-medium shadow">
                Send us an email
              </a>
              <a href="https://wa.me/919449057628" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full border border-neutral-300/60 dark:border-neutral-700 px-5 py-2.5 font-medium">
                Message on WhatsApp
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold">Contact</h4>
            <ul className="mt-2 text-neutral-700 dark:text-neutral-300 space-y-1">
              <li>
                <a href="tel:+919449057628" className="hover:underline">+91 94490 57628</a>
              </li>
              <li>
                <a href="mailto:contact@binaryflow.in" className="hover:underline">contact@binaryflow.in</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Why Binaryflow</h4>
            <ul className="mt-2 space-y-2 text-neutral-700 dark:text-neutral-300">
              <li>
                <span className="block font-medium">Built to scale</span>
                <span className="text-sm">Our software grows with your business, not against it.</span>
              </li>
              <li>
                <span className="block font-medium">Secure by design</span>
                <span className="text-sm">We follow best practices to keep your data safe at all times.</span>
              </li>
              <li>
                <span className="block font-medium">Easy to work with</span>
                <span className="text-sm">We stay in touch, give clear updates, and deliver on time.</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-neutral-600 dark:text-neutral-400">
          <div>
            <span className="inline-block h-3 w-3 rounded-sm bg-gradient-to-tr from-indigo-500 via-fuchsia-500 to-amber-400 mr-2 align-middle" />
            <span className="align-middle">2025 Binaryflow</span>
          </div>
          <div className="flex items-center gap-6">
            <span>Simple. Secure. Reliable.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
