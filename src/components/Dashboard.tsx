// import userImg from "../assets/1.png"
// import Image from "./ui/Image"
// import { Link } from "react-router-dom"
// import {
//   // File,
//   // Home,
//   // LineChart,
//   // ListFilter,
//   MoreHorizontal,
//   // Package,
//   // Package2,
//   // PanelLeft,
//   // PlusCircle,
//   // Search,
//   // Settings,
//   // ShoppingCart,
//   // Users2,
// } from "lucide-react"

// import { Badge } from "./ui/badge"

// import { Button } from "./ui/button"
import {
  Card,
  CardContent,
  // CardDescription,
  CardFooter,
  // CardHeader,
  // CardTitle,
} from "./ui/card"
// import {
//   DropdownMenu,
//   // DropdownMenuCheckboxItem,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   // DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "./ui/dropdown-menu"

import {
  Table,
  TableBody,
  // TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table"
import {
  Tabs,
  TabsContent,
  // TabsList,
  // TabsTrigger,
} from "./ui/tabs"
import SideBar from "./dashboard/SideBar"
import Header from "./dashboard/Header"
import HeaderTabs from "./dashboard/HeaderTabs"
import UserList from "./dashboard/UserList"


export function Dashboard() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-primary-foreground dark">
      <SideBar />
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <Header />
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
          <Tabs defaultValue="all">
            <HeaderTabs />
            <TabsContent value="all">
              <Card x-chunk="dashboard-06-chunk-0">
                <CardContent>
                  <Table>
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
                    <TableBody>
                      <UserList />
                    </TableBody>
                  </Table>
                </CardContent>
                <CardFooter>
                  <div className="text-xs text-muted-foreground">
                    Showing <strong>1-10</strong> of <strong>32</strong>{" "}
                    users
                  </div>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}
