import productsRouter from "./ProductRouter";
import { Router } from "express";

const routes = Router()

routes.get('/health', (request, response) => {
    return response.json({message: "hello Dev! i'm alive!"})
})
routes.use("/products",productsRouter)

export default routes