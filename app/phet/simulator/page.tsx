'use client'

import React, { Suspense } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { PHYSICS_SIMULATIONS } from '../dataPhysic'
import { MATH_SIMULATIONS } from '../dataMath'
import { CHEMISTRY_SIMULATIONS } from '../dataChem'
import { BIOLOGY_SIMULATIONS } from '../dataBio'
import { EARTH_SIMULATIONS } from '../dataEarth'

function SimulatorContent() {
    const router = useRouter()
    const searchParams = useSearchParams()
    const id = searchParams.get('id')

    // Aggregate all simulations
    const ALL_SIMULATIONS = [
        ...PHYSICS_SIMULATIONS,
        ...MATH_SIMULATIONS,
        ...CHEMISTRY_SIMULATIONS,
        ...BIOLOGY_SIMULATIONS,
        ...EARTH_SIMULATIONS
    ];

    // Find simulation by ID
    const simulation = ALL_SIMULATIONS.find((s) => s.id === id)

    // Default to first or show not found
    if (!simulation) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[50vh] text-slate-500">
                <span className="material-symbols-outlined text-4xl mb-2">sentiment_dissatisfied</span>
                <p>Simulation not found</p>
                <button
                    onClick={() => router.back()}
                    className="mt-4 text-blue-500 hover:underline"
                >
                    Go Back
                </button>
            </div>
        )
    }

    return (
        <div className="flex flex-col h-full">
            {/* HEADER */}
            <div className="mb-6">
                <button
                    onClick={() => router.back()}
                    className="mb-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 transition text-sm font-medium"
                >
                    <span className="material-symbols-outlined text-lg">arrow_back</span>
                    Back
                </button>
                <h1 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
                    {simulation.title}
                    {simulation.isNew && (
                        <span className="bg-red-500 text-white text-[10px] px-2 py-0.5 rounded-full">NEW</span>
                    )}
                </h1>
            </div>

            {/* IFRAME CONTAINER */}
            <div className="w-full flex-1 min-h-[70vh] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-sm relative">
                <iframe
                    key={simulation.id}
                    src={simulation.simulatorUrl}
                    className="w-full h-full border-0 absolute inset-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    sandbox="allow-scripts allow-forms allow-same-origin allow-popups allow-downloads"
                    title={simulation.title}
                />
            </div>

            {/* META INFO */}
            <div className="mt-6 flex flex-wrap gap-2">
                {simulation.tags?.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-xs rounded-full font-medium">
                        {tag}
                    </span>
                ))}
            </div>

            {/* DESCRIPTION SECTIONS */}
            <div className="mt-10 pb-10 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-8 shadow-sm space-y-10">
                {/* Topics */}
                {simulation.topics && (
                    <div className="flex gap-6">
                        <div className="flex-shrink-0 mt-1">
                            <span className="material-symbols-outlined text-3xl text-slate-700 dark:text-slate-300">format_list_bulleted</span>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Topik</h3>
                            <ul className="list-disc list-inside text-slate-600 dark:text-slate-300 space-y-1 text-base">
                                {simulation.topics.map(topic => <li key={topic}>{topic}</li>)}
                            </ul>
                        </div>
                    </div>
                )}

                {/* Learning Goals */}
                {simulation.learningGoals && (
                    <div className="flex gap-6">
                        <div className="flex-shrink-0 mt-1">
                            <span className="material-symbols-outlined text-3xl text-slate-700 dark:text-slate-300">gps_fixed</span>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Tujuan Pembelajaran</h3>
                            <ul className="list-disc list-inside text-slate-600 dark:text-slate-300 space-y-1 text-base">
                                {simulation.learningGoals.map(goal => <li key={goal}>{goal}</li>)}
                            </ul>
                        </div>
                    </div>
                )}

                {/* Inclusive Features */}
                {simulation.inclusiveFeatures && (
                    <div className="flex gap-6">
                        <div className="flex-shrink-0 mt-1">
                            <span className="material-symbols-outlined text-3xl text-slate-700 dark:text-slate-300">accessibility_new</span>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Fitur Inklusif</h3>
                            <div className="flex flex-col gap-2">
                                {simulation.inclusiveFeatures.map(feature => (
                                    <div key={feature.name} className="flex items-center gap-3 text-slate-600 dark:text-slate-300 text-base">
                                        <span className="material-symbols-outlined text-xl p-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 rounded">
                                            {feature.icon}
                                        </span>
                                        <span>{feature.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {/* System Requirements */}
                {simulation.systemRequirements && (
                    <div className="flex gap-6">
                        <div className="flex-shrink-0 mt-1">
                            <span className="material-symbols-outlined text-3xl text-slate-700 dark:text-slate-300">computer</span>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Persyaratan Sistem</h3>
                            <div className="text-slate-600 dark:text-slate-300 space-y-2 text-base">
                                {simulation.systemRequirements.map((req, i) => (
                                    <div key={i} className="flex gap-3">
                                        <div className="flex-shrink-0 font-bold bg-slate-900 text-white dark:bg-white dark:text-slate-900 w-6 h-6 rounded flex items-center justify-center text-xs">5</div>
                                        <p>{req}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default function SimulatorPage() {
    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 p-6 font-sans">
            <div className="max-w-6xl mx-auto h-full">
                <Suspense fallback={<div className="p-10 text-center">Loading simulator...</div>}>
                    <SimulatorContent />
                </Suspense>
            </div>
        </div>
    )
}
