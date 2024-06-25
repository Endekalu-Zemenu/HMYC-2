import { 
  Card, 
  CardContent,
  CardHeader,
  CardTitle,
} from "../ui/card";

import { Users } from "lucide-react"

type Props = {
  title: string
  total: number
  stat: string
}

const CardItems = ({ title, total, stat }: Props) => {
  return (
    <Card x-chunk="dashboard-01-chunk-0">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">
          {title}
        </CardTitle>
        <Users className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{total}</div>
        <p className="text-xs text-muted-foreground">
          {stat}
        </p>
      </CardContent>
    </Card>
  )
}
export default CardItems