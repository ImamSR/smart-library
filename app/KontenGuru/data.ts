export type Resource = {
  id: string;
  title: string;
  thumbnailUrl: string;
  description: string; // Added description for context
  isNew?: boolean;
  tags?: string[];
};

export const TEACHER_RESOURCES: Resource[] = [
  {
    id: "1",
    title: "Strategi Pembelajaran Aktif",
    // Using generic education/classroom placeholders or gradients if real images aren't available
    thumbnailUrl:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description:
      "Metode melibat siswa secara aktif dalam proses belajar untuk meningkatkan pemahaman.",
    isNew: true,
    tags: ["Pedagogi", "Metode", "SD/SMP"],
  },
  {
    id: "2",
    title: "Manajemen Kelas Efektif",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description:
      "Tips dan trik menciptakan lingkungan kelas yang kondusif dan disiplin positif.",
    tags: ["Manajemen", "Tips", "Umum"],
  },
  {
    id: "3",
    title: "Pemanfaatan AI dalam Pendidikan",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description:
      "Panduan menggunakan alat kecerdasan buatan untuk membantu administrasi dan pengajaran.",
    isNew: true,
    tags: ["Teknologi", "AI", "Inovasi"],
  },
  {
    id: "4",
    title: "Asesmen Kurikulum Merdeka",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description:
      "Panduan lengkap merancang asesmen diagnostik, formatif, dan sumatif.",
    tags: ["Kurikulum", "Asesmen", "Administrasi"],
  },

  {
    id: "6",
    title: "Psikologi Perkembangan Anak",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Memahami tahapan perkembangan kognitif dan emosional siswa.",
    tags: ["Psikologi", "Teori", "Umum"],
  },

  {
    id: "8",
    title: "Project Based Learning (PjBL)",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description:
      "Langkah-langkah penerapan pembelajaran berbasis proyek di kelas.",
    tags: ["Model Belajar", "PjBL", "Proyek"],
  },
];
