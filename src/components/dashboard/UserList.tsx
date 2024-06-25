import userImg from "../../assets/1.png"
import Image from "../ui/Image"
// import { Link } from "react-router-dom"
// import { Routes, Route } from "react-router-dom"
// import EditPage from "../edit/EditPage"

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
import { Link } from "react-router-dom"

type person = {
  name: string
  id: number
  badge:  string
  age: number
}

const UserList = ({ name, id, badge, age }: person) => {
  return (
    <TableRow className="hover:bg-muted/50">
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
        { name }
      </TableCell>
      <TableCell className="hidden md:table-cell">
        { id }
      </TableCell>
      <TableCell>
        <Badge variant="outline">{ badge }</Badge>
      </TableCell>
      <TableCell className="hidden md:table-cell">
        { age }
      </TableCell>
      <TableCell className="hidden md:table-cell">
        2023-07-12
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
            <DropdownMenuItem><Link to="/edit">Edit</Link></DropdownMenuItem>
            <DropdownMenuItem>Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </TableCell>
    </TableRow>
  )
}
export default UserList