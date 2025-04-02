import { Hono } from "hono";
import userRouter from "./routes/user.routes";
import blogRouter from "./routes/blog.routes";
import { getPrisma } from "./middlewares/prisma";
import authMiddleware from "./middlewares/authMiddleware";
import { cors } from "hono/cors";

export interface Env {
    ACCELERATE_DB_URL : string
}
const app = new Hono<{
    Bindings: Env,
    Variables : {
        userId : string
    },

}>().basePath('/api/v1');

app.use(cors())


app.use("*" , getPrisma);
app.use("/blog/*" , authMiddleware);


app.route('/user', userRouter);
app.route('/blog', blogRouter);

app.get("/", (c) => {

    return c.text("Hi there");

})


export default app;