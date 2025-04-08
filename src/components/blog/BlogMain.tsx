import React from 'react'
import StripBlog from './StripBlog'
import ContentBlog from './ContentBlog'
import FetchingPosts from './FetchingPosts'

const BlogMain = () => {
  return (
    <div>
        <StripBlog/>
        <ContentBlog Component={FetchingPosts}/>
    </div>
  )
}

export default BlogMain