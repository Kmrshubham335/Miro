"use client"
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { useMutation } from 'convex/react'
import {api} from '@/convex/_generated/api'
import { useOrganization } from '@clerk/nextjs'
import { useApiMutation } from '@/hooks/use-api-mutation'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'
export const EmptyBoard = ()=>{
    const router = useRouter()
    const {organization} = useOrganization()
    const {mutate,pending} = useApiMutation(api.board.create)
    const onclick =()=>{
        
        if(!organization) return
        mutate ({
            orgId:organization.id,
            title:"Untitled"
        })
        .then((id)=>{
            toast.success("Board created")
            router.push(`/board/${id}`)
            

        })
        .catch (()=>toast.error("Failed to create the Board"))
    }
    return (
        <div className='flex flex-col items-center justify-center h-full '>
            <Image
            src="/note.svg"
            height={140}
            width={140}
            alt="Empty"
            />
            <h2 className='text-2xl font-semibold mt-6 ' > 
                No Boards Found
            </h2>
            <p className='text-muted-foreground text-sm  mt-2 ' >
                Try to Create the Board
            </p>
            <div className='mt-6' >
                <Button disabled={pending}  onClick={onclick} size='lg' >
                    Create Board
                </Button>
            </div>

        </div>
    )
}