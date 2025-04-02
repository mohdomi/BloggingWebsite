import { useNavigate } from "react-router-dom"

interface NavbarTypes {
    name : string
}

const Navbar = ({name} : NavbarTypes)=>{

    const navigate = useNavigate();

    const newBlog = ()=>{

        navigate('/create-blog');
        

    }

    return(
        <div className="fixed z-10 bg-white w-full top-0 left-0">
        <div className="flex ml-20 m-5 justify-between">

            <h1 className="text-2xl font-bold">Bloggin</h1>
            <div className="flex justify-between">
            <button onClick={newBlog} className="bg-neutral-300 rounded-3xl p-2 mx-3 cursor-pointer">New Blog</button>
            <button className="size-10 rounded-full bg-neutral-400">{name[0]}</button>

            </div>

        </div>

        <hr className="text-neutral-300" />

        </div>

    )

}

interface name {
    name : string
}

export const NavButton = ({name} : name)=>{

    return(
        <button className="m-2 p-3 py-5 focus:border-1">{name}</button>
    )

}


export default Navbar;