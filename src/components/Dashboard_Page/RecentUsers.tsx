import { Link } from "react-router-dom";

import { Button } from "../ui/button";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

import { ArrowUpRight } from "lucide-react";

import people from "../Users_Page/people";
import { useEffect, useState } from "react";

type People = {
  name: string; // Name of the person
  id: number; // Unique identifier
  badge: string; // Status badge (active, inactive, deceased)
  age: number; // Age of the person
  date: string; // Date associated with the person
}

const RecentUsers = () => {

  const [ newUsers, setNewUsers ] = useState<People[]>([]);

  const lastUser = people[people.length - 1];

  function recentUsers() {
    const result = people.filter(user => ((user.id <= lastUser.id) && (user.id > (lastUser.id - 5))));
    setNewUsers(result.reverse());
    console.log(newUsers);
  }

  useEffect(() => {
    recentUsers();
  }, []);

  return (
    <Card className="xl:col-span-2" x-chunk="dashboard-01-chunk-4">
      <CardHeader className="flex flex-row items-center">
        <div className="grid gap-2">
          <CardTitle>Recently Joined Members</CardTitle>
          <CardDescription>
            Recently joined users from users list.
          </CardDescription>
        </div>
        <Button asChild size="sm" className="ml-auto gap-1">
          <Link to="/users">
            View All
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </Button>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Members</TableHead>
              <TableHead className="text-right">Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {
              newUsers.map((user, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <div className="font-medium">{user.name}</div>
                    <div className="hidden text-sm text-muted-foreground md:inline">
                      age: {user.age}
                    </div>
                  </TableCell>
                  <TableCell className="text-right">{user.date}</TableCell>
                </TableRow>
              ))
            }
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};
export default RecentUsers;
