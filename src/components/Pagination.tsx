interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  if (typeof currentPage !== 'number' || typeof totalPages !== 'number') {
    return <div>Error: Invalid pagination data.</div>;
  }

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  return (
    <div className="flex justify-center items-center mt-6 space-x-2">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-600 disabled:bg-gray-300 disabled:text-gray-500 transition"
      >
        Previous
      </button>
      <span className="text-lg font-medium">
        Page {currentPage} of {totalPages}
      </span>
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-600 disabled:bg-gray-300 disabled:text-gray-500 transition"
      >
        Next
      </button>
    </div>
  );
};
export default Pagination;

