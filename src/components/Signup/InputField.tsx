import { Input } from "../ui/input"
import { Label } from "../ui/label"

interface Props {
  first: string
  second: string
  third: string
}

const InputField = ({ first, second, third }: Props) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="grid gap-2">
        <Label htmlFor="first-name">{first}</Label>
        <Input id="first-name" placeholder="" required />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="last-name">{second}</Label>
        <Input id="last-name" placeholder="" required />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="last-name">{third}</Label>
        <Input id="last-name" placeholder="" required />
      </div>
    </div>
  )
}
export default InputField