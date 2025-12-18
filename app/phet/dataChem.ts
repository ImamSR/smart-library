
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

export const CHEMISTRY_SIMULATIONS: Simulation[] = [
    {
        id: "chem-1",
        title: "Acid-Base Solutions",
        thumbnailUrl: "https://phet.colorado.edu/sims/html/acid-base-solutions/latest/acid-base-solutions-420.png",
        simulatorUrl: "https://phet.colorado.edu/sims/html/acid-base-solutions/latest/acid-base-solutions_all.html",
        isNew: true,
        tags: ["HTML5", "Chemistry", "Solutions"],
        topics: ["Asam Basa", "pH", "Kekuatan Larutan"],
        learningGoals: [
            "Membedakan sifat asam kuat, asam lemah, basa kuat, dan basa lemah.",
            "Menghubungkan konsentrasi ion hidronium dengan pH.",
            "Mengamati konduktivitas listrik berbagai larutan."
        ],
        inclusiveFeatures: [
            { name: "Input Alternatif", icon: "keyboard" }
        ],
        systemRequirements: [
            "Simulasi HTML5 dapat dijalankan di iPad, Chromebook, PC, Mac, dan sistem Linux."
        ]
    },
    {
        id: "chem-2",
        title: "Balancing Chemical Equations",
        thumbnailUrl: "https://phet.colorado.edu/sims/html/balancing-chemical-equations/latest/balancing-chemical-equations-420.png",
        simulatorUrl: "https://phet.colorado.edu/sims/html/balancing-chemical-equations/latest/balancing-chemical-equations_all.html",
        tags: ["HTML5", "Chemistry", "Reactions"],
        topics: ["Penyetaraan Reaksi", "Kekekalan Massa", "Molekul"],
        learningGoals: [
            "Menyetarakan persamaan reaksi kimia.",
            "Memahami bahwa atom tidak diciptakan atau dimusnahkan dalam reaksi kimia.",
            "Memvisualisasikan molekul dalam reaktan dan produk."
        ],
        inclusiveFeatures: [
            { name: "Input Alternatif", icon: "keyboard" }
        ],
        systemRequirements: [
            "Simulasi HTML5 dapat dijalankan di iPad, Chromebook, PC, Mac, dan sistem Linux."
        ]
    },
    {
        id: "chem-3",
        title: "Build a Molecule",
        thumbnailUrl: "https://phet.colorado.edu/sims/html/build-a-molecule/latest/build-a-molecule-420.png",
        simulatorUrl: "https://phet.colorado.edu/sims/html/build-a-molecule/latest/build-a-molecule_all.html",
        tags: ["HTML5", "Chemistry", "Molecules"],
        topics: ["Struktur Molekul", "Ikatan Kimia", "Formula Kimia"],
        learningGoals: [
            "Membangun molekul dari atom yang diberikan.",
            "Menuliskan rumus kimia untuk molekul yang dibuat.",
            "Membedakan antara koefisien dan subskrip dalam rumus kimia."
        ],
        inclusiveFeatures: [
            { name: "Input Alternatif", icon: "keyboard" }
        ],
        systemRequirements: [
            "Simulasi HTML5 dapat dijalankan di iPad, Chromebook, PC, Mac, dan sistem Linux."
        ]
    },
    {
        id: "chem-4",
        title: "Reactants, Products and Leftovers",
        thumbnailUrl: "https://phet.colorado.edu/sims/html/reactants-products-and-leftovers/latest/reactants-products-and-leftovers-420.png",
        simulatorUrl: "https://phet.colorado.edu/sims/html/reactants-products-and-leftovers/latest/reactants-products-and-leftovers_all.html",
        tags: ["HTML5", "Chemistry", "Stoichiometry"],
        topics: ["Pereaksi Pembatas", "Produk", "Sisa Reaksi"],
        learningGoals: [
            "Memprediksi jumlah produk dan sisa reaktan berdasarkan jumlah reaktan awal.",
            "Memahami konsep pereaksi pembatas dalam reaksi kimia.",
            "Menerapkan stoikiometri sederhana."
        ],
        inclusiveFeatures: [
            { name: "Input Alternatif", icon: "keyboard" }
        ],
        systemRequirements: [
            "Simulasi HTML5 dapat dijalankan di iPad, Chromebook, PC, Mac, dan sistem Linux."
        ]
    },
    {
        id: "chem-5",
        title: "States of Matter: Basics",
        thumbnailUrl: "https://phet.colorado.edu/sims/html/states-of-matter-basics/latest/states-of-matter-basics-420.png",
        simulatorUrl: "https://phet.colorado.edu/sims/html/states-of-matter-basics/latest/states-of-matter-basics_all.html",
        tags: ["HTML5", "Chemistry", "Thermodynamics"],
        topics: ["Wujud Zat", "Perubahan Fase", "Panas"],
        learningGoals: [
            "Menggambarkan karakteristik partikel pada zat padat, cair, dan gas.",
            "Menjelaskan bagaimana pemanasan dan pendinginan mengubah wujud zat.",
            "Memvisualisasikan diagram fasa sederhana."
        ],
        inclusiveFeatures: [
            { name: "Input Alternatif", icon: "keyboard" }
        ],
        systemRequirements: [
            "Simulasi HTML5 dapat dijalankan di iPad, Chromebook, PC, Mac, dan sistem Linux."
        ]
    }
];
