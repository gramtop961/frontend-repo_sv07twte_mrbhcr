import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Work from './components/Work';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900 dark:bg-neutral-950 dark:text-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Work />
      </main>
      <Footer />
    </div>
  );
}
