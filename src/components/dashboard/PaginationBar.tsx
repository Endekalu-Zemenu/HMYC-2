import { useState } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../ui/pagination";

interface Props {
  totalUsers: number; // Total number of users
  userListPerPage: number; // Number of users per page
  paginate: (number: number) => void; // Callback function to handle pagination
}

export function PaginationBar({ userListPerPage, totalUsers, paginate }: Props) {
  // State to manage active page and visible page range
  const [activePage, setActivePage] = useState<number | null>(null);
  const [pageRange, setPageRange] = useState({ start: 1, end: 5 });

  // Calculate total number of pages
  const totalPages = Math.ceil(totalUsers / userListPerPage);

  // Function to handle moving to the next page range
  function handleNext() {
    if (pageRange.end < totalPages) {
      setPageRange({
        start: pageRange.start + 5,
        end: Math.min(pageRange.end + 5, totalPages),
      });
    }
  }

  // Function to handle moving to the previous page range
  function handlePrevious() {
    if (pageRange.start > 1) {
      setPageRange({
        start: pageRange.start - 5,
        end: pageRange.start - 1,
      });
    }
  }

  // Array to store page numbers
  const pageNumbers = [];

  // Populate pageNumbers array with page numbers based on totalUsers and userListPerPage
  for (let i = 1; i <= Math.ceil(totalUsers / userListPerPage); i++) {
    pageNumbers.push(i);
  }

  // Function to handle clicking on a page number
  function handleClick(number: number) {
    setActivePage(number); // Set the active page
    paginate(number); // Trigger the pagination callback
  }

  // Render the pagination component
  return (
    <Pagination>
      <PaginationContent>
        {/* Previous button */}
        <PaginationItem>
          <PaginationPrevious onClick={handlePrevious} />
        </PaginationItem>

        {/* Page numbers */}
        {pageNumbers.slice(pageRange.start - 1, pageRange.end).map((number) => (
          <PaginationItem key={number}>
            <PaginationLink
              onClick={() => {
                handleClick(number);
              }}
              {...(activePage === number && { isActive: true })}
            >
              {number}
            </PaginationLink>
          </PaginationItem>
        ))}

        {/* Ellipsis */}
        
        {
          totalPages > 5
          && (
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
          )
        }

        {/* Next button */}
        <PaginationItem>
          <PaginationNext onClick={handleNext} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
