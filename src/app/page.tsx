"use client";

import { useQuery } from "@tanstack/react-query";
import PostResponseType from "@/types/postResponseType";
import axios from "../lib/axios";
import Loading from "@/components/Loading";

export const Page: React.FC = () => {

  const getData = async (): Promise<PostResponseType[]> => {
    const res = await axios.get("/posts");
    return res.data ?? [];
  }

  const { data, isLoading, isError } = useQuery<PostResponseType[]>({
    queryKey: ["posts"],
    queryFn: getData
  });

  return (
    <div className="p-4">
      <div className="pb-8 text-5xl text-center">posts</div>
      <div className="pb-8 w-3/5 m-auto">
        {isLoading ? (
          <Loading
            text="データ取得中です。しばらくお待ちください。"
          />
        ) : isError ? (
          <p>Error!</p>
        ) : (
          data?.map((post, index) => (
            <ul key={index} className="pb-8 text-left">
              <li>
                <strong>userId: </strong>
                <span>{post.userId}</span>
              </li>
              <li>
                <strong>id: </strong>
                <span>{post.id}</span>
              </li>
              <li>
                <strong>title: </strong>
                <span>{post.title}</span>
              </li>
              <li>
                <strong>body: </strong>
                <span>{post.body}</span>
              </li>
            </ul>
          ))
        )}
      </div>
    </div>
  )
}

export default Page;
