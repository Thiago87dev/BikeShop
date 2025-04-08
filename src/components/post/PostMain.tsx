import ContentBlog from "../blog/ContentBlog"
import ContentPost from "./ContentPost"

const PostMain = () => {
  return (
    <div>
        <ContentBlog post={true} Component={ContentPost}/>
    </div>
  )
}

export default PostMain