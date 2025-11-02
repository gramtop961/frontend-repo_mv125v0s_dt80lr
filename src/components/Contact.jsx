import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, MessageSquare } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative w-full bg-zinc-950 py-16 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(40%_40%_at_80%_0%,rgba(99,102,241,0.12),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl font-semibold md:text-4xl"
        >
          Связаться с нами
        </motion.h2>
        <p className="mt-3 text-center text-white/70">Расскажите о задаче — предложим решения и рассчитем смету</p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <motion.form
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-xs text-white/70">Имя</label>
                <input
                  type="text"
                  required
                  className="mt-1 w-full rounded-xl border border-white/10 bg-black/40 px-3 py-2 text-sm outline-none ring-0 placeholder:text-white/40 focus:border-white/20"
                  placeholder="Иван"
                />
              </div>
              <div>
                <label className="text-xs text-white/70">Email</label>
                <input
                  type="email"
                  required
                  className="mt-1 w-full rounded-xl border border-white/10 bg-black/40 px-3 py-2 text-sm outline-none placeholder:text-white/40 focus:border-white/20"
                  placeholder="you@example.com"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="text-xs text-white/70">Кратко о проекте</label>
                <textarea
                  rows={4}
                  required
                  className="mt-1 w-full rounded-xl border border-white/10 bg-black/40 px-3 py-2 text-sm outline-none placeholder:text-white/40 focus:border-white/20"
                  placeholder="Что делаем, сроки, бюджет"
                />
              </div>
            </div>
            <button
              type="submit"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-orange-400 px-5 py-2.5 text-sm font-medium shadow-lg shadow-fuchsia-500/30 transition hover:brightness-110"
            >
              <MessageSquare className="h-4 w-4" /> Отправить запрос
            </button>
            <p className="mt-3 text-xs text-white/50">Мы свяжемся с вами в течение рабочего дня</p>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
          >
            <div className="space-y-4 text-sm">
              <div className="flex items-center gap-3"><Mail className="h-5 w-5 text-white/70" /> hello@flames.agency</div>
              <div className="flex items-center gap-3"><Phone className="h-5 w-5 text-white/70" /> +7 (900) 000-00-00</div>
              <div className="flex items-center gap-3"><MapPin className="h-5 w-5 text-white/70" /> Remote • Worldwide</div>
            </div>
            <div className="mt-6 rounded-xl border border-white/10 p-4 text-xs text-white/70">
              Нужна оценка быстро? Опишите задачу в одном письме — пришлём варианты и тайминг.
            </div>
            <a
              href="mailto:hello@flames.agency?subject=Запрос%20на%20оценку"
              className="mt-5 inline-block rounded-full border border-white/15 px-5 py-2 text-xs text-white/90 transition hover:bg-white/10"
            >
              Написать на почту
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
