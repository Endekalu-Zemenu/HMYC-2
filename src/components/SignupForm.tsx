import { Link } from "react-router-dom"

import { Button } from "./ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card"

import { DatePicker } from "./Signup/DatePicker"
import InputField from "./Signup/InputField"
import RadioField from "./Signup/RadioField"
import SelectableField from "./Signup/SelectableField"

export function SignupForm() {
  return (
    <div className="dark bg-primary-foreground min-h-screen h-full flex justify-center items-center">
      <Card className="mx-auto dark">
        <CardHeader>
          <CardTitle className="text-xl">HMYC</CardTitle>
          <CardDescription>
            Enter your information to create an account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="grid grid-cols-3 gap-4">
              <InputField text="ስም"/>
              <InputField text="የአባት ስም"/>
              <InputField text="የአያት ስም"/>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <InputField text="እድሜ" />
              <InputField text="የቤተሰብ ብዛት" />
              <SelectableField
                label="ጾታ"
                option1="ወንድ"
                option2="ሴት" 
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              <InputField text="የትምህርት ደረጃ" />
              <InputField text="የመኖሪያ አድራሻ" />
              <InputField text="ስልክ ቁጥር" />
            </div>
            <div className="flex justify-between my-4 mx-2">
              <RadioField
                label="ጋብቻ"
                option1="ያገባ"
                option2="ያላገባ" 
              />
              <RadioField
                label="አባልነት"
                option1="ቆራቢ"
                option2="ያልሆነ" 
              />
              <RadioField
                label="ስራ"
                option1="የግል"
                option2="የመንግስት" 
              />
              <RadioField
                label="ጥምቀት"
                option1="የተጠመቀ"
                option2="ያልትጠመቀ" 
              />
            </div>
            <DatePicker />
            <Button type="submit" className="w-full">
              Create an account
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <Link to="/login" className="underline">
              Sign in
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
