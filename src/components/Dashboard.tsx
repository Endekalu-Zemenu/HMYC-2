import {
  Card,
  CardContent
} from "./ui/card"

import {
  Table,
  TableBody
} from "./ui/table"

import {
  Tabs,
  TabsContent,
} from "./ui/tabs"
import SideBar from "./dashboard/SideBar"
import Header from "./dashboard/Header"
import HeaderTabs from "./dashboard/HeaderTabs"
import UserList from "./dashboard/UserList"

import people from "./dashboard/people.js"
import TableHeaderItems from "./dashboard/TableHeaderItems.js"
import TableFooterItems from "./dashboard/TableFooterItems.js"

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
                    <TableHeaderItems />
                    <TableBody>
                      {
                        people.map((person: {name: string, age: number, id: number, badge: string}, index: number) => (
                          <UserList
                            key={index}
                            name={person.name}
                            age={person.age}
                            id={person.id}
                            badge={person.badge}
                          />
                        ))
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
  )
}
