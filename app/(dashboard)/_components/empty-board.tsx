import { Button } from '@/components/ui/button'
import Image from 'next/image'
export const EmptyBoard = ()=>{
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
                <Button size='lg' >
                    Create Board
                </Button>
            </div>

        </div>
    )
}