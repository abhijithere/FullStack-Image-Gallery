import { RedirectToSignIn, SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"
import { Button } from "../ui/button"
import { redirect } from "next/dist/server/api-utils"
import { useEffect } from "react"


const Header = () => {

  return (
    <header className=" ">
      <div className="border flex justify-between pl-10 pr-10 items-center h-20">
        <Link href="/" className=" flex justify-center items-center text-2xl">
          <img src='https://png.pngtree.com/png-vector/20190521/ourmid/pngtree-gallery-logo-icon-design-template-vector-png-image_1048742.jpg' className="h-16 w-16"/>
          Image Gallery
        </Link>

        <div className=" ">
          <SignedIn>
            <UserButton afterSignOutUrl="/sign-in" />
          </SignedIn>
        </div>
      </div>
    </header>
  )
}

export default Header