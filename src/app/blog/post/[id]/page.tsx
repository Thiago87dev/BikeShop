"use client";
import PostMain from "@/components/post/PostMain";
import { useParams } from "next/navigation";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setIdPost } from "@/redux/idPost/slice";

const PostDetail = () => {
  const dispatch = useDispatch();

  const { id } = useParams();
  const idNumber = Number(id);

  useEffect(() => {
    dispatch(setIdPost(idNumber));
  }, [dispatch, idNumber]);
  
  return (
    <div>
      <PostMain />
    </div>
  );
};

export default PostDetail;
