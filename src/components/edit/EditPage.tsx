import Header from "../dashboard/Header"
import SideBar from "../dashboard/SideBar"

import { Card } from "../ui/card"
import { Label } from "../ui/label.js"

import { Input } from "../ui/input"



const EditPage = () => {
  return (
    <div className="flex min-h-screen w-full flex-col bg-primary-foreground dark">
      <SideBar />
      <div  className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <Header />
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
          
            <Card x-chunk="dashboard-06-chunk-0">
              <div className="px-20 py-10">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  type="name"
                  placeholder="m@example.com"
                />  
                        
              </div>
            </Card>
          
        </main>
      </div>     
    </div>
  )
}
export default EditPage