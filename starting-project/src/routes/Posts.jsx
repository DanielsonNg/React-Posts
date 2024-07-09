import { useState } from "react";
import Post from "../components/post";
import PostList from "../components/PostList"
import { Outlet } from "react-router-dom";

export default function Posts() {
  return (
    <>
      <Outlet />
      <main>
        <PostList />
      </main>
    </>
  )

}

export async function loader() {
  const res = await fetch('http://localhost:8080/posts')
  const resData = await res.json()
  return resData.posts
}