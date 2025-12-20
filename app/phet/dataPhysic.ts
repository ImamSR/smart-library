import { IconType } from "react-icons";
import { FaRegKeyboard } from "react-icons/fa6";
import { FiZoomIn } from "react-icons/fi";
import { IoVolumeHigh } from "react-icons/io5";
import { MdTouchApp } from "react-icons/md";

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

export const PHYSICS_SIMULATIONS: Simulation[] = [
  {
    id: "1",
    title: "Quantum Coin Toss",
    thumbnailUrl:
      "https://phet.colorado.edu/sims/html/quantum-coin-toss/latest/quantum-coin-toss-420.png",
    simulatorUrl:
      "https://phet.colorado.edu/sims/html/quantum-coin-toss/latest/quantum-coin-toss_all.html",
    isNew: true,
    tags: ["HTML5", "Physics", "Quantum"],
    topics: ["Mekanika Kuantum", "Pengukuran Kuantum", "Probabilitas"],
    learningGoals: [
      "Mengembangkan interpretasi superposisi keadaan sistem kuantum 2 level.",
      "Menjelaskan apa yang terjadi ketika superposisi keadaan diamati.",
      "Menjelaskan bagaimana pengukuran koin bias klasik dibandingkan dengan sistem kuantum.",
    ],
    inclusiveFeatures: [
      { name: "Input Alternatif", icon: FaRegKeyboard },
      { name: "Geser dan Zoom", icon: FiZoomIn },
      { name: "Sorotan Interaktif", icon: MdTouchApp },
    ],
    systemRequirements: [
      "Simulasi HTML5 dapat dijalankan di iPad, Chromebook, PC, Mac, dan sistem Linux.",
    ],
  },
  {
    id: "2",
    title: "Quantum Measurement",
    thumbnailUrl:
      "https://phet.colorado.edu/sims/html/quantum-measurement/latest/quantum-measurement-420.png",
    simulatorUrl:
      "https://phet.colorado.edu/sims/html/quantum-measurement/latest/quantum-measurement_all.html",
    isNew: true,
    tags: ["HTML5", "Physics", "Quantum"],
    topics: ["Mekanika Kuantum", "Spin", "Pengukuran"],
    learningGoals: [
      "Memahami konsep dasar pengukuran kuantum.",
      "Mengeksplorasi eksperimen Stern-Gerlach.",
      "Menganalisis probabilitas dalam sistem kuantum.",
    ],
    inclusiveFeatures: [
      { name: "Input Alternatif", icon: FaRegKeyboard },
      { name: "Suara dan Sonifikasi", icon: IoVolumeHigh },
    ],
    systemRequirements: [
      "Simulasi HTML5 dapat dijalankan di iPad, Chromebook, PC, Mac, dan sistem Linux.",
    ],
  },
  {
    id: "3",
    title: "Models of the Hydrogen Atom",
    thumbnailUrl:
      "https://phet.colorado.edu/sims/html/models-of-the-hydrogen-atom/latest/models-of-the-hydrogen-atom-420.png",
    simulatorUrl:
      "https://phet.colorado.edu/sims/html/models-of-the-hydrogen-atom/latest/models-of-the-hydrogen-atom_all.html",
    tags: ["HTML5", "Physics", "Quantum"],
    topics: ["Atom Hidrogen", "Model Atom", "Spektrum"],
    learningGoals: [
      "Memvisualisasikan berbagai model atom hidrogen.",
      "Membandingkan prediksi model dengan data eksperimen.",
      "Memahami hubungan antara orbit elektron dan tingkat energi.",
    ],
    inclusiveFeatures: [{ name: "Input Alternatif", icon: FaRegKeyboard }],
    systemRequirements: [
      "Simulasi HTML5 dapat dijalankan di iPad, Chromebook, PC, Mac, dan sistem Linux.",
    ],
  },
  {
    id: "4",
    title: "Buoyancy: Basics",
    thumbnailUrl:
      "https://phet.colorado.edu/sims/html/buoyancy-basics/latest/buoyancy-basics-420.png",
    simulatorUrl:
      "https://phet.colorado.edu/sims/html/buoyancy-basics/latest/buoyancy-basics_all.html",
    tags: ["HTML5", "Physics", "Fluids"],
    topics: ["Gaya Apung", "Massa Jenis", "Hukum Archimedes"],
    learningGoals: [
      "Memprediksi apakah benda akan tenggelam atau terapung.",
      "Menjelaskan hubungan antara massa jenis benda dan fluida.",
      "Menghitung gaya apung yang bekerja pada benda.",
    ],
    inclusiveFeatures: [
      { name: "Input Alternatif", icon: FaRegKeyboard },
      { name: "Geser dan Zoom", icon: FiZoomIn },
    ],
    systemRequirements: [
      "Simulasi HTML5 dapat dijalankan di iPad, Chromebook, PC, Mac, dan sistem Linux.",
    ],
  },
  {
    id: "5",
    title: "Buoyancy",
    thumbnailUrl:
      "https://phet.colorado.edu/sims/html/buoyancy/latest/buoyancy-420.png",
    simulatorUrl:
      "https://phet.colorado.edu/sims/html/buoyancy/latest/buoyancy_all.html",
    tags: ["HTML5", "Physics", "Fluids"],
    topics: ["Gaya Apung", "Volume", "Berat Jenis"],
    learningGoals: [
      "Menganalisis faktor-faktor yang mempengaruhi gaya apung.",
      "Bereksperimen dengan berbagai bentuk dan massa benda.",
      "Memahami keseimbangan gaya pada benda yang terapung.",
    ],
    inclusiveFeatures: [{ name: "Input Alternatif", icon: FaRegKeyboard }],
    systemRequirements: [
      "Simulasi HTML5 dapat dijalankan di iPad, Chromebook, PC, Mac, dan sistem Linux.",
    ],
  },
  {
    id: "6",
    title: "Generator",
    thumbnailUrl:
      "https://phet.colorado.edu/sims/html/generator/latest/generator-420.png",
    simulatorUrl:
      "https://phet.colorado.edu/sims/html/generator/latest/generator_all.html",
    tags: ["HTML5", "Physics", "Electricity"],
    topics: ["Generator", "Induksi Elektromagnetik", "Hukum Faraday"],
    learningGoals: [
      "Menjelaskan cara kerja generator listrik.",
      "Menghubungkan gerakan magnet dengan arus induksi.",
      "Mengeksplorasi pengaruh jumlah lilitan terhadap tegangan.",
    ],
    inclusiveFeatures: [{ name: "Input Alternatif", icon: FaRegKeyboard }],
    systemRequirements: [
      "Simulasi HTML5 dapat dijalankan di iPad, Chromebook, PC, Mac, dan sistem Linux.",
    ],
  },
  {
    id: "7",
    title: "Magnets and Electromagnets",
    thumbnailUrl:
      "https://phet.colorado.edu/sims/html/magnets-and-electromagnets/latest/magnets-and-electromagnets-420.png",
    simulatorUrl:
      "https://phet.colorado.edu/sims/html/magnets-and-electromagnets/latest/magnets-and-electromagnets_all.html",
    tags: ["HTML5", "Physics", "Magnetism"],
    topics: ["Magnet", "Elektromagnet", "Medan Magnet"],
    learningGoals: [
      "Membandingkan medan magnet permanen dan elektromagnet.",
      "Menyelidiki hubungan antara arus listrik dan medan magnet.",
      "Menentukan arah medan magnet menggunakan kompas.",
    ],
    inclusiveFeatures: [{ name: "Input Alternatif", icon: FaRegKeyboard }],
    systemRequirements: [
      "Simulasi HTML5 dapat dijalankan di iPad, Chromebook, PC, Mac, dan sistem Linux.",
    ],
  },
  {
    id: "8",
    title: "Magnet and Compass",
    thumbnailUrl:
      "https://phet.colorado.edu/sims/html/magnet-and-compass/latest/magnet-and-compass-420.png",
    simulatorUrl:
      "https://phet.colorado.edu/sims/html/magnet-and-compass/latest/magnet-and-compass_all.html",
    tags: ["HTML5", "Physics", "Magnetism"],
    topics: ["Kompas", "Kutub Magnet", "Medan Bumi"],
    learningGoals: [
      "Menjelaskan interaksi antara magnet dan kompas.",
      "Mengidentifikasi kutub utara dan selatan magnet.",
      "Memahami konsep medan magnet bumi.",
    ],
    inclusiveFeatures: [{ name: "Input Alternatif", icon: FaRegKeyboard }],
    systemRequirements: [
      "Simulasi HTML5 dapat dijalankan di iPad, Chromebook, PC, Mac, dan sistem Linux.",
    ],
  },
  {
    id: "9",
    title: "Faraday's Electromagnetic Lab",
    thumbnailUrl:
      "https://phet.colorado.edu/sims/html/faradays-electromagnetic-lab/latest/faradays-electromagnetic-lab-420.png",
    simulatorUrl:
      "https://phet.colorado.edu/sims/html/faradays-electromagnetic-lab/latest/faradays-electromagnetic-lab_all.html",
    tags: ["HTML5", "Physics", "Electricity"],
    topics: ["Induksi Elektromagnetik", "Generator", "Hukum Faraday"],
    learningGoals: [
      "Menjelaskan hubungan antara medan magnet dan arus induksi.",
      "Memahami prinsip kerja generator listrik.",
      "Mengeksplorasi pengaruh jumlah lilitan terhadap GGL induksi.",
    ],
    inclusiveFeatures: [{ name: "Input Alternatif", icon: FaRegKeyboard }],
    systemRequirements: [
      "Simulasi HTML5 dapat dijalankan di iPad, Chromebook, PC, Mac, dan sistem Linux.",
    ],
  },
  {
    id: "10",
    title: "Projectile Data Lab",
    thumbnailUrl:
      "https://phet.colorado.edu/sims/html/projectile-data-lab/latest/projectile-data-lab-420.png",
    simulatorUrl:
      "https://phet.colorado.edu/sims/html/projectile-data-lab/latest/projectile-data-lab_all.html",
    tags: ["HTML5", "Physics", "Motion"],
    topics: ["Gerak Parabola", "Kinematika", "Vektor"],
    learningGoals: [
      "Menganalisis faktor yang mempengaruhi jarak tempuh peluru.",
      "Memprediksi lintasan berdasarkan sudut dan kecepatan awal.",
      "Mengumpulkan dan menginterpretasi data gerak parabola.",
    ],
    inclusiveFeatures: [{ name: "Input Alternatif", icon: FaRegKeyboard }],
    systemRequirements: [
      "Simulasi HTML5 dapat dijalankan di iPad, Chromebook, PC, Mac, dan sistem Linux.",
    ],
  },
  {
    id: "11",
    title: "Build a Nucleus",
    thumbnailUrl:
      "https://phet.colorado.edu/sims/html/build-a-nucleus/latest/build-a-nucleus-420.png",
    simulatorUrl:
      "https://phet.colorado.edu/sims/html/build-a-nucleus/latest/build-a-nucleus_all.html",
    tags: ["HTML5", "Physics", "Nuclear"],
    topics: ["Fisika Nuklir", "Radioaktivitas", "Isotop"],
    learningGoals: [
      "Membangun berbagai isotop atom.",
      "Menentukan kestabilan inti atom.",
      "Memahami hubungan jumlah proton dan neutron dalam inti.",
    ],
    inclusiveFeatures: [{ name: "Input Alternatif", icon: FaRegKeyboard }],
    systemRequirements: [
      "Simulasi HTML5 dapat dijalankan di iPad, Chromebook, PC, Mac, dan sistem Linux.",
    ],
  },
  {
    id: "12",
    title: "Kepler's Laws",
    thumbnailUrl:
      "https://phet.colorado.edu/sims/html/keplers-laws/latest/keplers-laws-420.png",
    simulatorUrl:
      "https://phet.colorado.edu/sims/html/keplers-laws/latest/keplers-laws_all.html",
    tags: ["HTML5", "Physics", "Astronomy"],
    topics: ["Astronomi", "Hukum Kepler", "Gravitasi"],
    learningGoals: [
      "Memvisualisasikan bentuk orbit planet.",
      "Memahami hubungan antara periode orbit dan jarak rata-rata (Hukum III Kepler).",
      "Mengamati perubahan kecepatan planet dalam orbitnya.",
    ],
    inclusiveFeatures: [{ name: "Input Alternatif", icon: FaRegKeyboard }],
    systemRequirements: [
      "Simulasi HTML5 dapat dijalankan di iPad, Chromebook, PC, Mac, dan sistem Linux.",
    ],
  },
  {
    id: "13",
    title: "Sound Waves",
    thumbnailUrl:
      "https://phet.colorado.edu/sims/html/sound-waves/latest/sound-waves-420.png",
    simulatorUrl:
      "https://phet.colorado.edu/sims/html/sound-waves/latest/sound-waves_all.html",
    tags: ["HTML5", "Physics", "Sound"],
    topics: ["Gelombang Suara", "Frekuensi", "Amplitudo"],
    learningGoals: [
      "Memvisualisasikan perambatan gelombang suara.",
      "Memahami pengaruh frekuensi dan amplitudo terhadap bunyi.",
      "Mendemonstrasikan interferensi gelombang suara.",
    ],
    inclusiveFeatures: [{ name: "Input Alternatif", icon: FaRegKeyboard }],
    systemRequirements: [
      "Simulasi HTML5 dapat dijalankan di iPad, Chromebook, PC, Mac, dan sistem Linux.",
    ],
  },
  {
    id: "14",
    title: "My Solar System",
    thumbnailUrl:
      "https://phet.colorado.edu/sims/html/my-solar-system/latest/my-solar-system-420.png",
    simulatorUrl:
      "https://phet.colorado.edu/sims/html/my-solar-system/latest/my-solar-system_all.html",
    tags: ["HTML5", "Physics", "Astronomy"],
    topics: ["Tata Surya", "Gravitasi", "Orbit"],
    learningGoals: [
      "Membangun sistem tata surya sendiri.",
      "Memahami pengaruh massa dan kecepatan awal terhadap orbit.",
      "Mengamati interaksi gravitasi antar benda langit.",
    ],
    inclusiveFeatures: [{ name: "Input Alternatif", icon: FaRegKeyboard }],
    systemRequirements: [
      "Simulasi HTML5 dapat dijalankan di iPad, Chromebook, PC, Mac, dan sistem Linux.",
    ],
  },
  {
    id: "15",
    title: "Calculus Grapher",
    thumbnailUrl:
      "https://phet.colorado.edu/sims/html/calculus-grapher/latest/calculus-grapher-420.png",
    simulatorUrl:
      "https://phet.colorado.edu/sims/html/calculus-grapher/latest/calculus-grapher_all.html",
    tags: ["HTML5", "Math", "Calculus"],
    topics: ["Kalkulus", "Turunan", "Integral"],
    learningGoals: [
      "Memvisualisasikan grafik fungsi, turunan, dan integral.",
      "Memahami hubungan antara fungsi asli dan turunannya.",
      "Bereksperimen dengan berbagai bentuk grafik fungsi.",
    ],
    inclusiveFeatures: [{ name: "Input Alternatif", icon: FaRegKeyboard }],
    systemRequirements: [
      "Simulasi HTML5 dapat dijalankan di iPad, Chromebook, PC, Mac, dan sistem Linux.",
    ],
  },
  {
    id: "16",
    title: "Geometric Optics: Basics",
    thumbnailUrl:
      "https://phet.colorado.edu/sims/html/geometric-optics-basics/latest/geometric-optics-basics-420.png",
    simulatorUrl:
      "https://phet.colorado.edu/sims/html/geometric-optics-basics/latest/geometric-optics-basics_all.html",
    tags: ["HTML5", "Physics", "Light"],
    topics: ["Optik Geometri", "Lensa", "Pembiasan"],
    learningGoals: [
      "Mengamati pembentukan bayangan oleh lensa cembung.",
      "Menentukan titik fokus lensa.",
      "Membedakan bayangan nyata dan maya.",
    ],
    inclusiveFeatures: [{ name: "Input Alternatif", icon: FaRegKeyboard }],
    systemRequirements: [
      "Simulasi HTML5 dapat dijalankan di iPad, Chromebook, PC, Mac, dan sistem Linux.",
    ],
  },
  {
    id: "17",
    title: "Geometric Optic",
    thumbnailUrl:
      "https://phet.colorado.edu/sims/html/geometric-optics/latest/geometric-optics-420.png",
    simulatorUrl:
      "https://phet.colorado.edu/sims/html/geometric-optics/latest/geometric-optics_all.html",
    tags: ["HTML5", "Physics", "Light"],
    topics: ["Optik", "Cermin", "Lensa"],
    learningGoals: [
      "Bereksperimen dengan kombinasi lensa dan cermin.",
      "Menganalisis diagram sinar istimewa.",
      "Memahami cacat bayangan (aberasi).",
    ],
    inclusiveFeatures: [{ name: "Input Alternatif", icon: FaRegKeyboard }],
    systemRequirements: [
      "Simulasi HTML5 dapat dijalankan di iPad, Chromebook, PC, Mac, dan sistem Linux.",
    ],
  },
  {
    id: "18",
    title: "Density",
    thumbnailUrl:
      "https://phet.colorado.edu/sims/html/density/latest/density-420.png",
    simulatorUrl:
      "https://phet.colorado.edu/sims/html/density/latest/density_all.html",
    tags: ["HTML5", "Physics", "Fluids"],
    topics: ["Massa Jenis", "Volume", "Mengapung"],
    learningGoals: [
      "Menentukan hubungan antara massa, volume, dan massa jenis.",
      "Memprediksi benda akan mengapung atau tenggelam.",
      "Menghitung massa jenis berbagai material.",
    ],
    inclusiveFeatures: [{ name: "Input Alternatif", icon: FaRegKeyboard }],
    systemRequirements: [
      "Simulasi HTML5 dapat dijalankan di iPad, Chromebook, PC, Mac, dan sistem Linux.",
    ],
  },
  {
    id: "19",
    title: "Circuit Construction Kit: AC",
    thumbnailUrl:
      "https://phet.colorado.edu/sims/html/circuit-construction-kit-ac/latest/circuit-construction-kit-ac-420.png",
    simulatorUrl:
      "https://phet.colorado.edu/sims/html/circuit-construction-kit-ac/latest/circuit-construction-kit-ac_all.html",
    tags: ["HTML5", "Physics", "Electricity"],
    topics: ["Rangkaian Listrik AC", "Hukum Ohm", "Kapasitor"],
    learningGoals: [
      "Membangun rangkaian listrik arus bolak-balik (AC).",
      "Menganalisis hubungan antara tegangan dan arus pada induktor dan kapasitor.",
      "Memahami konsep impedansi dan resonansi.",
    ],
    inclusiveFeatures: [{ name: "Input Alternatif", icon: FaRegKeyboard }],
    systemRequirements: [
      "Simulasi HTML5 dapat dijalankan di iPad, Chromebook, PC, Mac, dan sistem Linux.",
    ],
  },
  {
    id: "20",
    title: "Circuit Construction Kit: AC - Virtual Lab",
    thumbnailUrl:
      "https://phet.colorado.edu/sims/html/circuit-construction-kit-ac-lab/latest/circuit-construction-kit-ac-lab-420.png",
    simulatorUrl:
      "https://phet.colorado.edu/sims/html/circuit-construction-kit-ac-lab/latest/circuit-construction-kit-ac-lab_all.html",
    tags: ["HTML5", "Physics", "Electricity"],
    topics: ["Elektronika", "Arus Bolak-Balik", "Osiloskop"],
    learningGoals: [
      "Bereksperimen dengan komponen elektronika virtual.",
      "Menggunakan osiloskop untuk mengukur tegangan AC.",
      "Mempelajari respon frekuensi dari rangkaian RLC.",
    ],
    inclusiveFeatures: [{ name: "Input Alternatif", icon: FaRegKeyboard }],
    systemRequirements: [
      "Simulasi HTML5 dapat dijalankan di iPad, Chromebook, PC, Mac, dan sistem Linux.",
    ],
  },
  {
    id: "21",
    title: "Normal Modes",
    thumbnailUrl:
      "https://phet.colorado.edu/sims/html/normal-modes/latest/normal-modes-420.png",
    simulatorUrl:
      "https://phet.colorado.edu/sims/html/normal-modes/latest/normal-modes_all.html",
    tags: ["HTML5", "Physics", "Waves"],
    topics: ["Modus Normal", "Gelombang", "Resonansi"],
    learningGoals: [
      "Memvisualisasikan modus getar normal pada sistem massa-pegas.",
      "Membedakan antara gerakan acak dan modus normal.",
      "Memahami hubungan fase antar massa yang bergetar.",
    ],
    inclusiveFeatures: [{ name: "Input Alternatif", icon: FaRegKeyboard }],
    systemRequirements: [
      "Simulasi HTML5 dapat dijalankan di iPad, Chromebook, PC, Mac, dan sistem Linux.",
    ],
  },
  {
    id: "22",
    title: "Fourier: Making Waves",
    thumbnailUrl:
      "https://phet.colorado.edu/sims/html/fourier-making-waves/latest/fourier-making-waves-420.png",
    simulatorUrl:
      "https://phet.colorado.edu/sims/html/fourier-making-waves/latest/fourier-making-waves_all.html",
    tags: ["HTML5", "Math", "Waves"],
    topics: ["Analisis Fourier", "Gelombang", "Harmonik"],
    learningGoals: [
      "Memahami bagaimana gelombang kompleks dibentuk dari penjumlahan gelombang sinus.",
      "Bereksperimen dengan amplitudo harmonik.",
      "Memvisualisasikan transformasi Fourier.",
    ],
    inclusiveFeatures: [{ name: "Input Alternatif", icon: FaRegKeyboard }],
    systemRequirements: [
      "Simulasi HTML5 dapat dijalankan di iPad, Chromebook, PC, Mac, dan sistem Linux.",
    ],
  },
  {
    id: "23",
    title: "Collision Lab",
    thumbnailUrl:
      "https://phet.colorado.edu/sims/html/collision-lab/latest/collision-lab-420.png",
    simulatorUrl:
      "https://phet.colorado.edu/sims/html/collision-lab/latest/collision-lab_all.html",
    tags: ["HTML5", "Physics", "Motion"],
    topics: ["Tumbukan", "Momentum", "Kekekalan Energi"],
    learningGoals: [
      "Membedakan tumbukan lenting sempurna, sebagian, dan tidak lenting.",
      "Menerapkan hukum kekekalan momentum.",
      "Menganalisis perubahan energi kinetik saat tumbukan.",
    ],
    inclusiveFeatures: [{ name: "Input Alternatif", icon: FaRegKeyboard }],
    systemRequirements: [
      "Simulasi HTML5 dapat dijalankan di iPad, Chromebook, PC, Mac, dan sistem Linux.",
    ],
  },
  {
    id: "24",
    title: "Energy Skate Park",
    thumbnailUrl:
      "https://phet.colorado.edu/sims/html/energy-skate-park/latest/energy-skate-park-420.png",
    simulatorUrl:
      "https://phet.colorado.edu/sims/html/energy-skate-park/latest/energy-skate-park_all.html",
    tags: ["HTML5", "Physics", "Energy"],
    topics: ["Energi Mekanik", "Usaha", "Gaya Gesek"],
    learningGoals: [
      "Mengamati perubahan energi potensial menjadi energi kinetik.",
      "Menjelaskan hukum kekekalan energi mekanik.",
      "Menyelidiki pengaruh gesekan terhadap energi total.",
    ],
    inclusiveFeatures: [{ name: "Input Alternatif", icon: FaRegKeyboard }],
    systemRequirements: [
      "Simulasi HTML5 dapat dijalankan di iPad, Chromebook, PC, Mac, dan sistem Linux.",
    ],
  },
  {
    id: "25",
    title: "Vector Addition",
    thumbnailUrl:
      "https://phet.colorado.edu/sims/html/vector-addition/latest/vector-addition-420.png",
    simulatorUrl:
      "https://phet.colorado.edu/sims/html/vector-addition/latest/vector-addition_all.html",
    tags: ["HTML5", "Math", "Vectors"],
    topics: ["Vektor", "Resultan", "Trigonometri"],
    learningGoals: [
      "Menjumlahkan vektor secara grafis dan analitis.",
      "Menguraikan vektor menjadi komponen x dan y.",
      "Menghitung besar dan arah vektor resultan.",
    ],
    inclusiveFeatures: [{ name: "Input Alternatif", icon: FaRegKeyboard }],
    systemRequirements: [
      "Simulasi HTML5 dapat dijalankan di iPad, Chromebook, PC, Mac, dan sistem Linux.",
    ],
  },
  {
    id: "26",
    title: "Curver Fitting",
    thumbnailUrl:
      "https://phet.colorado.edu/sims/html/curve-fitting/latest/curve-fitting-420.png",
    simulatorUrl:
      "https://phet.colorado.edu/sims/html/curve-fitting/latest/curve-fitting_all.html",
    tags: ["HTML5", "Math", "Statistics"],
    topics: ["Pencocokan Kurva", "Regresi", "Statistika"],
    learningGoals: [
      "Mencari persamaan garis atau kurva terbaik yang mewakili data.",
      "Memahami konsep residu dan kuadrat terkecil (least squares).",
      "Membandingkan berbagai model regresi.",
    ],
    inclusiveFeatures: [{ name: "Input Alternatif", icon: FaRegKeyboard }],
    systemRequirements: [
      "Simulasi HTML5 dapat dijalankan di iPad, Chromebook, PC, Mac, dan sistem Linux.",
    ],
  },
  {
    id: "27",
    title: "Gravity Force Lab: Basics",
    thumbnailUrl:
      "https://phet.colorado.edu/sims/html/gravity-force-lab-basics/latest/gravity-force-lab-basics-420.png",
    simulatorUrl:
      "https://phet.colorado.edu/sims/html/gravity-force-lab-basics/latest/gravity-force-lab-basics_all.html",
    tags: ["HTML5", "Physics", "Gravity"],
    topics: ["Gravitasi", "Hukum Newton", "Gaya Tarik"],
    learningGoals: [
      "Menjelaskan hubungan massa dengan gaya gravitasi.",
      "Menjelaskan hubungan jarak dengan gaya gravitasi.",
      "Memahami pasangan aksi-reaksi gaya gravitasi.",
    ],
    inclusiveFeatures: [{ name: "Input Alternatif", icon: FaRegKeyboard }],
    systemRequirements: [
      "Simulasi HTML5 dapat dijalankan di iPad, Chromebook, PC, Mac, dan sistem Linux.",
    ],
  },
  {
    id: "28",
    title: "Waves Intro",
    thumbnailUrl:
      "https://phet.colorado.edu/sims/html/waves-intro/latest/waves-intro-420.png",
    simulatorUrl:
      "https://phet.colorado.edu/sims/html/waves-intro/latest/waves-intro_all.html",
    tags: ["HTML5", "Physics", "Waves"],
    topics: ["Gelombang Mekanik", "Cahaya", "Suara"],
    learningGoals: [
      "Membandingkan sifat gelombang air, suara, dan cahaya.",
      "Mengukur panjang gelombang dan periode.",
      "Mengamati efek amplitudo dan frekuensi.",
    ],
    inclusiveFeatures: [{ name: "Input Alternatif", icon: FaRegKeyboard }],
    systemRequirements: [
      "Simulasi HTML5 dapat dijalankan di iPad, Chromebook, PC, Mac, dan sistem Linux.",
    ],
  },
  {
    id: "29",
    title: "Diffusion",
    thumbnailUrl:
      "https://phet.colorado.edu/sims/html/diffusion/latest/diffusion-420.png",
    simulatorUrl:
      "https://phet.colorado.edu/sims/html/diffusion/latest/diffusion_all.html",
    tags: ["HTML5", "Physics", "Thermodynamics"],
    topics: ["Difusi", "Teori Kinetik Gas", "Suhu"],
    learningGoals: [
      "Menjelaskan proses pencampuran partikel gas.",
      "Menganalisis pengaruh suhu dan massa partikel terhadap laju difusi.",
      "Memvisualisasikan gerak acak partikel.",
    ],
    inclusiveFeatures: [{ name: "Input Alternatif", icon: FaRegKeyboard }],
    systemRequirements: [
      "Simulasi HTML5 dapat dijalankan di iPad, Chromebook, PC, Mac, dan sistem Linux.",
    ],
  },
  {
    id: "30",
    title: "Gases Intro",
    thumbnailUrl:
      "https://phet.colorado.edu/sims/html/gases-intro/latest/gases-intro-420.png",
    simulatorUrl:
      "https://phet.colorado.edu/sims/html/gases-intro/latest/gases-intro_all.html",
    tags: ["HTML5", "Physics", "Heat"],
    topics: ["Gas Ideal", "Termodinamika", "Suhu"],
    learningGoals: [
      "Memvisualisasikan partikel gas dalam wadah tertutup.",
      "Menghubungkan tekanan, suhu, dan volume (Hukum Gas Ideal).",
      "Mengamati pengaruh pemanasan dan pendinginan terhadap gas.",
    ],
    inclusiveFeatures: [{ name: "Input Alternatif", icon: FaRegKeyboard }],
    systemRequirements: [
      "Simulasi HTML5 dapat dijalankan di iPad, Chromebook, PC, Mac, dan sistem Linux.",
    ],
  },
  {
    id: "31",
    title: "Gas Properties",
    thumbnailUrl:
      "https://phet.colorado.edu/sims/html/gas-properties/latest/gas-properties-420.png",
    simulatorUrl:
      "https://phet.colorado.edu/sims/html/gas-properties/latest/gas-properties_all.html",
    tags: ["HTML5", "Physics", "Heat"],
    topics: ["Sifat Gas", "Energi Kinetik", "Difusi"],
    learningGoals: [
      "Menyelidiki hubungan kuantitatif antara P, V, T, dan N.",
      "Memahami histogram distribusi kecepatan partikel.",
      "Mengeksplorasi konsep energi kinetik rata-rata.",
    ],
    inclusiveFeatures: [{ name: "Input Alternatif", icon: FaRegKeyboard }],
    systemRequirements: [
      "Simulasi HTML5 dapat dijalankan di iPad, Chromebook, PC, Mac, dan sistem Linux.",
    ],
  },
  {
    id: "32",
    title: "Black Body Spectrum",
    thumbnailUrl:
      "https://phet.colorado.edu/sims/html/black-body-spectrum/latest/black-body-spectrum-420.png",
    simulatorUrl:
      "https://phet.colorado.edu/sims/html/black-body-spectrum/latest/black-body-spectrum_all.html",
    tags: ["HTML5", "Physics", "Quantum"],
    topics: ["Spektrum Benda Hitam", "Radiasi", "Suhu"],
    learningGoals: [
      "Membandingkan spektrum radiasi benda hitam pada berbagai suhu.",
      "Menjelaskan hubungan antara suhu dan panjang gelombang puncak (Hukum Wien).",
      "Menganalisis hubungan suhu dan intensitas total.",
    ],
    inclusiveFeatures: [{ name: "Input Alternatif", icon: FaRegKeyboard }],
    systemRequirements: [
      "Simulasi HTML5 dapat dijalankan di iPad, Chromebook, PC, Mac, dan sistem Linux.",
    ],
  },
  {
    id: "33",
    title: "Masses and Springs: Basics",
    thumbnailUrl:
      "https://phet.colorado.edu/sims/html/masses-and-springs-basics/latest/masses-and-springs-basics-420.png",
    simulatorUrl:
      "https://phet.colorado.edu/sims/html/masses-and-springs-basics/latest/masses-and-springs-basics_all.html",
    tags: ["HTML5", "Physics", "Motion"],
    topics: ["Hukum Hooke", "Gaya Pegas", "Osilasi"],
    learningGoals: [
      "Menentukan hubungan antara gaya pegas dan pertambahan panjang.",
      "Mengukur periode osilasi massa pada pegas.",
      "Menyelidiki pengaruh massa dan konstanta pegas terhadap periode.",
    ],
    inclusiveFeatures: [{ name: "Input Alternatif", icon: FaRegKeyboard }],
    systemRequirements: [
      "Simulasi HTML5 dapat dijalankan di iPad, Chromebook, PC, Mac, dan sistem Linux.",
    ],
  },
  {
    id: "34",
    title: "Energy Forms and Changes",
    thumbnailUrl:
      "https://phet.colorado.edu/sims/html/energy-forms-and-changes/latest/energy-forms-and-changes-420.png",
    simulatorUrl:
      "https://phet.colorado.edu/sims/html/energy-forms-and-changes/latest/energy-forms-and-changes_all.html",
    tags: ["HTML5", "Physics", "Energy"],
    topics: ["Bentuk Energi", "Transformasi Energi", "Termodinamika"],
    learningGoals: [
      "Mengidentifikasi berbagai bentuk energi (mekanik, cahaya, panas, kimia).",
      "Melacak aliran dan perubahan energi dalam sistem.",
      "Memahami kekekalan energi.",
    ],
    inclusiveFeatures: [{ name: "Input Alternatif", icon: FaRegKeyboard }],
    systemRequirements: [
      "Simulasi HTML5 dapat dijalankan di iPad, Chromebook, PC, Mac, dan sistem Linux.",
    ],
  },
  {
    id: "35",
    title: "Wave Interference",
    thumbnailUrl:
      "https://phet.colorado.edu/sims/html/wave-interference/latest/wave-interference-420.png",
    simulatorUrl:
      "https://phet.colorado.edu/sims/html/wave-interference/latest/wave-interference_all.html",
    tags: ["HTML5", "Physics", "Waves"],
    topics: ["Interferensi", "Difraksi", "Celah Ganda"],
    learningGoals: [
      "Mengamati pola interferensi gelombang air, suara, dan cahaya.",
      "Bereksperimen dengan difraksi melalui celah tunggal dan ganda.",
      "Menjelaskan prinsip superposisi gelombang.",
    ],
    inclusiveFeatures: [{ name: "Input Alternatif", icon: FaRegKeyboard }],
    systemRequirements: [
      "Simulasi HTML5 dapat dijalankan di iPad, Chromebook, PC, Mac, dan sistem Linux.",
    ],
  },
  {
    id: "36",
    title: "Coulomb's Law",
    thumbnailUrl:
      "https://phet.colorado.edu/sims/html/coulombs-law/latest/coulombs-law-420.png",
    simulatorUrl:
      "https://phet.colorado.edu/sims/html/coulombs-law/latest/coulombs-law_all.html",
    tags: ["HTML5", "Physics", "Electricity"],
    topics: ["Hukum Coulomb", "Listrik Statis", "Gaya Listrik"],
    learningGoals: [
      "Menentukan hubungan antara gaya elektrostatis dengan besar muatan.",
      "Menentukan hubungan antara gaya elektrostatis dengan jarak antar muatan (Hukum Kuadrat Terbalik).",
      "Membandingkan gaya Coulomb dengan gaya gravitasi.",
    ],
    inclusiveFeatures: [{ name: "Input Alternatif", icon: FaRegKeyboard }],
    systemRequirements: [
      "Simulasi HTML5 dapat dijalankan di iPad, Chromebook, PC, Mac, dan sistem Linux.",
    ],
  },
  {
    id: "37",
    title: "Masses and Springs",
    thumbnailUrl:
      "https://phet.colorado.edu/sims/html/masses-and-springs/latest/masses-and-springs-420.png",
    simulatorUrl:
      "https://phet.colorado.edu/sims/html/masses-and-springs/latest/masses-and-springs_all.html",
    tags: ["HTML5", "Physics", "Energy"],
    topics: ["Energi Mekanik", "Osilasi Harmonik", "Daman"],
    learningGoals: [
      "Menganalisis transformasi energi kinetik, potensial gravitasi, dan potensial pegas.",
      "Menghitung energi total sistem massa-pegas.",
      "Mempelajari osilasi teredam.",
    ],
    inclusiveFeatures: [{ name: "Input Alternatif", icon: FaRegKeyboard }],
    systemRequirements: [
      "Simulasi HTML5 dapat dijalankan di iPad, Chromebook, PC, Mac, dan sistem Linux.",
    ],
  },
  {
    id: "38",
    title: "Capacitor Lab: Basics",
    thumbnailUrl:
      "https://phet.colorado.edu/sims/html/capacitor-lab-basics/latest/capacitor-lab-basics-420.png",
    simulatorUrl:
      "https://phet.colorado.edu/sims/html/capacitor-lab-basics/latest/capacitor-lab-basics_all.html",
    tags: ["HTML5", "Physics", "Electricity"],
    topics: ["Kapasitor", "Kapasitansi", "Listrik Statis"],
    learningGoals: [
      "Menjelaskan hubungan antara luas keping, jarak, dan kapasitansi.",
      "Memahami cara kapasitor menyimpan muatan dan energi.",
      "Mengukur tegangan dan medan listrik dalam kapasitor.",
    ],
    inclusiveFeatures: [{ name: "Input Alternatif", icon: FaRegKeyboard }],
    systemRequirements: [
      "Simulasi HTML5 dapat dijalankan di iPad, Chromebook, PC, Mac, dan sistem Linux.",
    ],
  },
  {
    id: "39",
    title: "Circuit Construction Kit: DC - Virtual Lab",
    thumbnailUrl:
      "https://phet.colorado.edu/sims/html/circuit-construction-kit-dc-virtual-lab/latest/circuit-construction-kit-dc-virtual-lab-420.png",
    simulatorUrl:
      "https://phet.colorado.edu/sims/html/circuit-construction-kit-dc-virtual-lab/latest/circuit-construction-kit-dc-virtual-lab_all.html",
    tags: ["HTML5", "Physics", "Electricity"],
    topics: ["Rangkaian DC", "Hukum Ohm", "Arus Searah"],
    learningGoals: [
      "Membuat rangkaian seri dan paralel dengan komponen virtual.",
      "Mengukur arus dan tegangan menggunakan multimeter.",
      "Menganalisis resistansi ekivalen.",
    ],
    inclusiveFeatures: [{ name: "Input Alternatif", icon: FaRegKeyboard }],
    systemRequirements: [
      "Simulasi HTML5 dapat dijalankan di iPad, Chromebook, PC, Mac, dan sistem Linux.",
    ],
  },
  {
    id: "40",
    title: "Circuit Construction Kit: DC",
    thumbnailUrl:
      "https://phet.colorado.edu/sims/html/circuit-construction-kit-dc/latest/circuit-construction-kit-dc-420.png",
    simulatorUrl:
      "https://phet.colorado.edu/sims/html/circuit-construction-kit-dc/latest/circuit-construction-kit-dc_all.html",
    tags: ["HTML5", "Physics", "Electricity"],
    topics: ["Rangkaian Listrik", "Komponen Elektronika", "Resistor"],
    learningGoals: [
      "Bereksperimen dengan baterai, resistor, dan lampu.",
      "Membandingkan kecerahan lampu pada rangkaian seri dan paralel.",
      "Menyelidiki konduktor dan isolator.",
    ],
    inclusiveFeatures: [{ name: "Input Alternatif", icon: FaRegKeyboard }],
    systemRequirements: [
      "Simulasi HTML5 dapat dijalankan di iPad, Chromebook, PC, Mac, dan sistem Linux.",
    ],
  },
  {
    id: "41",
    title: "Pendulum Lab",
    thumbnailUrl:
      "https://phet.colorado.edu/sims/html/pendulum-lab/latest/pendulum-lab-420.png",
    simulatorUrl:
      "https://phet.colorado.edu/sims/html/pendulum-lab/latest/pendulum-lab_all.html",
    tags: ["HTML5", "Physics", "Motion"],
    topics: ["Bandul Sederhana", "Periode", "Gravitasi"],
    learningGoals: [
      "Menemukan faktor yang mempengaruhi periode bandul (panjang tali, gravitasi).",
      "Membuktikan bahwa massa dan amplitudo (sudut kecil) tidak mempengaruhi periode.",
      "Mengukur percepatan gravitasi bumi.",
    ],
    inclusiveFeatures: [{ name: "Input Alternatif", icon: FaRegKeyboard }],
    systemRequirements: [
      "Simulasi HTML5 dapat dijalankan di iPad, Chromebook, PC, Mac, dan sistem Linux.",
    ],
  },
  {
    id: "42",
    title: "Projectile Motion",
    thumbnailUrl:
      "https://phet.colorado.edu/sims/html/projectile-motion/latest/projectile-motion-420.png",
    simulatorUrl:
      "https://phet.colorado.edu/sims/html/projectile-motion/latest/projectile-motion_all.html",
    tags: ["HTML5", "Physics", "Motion"],
    topics: ["Gerak Peluru", "Kinematika 2D", "Hambatan Udara"],
    learningGoals: [
      "Menganalisis gerak benda yang dilempar ke udara.",
      "Mengamati pengaruh hambatan udara terhadap lintasan.",
      "Menentukan ketinggian maksimum dan jangkauan terjauh.",
    ],
    inclusiveFeatures: [{ name: "Input Alternatif", icon: FaRegKeyboard }],
    systemRequirements: [
      "Simulasi HTML5 dapat dijalankan di iPad, Chromebook, PC, Mac, dan sistem Linux.",
    ],
  },
  {
    id: "43",
    title: "States Of Matter: Basics",
    thumbnailUrl:
      "https://phet.colorado.edu/sims/html/states-of-matter-basics/latest/states-of-matter-basics-420.png",
    simulatorUrl:
      "https://phet.colorado.edu/sims/html/states-of-matter-basics/latest/states-of-matter-basics_all.html",
    tags: ["HTML5", "Chemistry", "Matter"],
    topics: ["Wujud Zat", "Padat Cair Gas", "Molekul"],
    learningGoals: [
      "Membandingkan susunan molekul pada zat padat, cair, dan gas.",
      "Mengamati pengaruh pemanasan dan pendinginan terhadap keadaan zat.",
      "Memahami fase transisi.",
    ],
    inclusiveFeatures: [{ name: "Input Alternatif", icon: FaRegKeyboard }],
    systemRequirements: [
      "Simulasi HTML5 dapat dijalankan di iPad, Chromebook, PC, Mac, dan sistem Linux.",
    ],
  },
  {
    id: "44",
    title: "States Of Matter",
    thumbnailUrl:
      "https://phet.colorado.edu/sims/html/states-of-matter/latest/states-of-matter-420.png",
    simulatorUrl:
      "https://phet.colorado.edu/sims/html/states-of-matter/latest/states-of-matter_all.html",
    tags: ["HTML5", "Chemistry", "Matter"],
    topics: ["Diagram Fase", "Entropi", "Potensial Interaksi"],
    learningGoals: [
      "Menjelaskan diagram fase P-T.",
      "Menganalisis interaksi antar molekul.",
      "Memahami keadaan kritis dan tripel poin.",
    ],
    inclusiveFeatures: [{ name: "Input Alternatif", icon: FaRegKeyboard }],
    systemRequirements: [
      "Simulasi HTML5 dapat dijalankan di iPad, Chromebook, PC, Mac, dan sistem Linux.",
    ],
  },
  {
    id: "45",
    title: "Gravity and Orbits",
    thumbnailUrl:
      "https://phet.colorado.edu/sims/html/gravity-and-orbits/latest/gravity-and-orbits-420.png",
    simulatorUrl:
      "https://phet.colorado.edu/sims/html/gravity-and-orbits/latest/gravity-and-orbits_all.html",
    tags: ["HTML5", "Physics", "Astronomy"],
    topics: ["Orbit", "Gravitasi", "Satelit"],
    learningGoals: [
      "Memahami bagaimana gravitasi mengendalikan orbit.",
      "Memvisualisasikan vektor gaya gravitasi dan kecepatan.",
      "Mengubah massa dan melihat efeknya pada sistem Bumi-Bulan-Matahari.",
    ],
    inclusiveFeatures: [{ name: "Input Alternatif", icon: FaRegKeyboard }],
    systemRequirements: [
      "Simulasi HTML5 dapat dijalankan di iPad, Chromebook, PC, Mac, dan sistem Linux.",
    ],
  },
  {
    id: "46",
    title: "Plinko Probability",
    thumbnailUrl:
      "https://phet.colorado.edu/sims/html/plinko-probability/latest/plinko-probability-420.png",
    simulatorUrl:
      "https://phet.colorado.edu/sims/html/plinko-probability/latest/plinko-probability_all.html",
    tags: ["HTML5", "Math", "Statistics"],
    topics: ["Probabilitas", "Statistika", "Distribusi Binomial"],
    learningGoals: [
      "Mengamati distribusi bola yang jatuh melalui papan Galton.",
      "Membandingkan distribusi eksperimental dengan teoritis.",
      "Memahami konsep peluang dan acak.",
    ],
    inclusiveFeatures: [{ name: "Input Alternatif", icon: FaRegKeyboard }],
    systemRequirements: [
      "Simulasi HTML5 dapat dijalankan di iPad, Chromebook, PC, Mac, dan sistem Linux.",
    ],
  },
  {
    id: "47",
    title: "Atomic Interactions",
    thumbnailUrl:
      "https://phet.colorado.edu/sims/html/atomic-interactions/latest/atomic-interactions-420.png",
    simulatorUrl:
      "https://phet.colorado.edu/sims/html/atomic-interactions/latest/atomic-interactions_all.html",
    tags: ["HTML5", "Chemistry", "Atomic"],
    topics: ["Interaksi Atom", "Gaya Van der Waals", "Ikatan Kimia"],
    learningGoals: [
      "Menjelaskan bagaimana gaya tarik dan tolak mempengaruhi interaksi atom.",
      "Menganalisis grafik energi potensial vs jarak.",
      "Memahami pembentukan ikatan molekul sederhana.",
    ],
    inclusiveFeatures: [{ name: "Input Alternatif", icon: FaRegKeyboard }],
    systemRequirements: [
      "Simulasi HTML5 dapat dijalankan di iPad, Chromebook, PC, Mac, dan sistem Linux.",
    ],
  },
  {
    id: "48",
    title: "Charges and Fields",
    thumbnailUrl:
      "https://phet.colorado.edu/sims/html/charges-and-fields/latest/charges-and-fields-420.png",
    simulatorUrl:
      "https://phet.colorado.edu/sims/html/charges-and-fields/latest/charges-and-fields_all.html",
    tags: ["HTML5", "Physics", "Electricity"],
    topics: ["Medan Listrik", "Potensial Listrik", "Muatan"],
    learningGoals: [
      "Memvisualisasikan garis medan listrik untuk berbagai konfigurasi muatan.",
      "Menentukan hubungan antara potensial dan medan listrik.",
      "Mengamati perilaku muatan uji dalam medan listrik.",
    ],
    inclusiveFeatures: [{ name: "Input Alternatif", icon: FaRegKeyboard }],
    systemRequirements: [
      "Simulasi HTML5 dapat dijalankan di iPad, Chromebook, PC, Mac, dan sistem Linux.",
    ],
  },
  {
    id: "49",
    title: "Rutherford Scattering",
    thumbnailUrl:
      "https://phet.colorado.edu/sims/html/rutherford-scattering/latest/rutherford-scattering-420.png",
    simulatorUrl:
      "https://phet.colorado.edu/sims/html/rutherford-scattering/latest/rutherford-scattering_all.html",
    tags: ["HTML5", "Physics", "Quantum"],
    topics: ["Model Atom Rutherford", "Hamburan", "Inti Atom"],
    learningGoals: [
      "Menjelaskan eksperimen hamburan partikel alfa.",
      "Membandingkan model atom Thomson (roti kismis) dengan model Rutherford.",
      "Memahami bukti keberadaan inti atom yang padat.",
    ],
    inclusiveFeatures: [{ name: "Input Alternatif", icon: FaRegKeyboard }],
    systemRequirements: [
      "Simulasi HTML5 dapat dijalankan di iPad, Chromebook, PC, Mac, dan sistem Linux.",
    ],
  },
  {
    id: "50",
    title: "Bending Light",
    thumbnailUrl:
      "https://phet.colorado.edu/sims/html/bending-light/latest/bending-light-420.png",
    simulatorUrl:
      "https://phet.colorado.edu/sims/html/bending-light/latest/bending-light_all.html",
    tags: ["HTML5", "Physics", "Light"],
    topics: ["Pembiasan", "Hukum Snellius", "Pemantulan Internal Total"],
    learningGoals: [
      "Mengukur sudut datang dan sudut bias antar medium berbeda.",
      "Menghitung indeks bias material.",
      "Mengamati fenomena pembiasan melalui prisma.",
    ],
    inclusiveFeatures: [{ name: "Input Alternatif", icon: FaRegKeyboard }],
    systemRequirements: [
      "Simulasi HTML5 dapat dijalankan di iPad, Chromebook, PC, Mac, dan sistem Linux.",
    ],
  },
  {
    id: "51",
    title: "Hooke's Law",
    thumbnailUrl:
      "https://phet.colorado.edu/sims/html/hookes-law/latest/hookes-law-420.png",
    simulatorUrl:
      "https://phet.colorado.edu/sims/html/hookes-law/latest/hookes-law_all.html",
    tags: ["HTML5", "Physics", "Motion"],
    topics: ["Hukum Hooke", "Pegas", "Gaya"],
    learningGoals: [
      "Menganalisis hubungan linear antara gaya dan deformasi pegas.",
      "Menentukan konstanta pegas dari grafik.",
      "Menghitung energi potensial pegas.",
    ],
    inclusiveFeatures: [{ name: "Input Alternatif", icon: FaRegKeyboard }],
    systemRequirements: [
      "Simulasi HTML5 dapat dijalankan di iPad, Chromebook, PC, Mac, dan sistem Linux.",
    ],
  },
  {
    id: "52",
    title: "Molekules and Light",
    thumbnailUrl:
      "https://phet.colorado.edu/sims/html/molecules-and-light/latest/molecules-and-light-420.png",
    simulatorUrl:
      "https://phet.colorado.edu/sims/html/molecules-and-light/latest/molecules-and-light_all.html",
    tags: ["HTML5", "Chemistry", "Quantum"],
    topics: ["Spektroskopi", "Interaksi Cahaya-Materi", "Efek Rumah Kaca"],
    learningGoals: [
      "Mengamati bagaimana molekul merespons berbagai jenis radiasi (mikrogelombang, IR, UV, tampak).",
      "Menghubungkan struktur molekul dengan penyerapan cahaya.",
      "Memahami dasar molekuler efek rumah kaca.",
    ],
    inclusiveFeatures: [{ name: "Input Alternatif", icon: FaRegKeyboard }],
    systemRequirements: [
      "Simulasi HTML5 dapat dijalankan di iPad, Chromebook, PC, Mac, dan sistem Linux.",
    ],
  },
  {
    id: "53",
    title: "Energy Skate Park: Basics",
    thumbnailUrl:
      "https://phet.colorado.edu/sims/html/energy-skate-park-basics/latest/energy-skate-park-basics-420.png",
    simulatorUrl:
      "https://phet.colorado.edu/sims/html/energy-skate-park-basics/latest/energy-skate-park-basics_all.html",
    tags: ["HTML5", "Physics", "Energy"],
    topics: ["Energi Kinetik", "Energi Potensial", "Kekekalan Energi"],
    learningGoals: [
      "Mengamati pertukaran antara energi kinetik dan potensial.",
      "Memahami konsep kekekalan energi mekanik dalam lintasan tanpa gesekan.",
      "Memvisualisasikan energi dalam grafik batang dan diagram lingkaran.",
    ],
    inclusiveFeatures: [{ name: "Input Alternatif", icon: FaRegKeyboard }],
    systemRequirements: [
      "Simulasi HTML5 dapat dijalankan di iPad, Chromebook, PC, Mac, dan sistem Linux.",
    ],
  },
  {
    id: "54",
    title: "Faraday's Law",
    thumbnailUrl:
      "https://phet.colorado.edu/sims/html/faradays-law/latest/faradays-law-420.png",
    simulatorUrl:
      "https://phet.colorado.edu/sims/html/faradays-law/latest/faradays-law_all.html",
    tags: ["HTML5", "Physics", "Electricity"],
    topics: ["Hukum Faraday", "Induksi Elektromagnetik", "GGL Induksi"],
    learningGoals: [
      "Mendemonstrasikan bagaimana perubahan fluks magnetik menghasilkan arus listrik.",
      "Menyelidiki pengaruh kecepatan magnet dan jumlah lilitan.",
      "Memahami prinsip dasar pembangkit listrik.",
    ],
    inclusiveFeatures: [{ name: "Input Alternatif", icon: FaRegKeyboard }],
    systemRequirements: [
      "Simulasi HTML5 dapat dijalankan di iPad, Chromebook, PC, Mac, dan sistem Linux.",
    ],
  },
  {
    id: "55",
    title: "Wave on String",
    thumbnailUrl:
      "https://phet.colorado.edu/sims/html/wave-on-string/latest/wave-on-string-420.png",
    simulatorUrl:
      "https://phet.colorado.edu/sims/html/wave-on-string/latest/wave-on-string_all.html",
    tags: ["HTML5", "Physics", "Waves"],
    topics: ["Gelombang Transversal", "Frekuensi", "Amplitudo"],
    learningGoals: [
      "Membuat dan menganalisis gelombang pada tali.",
      "Mempelajari hubungan frekuensi, panjang gelombang, dan cepat rambat.",
      "Mengamati efek tegangan tali dan redaman.",
    ],
    inclusiveFeatures: [{ name: "Input Alternatif", icon: FaRegKeyboard }],
    systemRequirements: [
      "Simulasi HTML5 dapat dijalankan di iPad, Chromebook, PC, Mac, dan sistem Linux.",
    ],
  },
  {
    id: "56",
    title: "Color Vision",
    thumbnailUrl:
      "https://phet.colorado.edu/sims/html/color-vision/latest/color-vision-420.png",
    simulatorUrl:
      "https://phet.colorado.edu/sims/html/color-vision/latest/color-vision_all.html",
    tags: ["HTML5", "Biology", "Light"],
    topics: ["Persepsi Warna", "Pencampuran Cahaya", "RGB"],
    learningGoals: [
      "Bereksperimen dengan pencampuran warna cahaya (aditif).",
      "Memahami bagaimana mata manusia mempresepsikan warna.",
      "Membedakan antara warna cahaya dan pigmen.",
    ],
    inclusiveFeatures: [{ name: "Input Alternatif", icon: FaRegKeyboard }],
    systemRequirements: [
      "Simulasi HTML5 dapat dijalankan di iPad, Chromebook, PC, Mac, dan sistem Linux.",
    ],
  },
  {
    id: "57",
    title: "Balancing Act",
    thumbnailUrl:
      "https://phet.colorado.edu/sims/html/balancing-act/latest/balancing-act-420.png",
    simulatorUrl:
      "https://phet.colorado.edu/sims/html/balancing-act/latest/balancing-act_all.html",
    tags: ["HTML5", "Physics", "Motion"],
    topics: ["Torsi", "Keseimbangan", "Pusat Massa"],
    learningGoals: [
      "Menyeimbangkan jungkat-jungkit menggunakan torsi.",
      "Menemukan hubungan antara massa dan jarak dari titik tumpu.",
      "Memprediksi bagaimana benda akan berotasi.",
    ],
    inclusiveFeatures: [{ name: "Input Alternatif", icon: FaRegKeyboard }],
    systemRequirements: [
      "Simulasi HTML5 dapat dijalankan di iPad, Chromebook, PC, Mac, dan sistem Linux.",
    ],
  },
  {
    id: "58",
    title: "Under Preasure",
    thumbnailUrl:
      "https://phet.colorado.edu/sims/html/under-pressure/latest/under-pressure-420.png",
    simulatorUrl:
      "https://phet.colorado.edu/sims/html/under-pressure/latest/under-pressure_all.html",
    tags: ["HTML5", "Physics", "Fluids"],
    topics: ["Tekanan Hidrostatis", "Fluida", "Hukum Pascal"],
    learningGoals: [
      "Menganalisis faktor yang mempengaruhi tekanan dalam zat cair.",
      "Mengamati pengaruh gravitasi dan massa jenis fenomena tekanan.",
      "Memahami prinsip bejana berhubungan.",
    ],
    inclusiveFeatures: [{ name: "Input Alternatif", icon: FaRegKeyboard }],
    systemRequirements: [
      "Simulasi HTML5 dapat dijalankan di iPad, Chromebook, PC, Mac, dan sistem Linux.",
    ],
  },
  {
    id: "59",
    title: "Friction",
    thumbnailUrl:
      "https://phet.colorado.edu/sims/html/friction/latest/friction-420.png",
    simulatorUrl:
      "https://phet.colorado.edu/sims/html/friction/latest/friction_all.html",
    tags: ["HTML5", "Physics", "Motion"],
    topics: ["Gaya Gesek", "Termodinamika", "Energi Panas"],
    learningGoals: [
      "Memvisualisasikan gesekan pada tingkat atom.",
      "Menjelaskan mengapa gesekan menghasilkan panas.",
      "Mengamati pengaruh kekasaran permukaan.",
    ],
    inclusiveFeatures: [{ name: "Input Alternatif", icon: FaRegKeyboard }],
    systemRequirements: [
      "Simulasi HTML5 dapat dijalankan di iPad, Chromebook, PC, Mac, dan sistem Linux.",
    ],
  },
  {
    id: "60",
    title: "Forces and Motion: Basics",
    thumbnailUrl:
      "https://phet.colorado.edu/sims/html/forces-and-motion-basics/latest/forces-and-motion-basics-420.png",
    simulatorUrl:
      "https://phet.colorado.edu/sims/html/forces-and-motion-basics/latest/forces-and-motion-basics_all.html",
    tags: ["HTML5", "Physics", "Motion"],
    topics: ["Hukum Newton I & II", "Gaya", "Percepatan"],
    learningGoals: [
      "Menyelidiki hubungan antara gaya, massa, dan percepatan (F=ma).",
      "Menganalisis gaya gesek dan gerak benda.",
      "Memahami konsep resultan gaya.",
    ],
    inclusiveFeatures: [{ name: "Input Alternatif", icon: FaRegKeyboard }],
    systemRequirements: [
      "Simulasi HTML5 dapat dijalankan di iPad, Chromebook, PC, Mac, dan sistem Linux.",
    ],
  },
  {
    id: "61",
    title: "John Travoltage",
    thumbnailUrl:
      "https://phet.colorado.edu/sims/html/john-travoltage/latest/john-travoltage-420.png",
    simulatorUrl:
      "https://phet.colorado.edu/sims/html/john-travoltage/latest/john-travoltage_all.html",
    tags: ["HTML5", "Physics", "Electricity"],
    topics: ["Listrik Statis", "Transfer Muatan", "Grounding"],
    learningGoals: [
      "Menjelaskan bagaimana gesekan dapat memisahkan muatan listrik.",
      "Memvisualisasikan pelepasan muatan listrik (loncatan bunga api).",
      "Memahami konsep pembumian (grounding).",
    ],
    inclusiveFeatures: [{ name: "Input Alternatif", icon: FaRegKeyboard }],
    systemRequirements: [
      "Simulasi HTML5 dapat dijalankan di iPad, Chromebook, PC, Mac, dan sistem Linux.",
    ],
  },
  {
    id: "62",
    title: "Gravity Force Lab",
    thumbnailUrl:
      "https://phet.colorado.edu/sims/html/gravity-force-lab/latest/gravity-force-lab-420.png",
    simulatorUrl:
      "https://phet.colorado.edu/sims/html/gravity-force-lab/latest/gravity-force-lab_all.html",
    tags: ["HTML5", "Physics", "Gravity"],
    topics: ["Hukum Gravitasi Newton", "Gaya Tarik", "Massa"],
    learningGoals: [
      "Menghitung gaya gravitasi antara dua benda.",
      "Menganalisis pengaruh jarak kuadrat terbalik terhadap gaya.",
      "Menentukan konstanta gravitasi universal.",
    ],
    inclusiveFeatures: [{ name: "Input Alternatif", icon: FaRegKeyboard }],
    systemRequirements: [
      "Simulasi HTML5 dapat dijalankan di iPad, Chromebook, PC, Mac, dan sistem Linux.",
    ],
  },
  {
    id: "63",
    title: "Ballons and Static Electricity",
    thumbnailUrl:
      "https://phet.colorado.edu/sims/html/balloons-and-static-electricity/latest/balloons-and-static-electricity-420.png",
    simulatorUrl:
      "https://phet.colorado.edu/sims/html/balloons-and-static-electricity/latest/balloons-and-static-electricity_all.html",
    tags: ["HTML5", "Physics", "Electricity"],
    topics: ["Listrik Statis", "Induksi", "Polarisasi"],
    learningGoals: [
      "Menunjukkan transfer muatan melalui gesekan.",
      "Menjelaskan efek induksi dan polarisasi pada benda netral.",
      "Mengamati gaya tarik-menarik dan tolak-menolak elektrostatis.",
    ],
    inclusiveFeatures: [{ name: "Input Alternatif", icon: FaRegKeyboard }],
    systemRequirements: [
      "Simulasi HTML5 dapat dijalankan di iPad, Chromebook, PC, Mac, dan sistem Linux.",
    ],
  },
  {
    id: "64",
    title: "Ohm's Law",
    thumbnailUrl:
      "https://phet.colorado.edu/sims/html/ohms-law/latest/ohms-law-420.png",
    simulatorUrl:
      "https://phet.colorado.edu/sims/html/ohms-law/latest/ohms-law_all.html",
    tags: ["HTML5", "Physics", "Electricity"],
    topics: ["Hukum Ohm", "Tegangan", "Arus"],
    learningGoals: [
      "Memvisualisasikan hubungan V = I x R.",
      "Mengamati perubahan arus saat tegangan atau resistansi diubah.",
      "Memahami proporsionalitas dalam rangkaian listrik.",
    ],
    inclusiveFeatures: [{ name: "Input Alternatif", icon: FaRegKeyboard }],
    systemRequirements: [
      "Simulasi HTML5 dapat dijalankan di iPad, Chromebook, PC, Mac, dan sistem Linux.",
    ],
  },
  {
    id: "65",
    title: "Resistance In a Wire",
    thumbnailUrl:
      "https://phet.colorado.edu/sims/html/resistance-in-a-wire/latest/resistance-in-a-wire-420.png",
    simulatorUrl:
      "https://phet.colorado.edu/sims/html/resistance-in-a-wire/latest/resistance-in-a-wire_all.html",
    tags: ["HTML5", "Physics", "Electricity"],
    topics: ["Resistansi", "Hambatan Jenis", "Dimensi Kawat"],
    learningGoals: [
      "Menentukan faktor geometri yang mempengaruhi hambatan kawat.",
      "Menganalisis pengaruh panjang, luas penampang, dan jenis bahan terhadap resistansi.",
      "Memahami konsep resistivitas.",
    ],
    inclusiveFeatures: [{ name: "Input Alternatif", icon: FaRegKeyboard }],
    systemRequirements: [
      "Simulasi HTML5 dapat dijalankan di iPad, Chromebook, PC, Mac, dan sistem Linux.",
    ],
  },
  {
    id: "66",
    title: "Build an Atom",
    thumbnailUrl:
      "https://phet.colorado.edu/sims/html/build-an-atom/latest/build-an-atom-420.png",
    simulatorUrl:
      "https://phet.colorado.edu/sims/html/build-an-atom/latest/build-an-atom_all.html",
    tags: ["HTML5", "Chemistry", "Atomic"],
    topics: ["Struktur Atom", "Isotop", "Ion"],
    learningGoals: [
      "Membangun atom dari proton, neutron, dan elektron.",
      "Menentukan massa, muatan, dan nama unsur.",
      "Membedakan atom netral dan ion.",
    ],
    inclusiveFeatures: [{ name: "Input Alternatif", icon: FaRegKeyboard }],
    systemRequirements: [
      "Simulasi HTML5 dapat dijalankan di iPad, Chromebook, PC, Mac, dan sistem Linux.",
    ],
  },
];
