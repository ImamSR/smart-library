"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { MdChildCare, MdClose, MdOutlineVisibility } from "react-icons/md";
import { FaRegBookmark } from "react-icons/fa6";
import { IoArrowBack, IoChevronBack, IoChevronForward } from "react-icons/io5";

// --- Types & Mock Data ---
type Book = {
  id: string;
  title: string;
  author: string;
  description: string;
  coverGradient: string;
  pdfUrl: string;
};

// Generate 32 dummy books for pagination demo
const BOOKS: Book[] = [
  {
    id: "1",
    title: "Aneh",
    author: "Sonal Gupta Vaswani",
    description: "",
    coverGradient:
      "https://drive.google.com/thumbnail?id=1LiQxkIO9lYWeLZJS8__NpUkZICajCBcj&sz=w1000",
    pdfUrl:
      "https://drive.google.com/file/d/1LiQxkIO9lYWeLZJS8__NpUkZICajCBcj/preview",
  },
  {
    id: "2",
    title: "Anjing Dan Kucing",
    author: "Vusi Maldi",
    description: "",
    coverGradient:
      "https://lh3.googleusercontent.com/d/1zcIDqBzXKahVK0MIRYkjmWjZgnknvzV9",
    pdfUrl:
      "https://drive.google.com/file/d/1zcIDqBzXKahVK0MIRYkjmWjZgnknvzV9/preview",
  },
  {
    id: "3",
    title: "Apa Isi Panci Itu",
    author: "Hayley Alonzo",
    description: "",
    coverGradient:
      "https://lh3.googleusercontent.com/d/15ByHnJTDw76tgJu3LKR4FgEVzCbrEGK0",
    pdfUrl:
      "https://drive.google.com/file/d/15ByHnJTDw76tgJu3LKR4FgEVzCbrEGK0/preview",
  },
  {
    id: "4",
    title: "Aum Aum Dinosaurus",
    author: "Lavanya Naidu",
    description: "",
    coverGradient:
      "https://drive.google.com/thumbnail?id=11UeOgLtGMQpOZUnqRWY2cEmPjKvm_s0q&sz=w1000",
    pdfUrl:
      "https://drive.google.com/file/d/11UeOgLtGMQpOZUnqRWY2cEmPjKvm_s0q/preview",
  },
  {
    id: "5",
    title: "Apakah Aku Istimewa",
    author: "Dongeng Nusantara",
    description: "",
    coverGradient:
      "https://drive.google.com/thumbnail?id=1uHGqWYx5w7ipUxKqGmXbHfWZjQQIUlJ7&sz=w1000",
    pdfUrl:
      "https://drive.google.com/file/d/1uHGqWYx5w7ipUxKqGmXbHfWZjQQIUlJ7/preview",
  },
  {
    id: "6",
    title: "Baca Buku Yuk",
    author: "Parsh Soecheata, Kaveri Gapalakrish",
    description: "",
    coverGradient:
      "https://drive.google.com/thumbnail?id=1Aa0tgwTb8xWNpxf61ZAQfStkR2VDW0Nk&sz=w1000",
    pdfUrl:
      "https://drive.google.com/file/d/1Aa0tgwTb8xWNpxf61ZAQfStkR2VDW0Nk/preview",
  },
  {
    id: "7",
    title: "Balok Istimewa",
    author: "Rohit Karandadi",
    description: "",
    coverGradient:
      "https://drive.google.com/thumbnail?id=1UrqJbinzWZ-KSnK5bhVspN7_gqBTCkgj&sz=w1000",
    pdfUrl:
      "https://drive.google.com/file/d/1UrqJbinzWZ-KSnK5bhVspN7_gqBTCkgj/preview",
  },
  {
    id: "8",
    title: "Berangkat Kesekolah Bersama Sayuran",
    author: "Padmanabh",
    description: "",
    coverGradient:
      "https://drive.google.com/thumbnail?id=1l4hs2cXaczrndrxc4lTaC48ydBsHwY8a&sz=w1000",
    pdfUrl:
      "https://drive.google.com/file/d/1l4hs2cXaczrndrxc4lTaC48ydBsHwY8a/preview",
  },
  {
    id: "9",
    title: "Berjalan Bersama",
    author: "Louwrisa Blaauw",
    description: "",
    coverGradient:
      "https://drive.google.com/thumbnail?id=1BUA6t-q3nXjv_s3VLljUx4WSImMAnHVe&sz=w1000",
    pdfUrl:
      "https://drive.google.com/file/d/1BUA6t-q3nXjv_s3VLljUx4WSImMAnHVe/preview",
  },
  {
    id: "10",
    title: "Bulan Dan Topi",
    author: "Angie & Upesh",
    description: "",
    coverGradient:
      "https://drive.google.com/thumbnail?id=11pFRt5XX_WYA8-6vC8hzMmK7SVnEW05_&sz=w1000",
    pdfUrl:
      "https://drive.google.com/file/d/11pFRt5XX_WYA8-6vC8hzMmK7SVnEW05_/preview",
  },
  {
    id: "11",
    title: "Cerita Pohon",
    author: "Ketan Raut",
    description: "",
    coverGradient:
      "https://drive.google.com/thumbnail?id=190bTzUZcXOx7X4bJreDR8BJ563RpqN6z&sz=w1000",
    pdfUrl:
      "https://drive.google.com/file/d/190bTzUZcXOx7X4bJreDR8BJ563RpqN6z/preview",
  },
];

