import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { Rocket, Bot, Palette, Settings, ArrowRight } from 'lucide-react';

const features = [
  { icon: Bot, title: 'AI-агенты', desc: 'Проектируем умных ассистентов для продаж, поддержки и автоматизации.' },
  { icon: Palette, title: 'Графический дизайн', desc: 'Айдентика, бренд-гайды, презентации и рекламные креативы.' },
  { icon: Settings, title: 'Автоматизация', desc: 'Связываем сервисы, настраиваем сценарии, сокращаем ручной труд.' },
  { icon: Rocket, title: 'Реклама', desc: 'Запуск и оптимизация рекламных кампаний под KPI.' },
];

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* subtle gradient veil so text stays readable */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_50%,rgba(124,58,237,0.25),transparent)]" />
      </div>

      {/* Top navigation */}
      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 py-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-violet-500 via-fuchsia-500 to-orange-400 shadow-lg shadow-fuchsia-500/30" />
            <span className="font-semibold tracking-tight">Flames Creative</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm text-white/80">
            <a href="#services" className="hover:text-white transition">Услуги</a>
            <a href="#cases" className="hover:text-white transition">Кейсы</a>
            <a href="#contact" className="hover:text-white transition">Контакты</a>
          </div>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm backdrop-blur transition hover:bg-white/20"
          >
            Обсудить проект
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>

      {/* Hero content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pt-12 md:pt-20">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center text-4xl font-semibold leading-tight md:text-6xl"
        >
          Креативное агентство для эпохи ИИ
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="mt-4 max-w-2xl text-center text-white/80"
        >
          Делаем бренды заметными, процессы — автоматизированными, а маркетинг — управляемым данными.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#services"
            className="rounded-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-orange-400 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-fuchsia-500/30 transition hover:brightness-110"
          >
            Посмотреть услуги
          </a>
          <a
            href="#cases"
            className="rounded-full border border-white/20 px-6 py-3 text-sm text-white/90 backdrop-blur transition hover:bg-white/10"
          >
            Кейсы
          </a>
        </motion.div>

        <div className="mt-12 grid w-full grid-cols-2 gap-4 md:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm"
            >
              <div className="flex items-start gap-3">
                <div className="rounded-lg bg-white/10 p-2"><Icon className="h-5 w-5" /></div>
                <div>
                  <div className="text-sm font-medium">{title}</div>
                  <div className="mt-1 text-xs text-white/70">{desc}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
