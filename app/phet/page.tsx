"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { IoArrowBack, IoArrowForward, IoEarth } from "react-icons/io5";
import { TbBolt } from "react-icons/tb";
import {
  MdOutlineBiotech,
  MdOutlineCalculate,
  MdOutlineScience,
} from "react-icons/md";

// --- Types & Data ---
const categoryIconMap = {
  physics: TbBolt,
  math: MdOutlineCalculate,
  chemistry: MdOutlineScience,
  biotech: MdOutlineBiotech,
  earth: IoEarth,
} as const;

type CategoryIconKey = keyof typeof categoryIconMap;

type Category = {
  id: string;
  title: string;
  description: string;
  icon: CategoryIconKey;
  gradient: string;
  href: string;
};

const categories: Category[] = [
  {
    id: "1",
    title: "Physics",
    description: "Simulasi interaktif gerak, gaya, energi, dan gelombang.",
    icon: "physics",
    gradient: "from-purple-400 to-indigo-500",
    href: "/phet/physic",
  },
  {
    id: "2",
    title: "Math",
    description: "Visualisasi konsep matematika, grafik, dan probabilitas.",
    icon: "math",
    gradient: "from-blue-400 to-cyan-500",
    href: "/phet/math",
  },
  {
    id: "3",
    title: "Chemistry",
    description: "Eksperimen virtual reaksi kimia, atom, dan molekul.",
    icon: "chemistry",
    gradient: "from-emerald-400 to-green-500",
    href: "/phet/chemistry",
  },
  {
    id: "4",
    title: "Biology",
    description: "Jelajahi sel, genetika, dan proses kehidupan.",
    icon: "biotech",
    gradient: "from-rose-400 to-pink-500",
    href: "/phet/biology",
  },
  {
    id: "5",
    title: "Earth & Space",
    description: "Fenomena bumi, cuaca, dan sistem tata surya.",
    icon: "earth",
    gradient: "from-amber-400 to-orange-500",
    href: "/phet/earthspace",
  },
];

// --- Components ---

function CategoryCard({ category }: { category: Category }) {
  const router = useRouter();
  const Icon = categoryIconMap[category.icon];

  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -5 }}
      whileTap={{ scale: 0.98 }}
      className="group cursor-pointer bg-white rounded-3xl p-6 shadow-sm hover:shadow-xl border border-slate-100 transition-all duration-300 relative overflow-hidden"
      onClick={() => router.push(category.href)}
    >
      {/* Background decoration */}
      <div
        className={`absolute -right-8 -top-8 w-32 h-32 rounded-full bg-gradient-to-br ${category.gradient} opacity-10 group-hover:scale-150 transition-transform duration-500`}
      />

      <div className="relative z-10 flex flex-col h-full">
        <div
          className={`w-14 h-14 mb-6 rounded-2xl bg-gradient-to-br ${category.gradient} flex items-center justify-center shadow-lg`}
        >
          <Icon className="text-white text-3xl" />
        </div>

        <h3 className="text-xl font-bold text-slate-800 mb-2">
          {category.title}
        </h3>

        <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-1">
          {category.description}
        </p>

        <div className="flex items-center text-sm font-semibold text-slate-700 group-hover:text-primary transition-colors">
          <span>Mulai Belajar</span>
          <IoArrowForward className="text-xl ml-1.5 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </motion.div>
  );
}

export default function PhetLabVirtual() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-slate-50/80 text-slate-900 font-sans">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="flex items-center gap-4 mb-12">
          <button
            onClick={() => router.push("/")}
            className="p-3 rounded-full hover:bg-white transition-colors"
          >
            <IoArrowBack className="text-3xl" />
          </button>
          <div>
            <h1 className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-teal-500">
              Phet Laboratorium Virtual
            </h1>
            <p className="text-slate-500 mt-1">
              Eksplorasi sains dan matematika melalui simulasi interaktif.
            </p>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <CategoryCard key={cat.id} category={cat} />
          ))}
        </div>
      </div>
    </div>
  );
}
