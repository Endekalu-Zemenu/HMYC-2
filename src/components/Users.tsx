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
import SideBar from "./Users_Page/SideBar.js";
import Header from "./Users_Page/Header/Header.js";
import UserList from "./Users_Page/UserList.js";

import people from "./Users_Page/people.js";
import TableHeaderItems from "./Users_Page/TableHeaderItems.js";
import TableFooterItems from "./Users_Page/TableFooterItems.js";
import { useCallback, useEffect, useState } from "react";
import { PaginationBar } from "./Users_Page/PaginationBar.js";
import { Link } from "react-router-dom";

type People = {
  name: string; // Name of the person
  id: number; // Unique identifier
  badge: string; // Status badge (active, inactive, deceased)
  age: number; // Age of the person
  date: string; // Date associated with the person
}

export function Users() {
  const [ statusBadge, setStatusBadge ] = useState("all"); // State for filtering status badge
  const [ userInfo, setUserInfo ] = useState<People[]>([]); // State for user information
  const [ currentPage, setCurrentPage ] = useState(1); // State for current page number
  const [ userListPerPage ] = useState(10); // State for users per page

  // Function to handle status badge change
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

  // Get current user list based on pagination
  const indexOfLastUser = currentPage * userListPerPage;
  const indexFirstUser = indexOfLastUser - userListPerPage;
  const currentUser = userInfo.slice(indexFirstUser, indexOfLastUser);

  // Function to handle pagination click
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  // Function to handle status badge click
  function handleClick(status: string) {
    setStatusBadge(status);
    handleStatusBadge();
  }

  function handleSearch(value: string) {
    // console.log(value);
    const result = people.filter(person => person.name.includes(value));
    setUserInfo(result);
  }

  useEffect(() => {
    handleStatusBadge();
  }, [statusBadge, handleStatusBadge]);

  return (
    <div className="flex min-h-screen w-full flex-col bg-primary-foreground dark">
      <SideBar />
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <Header handleSearch={handleSearch} text="Users"/>
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
          <Tabs>
            {/* Tabs for different status badges */}
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
              {/* Dropdown menu for additional actions */}
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
                    <DropdownMenuCheckboxItem>
                      All
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>
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
                {/* Button to import */}
                <Button size="sm" variant="outline" className="h-8 gap-1">
                  <File className="h-3.5 w-3.5 text-popover-foreground" />
                  <span className="sr-only sm:not-sr-only sm:whitespace-nowrap text-popover-foreground">
                    Import
                  </span>
                </Button>
                {/* Button to add new user */}
                <Button size="sm" className="h-8 gap-1">
                  <PlusCircle className="h-3.5 w-3.5" />
                  <Link to="/new">
                    <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                      Add New User
                    </span>
                  </Link>
                </Button>
              </div>
            </div>
            {/* Content for each tab based on status badge */}
            <TabsContent value={statusBadge}>
              <Card x-chunk="dashboard-06-chunk-0">
                <CardContent>
                  <Table>
                    <TableHeaderItems />
                    <TableBody>
                      {/* Render list of users */}
                      {
                        currentUser.map(
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
                {/* Pagination bar */}
                <PaginationBar paginate={paginate} userListPerPage={userListPerPage} totalUsers={userInfo.length} />
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  );
}

