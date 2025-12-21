import { motion } from "framer-motion";
import { MdClose } from "react-icons/md";
import { Book } from "../card/VerticalBookCard";

type Props = {
  book: Book | null;
  onClose: () => void;
};

export default function BookModal({ book, onClose }: Props) {
  if (!book) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="relative w-full max-w-5xl h-[85vh] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
          <div>
            <h2 className="text-lg font-bold text-slate-800 line-clamp-1">
              {book.title}
            </h2>
            <p className="text-xs text-slate-500">{book.author}</p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full text-slate-500 hover:bg-slate-100"
          >
            <MdClose className="text-2xl" />
          </button>
        </div>

        {/* PDF */}
        <div className="flex-1 bg-slate-100">
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