const ITEMS_PER_PAGE = 10;

function VerticalBookCard({
  book,
  onRead,
}: {
  book: Book;
  onRead: (b: Book) => void;
}) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="group bg-white rounded-2xl p-4 shadow-sm border border-slate-100 flex flex-col sm:flex-row gap-6 hover:shadow-md transition-all duration-300"
    >
      {/* Cover */}
      <div className="relative w-full sm:w-32 h-48 sm:h-auto sm:min-h-[12rem] rounded-xl overflow-hidden shadow-inner shrink-0 bg-slate-100">
        <Image
          src={book.coverGradient}
          alt={book.title}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col justify-center">
        <h3 className="text-xl font-bold text-slate-800 mb-1 group-hover:text-primary transition-colors">
          {book.title}
        </h3>

        <p className="text-sm font-medium text-slate-500 mb-3">{book.author}</p>

        <p className="text-sm text-slate-600 line-clamp-2 mb-4">
          {book.description}
        </p>

        <div className="flex items-center gap-4">
          <button
            onClick={() => onRead(book)}
            className="px-5 py-2.5 rounded-lg bg-slate-900 text-white text-sm font-semibold hover:bg-primary hover:text-white transition-colors flex items-center gap-2"
          >
            <MdOutlineVisibility className="text-2xl" />
            Baca Online
          </button>

          <button className="p-2.5 rounded-lg border border-slate-200 text-slate-500 hover:bg-slate-50 transition-colors">
            <FaRegBookmark className="text-xl" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

function PaginationControls({
  currentPage,
  totalPages,
  onPageChange,
}: {
  currentPage: number;
  totalPages: number;
  onPageChange: (p: number) => void;
}) {
  return (
    <div className="flex items-center justify-center gap-2 mt-12 mb-8">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="p-2 rounded-lg border border-slate-200 text-slate-600 disabled:opacity-50 hover:bg-blue-500 hover:text-white transition-colors"
      >
        <IoChevronBack className="text-xl" />
      </button>

      {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
        <button
          key={p}
          onClick={() => onPageChange(p)}
          className={`w-10 h-10 rounded-lg text-sm font-bold transition-all ${
            currentPage === p
              ? "bg-blue-500 text-white shadow-lg"
              : "bg-white text-slate-600 hover:bg-slate-50 border border-transparent hover:border-blue-500"
          }`}
        >
          {p}
        </button>
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="p-2 rounded-lg border border-slate-200 text-slate-600 disabled:opacity-50 hover:bg-blue-500 hover:text-white transition-colors"
      >
        <IoChevronForward className="text-xl" />
      </button>
    </div>
  );
}

function BookModal({
  book,
  onClose,
}: {
  book: Book | null;
  onClose: () => void;
}) {
  if (!book) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="relative w-full max-w-5xl h-[85vh] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col"
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-white">
          <div>
            <h2 className="text-lg font-bold text-slate-800 line-clamp-1">
              {book.title}
            </h2>
            <p className="text-xs text-slate-500">{book.author}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-slate-500 hover:bg-slate-100 transition-colors hover:text-black"
          >
            <MdClose className="text-2xl" />
          </button>
        </div>

        <div className="flex-1 bg-slate-100 relative">
          <iframe
            src={book.pdfUrl}
            className="w-full h-full border-0"
            allow="autoplay"
            title={book.title}
          />
        </div>
      </motion.div>
    </div>
  );
}

export default function BukuAnakPage() {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  const totalPages = Math.ceil(BOOKS.length / ITEMS_PER_PAGE);
  const currentBooks = BOOKS.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 font-sans">
      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="flex items-center gap-4 mb-10">
          <button
            onClick={() => router.push("/DigiBook")}
            className="p-3 rounded-full hover:bg-white transition-colors group"
          >
            <IoArrowBack className="text-3xl text-slate-500 group-hover:text-slate-800" />
          </button>
          <div>
            <div className="flex items-center gap-3 mb-1">
              <div className="p-2 rounded-lg bg-pink-100">
                <MdChildCare className="text-pink-600 text-2xl" />
              </div>
              <span className="text-sm font-bold text-pink-600 tracking-wider">
                KATEGORI
              </span>
            </div>
            <h1 className="text-3xl font-extrabold text-slate-900">
              Buku Anak
            </h1>
          </div>
        </div>

        {/* Book List */}
        <div className="space-y-4 min-h-[600px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              {currentBooks.map((book) => (
                <VerticalBookCard
                  key={book.id}
                  book={book}
                  onRead={setSelectedBook}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Pagination */}
        <PaginationControls
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />

        {/* Modal */}
        <AnimatePresence>
          {selectedBook && (
            <BookModal
              book={selectedBook}
              onClose={() => setSelectedBook(null)}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
