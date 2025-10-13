import { useState } from "react";

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
    className?: string;
}

export default function Pagination({
    currentPage,
    totalPages,
    onPageChange,
    className = "",
}: PaginationProps) {
    const handlePrevious = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    };

    const handleNext = () => {
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
        }
    };

    const handlePageClick = (page: number) => {
        onPageChange(page);
    };

    const renderPageNumbers = () => {
        const pages = [];
        const maxVisiblePages = 5;

        let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
        let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

        if (endPage - startPage + 1 < maxVisiblePages) {
            startPage = Math.max(1, endPage - maxVisiblePages + 1);
        }

        for (let i = startPage; i <= endPage; i++) {
            pages.push(
                <button
                    key={i}
                    className={`pagination__page ${currentPage === i ? "pagination__page--active" : ""}`}
                    onClick={() => handlePageClick(i)}>
                    {i}
                </button>
            );
        }

        return pages;
    };

    return (
        <div className={`pagination ${className}`}>
            <button
                className='pagination__nav pagination__nav--prev'
                onClick={handlePrevious}
                disabled={currentPage === 1}>
                <i className='ph ph-arrow-left'></i>
            </button>

            <div className='pagination__pages'>{renderPageNumbers()}</div>

            <button
                className='pagination__nav pagination__nav--next'
                onClick={handleNext}
                disabled={currentPage === totalPages}>
                <i className='ph ph-arrow-right'></i>
            </button>
        </div>
    );
}
