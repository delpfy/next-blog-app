"use client";
import Posts from "@/components/Posts";
import SearchPosts from "@/components/SearchPosts";
import { getAllPosts } from "@/services/getPosts";
import { Metadata } from "next";
import Link from "next/link";
import { useEffect, useState } from "react";

export const metadata: Metadata = {
  title: "Blog | Next App",
};

export default function Blog() {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getAllPosts()
      .then(setPosts)
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <h1>Blog page</h1>
      <SearchPosts posts={posts} setPosts={setPosts} />
      {loading ? <h3>Loading...</h3> : <Posts posts={posts} />}
    </>
  );
}
