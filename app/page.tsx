"use client";

import { useState } from "react";
import Link from "next/link";
import ChatAssistant from "./components/ChatAssistant";
import { motion, AnimatePresence } from "framer-motion";
import { Variants } from "framer-motion";

type LinkItem = { label: string; url: string };
type ResourceCard = {
  title: string;
  subtitle?: string;
  icon: string;
  gradient: string;
  iconColor: string;
  links: LinkItem[];
};

const resourceCards: ResourceCard[] = [
  {
    title: "Quran Tafsir dan Hadist",
    subtitle: "Materi keagamaan lengkap.",
    icon: "menu_book",
    gradient: "from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30",
    iconColor: "text-blue-600 dark:text-blue-400",
    links: [
      { label: "Al - Quran ", url: "/quran" },
      { label: "Tazkia Hadis", url: "/hadist" },
    ],
  },
  {
    title: "Buku dan Jurnal",
    subtitle: "Akses ribuan buku digital.",
    icon: "auto_stories",
    gradient: "from-emerald-50 to-emerald-100 dark:from-emerald-900/30 dark:to-emerald-800/30",
    iconColor: "text-emerald-600 dark:text-emerald-400",
    links: [
      { label: "Buku", url: "/DigiBook" },
      { label: "Jurnal", url: "https://perpusnas.go.id" },
    ],
  },
  {
    title: "Science dan Math",
    subtitle: "Konsep sains dan matematika.",
    icon: "science",
    gradient: "from-purple-50 to-purple-100 dark:from-purple-900/30 dark:to-purple-800/30",
    iconColor: "text-purple-600 dark:text-purple-400",
    links: [
      { label: "Phet Interactive Simulations", url: "/phet" },
    ],
  },
  {
    title: "Kamus Dan Terjemahan",
    subtitle: "Alat bantu bahasa & terjemahan.",
    icon: "translate",
    gradient: "from-amber-50 to-amber-100 dark:from-amber-900/30 dark:to-amber-800/30",
    iconColor: "text-amber-600 dark:text-amber-400",
    links: [
      { label: "KBBI Online", url: "/kbbi" },
      { label: "Google Translate", url: "https://translate.google.com" },
    ],
  },
  {
    title: "Eksplorasi dan Game",
    subtitle: "Belajar sambil bermain — game edukatif.",
    icon: "explore",
    gradient: "from-rose-50 to-rose-100 dark:from-rose-900/30 dark:to-rose-800/30",
    iconColor: "text-rose-600 dark:text-rose-400",
    links: [
      { label: "PBS Kids", url: "/PBSKids" },
    ],
  },
  // {
  //   title: "Bank Soal",
  //   subtitle: "Kumpulan soal latihan dan latihan ujian.",
  //   icon: "quiz",
  //   gradient: "from-indigo-50 to-indigo-100 dark:from-indigo-900/30 dark:to-indigo-800/30",
  //   iconColor: "text-indigo-600 dark:text-indigo-400",
  //   links: [
  //     { label: "Bank Soal Utama", url: "/bank-soal" },
  //     { label: "Latihan Online", url: "https://example-questions.com" },
  //   ],
  // },
  {
    title: "By Cendekia Muda",
    subtitle: "Materi eksklusif dari Cendekia Muda.",
    icon: "school",
    gradient: "from-teal-50 to-teal-100 dark:from-teal-900/30 dark:to-teal-800/30",
    iconColor: "text-teal-600 dark:text-teal-400",
    links: [
      { label: "Konten Guru", url: "/KontenGuru" },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};


const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  },
};


