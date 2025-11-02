import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Palette, Rocket, Settings, BadgeCheck, DollarSign } from 'lucide-react';

const services = [
  {
    icon: Palette,
    title: 'Графический дизайн',
    price: 'от $400',
    points: ['Логотип и айдентика', 'Бренд-гайд и презентации', 'Креативы для рекламы'],
    accent: 'from-fuchsia-500 to-orange-400',
  },
  {
    icon: Rocket,
    title: 'Реклама и перформанс',
    price: 'от $600/мес',
    points: ['Старт и аудит кампаний', 'Креативы и A/B тесты', 'Оптимизация под KPI'],
    accent: 'from-violet-500 to-fuchsia-500',
  },
  {
    icon: Bot,
    title: 'AI-агенты',
    price: 'от $800',
    points: ['Скрипты и тональность', 'Интеграции с CRM/CRM', 'Аналитика диалогов'],
    accent: 'from-blue-500 to-violet-500',
  },
  {
    icon: Settings,
    title: 'Автоматизация бизнеса',
    price: 'от $500',
    points: ['Интеграции сервисов', 'Сценарии и чат-боты', 'RPA-процессы'],
    accent: 'from-amber-400 to-pink-500',
  },
];

export default function Services() {
  return (
    <section id="services" className="relative w-full bg-zinc-950 py-16 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(40%_40%_at_50%_10%,rgba(139,92,246,0.15),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl font-semibold md:text-4xl"
        >
          Услуги и ориентировочные цены
        </motion.h2>
        <p className="mt-3 text-center text-white/70">Подберём формат под ваши цели и бюджет</p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, price, points, accent }) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md"
            >
              <div className={`absolute -right-10 -top-10 h-28 w-28 rounded-full bg-gradient-to-br ${accent} opacity-30 blur-2xl transition group-hover:opacity-50`} />
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-white/10 p-2"><Icon className="h-5 w-5" /></div>
                <div className="text-sm font-medium">{title}</div>
              </div>
              <div className="mt-4 text-2xl font-semibold">{price}</div>
              <ul className="mt-3 space-y-2 text-sm text-white/80">
                {points.map((p) => (
                  <li key={p} className="flex items-start gap-2"><BadgeCheck className="mt-0.5 h-4 w-4 text-emerald-400" /> {p}</li>
                ))}
              </ul>
              <button className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-xs text-white/90 transition hover:bg-white/10">
                <DollarSign className="h-4 w-4" /> Запросить предложение
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
