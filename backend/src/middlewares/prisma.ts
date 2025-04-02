import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { MiddlewareHandler } from "hono";

declare module "hono" {
    interface ContextVariableMap {
        prisma : PrismaClient
    }
}

export const getPrisma: MiddlewareHandler<{
    Bindings : {
        ACCELERATE_DB_URL : string
    }
}> = async (c , next) => {

    if(!c.get("prisma")){

        const prisma = new PrismaClient({
            datasourceUrl : c.env.ACCELERATE_DB_URL
        }).$extends(withAccelerate());

        c.set("prisma" , prisma as any);

    };

    await next();

}
