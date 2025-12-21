"use client";
import { useRouter } from "next/navigation";
import { CHEMISTRY_SIMULATIONS, Simulation } from "../dataChem";
import { MdOutlineScience } from "react-icons/md";
import { IoArrowBack } from "react-icons/io5";
import SimulationCard from "@/app/components/card/SimulationCard";

export default function PhETChemistryPage() {
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
                <MdOutlineScience className="text-orange-600 text-2xl" />
              </div>
              <span className="text-sm font-bold text-orange-600 tracking-wider uppercase">
                PhET Simulations
              </span>
            </div>
            <h1 className="text-3xl font-extrabold text-slate-900">
              Chemistry
            </h1>
          </div>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CHEMISTRY_SIMULATIONS.map((sim) => (
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
