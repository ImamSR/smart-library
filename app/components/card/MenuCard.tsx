import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";
import { MdOpenInNew } from "react-icons/md";
import { FaQuran } from "react-icons/fa";
import {
  MdAutoStories,
  MdExplore,
  MdSchool,
  MdScience,
  MdTranslate,
} from "react-icons/md";

export const iconMap = {
  quran: FaQuran,
  books: MdAutoStories,
  science: MdScience,
  translate: MdTranslate,
  explore: MdExplore,
  school: MdSchool,
} as const;

export type IconKey = keyof typeof iconMap;

export type LinkItem = {
  label: string;
  url: string;
};

export type MenuCardData = {
  title: string;
  subtitle?: string;
  icon: IconKey;
  gradient: string;
  iconColor: string;
  links: LinkItem[];
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
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

export default function MenuCard({ card }: { card: MenuCardData }) {
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
      {/* HEADER */}
      <div
        className="flex items-center justify-between px-6 py-5 cursor-pointer"
        onClick={() => setIsOpen((p) => !p)}
      >
        <div className="flex items-center gap-5">
          <div
            className={`h-14 w-14 rounded-2xl bg-linear-to-br ${card.gradient}
            flex items-center justify-center shadow-inner`}
          >
            <Icon className={`${card.iconColor} text-2xl`} />
          </div>

          <div>
            <div className="text-lg font-bold text-slate-800 group-hover:text-blue-500 transition-colors">
              {card.title}
            </div>
            {card.subtitle && (
              <div className="text-sm font-medium text-slate-500">
                {card.subtitle}
              </div>
            )}
          </div>
        </div>

        <button
          aria-label={isOpen ? "Collapse" : "Expand"}
          className={`p-2 rounded-full transition-all duration-300 ${
            isOpen ? "bg-slate-100" : "hover:bg-slate-100"
          }`}
        >
          <IoIosArrowDown
            className={`text-slate-500 text-xl transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>
      </div>

      {/* CONTENT */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="border-t border-slate-100/50 px-6 py-4 bg-slate-50/50">
              <div className="grid gap-3">
                {card.links.map((l) => {
                  const isInternal = l.url.startsWith("/");

                  const content = (
                    <>
                      <span className="font-medium text-slate-700">
                        {l.label}
                      </span>
                      <MdOpenInNew className="text-slate-400 group-hover:text-blue-500 transition-colors text-xl" />
                    </>
                  );

                  const className =
                    "w-full px-4 py-3 rounded-xl bg-white/60 hover:bg-white hover:shadow-md transition-all flex items-center justify-between";

                  return isInternal ? (
                    <Link key={l.url} href={l.url} className={className}>
                      {content}
                    </Link>
                  ) : (
                    <a
                      key={l.url}
                      href={l.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={className}
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
