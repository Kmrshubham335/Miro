import { Skeleton } from "@/components/ui/skeleton"
export const Participants=()=>{
    return (
        <div className="absolute h-12 t-2 right-2 bg-white rounded-md p-3 flex item-center shadow-md" >
            User List
        </div>
    )
}
Participants.Skeleton = function ParticipantsSkeleton() {
    return (
        <div
        className="absolute  bg-white rounded-md p-3 h-12 top-2 right-2 flex item-center shadow-md w-[100px] ">
            <Skeleton className="h-full w-full bg-muted-400" />

        </div>
    )
} 
