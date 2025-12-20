"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import { EARTH_SIMULATIONS, Simulation } from "../dataEarth";
import { MdKeyboard, MdOutlinePlayCircle } from "react-icons/md";
import { FiZoomIn } from "react-icons/fi";
import { IoArrowBack, IoEarth } from "react-icons/io5";

// --- Components ---

function SimulationCard({
  simulation,
  onClick,
}: {
  simulation: Simulation;
  onClick: (s: Simulation) => void;
}) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      onClick={() => onClick(simulation)}
      className="group bg-white rounded-xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-md hover:border-blue-400 transition-all duration-300 cursor-pointer flex flex-col relative"
    >
      {/* "NEW" Ribbon */}
      {simulation.isNew && (
        <div className="absolute top-0 right-0 z-10">
          <div className="bg-red-500 text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl shadow-sm transform translate-x-1 -translate-y-1">
            NEW!
          </div>
        </div>
      )}

      {/* Thumbnail */}
      <div className="relative w-full aspect-[4/3] bg-slate-100">
        <Image
          src={simulation.thumbnailUrl}
          alt={simulation.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          unoptimized // PhET images are external
        />
        {/* Hover overlay icon */}
        <div className="absolute inset-0 bg-black/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="bg-white/90 p-2 rounded-full shadow-lg">
            <MdOutlinePlayCircle className="text-blue-500 text-3xl" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        <h3 className="text-base font-bold text-slate-800 mb-4 line-clamp-2 flex-1">
          {simulation.title}
        </h3>

        {/* Footer Icons */}
        <div className="flex items-center gap-2 mt-auto border-t border-slate-100 pt-3">
          <span
            className="bg-slate-800 text-white text-[10px] font-bold px-1 rounded flex items-center justify-center h-6 w-6"
            title="HTML5"
          >
            5
          </span>
          {/* Additional mock icons to match design */}
          <div
            className="h-6 w-6 bg-green-500 rounded flex items-center justify-center text-white"
            title="Access feature"
          >
            <MdKeyboard className="text-lg" />
          </div>
          <div
            className="h-6 w-6 bg-purple-500 rounded flex items-center justify-center text-white"
            title="Magnify"
          >
            <FiZoomIn className="text-lg" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function PhETPhysicPage() {
  const router = useRouter();

  const handleSimulationClick = (sim: Simulation) => {
    router.push(`/phet/simulator?id=${sim.id}`);
  };

  return (
    <div className="min-h-screen bg-slate-50/80 text-slate-900 font-sans">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="flex items-center gap-4 mb-10">
          <button
            onClick={() => router.push("/phet")}
            className="p-3 rounded-full hover:bg-white transition-colors group"
          >
            <IoArrowBack className="text-3xl text-slate-500 group-hover:text-slate-800" />
          </button>
          <div>
            <div className="flex items-center gap-3 mb-1">
              <div className="p-2 rounded-lg bg-orange-100">
                <IoEarth className="text-orange-600 text-2xl" />
              </div>
              <span className="text-sm font-bold text-orange-600 tracking-wider uppercase">
                PhET Simulations
              </span>
            </div>
            <h1 className="text-3xl font-extrabold text-slate-900">
              Earth Space
            </h1>
          </div>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {EARTH_SIMULATIONS.map((sim) => (
            <SimulationCard
              key={sim.id}
              simulation={sim}
              onClick={handleSimulationClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
