"use client"
import { getPostsBySearch } from "@/services/getPosts"

type SearchProps = {
    posts: any[],
    setPosts: React.Dispatch<React.SetStateAction<any>>,
}

export default function SearchPosts({posts, setPosts}: SearchProps){

    const handleSearchChange = (e: any) =>{
        console.log('TARGET ' + e.target.value)
        getPostsBySearch(e.target.value).then(setPosts) 
    }

    return (
        <>
        <form>
            <input type="search" placeholder="search posts" onChange={handleSearchChange}  />
            <button type="submit">Search</button>
        </form>
        </>
    )
}