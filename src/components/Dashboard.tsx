import SideBar from "./Users_Page/SideBar.js";
import Header from "./Users_Page/Header/Header.js";
import CardItems from "./Dashboard_Page/CardItems.js";
import RecentUsers from "./Dashboard_Page/RecentUsers.js";
import MiniSideBar from "./Dashboard_Page/MiniSideBar.js";
import people from "./Users_Page/people"

export function Dashboard() {

  const totalMembers = people.length;
  const totalActiveMembers = (people.filter(person => person.badge === "active")).length;
  const totalInactiveMembers = (people.filter(person => person.badge === "inactive")).length;
  const totalDeceasedMembers = (people.filter(person => person.badge === "deceased")).length;

  return (
    <div className="flex min-h-screen w-full flex-col bg-primary-foreground dark">
      <SideBar />
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <Header text="Dashboard"/>
        <div className="flex min-h-screen w-full flex-col"> 
      <main className="flex flex-1 flex-col gap-4 md:gap-8 md:px-8 md:py-2">
        <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
          <CardItems
            title="Total Member"
            total={totalMembers}
            stat="Lorem ipsum dolor sit amet." 
          />
          <CardItems
            title="Active Members"
            total={totalActiveMembers}
            stat="Lorem ipsum dolor sit amet." 
          />
          <CardItems
            title="Inactive Members"
            total={totalInactiveMembers}
            stat="Lorem ipsum dolor sit amet." 
          />
          <CardItems
            title="Deceased Members"
            total={totalDeceasedMembers}
            stat="Lorem ipsum dolor sit amet." 
          />
        </div>
        <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
          <RecentUsers />
          <MiniSideBar />
        </div>
      </main>
    </div>
      </div>
    </div>
  );
}








