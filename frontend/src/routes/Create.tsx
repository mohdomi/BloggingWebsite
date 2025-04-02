import { blogPostType } from "@mohdomi/common-zod-file";
import { ChangeEvent, useState } from "react";
import axiosInstance from "../utility/axiosInstance";
import { useNavigate } from "react-router-dom";

const Create = ()=>{

//  title content authorId

    const navigate = useNavigate();

    const [blogPostObject , setBlogPostObject] = useState<blogPostType>({
        title : "",
        content : "",
    })


    async function blogPost(){

        const response = await axiosInstance.post("blog" , blogPostObject , {
                headers : {
                    Authorization : `Bearer ${localStorage.getItem("token")}`

                }
        })
        console.log(response);
        navigate('/blogs');
        return;

    }


    return(
       <div className="flex flex-col w-1/1">
        <div className="h-20 w-full mb-20 p-3 flex justify-between">
            <h1 className="text-5xl font-bold text-neutral-600 pl-8">Editor :</h1>
            <button onClick={blogPost} className="cursor-pointer text-xl font-medium bg-neutral-400 p-2 px-5 rounded-3xl">Publish</button>
        </div>
        <div className="max-w-full pl-10">

        <textarea onChange={(e : ChangeEvent<HTMLTextAreaElement>)=>{
            setBlogPostObject({
                ...blogPostObject , title : e.target.value
            })

        }} name="title" id="title" className="min-h-15 w-full field-sizing-content font-sans font-bold text-5xl outline-0 overflow-hidden mb-1" placeholder="Title" />
        <textarea onChange={(e : ChangeEvent<HTMLTextAreaElement>)=>{
            setBlogPostObject({
                ...blogPostObject , content : e.target.value
            })

        }} className="min-h-10 field-sizing-content outline-0 font-sans font-medium text-2xl w-4/5 " name="content" id="content" placeholder="Tell your story..."></textarea>

        </div>
       </div>
    )

}


export default Create;