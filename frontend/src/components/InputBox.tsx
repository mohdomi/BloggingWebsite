import { ChangeEvent } from "react";



interface InputBoxTypes {
    input_name : string , 
    input_placeholder : string,
    onChange : (e : ChangeEvent<HTMLInputElement>) => void
    type? : string
}

const InputBox = ({input_name , input_placeholder, onChange , type} : InputBoxTypes)=>{

    return(<div className="input_box flex flex-col justify-center m-1">
        
        <p className="text-xl font-medium text-neutral-800 p-1 py-2">{input_name}</p>
        <input onChange={onChange} type={type || "text"} className="border-black border-1 p-2 rounded-md" placeholder={input_placeholder} />

    </div>)

}



export default InputBox;