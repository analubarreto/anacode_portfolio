import { useState, useEffect } from 'react';
import { Project } from '@/types/Project';

export const usePagination = (itemsArray: Project[]) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, ] = useState(1);
  const [pages, setPages] = useState<Project[]>([]);

  const totalItems = itemsArray.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const disablePrev = currentPage === 1;

  const disableNext = currentPage === totalPages;

  useEffect(() => {
    if (itemsArray.length > 1) {
      setPages(itemsArray.slice(currentPage - 1, currentPage + itemsPerPage - 1));
    }
  }, [currentPage, itemsPerPage, itemsArray])

  return {
    pages,
    totalItems,
    totalPages,
    handlePrev,
    handleNext,
    disablePrev,
    disableNext,
  }
};