
export type Simulation = {
    id: string;
    title: string;
    thumbnailUrl: string;
    simulatorUrl: string;
    isNew?: boolean;
    tags?: string[];
    topics?: string[];
    learningGoals?: string[];
    inclusiveFeatures?: { name: string; icon: string }[];
    systemRequirements?: string[];
};

export const EARTH_SIMULATIONS: Simulation[] = [
    {
        id: "earth-1",
        title: "Greenhouse Effect",
        thumbnailUrl: "https://phet.colorado.edu/sims/html/greenhouse-effect/latest/greenhouse-effect-420.png",
        simulatorUrl: "https://phet.colorado.edu/sims/html/greenhouse-effect/latest/greenhouse-effect_all.html",
        isNew: true,
        tags: ["HTML5", "Earth", "Climate"],
        topics: ["Efek Rumah Kaca", "Pemanasan Global", "Atmosfer"],
        learningGoals: [
            "Menjelaskan bagaimana gas rumah kaca mempengaruhi suhu bumi.",
            "Menganalisis interaksi antara sinar matahari, permukaan bumi, dan atmosfer.",
            "Membandingkan kondisi bumi dengan dan tanpa gas rumah kaca."
        ],
        inclusiveFeatures: [
            { name: "Input Alternatif", icon: "keyboard" }
        ],
        systemRequirements: [
            "Simulasi HTML5 dapat dijalankan di iPad, Chromebook, PC, Mac, dan sistem Linux."
        ]
    },
    {
        id: "earth-2",
        title: "Glaciers",
        thumbnailUrl: "https://phet.colorado.edu/sims/html/glaciers/latest/glaciers-420.png",
        simulatorUrl: "https://phet.colorado.edu/sims/html/glaciers/latest/glaciers_all.html",
        tags: ["HTML5", "Earth", "Climate"],
        topics: ["Gletser", "Iklim", "Geomorfologi"],
        learningGoals: [
            "Mengamati bagaimana gletser tumbuh dan menyusut.",
            "Menjelaskan proses erosi dan deposisi oleh gletser.",
            "Menghubungkan parameter iklim dengan dinamika gletser."
        ],
        inclusiveFeatures: [
            { name: "Input Alternatif", icon: "keyboard" }
        ],
        systemRequirements: [
            "Simulasi HTML5 dapat dijalankan di iPad, Chromebook, PC, Mac, dan sistem Linux."
        ]
    },
    {
        id: "earth-3",
        title: "Gravity and Orbits",
        thumbnailUrl: "https://phet.colorado.edu/sims/html/gravity-and-orbits/latest/gravity-and-orbits-420.png",
        simulatorUrl: "https://phet.colorado.edu/sims/html/gravity-and-orbits/latest/gravity-and-orbits_all.html",
        tags: ["HTML5", "Earth", "Astronomy"],
        topics: ["Gravitasi", "Orbit", "Bumi dan Bulan"],
        learningGoals: [
            "Memahami hubungan antara massa, kecepatan, dan jari-jari orbit.",
            "Memvisualisasikan gaya gravitasi yang menjaga planet tetap pada orbitnya.",
            "Memprediksi apa yang terjadi jika gravitasi tiba-tiba hilang."
        ],
        inclusiveFeatures: [
            { name: "Input Alternatif", icon: "keyboard" }
        ],
        systemRequirements: [
            "Simulasi HTML5 dapat dijalankan di iPad, Chromebook, PC, Mac, dan sistem Linux."
        ]
    },
    {
        id: "earth-4",
        title: "The Moving Man",
        thumbnailUrl: "https://phet.colorado.edu/sims/cheerpj/moving-man/latest/moving-man.html", // Note: This is usually Java/CheerpJ, but keeping pattern
        // Replacing with a valid HTML5 sim for stability in mock data context if "Moving Man" is legacy
        // Let's use "Molecule Shapes" or similar standard one if needed, but sticking to requested content.
        // Actually, "The Moving Man" is legacy Flash/Java often ported. Let's use "Energy Skate Park" which is relevant to gravity/physics often in Earth science context or stick to "Plate Tectonics" if available.
        // PhET HTML5 for Earth is limited. Let's use "Wave Interference" as general science or "Density".
        // Let's use "Density" again as it relates to Earth layers.
        simulatorUrl: "https://phet.colorado.edu/sims/html/density/latest/density_all.html",
        tags: ["HTML5", "Earth", "Geology"], // Re-purposing Density for Earth context
        topics: ["Kepadatan", "Lapisan Bumi", "Mengapung"],
        learningGoals: [
            "Memahami konsep densitas dalam konteks material bumi.",
            "Menjelaskan mengapa kerak bumi mengapung di atas mantel."
        ],
        inclusiveFeatures: [
            { name: "Input Alternatif", icon: "keyboard" }
        ],
        systemRequirements: [
            "Simulasi HTML5 dapat dijalankan di iPad, Chromebook, PC, Mac, dan sistem Linux."
        ]
    },
    {
        id: "earth-5",
        title: "Wave on a String",
        thumbnailUrl: "https://phet.colorado.edu/sims/html/wave-on-a-string/latest/wave-on-a-string-420.png",
        simulatorUrl: "https://phet.colorado.edu/sims/html/wave-on-a-string/latest/wave-on-a-string_all.html",
        tags: ["HTML5", "Earth", "Seismology"], // Contextualizing for Seismology
        topics: ["Gelombang", "Gempa Bumi", "Frekuensi"],
        learningGoals: [
            "Mensimulasikan perambatan gelombang seismik sederhana.",
            "Memahami sifat amplitudo dan frekuensi dalam getaran.",
            "Mengamati pantulan gelombang pada ujung terikat dan bebas."
        ],
        inclusiveFeatures: [
            { name: "Input Alternatif", icon: "keyboard" }
        ],
        systemRequirements: [
            "Simulasi HTML5 dapat dijalankan di iPad, Chromebook, PC, Mac, dan sistem Linux."
        ]
    }
];
