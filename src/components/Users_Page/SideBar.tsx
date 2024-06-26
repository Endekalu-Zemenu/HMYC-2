import { Link } from "react-router-dom"
import { 
  Users2, 
  Settings, 
  Home 
} from "lucide-react"

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "../ui/tooltip"

import { useState } from "react"

type currentTab = {
  dashboard: string
  users: string
}

const SideBar = () => {

  const [ currentTab, setCurrentTab ] = useState<currentTab>({ 
    dashboard: "text-muted-foreground", 
    users: "bg-primary text-primary-foreground" 
  });

  function handleCurrentTabDashboard() {
    setCurrentTab({
      dashboard: "bg-primary text-primary-foreground",
      users: "text-muted-foreground"
    }) 
  }

  function handleCurrentTabUsers() {
    setCurrentTab({
      dashboard: "text-muted-foreground",
      users: "bg-primary text-primary-foreground"
    })
  }

  return (
    <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
      <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                to="/dashboard"
                className=
                {`
                  group flex h-9 w-9 items-center justify-center 
                  rounded-full  transition-colors md:h-8 md:w-8
                  ${currentTab.dashboard}
                `}
                onClick={handleCurrentTabDashboard}
              >
                <Home className="group-hover:scale-110 h-5 w-5" />
                <span className="sr-only">Dashboard</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Dashboard</TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                to="/users"
                className=
                  {`
                    group rounded-full 
                    flex h-9 w-9 items-center justify-center  
                    transition-colors md:h-8 md:w-8
                    ${currentTab.users}
                  `}
                onClick={handleCurrentTabUsers}
              >
                <Users2 className="group-hover:scale-110 h-5 w-5" />
                <span className="sr-only">Users</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Users</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </nav>
      <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                to="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
              >
                <Settings className="h-5 w-5" />
                <span className="sr-only">Settings</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Settings</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </nav>
    </aside>
  )
}
export default SideBar