import Heading from "../components/Heading";
import SubHeading from "../components/SubHeading";
import InputBox from "../components/InputBox";
import Button from "../components/Button";
import Quote from "../components/Quote";
import { useState } from "react";
import { signinType } from "@mohdomi/common-zod-file";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../utility/axiosInstance";




const Signin = ()=>{

  const [signinInput , setSignInInput] = useState<signinType>({
    email : "",
    password : ""
  })

  const navigate = useNavigate();


  async function SignInRequest() {

    try {

      console.log(signinInput);

      const response = await axiosInstance.post('user/signup', signinInput);

      localStorage.setItem('token' , response.data.token);

      navigate('/blogs');

    }
    catch (e) {
      console.log(e);
    }




  }





  return(<div className="mainBody grid grid-cols-1 md:grid-cols-2 overflow-hidden">

    <div className="part-1 h-screen flex flex-col justify-center items-center ">

      <div className="Outer-Signup p-5 w-3/">
      
      <Heading heading="Log into your account" />
      <SubHeading sub_heading="Don't have an account?" to="/signup" link_name="Signup"></SubHeading>

      <form action="">
      <InputBox onChange={
        (e)=>{

          return(setSignInInput({
            ...signinInput , email : e.target.value
          }))

        }
      } input_name="Email" input_placeholder="m@example.com"></InputBox>
      <InputBox onChange={
        (e)=>{

          return(setSignInInput({
            ...signinInput , password : e.target.value
          }))

        }
      } input_name="Password" input_placeholder="" type="password"></InputBox>
      <Button onClick={SignInRequest} button_text="Sign In"></Button>
      </form>


      </div>
      


    </div>

    <div className="hidden md:block">

    <div className="part-2 h-screen flex flex-col justify-center items-center bg-neutral-200">

  <Quote></Quote>      


    </div>

    </div>

  



    </div>)

}



export default Signin;

// heading , subheading , inputComponent , button , Quote, AuthorName