import { verify } from "hono/jwt";
import { createMiddleware } from "hono/factory";
const authMiddleware = createMiddleware(async (c,next) => {

    const jwt = c.req.header('Authorization');

    if(!jwt){
        c.status(400);
        return c.json({
            error : "Unauthorized"
        })
    }

    const token = jwt.split(" ")[1];
    const payload = await verify(token , c.env.JWT_SECRET);

    if(!payload){

        c.status(401);
        return c.json({
            error : "Unauthorized"
        })

    }
    c.set("userId" , payload.id);

    await next();
})

export default authMiddleware;