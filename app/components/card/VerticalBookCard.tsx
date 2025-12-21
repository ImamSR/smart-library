import Image from "next/image";
import { motion } from "framer-motion";
import { MdOutlineVisibility } from "react-icons/md";
import { FaRegBookmark } from "react-icons/fa6";

export type Book = {
  id: string;
  title: string;
  author: string;
  description: string;
  coverGradient: string;
  pdfUrl: string;
};

type Props = {
  book: Book;
  onRead: (book: Book) => void;
};

export default function VerticalBookCard({ book, onRead }: Props) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="group bg-white rounded-2xl p-4 shadow-sm border border-slate-100 flex flex-col sm:flex-row gap-6 hover:shadow-md transition-all duration-300"
    >
      {/* Cover */}
      <div className="relative w-full sm:w-32 h-48 sm:h-auto sm:min-h-48 rounded-xl overflow-hidden shadow-inner bg-slate-100 shrink-0">
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
            className="px-5 py-2.5 rounded-lg bg-slate-900 text-white text-sm font-semibold hover:bg-primary transition-colors flex items-center gap-2"
          >
            <MdOutlineVisibility className="text-xl" />
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
