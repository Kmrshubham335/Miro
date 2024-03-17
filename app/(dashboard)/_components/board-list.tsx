"use client"


import { EmptyBoard } from "./empty-board"
import { EmptyFavorites } from "./empty-favorites"
import { EmptySearch } from "./empty-search"

interface BoardListProps{
    orgId:string
    query:{
        search?: string
        favorites?: string
    }
}
export const BoardList=({
    orgId,
    query,
}:BoardListProps) =>{
    const data =[] //change to API call
    if(!data?.length && query.search){
        return(
            <div>
                <EmptySearch/>
            </div>
        )
    }

    if(!data?.length && query.favorites){
        return (
            <div>
                <EmptyFavorites/>
            </div>
        )
    }
    if(!data?.length){
        return (
            <div>
            <EmptyBoard/>
            </div>
        )
    }

    return(
       <div>
        {JSON.stringify(query)}
       </div> 
    )
}