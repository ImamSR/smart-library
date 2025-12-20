import { IconType } from "react-icons";
import { FaRegKeyboard } from "react-icons/fa6";

export type Simulation = {
  id: string;
  title: string;
  thumbnailUrl: string;
  simulatorUrl: string;
  isNew?: boolean;
  tags?: string[];
  topics?: string[];
  learningGoals?: string[];
  inclusiveFeatures?: { name: string; icon: IconType }[];
  systemRequirements?: string[];
};

export const MATH_SIMULATIONS: Simulation[] = [
  {
    id: "math-1",
    title: "Graphing Lines",
    thumbnailUrl:
      "https://phet.colorado.edu/sims/html/graphing-lines/latest/graphing-lines-420.png",
    simulatorUrl:
      "https://phet.colorado.edu/sims/html/graphing-lines/latest/graphing-lines_all.html",
    isNew: true,
    tags: ["HTML5", "Math", "Algebra"],
    topics: ["Persamaan Garis Lurus", "Gradien (Kemiringan)", "Perpotongan Y"],
    learningGoals: [
      "Menjelaskan bagaimana kemiringan (m) dan perpotongan y (b) mengubah grafik garis.",
      "Menemukan persamaan garis dari grafiknya.",
      "Memprediksi bagaimana mengubah persamaan akan mempengaruhi grafik.",
    ],
    inclusiveFeatures: [{ name: "Input Alternatif", icon: FaRegKeyboard }],
    systemRequirements: [
      "Simulasi HTML5 dapat dijalankan di iPad, Chromebook, PC, Mac, dan sistem Linux.",
    ],
  },
  {
    id: "math-2",
    title: "Function Builder",
    thumbnailUrl:
      "https://phet.colorado.edu/sims/html/function-builder/latest/function-builder-420.png",
    simulatorUrl:
      "https://phet.colorado.edu/sims/html/function-builder/latest/function-builder_all.html",
    tags: ["HTML5", "Math", "Algebra"],
    topics: ["Fungsi", "Input-Output", "Operasi Matematika"],
    learningGoals: [
      "Mendefinisikan fungsi sebagai aturan yang menghubungkan setiap input dengan tepat satu output.",
      "Memprediksi output fungsi berdasarkan input yang diberikan.",
      "Menyusun berbagai fungsi sederhana menjadi fungsi komposit.",
    ],
    inclusiveFeatures: [{ name: "Input Alternatif", icon: FaRegKeyboard }],
    systemRequirements: [
      "Simulasi HTML5 dapat dijalankan di iPad, Chromebook, PC, Mac, dan sistem Linux.",
    ],
  },
  {
    id: "math-3",
    title: "Area Builder",
    thumbnailUrl:
      "https://phet.colorado.edu/sims/html/area-builder/latest/area-builder-420.png",
    simulatorUrl:
      "https://phet.colorado.edu/sims/html/area-builder/latest/area-builder_all.html",
    tags: ["HTML5", "Math", "Geometry"],
    topics: ["Luas", "Keliling", "Geometri"],
    learningGoals: [
      "Membuat bentuk dengan luas dan keliling tertentu.",
      "Menemukan luas bentuk tidak beraturan dengan menghitung satuan persegi.",
      "Menyelidiki hubungan antara luas dan keliling.",
    ],
    inclusiveFeatures: [{ name: "Input Alternatif", icon: FaRegKeyboard }],
    systemRequirements: [
      "Simulasi HTML5 dapat dijalankan di iPad, Chromebook, PC, Mac, dan sistem Linux.",
    ],
  },
  {
    id: "math-4",
    title: "Fraction Matcher",
    thumbnailUrl:
      "https://phet.colorado.edu/sims/html/fraction-matcher/latest/fraction-matcher-420.png",
    simulatorUrl:
      "https://phet.colorado.edu/sims/html/fraction-matcher/latest/fraction-matcher_all.html",
    tags: ["HTML5", "Math", "Number"],
    topics: ["Pecahan", "Pecahan Senilai", "Bilangan Campuran"],
    learningGoals: [
      "Mencocokkan bentuk visual pecahan dengan nilai numeriknya.",
      "Mengidentifikasi pecahan yang senilai (ekuivalen).",
      "Mengkonversi antara pecahan campuran dan pecahan biasa.",
    ],
    inclusiveFeatures: [{ name: "Input Alternatif", icon: FaRegKeyboard }],
    systemRequirements: [
      "Simulasi HTML5 dapat dijalankan di iPad, Chromebook, PC, Mac, dan sistem Linux.",
    ],
  },
  {
    id: "math-5",
    title: "Equality Explorer",
    thumbnailUrl:
      "https://phet.colorado.edu/sims/html/equality-explorer/latest/equality-explorer-420.png",
    simulatorUrl:
      "https://phet.colorado.edu/sims/html/equality-explorer/latest/equality-explorer_all.html",
    tags: ["HTML5", "Math", "Algebra"],
    topics: ["Persamaan", "Kesetaraan", "Variabel"],
    learningGoals: [
      "Menjelaskan arti tanda sama dengan (=) sebagai keseimbangan.",
      "Menyelesaikan persamaan sederhana dengan menjaga keseimbangan kedua sisi.",
      "Mengisolasi variabel untuk menemukan nilainya.",
    ],
    inclusiveFeatures: [{ name: "Input Alternatif", icon: FaRegKeyboard }],
    systemRequirements: [
      "Simulasi HTML5 dapat dijalankan di iPad, Chromebook, PC, Mac, dan sistem Linux.",
    ],
  },
];