function ResourceCardItem({ card }: { card: ResourceCard }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      layout
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="group relative bg-white/70 dark:bg-slate-900/70 backdrop-blur-md rounded-2xl border border-white/20 shadow-sm hover:shadow-xl hover:scale-[1.01] transition-all duration-300 overflow-hidden"
    >
      <div
        className="flex items-center justify-between px-6 py-5 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        {/* left: icon + text */}
        <div className="flex items-center gap-5">
          <div className={`h-14 w-14 rounded-2xl bg-gradient-to-br ${card.gradient} flex items-center justify-center shadow-inner`}>
            <span className={`${card.iconColor} material-symbols-outlined text-2xl`}>
              {card.icon}
            </span>
          </div>

          <div>
            <div className="text-lg font-bold text-slate-800 dark:text-slate-100 group-hover:text-primary transition-colors">
              {card.title}
            </div>
            {card.subtitle ? (
              <div className="text-sm font-medium text-slate-500 dark:text-slate-400">
                {card.subtitle}
              </div>
            ) : null}
          </div>
        </div>

        {/* right: chevron (click to expand card content) */}
        <div className="flex items-center">
          <button
            aria-label={isOpen ? "Collapse" : "Expand"}
            className={`p-2 rounded-full transition-all duration-300 ${isOpen ? "bg-slate-100 dark:bg-slate-700" : "hover:bg-slate-100 dark:hover:bg-slate-700"}`}
          >
            <span
              className={`material-symbols-outlined text-slate-400 transition-transform duration-300 ${isOpen ? "rotate-180 text-primary" : ""
                }`}
            >
              expand_more
            </span>
          </button>
        </div>
      </div>

      {/* expanded content area with stacked buttons */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="border-t border-slate-100/50 dark:border-slate-700/50 px-6 py-4 bg-slate-50/50 dark:bg-slate-800/50">
              <div className="grid grid-cols-1 gap-3">
                {card.links.map((l, i) => {
                  const internal = l.url.startsWith("/");
                  const btnBase =
                    "w-full text-left px-4 py-3 rounded-xl border border-transparent bg-white/50 dark:bg-slate-800/50 hover:bg-white hover:shadow-md dark:hover:bg-slate-700 transition-all flex items-center justify-between group/link";

                  const content = (
                    <>
                      <span className="font-medium text-slate-700 dark:text-slate-200">{l.label}</span>
                      <span className="material-symbols-outlined text-slate-400 group-hover/link:text-primary transition-colors text-sm">
                        open_in_new
                      </span>
                    </>
                  );

                  if (internal) {
                    return (
                      <Link key={l.url} href={l.url} className={btnBase}>
                        {content}
                      </Link>
                    );
                  }
                  return (
                    <a
                      key={l.url}
                      href={l.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={btnBase}
                    >
                      {content}
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Page() {
  const [query, setQuery] = useState("");
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => setIsChatOpen((prev) => !prev);

  const filtered = resourceCards.filter((c) =>
    (c.title + " " + (c.subtitle ?? "")).toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="min-h-screen text-slate-900 dark:text-slate-200 font-sans">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <header className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-4">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-emerald-100 to-emerald-200 flex items-center justify-center shadow-sm">
              <img src="/logo192.png" alt="logo" className="h-6 w-6" />
            </div>
            <div>
              <div className="font-bold text-xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-300">
                Cendekia Muda
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button className="p-2 rounded-full hover:bg-white/50 hover:shadow-sm dark:hover:bg-slate-800 transition-all">
              <span className="material-symbols-outlined text-slate-600 dark:text-slate-300">notifications</span>
            </button>
            <div className="h-10 w-10 rounded-full ring-2 ring-white/50 dark:ring-slate-700 shadow-sm overflow-hidden">
              <img
                src="/avatar.png"
                alt="avatar"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </header>

        {/* Hero / Search */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-emerald-500 drop-shadow-sm">
            Selamat Datang!
          </h1>
          <p className="text-lg text-black mb-8 max-w-2xl mx-auto ">
            Platform pembelajaran interaktif untuk guru dan siswa. Jelajahi ribuan materi dan sumber daya belajar.
          </p>

          <div className="mx-auto max-w-2xl relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-emerald-400 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors">
                search
              </span>
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Cari materi pembelajaran..."
                className="w-full pl-14 pr-6 py-4 rounded-full border border-slate-200/80 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all shadow-sm text-lg"
              />
            </div>
          </div>
        </motion.div>

        {/* Cards list (vertical) */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="space-y-4">
            {filtered.map((card) => (
              <ResourceCardItem key={card.title} card={card} />
            ))}
          </div>
        </motion.section>

        <footer className="mt-16 text-center text-sm text-slate-500 dark:text-slate-400">
          © 2024 Cendekia Muda. All rights reserved. • <span className="hover:text-primary cursor-pointer">Privacy</span> • <span className="hover:text-primary cursor-pointer">Terms</span>
        </footer>

        {/* FLOATING CHAT TAB BUTTON */}
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="button"
          onClick={toggleChat}
          className="fixed bottom-6 right-6 z-40 flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-xl hover:shadow-2xl hover:shadow-blue-500/30 transition-all"
        >
          <span className="material-symbols-outlined text-xl">smart_toy</span>
          <span className="hidden sm:inline">
            {isChatOpen ? "Tutup Asisten" : "Buka Asisten"}
          </span>
        </motion.button>

        {/* CHAT SIDEBAR */}
        <ChatAssistant isOpen={isChatOpen} onClose={toggleChat} />
      </div>
    </div>
  );
}
