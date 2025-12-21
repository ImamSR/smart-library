"use client";
import { useRouter } from "next/navigation";
import { IoArrowBack, IoEarth } from "react-icons/io5";
import { TbBolt } from "react-icons/tb";
import {
  MdOutlineBiotech,
  MdOutlineCalculate,
  MdOutlineScience,
} from "react-icons/md";
import CategoryCard from "../components/card/CategoryCard";

const categories = [
  {
    id: "1",
    title: "Physics",
    description: "Simulasi interaktif gerak, gaya, energi, dan gelombang.",
    icon: TbBolt,
    gradient: "from-purple-400 to-indigo-500",
    href: "/phet/physic",
  },
  {
    id: "2",
    title: "Math",
    description: "Visualisasi konsep matematika, grafik, dan probabilitas.",
    icon: MdOutlineCalculate,
    gradient: "from-blue-400 to-cyan-500",
    href: "/phet/math",
  },
  {
    id: "3",
    title: "Chemistry",
    description: "Eksperimen virtual reaksi kimia, atom, dan molekul.",
    icon: MdOutlineScience,
    gradient: "from-emerald-400 to-green-500",
    href: "/phet/chemistry",
  },
  {
    id: "4",
    title: "Biology",
    description: "Jelajahi sel, genetika, dan proses kehidupan.",
    icon: MdOutlineBiotech,
    gradient: "from-rose-400 to-pink-500",
    href: "/phet/biology",
  },
  {
    id: "5",
    title: "Earth & Space",
    description: "Fenomena bumi, cuaca, dan sistem tata surya.",
    icon: IoEarth,
    gradient: "from-amber-400 to-orange-500",
    href: "/phet/earthspace",
  },
];

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
            <h1 className="text-3xl font-extrabold text-purple-600">
              Phet Laboratorium Virtual
            </h1>
            <p className="text-slate-500 mt-1">
              Eksplorasi sains dan matematika melalui simulasi interaktif.
            </p>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              category={category}
              exploreText="Mulai Belajar"
              Icon={category.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
