export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <p className="text-sm font-medium text-indigo-600">Let's build something great</p>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">Have a project in mind? We’d love to talk about it.</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <a href="mailto:contact@binaryflow.in" className="rounded-2xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-neutral-900/60 p-6 backdrop-blur hover:shadow-md transition">
                <div className="text-sm text-neutral-600 dark:text-neutral-300">Send us an email</div>
                <div className="mt-1 font-semibold text-neutral-900 dark:text-white">contact@binaryflow.in</div>
              </a>
              <a href="https://wa.me/919449057628" target="_blank" rel="noreferrer" className="rounded-2xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-neutral-900/60 p-6 backdrop-blur hover:shadow-md transition">
                <div className="text-sm text-neutral-600 dark:text-neutral-300">Message on WhatsApp</div>
                <div className="mt-1 font-semibold text-neutral-900 dark:text-white">+91 94490 57628</div>
              </a>
            </div>
          </div>
          <div className="rounded-2xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-neutral-900/60 p-6 backdrop-blur">
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">Name</label>
                <input type="text" className="mt-1 w-full rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Your name" />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">Email</label>
                <input type="email" className="mt-1 w-full rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500" placeholder="you@example.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">Message</label>
                <textarea rows={4} className="mt-1 w-full rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Tell us about your project" />
              </div>
              <button type="button" className="w-full rounded-full bg-black text-white dark:bg-white dark:text-black px-4 py-2 text-sm font-semibold shadow-sm hover:shadow transition">
                Send message
              </button>
            </form>
            <p className="mt-4 text-xs text-neutral-500">By submitting, you agree to be contacted about your inquiry.</p>
          </div>
        </div>
        <footer className="mt-16 border-t border-black/10 dark:border-white/10 pt-8 text-sm text-neutral-600 dark:text-neutral-300">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div className="font-semibold text-neutral-900 dark:text-white">Binaryflow</div>
              <div className="text-xs text-neutral-500">Simple. Secure. Reliable.</div>
            </div>
            <div className="text-xs">2025 Binaryflow • contact@binaryflow.in</div>
          </div>
        </footer>
      </div>
    </section>
  );
}
