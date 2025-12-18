import usersRouter from "@modules/users/routes/UserRoutes";
import productsRouter from "../../../modules/products/routes/ProductRouter";
import { Router } from "express";

const routes = Router()

routes.get('/health', (request, response) => {
    return response.json({message: "hello Dev! i'm alive!"})
})
routes.use("/products",productsRouter)
routes.use("/users", usersRouter)

export default routes