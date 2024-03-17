import Image from 'next/image'
export const EmptySearch = ()=>{
    return (
        <div className='flex flex-col items-center justify-center h-full '>
            <Image
            src="/empty-search.svg"
            height={140}
            width={140}
            alt="Empty"
            />
            <h2 className='text-2xl font-semibold mt-6 ' > 
                No result Found
            </h2>
            <p className='text-muted-foreground text-sm  mt-2 ' >
                Try searching something else
            </p>
        </div>
    )
}