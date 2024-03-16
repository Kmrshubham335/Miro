"use client"
import Image from "next/image"
import {Poppins} from "next/font/google"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { OrganizationSwitcher } from "@clerk/nextjs"
import { LayoutDashboard, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useSearchParams } from "next/navigation"
const font = Poppins ({
    subsets: ["latin"],
    weight:["600"]
})

export const OrgSideBar = () => { 
    const searchParams= useSearchParams()
    const favorites = searchParams.get("favorites")

    return (
        <div className="hidden lg:flex flex-col space-y-6 w-[206px] pl-5 pt-5  " >
            <Link href="/" >
                <div className="flex item-center gap-x-2" >
                    <Image
                    src="/logo.svg"
                    alt="Logo"
                    width={100}
                    height={100}
                    />
                    <span className={cn(
                        "font-semiBold text-2xl",
                        font.className
                    )} >
                        Miro 
                    </span>
                </div>
            </Link>
            <OrganizationSwitcher
                hidePersonal
                appearance={{
                    elements :{
                       rootBox:{
                        display:"flex",
                        justifyContent:"center",
                        alignItems:"center",
                        width:"100%",
                       },
                       OrganizationSwitcherTrigger: {
                        padding:"6px",
                        width:"100%",
                        borderRadius:"8px",
                        border:"1px solid #E5E7EB",
                        justifyContent:"space-between",
                        backgroundColor:"white",
                       }
                    }
                }}
            />
            <div className="space-y-1 w-full " >
                <Button
                variant={favorites ? "ghost" : "secondary"}
                asChild
                size="lg"
                className ="font-normal justify-start w-full px-2"
                >
                    <Link href="/" >
                        <LayoutDashboard className="h-4 w-4 mr-2" />
                        Team Boards
                    </Link>
                </Button>
                <Button
                variant={favorites ? "secondary" : "ghost"}
                asChild
                size="lg"
                className ="font-normal justify-start w-full px-2"
                >
                    <Link href={{
                        pathname:"/",
                        query: {favorites: "true"}
                    }} >
                        <Star className="h-4 w-4 mr-2" />
                        Favorite Board
                    </Link>
                </Button>
            </div>
        </div>
    )
}