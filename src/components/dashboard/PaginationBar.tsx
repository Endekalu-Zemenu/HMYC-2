import { useState } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../ui/pagination"

interface Props {
  totalUsers: number
  userListPerPage: number
  paginate: (number: number) => void
}

export function PaginationBar({ userListPerPage, totalUsers, paginate }: Props) {

  const [ activePage, setActivePage ] = useState(null);
  const [pageRange, setPageRange] = useState({ start: 1, end: 5 });
  const totalPages = Math.ceil(totalUsers / userListPerPage);


  function handleNext() {
    if (pageRange.end < totalPages) {
      setPageRange({
        start: pageRange.start + 5,
        end: Math.min(pageRange.end + 5, totalPages),
      });
    }
  }
  
  function handlePrevious() {
    if (pageRange.start > 1) {
      setPageRange({
        start: pageRange.start - 5,
        end: pageRange.start - 1,
      });
    }
  }
  
  const pageNumbers = [];

  for(let i = 1; i <= Math.ceil(totalUsers / userListPerPage); i++) {
    pageNumbers.push(i);
  }

  function handleClick(number) {
    setActivePage(number);
    paginate(number); 
  }

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious onClick={handlePrevious}/>
        </PaginationItem>

        {
          pageNumbers.slice(pageRange.start - 1, pageRange.end).map((number) => (
            <PaginationItem key={number}>
              <PaginationLink
                onClick={() => { handleClick(number) }}
                {...(activePage === number && { isActive: true })}
              >
                {number}
              </PaginationLink>
            </PaginationItem>
          ))
        }

        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext onClick={handleNext}/>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}
