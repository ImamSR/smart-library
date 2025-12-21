"use client";
import { useRouter } from "next/navigation";
import {
  MdChildCare,
  MdHistoryEdu,
  MdMosque,
  MdRocketLaunch,
} from "react-icons/md";
import { IoArrowBack } from "react-icons/io5";
import CategoryCard from "../components/card/CategoryCard";

const categories = [
  {
    id: "1",
    title: "Buku Anak",
    description: "Cerita dongeng, fabel, dan buku edukasi anak.",
    icon: MdChildCare,
    gradient: "from-pink-400 to-rose-500",
    href: "/DigiBook/BukuAnak",
  },
  {
    id: "2",
    title: "Sains & Teknologi",
    description: "Ensiklopedia alam, fisika, dan teknologi terbaru.",
    icon: MdRocketLaunch,
    gradient: "from-blue-400 to-cyan-500",
    href: "#", // Placeholder
  },
  {
    id: "3",
    title: "Agama & Moral",
    description: "Buku-buku keagamaan dan pembentukan karakter.",
    icon: MdMosque,
    gradient: "from-emerald-400 to-green-500",
    href: "#", // Placeholder
  },
  {
    id: "4",
    title: "Sejarah & Biografi",
    description: "Kisah tokoh dunia dan peristiwa bersejarah.",
    icon: MdHistoryEdu,
    gradient: "from-amber-400 to-orange-500",
    href: "#", // Placeholder
  },
];

export default function CollectionBook() {
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
            <h1 className="text-3xl font-extrabold bg-clip-text text-transparent bg-linear-to-r from-emerald-600 to-teal-500">
              Koleksi Digital
            </h1>
            <p className="text-slate-500 mt-1">
              Pilih kategori buku yang ingin kamu baca.
            </p>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              category={category}
              exploreText="Jelajahi"
              Icon={category.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
