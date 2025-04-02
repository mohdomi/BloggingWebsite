import { Hono } from 'hono';
import { z } from 'zod';
import { blogPostInput , blogPutInput } from '@mohdomi/common-zod-file';

export interface Env {
    ACCELERATE_DB_URL: string
    JWT_SECRET: string
}
const blogRouter = new Hono<{
    Bindings: Env,
    Variables: {
        userId: string
    }
}>();


// here we need to initialise a blog post.
blogRouter.post('/', async (c) => {
    // title content userId

    const body = await c.req.json();

    const {success} = blogPostInput.safeParse(body);

    if(!success){
        c.status(403);
        return c.json({

            error : "Error in body in blogPost"

        })
    }

    const prisma = c.get("prisma");

    const blogPost = await prisma.post.create({
        data: {
            title: body.title,
            content: body.content,
            authorId: c.get("userId")
        }
    })

    return c.json({
        message: "Blog Created",
        title: blogPost.title,
        id: blogPost.id
    })


}
)



blogRouter.put('/', async (c) => {

    const body = await c.req.json();

    const {success} = blogPutInput.safeParse(body);

    if(!success){
        c.status(403);
        return c.json({
            error : "Body Error in blogPut"
        })
    }

    const prisma = c.get("prisma");


    try {
        const blogUpdate = await prisma.post.update({
            where: {
                id: body.id,
                authorId: c.get("userId")
            }, data: {
                title: body.title,
                content: body.content
            }
        })


        return c.json({
            message: "Blog Updated",
            blogUpdate
        })
    }
    catch (e) {
        c.status(403);
        console.log(e);
        return c.json({
            error: "Error occured while updating",
            message : e
        })
    }

}


)


blogRouter.get('/getblog/:id', async (c) => {

    // userId , blogId

        const id = c.req.param('id');

        const prisma = c.get("prisma");

        const post = await prisma.post.findUnique({
            where : {
                id
            } , select : {
                id : true,
                title : true,
                content : true,
                published : true,
                author : {
                    select : {
                        name : true,
                        email : true
                    }
                }
            }
        })

        return c.json(post);

    }

)



blogRouter.get('/bulk', async (c) => {

    try {
        const prisma = c.get("prisma");

        const allBlogs = await prisma.post.findMany({
            select : {
                id : true,
                title : true,
                content : true,
                published : true,
                author : {
                    select : {
                        name : true
                    }
                }
            }

        })


        return c.json({
            recieved : true,
            message : "Got all blogs",
            allBlogs
        })

    } catch (e) {

        c.status(403);
        return c.json({
            error: "Error in /bulk",
        })

    }

}


)



export default blogRouter;
