import { Link } from "react-router-dom"

import { Button } from "./ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card"
import { Input } from "./ui/input"
import { Label } from "./ui/label"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select"

import { RadioGroup, RadioGroupItem } from "./ui/radio-group"
import { DatePicker } from "./Signup/DatePicker"
import InputField from "./Signup/InputField"

export function SignupForm() {
  return (
    <div className="bg-primary min-h-screen h-full flex justify-center items-center">
      <Card className="mx-auto dark w-1/2">
        <CardHeader>
          <CardTitle className="text-xl">HMYC</CardTitle>
          <CardDescription>
            Enter your information to create an account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <InputField
              first="ስም"
              second="የአባት ስም"
              third="የአያት ስም" 
            />
            <div className="grid grid-cols-3 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="first-name">እድሜ</Label>
                <Input id="first-name" placeholder="" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="last-name">የቤተሰብ ብዛት</Label>
                <Input id="last-name" placeholder="" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="last-name">ጾታ</Label>
                <Select defaultValue="Male">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="" />
                  </SelectTrigger>
                  <SelectContent className="text-white opacity-100">
                    <SelectGroup>
                      <SelectItem value="male">ወንድ</SelectItem>
                      <SelectItem value="female">ሴት</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <InputField
              first="የትምህርት ደረጃ"
              second="የመኖሪያ አድራሻ"
              third="ስልክ ቁጥር" 
            />
            <div className="flex justify-between my-4 mx-2">
              <div>
                <Label className="font-semibold">ጋብቻ</Label>
                <RadioGroup defaultValue="Married" className="mt-2">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="comfortable" id="r2" />
                    <Label htmlFor="r2">ያገባ</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="single" id="r3" />
                    <Label htmlFor="r3">ያላገባ</Label>
                  </div>
                </RadioGroup>
              </div>
              <div>
                <Label className="font-semibold">አባልነት</Label>
                <RadioGroup defaultValue="Married" className="mt-2">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="comfortable" id="r2" />
                    <Label htmlFor="r2">ቆራቢ</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="single" id="r3" />
                    <Label htmlFor="r3">ያልሆነ</Label>
                  </div>
                </RadioGroup>
              </div>
              <div>
                <Label className="font-semibold">ስራ</Label>
                <RadioGroup defaultValue="Married" className="mt-2">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="comfortable" id="r2" />
                    <Label htmlFor="r2">የግል</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="single" id="r3" />
                    <Label htmlFor="r3">የመንግስት</Label>
                  </div>
                </RadioGroup>
              </div>
              <div>
                <Label className="font-semibold">ጥምቅት</Label>
                <RadioGroup defaultValue="Married" className="mt-2">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="comfortable" id="r2" />
                    <Label htmlFor="r2">የተጠመቀ</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="single" id="r3" />
                    <Label htmlFor="r3">ያልትጠመቀ</Label>
                  </div>
                </RadioGroup>
              </div>
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
