import { IoChevronBack, IoChevronForward } from "react-icons/io5";

type Props = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

export default function PaginationControls({
  currentPage,
  totalPages,
  onPageChange,
}: Props) {
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
