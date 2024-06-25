import {
  CardFooter,
} from "../ui/card"

const TableFooterItems = () => {
  return (
    <CardFooter>
      <div className="text-xs text-muted-foreground">
        Showing <strong>1-10</strong> of <strong>32</strong>{" "}
        users
      </div>
    </CardFooter>
  )
}
export default TableFooterItems