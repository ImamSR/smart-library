"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import { TEACHER_RESOURCES, Resource } from "./data";

// --- Components ---

function ResourceCard({
    resource,
    onClick,
}: {
    resource: Resource;
    onClick: (r: Resource) => void;
}) {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            onClick={() => onClick(resource)}
            className="group bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-sm border border-slate-200 dark:border-slate-700 hover:shadow-md hover:border-teal-400 dark:hover:border-teal-500 transition-all duration-300 cursor-pointer flex flex-col relative"
        >
            {/* "NEW" Ribbon */}
            {resource.isNew && (
                <div className="absolute top-0 right-0 z-10">
                    <div className="bg-teal-500 text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl shadow-sm transform translate-x-1 -translate-y-1">
                        NEW!
                    </div>
                </div>
            )}

            {/* Thumbnail */}
            <div className="relative w-full aspect-[4/3] bg-teal-50 dark:bg-teal-900/20">
                <Image
                    src={resource.thumbnailUrl}
                    alt={resource.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    unoptimized
                />
                {/* Hover overlay icon */}
                <div className="absolute inset-0 bg-black/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="bg-white/90 dark:bg-black/70 p-2 rounded-full shadow-lg">
                        <span className="material-symbols-outlined text-teal-600 text-3xl">read_more</span>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="p-4 flex flex-col flex-1">
                <h3 className="text-base font-bold text-slate-800 dark:text-slate-100 mb-2 line-clamp-1">
                    {resource.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 mb-4 flex-1">
                    {resource.description}
                </p>

                {/* Footer Tags */}
                <div className="flex flex-wrap gap-1 mt-auto pt-3 border-t border-slate-100 dark:border-slate-700">
                    {resource.tags?.slice(0, 3).map((tag) => (
                        <span key={tag} className="text-[10px] uppercase font-bold text-teal-600 dark:text-teal-400 bg-teal-50 dark:bg-teal-900/30 px-2 py-0.5 rounded">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}

export default function KontenGuruPage() {
    const router = useRouter();

    const handleResourceClick = (res: Resource) => {
        // Placeholder for detail page or generic handling
        alert(`Navigating to ${res.title} (Detail page feature coming soon)`);
    };

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-200 font-sans">
            <div className="max-w-7xl mx-auto px-6 py-12">
                {/* Header */}
                <div className="flex items-center gap-4 mb-10">
                    <button
                        onClick={() => router.push("/")}
                        className="p-3 rounded-full hover:bg-white dark:hover:bg-slate-800 transition-colors group"
                    >
                        <span className="material-symbols-outlined text-slate-500 group-hover:text-slate-800 dark:group-hover:text-white">arrow_back</span>
                    </button>
                    <div>
                        <div className="flex items-center gap-3 mb-1">
                            <div className="p-2 rounded-lg bg-teal-100 dark:bg-teal-900/30">
                                <span className="material-symbols-outlined text-teal-600 dark:text-teal-400">school</span>
                            </div>
                            <span className="text-sm font-bold text-teal-600 dark:text-teal-400 tracking-wider uppercase">Cendekia Muda</span>
                        </div>
                        <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white">
                            Konten Guru
                        </h1>
                    </div>
                </div>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {TEACHER_RESOURCES.map((res) => (
                        <ResourceCard
                            key={res.id}
                            resource={res}
                            onClick={handleResourceClick}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
