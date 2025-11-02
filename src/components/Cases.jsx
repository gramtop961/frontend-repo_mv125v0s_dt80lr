import React from 'react';
import { motion } from 'framer-motion';

const cases = [
  {
    tag: 'AI-агент',
    title: 'Голосовой ассистент для колл-центра',
    result: '+37% закрытий без увеличения штата',
    image:
      'https://images.unsplash.com/photo-1707343843437-caacff5cfa74?q=80&w=1600&auto=format&fit=crop',
  },
  {
    tag: 'Дизайн',
    title: 'Айдентика и сайт для финтех-стартапа',
    result: 'Рост конверсии лендинга в 2.1 раза',
    image:
      'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=1600&auto=format&fit=crop',
  },
  {
    tag: 'Реклама',
    title: 'Быстрый запуск перформанс-кампаний',
    result: '-28% CPL за 3 недели оптимизации',
    image:
      'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1600&auto=format&fit=crop',
  },
];

export default function Cases() {
  return (
    <section id="cases" className="relative w-full bg-black py-16 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(40%_40%_at_20%_0%,rgba(236,72,153,0.12),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl font-semibold md:text-4xl"
        >
          Кейсы
        </motion.h2>
        <p className="mt-3 text-center text-white/70">Подтверждаем результат цифрами</p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {cases.map((c) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5"
            >
              <div className="relative h-56 w-full overflow-hidden">
                <img
                  src={c.image}
                  alt={c.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/0 to-black/60" />
                <div className="absolute left-3 top-3 rounded-full bg-white/10 px-3 py-1 text-xs backdrop-blur">{c.tag}</div>
              </div>
              <div className="p-5">
                <div className="text-lg font-medium">{c.title}</div>
                <div className="mt-2 text-sm text-emerald-400">{c.result}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
