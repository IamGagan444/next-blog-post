import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"



export function BlogCard() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
            
            </div>
            <div className="flex flex-col space-y-1.5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos tempora labore fugiat.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil dolorum nostrum accusamus?
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Archive</Button>
        <Button>View</Button>
      </CardFooter>
    </Card>
  )
}
