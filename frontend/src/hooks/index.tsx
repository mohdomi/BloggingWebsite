import { useEffect, useState } from "react";
import axiosInstance from "../utility/axiosInstance";

interface Blog {

  id : string , 
  title : string ,
  content : string , 
  published : boolean , 
  author : {
    name : string , 
    email : string
  }

}


export const useBlog = ({id} : {id : string})=>{

  const [loading , setLoading] = useState(true);
  const [blog , setBlog] = useState<Blog>({
    id : "",
    title : "",
    content : "",
    published : false,
    author : {
      name : "",
      email : ""
    }
  });

  useEffect(()=>{

    axiosInstance.get(`blog/getblog/${id}` , {
      headers : {
        Authorization : `Bearer ${localStorage.getItem("token")}`
      }
    }).then((response)=>{

      console.log(response);
      setBlog(response.data);
      setLoading(false);

    })

  } , [id] );

  return {
    loading , blog
  }
}



