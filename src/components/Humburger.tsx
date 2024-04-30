import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { AlignJustify } from "lucide-react"
import Link from "next/link"

export function Humburger() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className="px-2"><AlignJustify /> </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Crypto uncle</SheetTitle>
          <SheetDescription className="capitalize flex flex-col py-7 space-y-4">
        <Link href={"/"}>Home</Link>
        <Link href={"/posts"}>posts</Link>
        <Link href={"/archive"}>Archive</Link>
        <Link href={"/pages"}>Pages</Link>
        <Link href={"/about-us"}>About us</Link>
        <Link href={"/contact-us"}>contact us</Link>
          </SheetDescription>
        </SheetHeader>
      
        <SheetFooter>
          <SheetClose asChild>
            {/* <Button type="submit">Save changes</Button> */}
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
