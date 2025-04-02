import { useEffect, useState } from "react";
import BlogCard from "../components/BlogCard";
import axiosInstance from "../utility/axiosInstance";
import Navbar from "../components/Navbar";
import Skeleton from "../components/Skeleton";



const Blogs = ()=>{
    
    const [allBlogs , setAllBlogs] = useState([]);
    const [recieved , setRecieved] = useState(false);

    interface aBlogType {
        title : string,
        content : string,
        author : {
            name : string
        },
        id : string
    }

    useEffect(()=>{

        try{axiosInstance.get('blog/bulk' , {
            headers : {
                Authorization : "Bearer " + localStorage.getItem("token")
            }
        }).then((response)=>{
            console.log(response);
            setAllBlogs(response.data.allBlogs);
            setRecieved(response.data.recieved); // this was a pure bullshit move from me.
        })}
        catch(err){
            console.log(err);
        }

    } , [])


    return(
        (recieved) ? 
        <div className="p-10">

            <Navbar name="0"></Navbar>

            {
                allBlogs.map((aBlog : aBlogType)=>{
                    return(
                        <BlogCard id={aBlog.id} authorName={aBlog.author.name || "Anonymous"} title={aBlog.title} content={aBlog.content} publishedDate="August 12,2030"></BlogCard>
                    )
                })
            }

        </div> : <div className="flex flex-col">
        <Skeleton></Skeleton>
        <Skeleton></Skeleton>
        <Skeleton></Skeleton>
        <Skeleton></Skeleton>

        </div>
    )

}


export default Blogs;