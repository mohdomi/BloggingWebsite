
interface HeadingTypes {
    heading : string
}

const Heading = ({heading} : HeadingTypes)=>{

    return(<div className="flex justify-center items-center p-2">

        <h1 className="font-black text-5xl">{heading}</h1>

    </div>)

}


export default Heading;