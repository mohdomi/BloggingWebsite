import { Link } from "react-router-dom"
interface BlogCardType {
    authorName : string , 
    title : string , 
    content : string , 
    publishedDate : string,
    id : string
}

const BlogCard = ({
    authorName , title , content , publishedDate , id
} : BlogCardType)=>{

    return(
        <Link to={`/blog/${id}`} >
        <div className="m-10 my-30 main_block cursor-pointer w-2/3">

            <div className="flex">
                <div className="bg-amber-300 rounded-full size-8 mx-2 pl-2 pt-1">{authorName[0]}</div>
                <h3 className="font-semibold text-lg">{authorName}</h3>
                <h3 className="px-2 text-lg">{publishedDate}</h3>
            </div>

            <div className="px-2">
                <h1 className="text-4xl font-bold py-2">{title}</h1>
                <p className="py-1 mb-6 text-xl">{content.slice(0,100) + "...."}</p>
            </div>

            <hr className="text-neutral-300"/>


        </div>
        </ Link>
    )

}



export default BlogCard;