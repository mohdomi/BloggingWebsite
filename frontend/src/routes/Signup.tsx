import Heading from "../components/Heading";
import SubHeading from "../components/SubHeading";
import InputBox from "../components/InputBox";
import Button from "../components/Button";
import Quote from "../components/Quote";
import { useState } from "react";
import { signUpType } from "@mohdomi/common-zod-file";
import axiosInstance from "../utility/axiosInstance";
import { useNavigate } from "react-router-dom";


const Signup = () => {

  const [signupInput, setSignUpInput] = useState<signUpType>({
    email: "",
    password: "",
    name: ""
  });

  const navigate = useNavigate();


  async function SignUpRequest() {

    try {

      console.log(signupInput);

      const response = await axiosInstance.post('user/signup', signupInput);

      localStorage.setItem('token' , response.data.token);

      navigate('/blogs');

    }
    catch (e) {
      console.log(e);
    }




  }



  return (<div className="mainBody grid grid-cols-1 lg:grid-cols-2 overflow-hidden">

    <div className="part-1 h-screen flex flex-col justify-center items-center ">

      <div className="Outer-Signup p-5 w-3/4">

        <Heading heading="Create an account" />
        <SubHeading sub_heading="Already have an account?" to="/signin" link_name="Login"></SubHeading>

        <div>
          <InputBox onChange={(e) => {

            return (
              setSignUpInput({
                ...signupInput, name: e.target.value
              })
            )

          }} input_name="Username" input_placeholder="Enter your username"></InputBox>
          <InputBox onChange={(e) => {

            return (
              setSignUpInput({
                ...signupInput, email: e.target.value
              })
            )

          }} input_name="Email" input_placeholder="m@example.com"></InputBox>
          <InputBox onChange={(e) => {

            return (
              setSignUpInput({
                ...signupInput, password: e.target.value
              })
            )

          }} input_name="Password" input_placeholder="" type="password"></InputBox>


          <Button onClick={SignUpRequest} button_text="Sign Up"></Button>


        </div>


      </div>



    </div>

    <div className="hidden md:block">
      <div className="part-2 h-screen flex flex-col justify-center items-center bg-neutral-200">
        <Quote></Quote>
      </div>
    </div>





  </div>)

}



export default Signup;

// heading , subheading , inputComponent , button , Quote, AuthorName