import SideBar from "./dashboard/SideBar";
import Header from "./dashboard/Header/Header";
import { SignupForm } from "./SignupForm";

export function NewUser() {

  return (
    <div className="flex min-h-screen w-full flex-col bg-primary-foreground dark">
      <SideBar />
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <Header />
        <main className="grid flex-1 items-start gap-4 sm:px-6 sm:py-0 md:gap-8">
          <SignupForm />
        </main>
      </div>
    </div>
  );
}

