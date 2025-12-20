"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  MdChildCare,
  MdHistoryEdu,
  MdMosque,
  MdRocketLaunch,
} from "react-icons/md";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";

// --- Types & Data ---

const categoryIconMap = {
  child: MdChildCare,
  science: MdRocketLaunch,
  religion: MdMosque,
  history: MdHistoryEdu,
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
    title: "Buku Anak",
    description: "Cerita dongeng, fabel, dan buku edukasi anak.",
    icon: "child",
    gradient: "from-pink-400 to-rose-500",
    href: "/DigiBook/BukuAnak",
  },
  {
    id: "2",
    title: "Sains & Teknologi",
    description: "Ensiklopedia alam, fisika, dan teknologi terbaru.",
    icon: "science",
    gradient: "from-blue-400 to-cyan-500",
    href: "#", // Placeholder
  },
  {
    id: "3",
    title: "Agama & Moral",
    description: "Buku-buku keagamaan dan pembentukan karakter.",
    icon: "religion",
    gradient: "from-emerald-400 to-green-500",
    href: "#", // Placeholder
  },
  {
    id: "4",
    title: "Sejarah & Biografi",
    description: "Kisah tokoh dunia dan peristiwa bersejarah.",
    icon: "history",
    gradient: "from-amber-400 to-orange-500",
    href: "#", // Placeholder
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
          <Icon className="text-white text-2xl" />
        </div>

        <h3 className="text-xl font-bold text-slate-800 mb-2">
          {category.title}
        </h3>

        <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-1">
          {category.description}
        </p>

        <div className="flex items-center text-sm font-semibold text-slate-700 group-hover:text-primary transition-colors">
          <span>Jelajahi</span>
          <IoArrowForward className="text-xl ml-1.5 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </motion.div>
  );
}

export default function DigiBookPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-slate-200 text-slate-900 font-sans">
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
              Koleksi Digital
            </h1>
            <p className="text-slate-500 mt-1">
              Pilih kategori buku yang ingin kamu baca.
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
