import { Link } from "react-router-dom"
import userImg from "../../../assets/1.png"
import Image from "../../ui/Image"
import {
  Home,
  LineChart,
  PanelLeft,
  Search,
  Users2,
} from "lucide-react"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbSeparatorLeft,
} from "../../ui/breadcrumb"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../ui/dropdown-menu"

import { Input } from "../../ui/input"
import { Button } from "../../ui/button"
import { Sheet, SheetContent, SheetTrigger } from "../../ui/sheet"
import { useState, MouseEvent } from "react"

interface Props {
  handleSearch?: (value: string) => void
  text: string
}

const Header = ({ handleSearch, text }: Props) => {

  const [ searchInput, setSearchInput ] = useState("");

  function handleChange(event: MouseEvent) {
    const { value } = event.target;
    setSearchInput(value);
    handleSearch(value);
  }

  return (
    <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" variant="outline" className="sm:hidden">
            <PanelLeft className="h-5 w-5" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="sm:max-w-xs">
          <nav className="grid gap-6 text-lg font-medium">
            <Link
              to="#"
              className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
            >
              <Home className="h-5 w-5" />
              Dashboard
            </Link>
            <Link
              to="#"
              className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
            >
              <Users2 className="h-5 w-5" />
              Users
            </Link>
            <Link
              to="#"
              className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
            >
              <LineChart className="h-5 w-5" />
              Settings
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
      <Breadcrumb className="hidden md:flex">
        {
          text === "Dashboard" || text === "Users"
          ? (
            <BreadcrumbList>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{text}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          ) : (
            <Link to="/users">
              <BreadcrumbList>
                <BreadcrumbSeparatorLeft />
                <BreadcrumbItem>
                  <BreadcrumbPage>{text}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Link>
          )
        }
      </Breadcrumb>
      <div className="relative ml-auto flex-1 md:grow-0">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search..."
          className="w-full text-white rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
          onChange={() => handleChange(event)}
          value={searchInput}
        />
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="overflow-hidden rounded-full"
          >
            <Image
              src={userImg}
              width={36}
              height={36}
              alt="Avatar"
              className="overflow-hidden rounded-full"
            />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Settings</DropdownMenuItem>
          <DropdownMenuItem>Support</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Logout</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  )
}
export default Header