import {
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table"

const TableHeaderItems = () => {
  return (
    <TableHeader>
      <TableRow>
        <TableHead className="hidden w-[100px] sm:table-cell">
          <span className="sr-only">Image</span>
        </TableHead>
        <TableHead>Name</TableHead>
        <TableHead className="hidden md:table-cell">
          ID
        </TableHead>
        <TableHead>Status</TableHead>
        <TableHead className="hidden md:table-cell">
          Age
        </TableHead>
        <TableHead className="hidden md:table-cell">
          Registered at
        </TableHead>
        <TableHead>
          <span className="sr-only">Actions</span>
        </TableHead>
      </TableRow>
    </TableHeader>
  )
}
export default TableHeaderItems