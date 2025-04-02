

interface ButtonTypes {
    button_text : string,
    onClick : () => void    
}

const Button = ({button_text , onClick} : ButtonTypes)=>{

    return(<div className="button_box flex flex-col justify-center my-2">

        <button onClick={onClick} className=" bg-black text-white p-3 rounded-md my-2">{button_text}</button>

    </div>)

}


export default Button;