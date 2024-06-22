import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

import { TabsList, TabsTrigger } from "./ui/tabs";

import { File, ListFilter, PlusCircle } from "lucide-react";

import { Button } from "./ui/button";

import { Card, CardContent } from "./ui/card";

import { Table, TableBody } from "./ui/table";

import { Tabs, TabsContent } from "./ui/tabs";
import SideBar from "./dashboard/SideBar";
import Header from "./dashboard/Header";
// import HeaderTabs from "./dashboard/HeaderTabs"
import UserList from "./dashboard/UserList";

import people from "./dashboard/people.js";
import TableHeaderItems from "./dashboard/TableHeaderItems.js";
import TableFooterItems from "./dashboard/TableFooterItems.js";
import { useCallback, useEffect, useState } from "react";

type People = {
  name: string
  id: number
  badge: string
  age: number
  date: string
}

export function Dashboard() {
  const [statusBadge, setStatusBadge] = useState("all");
  const [ userInfo, setUserInfo ] = useState<People[]>([]);

  const handleStatusBadge = useCallback(() => { 
    if(statusBadge === "all") {
      setUserInfo(people);
    } else if (statusBadge === "active") {
      const result = people.filter(person => person.badge === "active")
      setUserInfo(result)
    } else if(statusBadge === "inactive") {
      const result = people.filter(person => person.badge === "inactive");
      setUserInfo(result)
    } else if(statusBadge === "deceased") {
      const result = people.filter(person => person.badge === "deceased");
      setUserInfo(result)
    }
  }, [statusBadge]);

  function handleClick(status: string) {
    setStatusBadge(status);
    handleStatusBadge();
  }

  useEffect(() => {
    handleStatusBadge()
  }, [statusBadge, handleStatusBadge])

  return (
    <div className="flex min-h-screen w-full flex-col bg-primary-foreground dark">
      <SideBar />
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <Header />
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
          <Tabs>
            <div className="flex items-center">
              <TabsList defaultValue={statusBadge}>
                <TabsTrigger value="all" onClick={() => handleClick("all")}>
                  All
                </TabsTrigger>
                <TabsTrigger
                  value="active"
                  onClick={() => handleClick("active")}
                >
                  Active
                </TabsTrigger>
                <TabsTrigger
                  value="inactive"
                  onClick={() => handleClick("inactive")}
                >
                  Inactive
                </TabsTrigger>
                <TabsTrigger
                  value="deceased"
                  className="hidden sm:flex"
                  onClick={() => handleClick("deceased")}
                >
                  Deceased
                </TabsTrigger>
              </TabsList>
              <div className="ml-auto flex items-center gap-2">
                <DropdownMenu>
                  <DropdownMenuTrigger
                    asChild
                    className="text-popover-foreground"
                  >
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
                    <DropdownMenuCheckboxItem>
                      Inactive
                    </DropdownMenuCheckboxItem>
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
            {/* <HeaderTabs /> */}
            <TabsContent value={statusBadge}>
              <Card x-chunk="dashboard-06-chunk-0">
                <CardContent>
                  <Table>
                    <TableHeaderItems />
                    <TableBody>
                      {
                        userInfo.map(
                          (
                            user: {
                              name: string,
                              age: number,
                              id: number,
                              badge: string
                            },
                            index: number
                          ) => (
                            <UserList
                              key={index}
                              name={user.name}
                              age={user.age}
                              id={user.id}
                              badge={user.badge}
                            />
                          )
                        )
                      }
                    </TableBody>
                  </Table>
                </CardContent>
                <TableFooterItems />
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  );
}
