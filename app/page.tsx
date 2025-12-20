"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import ChatAssistant from "./components/ChatAssistant";
import { motion, AnimatePresence } from "framer-motion";
import { Variants } from "framer-motion";
import Image from "next/image";
import { FaQuran } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { FaRobot } from "react-icons/fa6";
import {
  MdAutoStories,
  MdExplore,
  MdOpenInNew,
  MdSchool,
  MdScience,
  MdTranslate,
} from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";

const iconMap = {
  quran: FaQuran,
  books: MdAutoStories,
  science: MdScience,
  translate: MdTranslate,
  explore: MdExplore,
  school: MdSchool,
} as const;

export type IconKey = keyof typeof iconMap;

type LinkItem = { label: string; url: string };
type ResourceCard = {
  title: string;
  subtitle?: string;
  icon: IconKey;
  gradient: string;
  iconColor: string;
  links: LinkItem[];
};

const resourceCards: ResourceCard[] = [
  {
    title: "Quran Tafsir dan Hadist",
    subtitle: "Materi keagamaan lengkap.",
    icon: "quran",
    gradient: "from-blue-50 to-blue-100",
    iconColor: "text-blue-600",
    links: [
      { label: "Al - Quran ", url: "/quran" },
      { label: "Tazkia Hadis", url: "/hadist" },
    ],
  },
  {
    title: "Buku dan Jurnal",
    subtitle: "Akses ribuan buku digital.",
    icon: "books",
    gradient: "from-emerald-50 to-emerald-100",
    iconColor: "text-emerald-600",
    links: [
      { label: "Buku", url: "/DigiBook" },
      { label: "Jurnal", url: "https://perpusnas.go.id" },
    ],
  },
  {
    title: "Science dan Math",
    subtitle: "Konsep sains dan matematika.",
    icon: "science",
    gradient: "from-purple-50 to-purple-100",
    iconColor: "text-purple-600",
    links: [{ label: "Phet Interactive Simulations", url: "/phet" }],
  },
  {
    title: "Kamus Dan Terjemahan",
    subtitle: "Alat bantu bahasa & terjemahan.",
    icon: "translate",
    gradient: "from-amber-50 to-amber-100",
    iconColor: "text-amber-600",
    links: [
      { label: "KBBI Online", url: "/kbbi" },
      { label: "Google Translate", url: "https://translate.google.com" },
    ],
  },
  {
    title: "Eksplorasi dan Game",
    subtitle: "Belajar sambil bermain — game edukatif.",
    icon: "explore",
    gradient: "from-rose-50 to-rose-100",
    iconColor: "text-rose-600",
    links: [{ label: "PBS Kids", url: "/PBSKids" }],
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
    gradient: "from-teal-50 to-teal-100",
    iconColor: "text-teal-600",
    links: [{ label: "Konten Guru", url: "/KontenGuru" }],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
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
  const Icon = iconMap[card.icon];

  return (
    <motion.div
      layout
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="group relative bg-white/70 backdrop-blur-md rounded-2xl border border-white/20 shadow-sm hover:shadow-xl hover:scale-[1.01] transition-all duration-300 overflow-hidden"
    >
      <div
        className="flex items-center justify-between px-6 py-5 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        {/* left: icon + text */}
        <div className="flex items-center gap-5">
          <div
            className={`h-14 w-14 rounded-2xl bg-gradient-to-br ${card.gradient}
  flex items-center justify-center shadow-inner`}
          >
            <Icon className={`${card.iconColor} text-2xl`} />
          </div>

          <div>
            <div className="text-lg font-bold text-slate-800 group-hover:text-blue-500 transition-colors">
              {card.title}
            </div>
            {card.subtitle ? (
              <div className="text-sm font-medium text-slate-500">
                {card.subtitle}
              </div>
            ) : null}
          </div>
        </div>

        {/* right: chevron (click to expand card content) */}
        <div className="flex items-center">
          <button
            aria-label={isOpen ? "Collapse" : "Expand"}
            className={`p-2 rounded-full transition-all duration-300 ${
              isOpen ? "bg-slate-100" : "hover:bg-slate-100"
            }`}
          >
            <IoIosArrowDown
              className={`text-slate-500 transition-transform duration-300 text-xl ${
                isOpen ? "rotate-180" : ""
              }`}
            />
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
            <div className="border-t border-slate-100/50 px-6 py-4 bg-slate-50/50">
              <div className="grid grid-cols-1 gap-3">
                {card.links.map((l, i) => {
                  const internal = l.url.startsWith("/");
                  const btnBase =
                    "w-full text-left px-4 py-3 rounded-xl border border-transparent bg-white/50 hover:bg-white hover:shadow-md transition-all flex items-center justify-between group/link";

                  const content = (
                    <>
                      <span className="font-medium text-slate-700">
                        {l.label}
                      </span>
                      <MdOpenInNew className="text-slate-400 group-hover/link:text-blue-500 transition-colors text-2xl font-extrabold" />
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
  const chatRef = useRef<HTMLDivElement | null>(null);
  const toggleChat = () => setIsChatOpen((prev) => !prev);

  const filtered = resourceCards.filter((c) =>
    (c.title + " " + (c.subtitle ?? ""))
      .toLowerCase()
      .includes(query.toLowerCase())
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isChatOpen &&
        chatRef.current &&
        !chatRef.current.contains(event.target as Node)
      ) {
        setIsChatOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isChatOpen]);

  return (
    <div className="min-h-screen text-slate-900 font-sans">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <header className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-4">
            <div className="h-10 w-10 rounded-xl bg-white flex items-center justify-center shadow-sm">
              <Image
                src="/logocm.png"
                alt="logo"
                width={500}
                height={500}
                className="h-6 w-6"
                priority
              />
            </div>
            <div>
              <div className="font-bold text-xl tracking-tight text-white ">
                Cendekia Muda
              </div>
            </div>
          </div>

          {/* <div className="flex items-center gap-3">
            <button className="p-2 rounded-full hover:bg-white/50 hover:shadow-sm transition-all">
              <FaRegBell className="text-white text-xl" />
            </button>
            <div className="h-10 w-10 rounded-full ring-2 ring-white/50 shadow-sm overflow-hidden">
              <Image
                src="/avatar.png"
                alt="avatar"
                width={500}
                height={500}
                className="h-full w-full object-cover"
                priority
              />
            </div>
          </div> */}
        </header>

        {/* Hero / Search */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-extrabold mb-4 text-white">
            Halo Anak-Anak,{" "}
            <span className="text-blue-500">Selamat Datang!</span>
          </h1>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto ">
            Platform pembelajaran interaktif untuk guru dan siswa. Jelajahi
            ribuan materi dan sumber daya belajar.
          </p>

          <div className="mx-auto max-w-2xl relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-emerald-400 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
            <div className="relative">
              <IoSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-black group-focus-within:text-blue-500 transition-colors z-10 text-xl" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Cari materi pembelajaran..."
                className="w-full pl-12 pr-6 py-4 rounded-full border border-slate-200/80 bg-white/90 backdrop-blur-sm focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all shadow-sm text-lg"
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

        <footer className="mt-16 text-center text-sm text-white font-semibold">
          © 2026 Cendekia Muda. All rights reserved. •
          <span className="hover:text-primary cursor-pointer"> Privacy</span> •
          <span className="hover:text-primary cursor-pointer"> Terms</span>
        </footer>

        {/* FLOATING CHAT TAB BUTTON */}
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="button"
          onClick={toggleChat}
          className="fixed bottom-6 right-6 z-40 flex items-center gap-2 rounded-full bg-blue-500 px-5 py-3 text-lg font-semibold text-white shadow-xl hover:shadow-2xl hover:shadow-blue-500/30 transition-all"
        >
          <FaRobot className="text-xl" />
          <span className="hidden sm:inline">
            {isChatOpen ? "Tutup Asisten" : "Buka Asisten"}
          </span>
        </motion.button>

        {/* CHAT SIDEBAR */}
        <div ref={chatRef}>
          <ChatAssistant isOpen={isChatOpen} onClose={toggleChat} />
        </div>
      </div>
    </div>
  );
}
