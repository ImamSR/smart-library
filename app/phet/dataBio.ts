
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

export const BIOLOGY_SIMULATIONS: Simulation[] = [
    {
        id: "bio-1",
        title: "Natural Selection",
        thumbnailUrl: "https://phet.colorado.edu/sims/html/natural-selection/latest/natural-selection-420.png",
        simulatorUrl: "https://phet.colorado.edu/sims/html/natural-selection/latest/natural-selection_all.html",
        isNew: true,
        tags: ["HTML5", "Biology", "Evolution"],
        topics: ["Seleksi Alam", "Evolusi", "Adaptasi"],
        learningGoals: [
            "Menjelaskan mekanisme seleksi alam.",
            "Memprediksi bagaimana populasi berubah dari waktu ke waktu akibat tekanan lingkungan.",
            "Menyelidiki peran mutasi genetik dalam evolusi."
        ],
        inclusiveFeatures: [
            { name: "Input Alternatif", icon: "keyboard" },
            { name: "Suara dan Sonifikasi", icon: "volume_up" }
        ],
        systemRequirements: [
            "Simulasi HTML5 dapat dijalankan di iPad, Chromebook, PC, Mac, dan sistem Linux."
        ]
    },
    {
        id: "bio-2",
        title: "Gene Expression Essentials",
        thumbnailUrl: "https://phet.colorado.edu/sims/html/gene-expression-essentials/latest/gene-expression-essentials-420.png",
        simulatorUrl: "https://phet.colorado.edu/sims/html/gene-expression-essentials/latest/gene-expression-essentials_all.html",
        tags: ["HTML5", "Biology", "Genetics"],
        topics: ["Ekspresi Gen", "Transkripsi", "Translasi"],
        learningGoals: [
            "Menjelaskan proses transkripsi DNA menjadi mRNA.",
            "Menjelaskan proses translasi mRNA menjadi protein.",
            "Memahami peran faktor transkripsi dalam regulasi gen."
        ],
        inclusiveFeatures: [
            { name: "Input Alternatif", icon: "keyboard" }
        ],
        systemRequirements: [
            "Simulasi HTML5 dapat dijalankan di iPad, Chromebook, PC, Mac, dan sistem Linux."
        ]
    },
    {
        id: "bio-3",
        title: "Neuron",
        thumbnailUrl: "https://phet.colorado.edu/sims/html/neuron/latest/neuron-420.png",
        simulatorUrl: "https://phet.colorado.edu/sims/html/neuron/latest/neuron_all.html",
        tags: ["HTML5", "Biology", "Neuroscience"],
        topics: ["Neuron", "Potensial Aksi", "Saluran Ion"],
        learningGoals: [
            "Mensimulasikan bagaimana potensial aksi merambat di sepanjang akson.",
            "Mengamati pergerakan ion natrium dan kalium melalui membran sel.",
            "Memahami peran gerbang ion dalam sinyal saraf."
        ],
        inclusiveFeatures: [
            { name: "Input Alternatif", icon: "keyboard" }
        ],
        systemRequirements: [
            "Simulasi HTML5 dapat dijalankan di iPad, Chromebook, PC, Mac, dan sistem Linux."
        ]
    },
    {
        id: "bio-4",
        title: "Membrane Channels",
        thumbnailUrl: "https://phet.colorado.edu/sims/html/membrane-channels/latest/membrane-channels-420.png",
        simulatorUrl: "https://phet.colorado.edu/sims/html/membrane-channels/latest/membrane-channels_all.html",
        tags: ["HTML5", "Biology", "Cell"],
        topics: ["Membran Sel", "Difusi", "Transport Aktif"],
        learningGoals: [
            "Membedakan antara difusi sederhana dan difusi terfasilitasi.",
            "Menjelaskan bagaimana saluran ion selektif bekerja.",
            "Memprediksi pergerakan partikel berdasarkan gradien konsentrasi."
        ],
        inclusiveFeatures: [
            { name: "Input Alternatif", icon: "keyboard" }
        ],
        systemRequirements: [
            "Simulasi HTML5 dapat dijalankan di iPad, Chromebook, PC, Mac, dan sistem Linux."
        ]
    },
    {
        id: "bio-5",
        title: "Color Vision",
        thumbnailUrl: "https://phet.colorado.edu/sims/html/color-vision/latest/color-vision-420.png",
        simulatorUrl: "https://phet.colorado.edu/sims/html/color-vision/latest/color-vision_all.html",
        tags: ["HTML5", "Biology", "Light"],
        topics: ["Penglihatan Warna", "Reseptor Mata", "Campuran Warna"],
        learningGoals: [
            "Menjelaskan bagaimana mata manusia mempresepsikan warna.",
            "Bereksperimen dengan pencampuran cahaya RGB.",
            "Memahami bagaimana filter warna mempengaruhi persepsi cahaya."
        ],
        inclusiveFeatures: [
            { name: "Input Alternatif", icon: "keyboard" }
        ],
        systemRequirements: [
            "Simulasi HTML5 dapat dijalankan di iPad, Chromebook, PC, Mac, dan sistem Linux."
        ]
    }
];
