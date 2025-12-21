"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MdKeyboard, MdOutlinePlayCircle } from "react-icons/md";
import { FiZoomIn } from "react-icons/fi";
import { Simulation } from "@/app/phet/dataBio";

type Props = {
  simulation: Simulation;
  onClick: (simulation: Simulation) => void;
};

export default function SimulationCard({ simulation, onClick }: Props) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      onClick={() => onClick(simulation)}
      className="group bg-white rounded-xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-md hover:border-blue-400 transition-all duration-300 cursor-pointer flex flex-col relative"
    >
      {/* NEW Ribbon */}
      {simulation.isNew && (
        <div className="absolute top-0 right-0 z-10">
          <div className="bg-red-500 text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl shadow-sm transform translate-x-1 -translate-y-1">
            NEW!
          </div>
        </div>
      )}

      {/* Thumbnail */}
      <div className="relative w-full aspect-4/3 bg-slate-100">
        <Image
          src={simulation.thumbnailUrl}
          alt={simulation.title}
          fill
          unoptimized
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Hover overlay */}
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

        {/* Footer icons */}
        <div className="flex items-center gap-2 mt-auto border-t border-slate-100 pt-3">
          <span
            className="bg-slate-800 text-white text-[10px] font-bold px-1 rounded flex items-center justify-center h-6 w-6"
            title="HTML5"
          >
            5
          </span>

          <div
            className="h-6 w-6 bg-green-500 rounded flex items-center justify-center text-white"
            title="Keyboard support"
          >
            <MdKeyboard className="text-lg" />
          </div>

          <div
            className="h-6 w-6 bg-purple-500 rounded flex items-center justify-center text-white"
            title="Zoom"
          >
            <FiZoomIn className="text-lg" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
