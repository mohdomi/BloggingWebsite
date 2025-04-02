import BlogPage from "../components/BlogPage";
import { useBlog } from "../hooks";
import { useParams } from "react-router-dom";
import Skeleton from "../components/Skeleton";


const Blog = ()=>{

    const params = useParams();

    const {loading , blog} = useBlog({
        id : params.id || "nothing"
    });

    return (
        (loading)?<div><Skeleton></Skeleton>
        <Skeleton></Skeleton>
        <Skeleton></Skeleton>
        <Skeleton></Skeleton>

        </div> : 
        <div>
            <BlogPage title={blog.title || "Heading"} content={blog.content || "Content"} name={blog.author.name || "Anonymous"} />
        </div>
    )

}


export default Blog;