import React from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import Cases from './components/Cases';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white antialiased">
      <Hero />
      <Services />
      <Cases />
      <Contact />
      <footer className="border-t border-white/10 bg-black/60 py-10 text-white/70">
        <div className="mx-auto max-w-7xl px-6 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-violet-500 via-fuchsia-500 to-orange-400" />
            <span className="text-sm">© {new Date().getFullYear()} Flames Creative</span>
          </div>
          <div className="text-xs">Графический дизайн • Реклама • AI-агенты • Автоматизация • СМИ</div>
        </div>
      </footer>
    </div>
  );
}
