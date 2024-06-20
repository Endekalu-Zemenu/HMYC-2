import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  // DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu"

import {
  // Tabs,
  // TabsContent,
  TabsList,
  TabsTrigger,
} from "../ui/tabs"

import {
  File,
  // Home,
  // LineChart,
  ListFilter,
  // MoreHorizontal,
  // Package,
  // Package2,
  // PanelLeft,
  PlusCircle,
  // Search,
  // Settings,
  // ShoppingCart,
  // Users2,
} from "lucide-react"

import { Button } from "../ui/button"
// import userImg from "../../assets/1.png"

const HeaderTabs = () => {
  return (
    <div className="flex items-center">
      <TabsList>
        <TabsTrigger value="all">All</TabsTrigger>
        <TabsTrigger value="active">Active</TabsTrigger>
        <TabsTrigger value="draft">Inactive</TabsTrigger>
        <TabsTrigger value="archived" className="hidden sm:flex">
          Deceased
        </TabsTrigger>
      </TabsList>
      <div className="ml-auto flex items-center gap-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild className="text-popover-foreground">
            <Button variant="outline" size="sm" className="h-8 gap-1">
              <ListFilter className="h-3.5 w-3.5" />
              <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                Filter
              </span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Filter by</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuCheckboxItem checked>
              Active
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem>Inactive</DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem>
              Deceased
            </DropdownMenuCheckboxItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Button size="sm" variant="outline" className="h-8 gap-1">
          <File className="h-3.5 w-3.5 text-popover-foreground" />
          <span className="sr-only sm:not-sr-only sm:whitespace-nowrap text-popover-foreground">
            Import
          </span>
        </Button>
        <Button size="sm" className="h-8 gap-1">
          <PlusCircle className="h-3.5 w-3.5" />
          <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
            Add New User
          </span>
        </Button>
      </div>
    </div>
  )
}
export default HeaderTabs