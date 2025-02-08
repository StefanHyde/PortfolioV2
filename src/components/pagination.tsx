'use client';
import { HiArrowSmLeft } from 'react-icons/hi';
import { HiArrowSmRight } from 'react-icons/hi';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  return (
    <div className="mt-12 flex items-center justify-center gap-2">
      <button
        onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="hover:bg-dark-50 rounded-sm p-2 disabled:cursor-not-allowed disabled:opacity-50 dark:hover:bg-slate-800"
        aria-label="Previous page"
      >
        <HiArrowSmLeft className="h-5 w-5" />
      </button>

      {[...Array(totalPages)].map((_, index) => {
        const pageNumber = index + 1;
        return (
          <button
            key={pageNumber}
            onClick={() => onPageChange(pageNumber)}
            className={`rounded-lg px-4 py-2 ${
              currentPage === pageNumber
                ? 'bg-primary-600 dark:bg-primary-800 text-white'
                : 'hover:bg-dark-50 dark:hover:bg-slate-800'
            }`}
          >
            {pageNumber}
          </button>
        );
      })}

      <button
        onClick={() =>
          currentPage < totalPages && onPageChange(currentPage + 1)
        }
        disabled={currentPage === totalPages}
        className="hover:bg-dark-50 rounded-lg p-2 disabled:cursor-not-allowed disabled:opacity-50 dark:hover:bg-slate-800"
        aria-label="Next page"
      >
        <HiArrowSmRight className="h-5 w-5" />
      </button>
    </div>
  );
}
