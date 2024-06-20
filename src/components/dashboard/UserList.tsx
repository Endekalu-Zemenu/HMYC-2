import userImg from "../../assets/1.png"
import Image from "../ui/Image"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu"

import { TableCell, TableRow } from "../ui/table"
import { MoreHorizontal } from "lucide-react"
import { Badge } from "../ui/badge"
import { Button } from "../ui/button"


const UserList = () => {
  return (
    <TableRow>
      <TableCell className="hidden sm:table-cell">
        <Image
          alt="Product image"
          className="aspect-square rounded-full object-cover"
          height="12"
          src={userImg}
          width="50"
        />
      </TableCell>
      <TableCell className="font-medium">
        Abebe Lakew Befkadu
      </TableCell>
      <TableCell className="hidden md:table-cell">
        1
      </TableCell>
      <TableCell>
        <Badge variant="outline">Inactive</Badge>
      </TableCell>
      <TableCell className="hidden md:table-cell">
        25
      </TableCell>
      <TableCell className="hidden md:table-cell">
        2023-07-12 &nbsp; (10:42 AM)
      </TableCell>
      <TableCell>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              aria-haspopup="true"
              size="icon"
              variant="ghost"
            >
              <MoreHorizontal className="h-4 w-4" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem>Edit</DropdownMenuItem>
            <DropdownMenuItem>Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </TableCell>
    </TableRow>
  )
}
export default UserList