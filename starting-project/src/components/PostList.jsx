import { useEffect, useState } from "react";
import Post from "./post";
import classes from "./PostList.module.css"
import { useLoaderData } from "react-router-dom";

export default function PostList({}){
    const posts = useLoaderData()

    return(
        <>
        {posts.length > 0 && (
        <ul className={classes.posts}>
            {posts.map((post)=> <Post key={post.id} id={post.id} author={post.author} body = {post.body} />)}
        </ul>    
        )}  
        {posts.length === 0 && (
            <div style={{textAlign:"center",color:'white'}}>
                <h2>No Post yet</h2>
                <p>Try adding Some</p>
            </div>

        )}
        </>
    )
}