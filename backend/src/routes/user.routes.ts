import { Hono } from 'hono';
import { bodyLimit } from 'hono/body-limit';
import { decode, sign, verify } from 'hono/jwt'
import {z} from 'zod'
import { signinInput , signupInput } from '@mohdomi/common-zod-file';

const userRouter = new Hono<{
    Bindings: {
        JWT_SECRET: string
    },

}>();

userRouter.post('/signup', async (c) => {

    const body = await c.req.json();
    
    const {success} = signupInput.safeParse(body);

    if(!success){
        c.status(411);
        return c.json({
            error : "Object sent is not valid"
        })
    }
    

    const prisma = c.get("prisma");

    try {

        const user = await prisma.user.create({

            data: body

        })

        const payload = {
            id: user.id,
            exp: Math.floor(Date.now() / 1000) + 60 * 60,
        }

        const secret = c.env.JWT_SECRET;

        const token = await sign(payload, secret);

        return c.json({
            message: "User Created",
            token: token,
            success : success
        });
    }
    catch (e) {

        c.status(403)

    }


})

userRouter.post('/signin', async (c) => {

    const body = await c.req.json();

    const {success} = signinInput.safeParse(body);

    if(!success){
        c.status(411);
        return c.json({
            message : "Invalid Body Inputs."
        })
    }

    console.log(body);

    const prisma = c.get("prisma");

    try {

        const user = await prisma.user.findUnique({
            where: {
                email: body.email,
                password: body.password
            }
        })

        if(!user){
            c.status(404);
            return c.json({
                error : "User not found."
            })
        }

        const payload = {
            id: user.id,
            exp: Math.floor(Date.now() / 1000) * 60 * 60,
        }

        const secret = c.env.JWT_SECRET;
        const token = await sign(payload, secret);

        return c.json({
            message: "Signedin",
            token: token
        })
    }
    catch (e) {
        return c.status(403);
    }
}


)


export default userRouter;

