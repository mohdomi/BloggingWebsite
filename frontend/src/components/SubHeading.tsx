import { Link } from "react-router-dom"

interface SubHeadingTypes {
    sub_heading : string,
    to : string,
    link_name : string
}


const SubHeading = ({sub_heading , to , link_name} : SubHeadingTypes)=>{

    return(<div className="flex justify-center items-center p-2">

        <h1 className="font-medium text-2xl text-neutral-600">{sub_heading}</h1>
        <Link className="ml-1 font-medium text-2xl text-neutral-800 underline" to={to}>{link_name}</Link>

    </div>)

}

export default SubHeading;