import Heading from "./Heading";

interface BlogPageTypes { 
    title : string , 
    content : string , 
    id? : string  ,
    published? : boolean , 
    name? : string , 
    email? : string
    
}

const BlogPage = ({
    title , content , name
} : BlogPageTypes)=>{

    return(<div className="main_body">

        <hr className='my-3' />
          <div className="base_page flex justify-end">
    
            <div className="blog_body w-full lg:w-3/4 p-10 m-10">
            <Heading heading={title}></Heading>
            <h2 className='p-2 text-2xl font-bold text-neutral-500'>Posted on April 1,2025</h2>
    
            <p className="my-4 text-lg font-normal">{content}</p>
    
            </div>
    
    
            <div className="hidden md:block author_details w-1/4 my-10 py-10">
              <div className="fixed">
                  <h2 className="text-xl font-bold p-3">Author</h2>
                  <div>
                    <b className='text-3xl font-bold'>{name}</b>
                    <p className='text-neutral-500 font-medium'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro necessitatibus magnam illo vero, consectetur minus molestias eveniet. Corporis nemo, minus consequuntur distinctio, commodi pariatur veritatis ratione inventore nobis excepturi ducimus maxime illo, consequatur tempore accusantium dicta voluptates! Id nam hic distinctio autem blanditiis vero reprehenderit facere cumque! Beatae, deleniti exercitationem!</p>
                  </div>
                  </div>
    
            </div>
    
    
          </div>
    
    
        </div>)

}


export default BlogPage;