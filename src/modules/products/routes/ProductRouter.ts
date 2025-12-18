import ProductsController from "@modules/products/controllers/ProductsController";
import { createProductSchema, IdParamsValidate, updateProductSchema } from "@modules/products/schemas/ProductSchemas";
import { Router } from "express";

const productsRouter = Router()
const productsController = new ProductsController()

productsRouter.get("/", productsController.index)
productsRouter.get("/:id", IdParamsValidate, productsController.show)
productsRouter.post("/", createProductSchema, productsController.create)
productsRouter.put("/:id", updateProductSchema, productsController.update)
productsRouter.delete("/:id", IdParamsValidate, productsController.delete)

export default productsRouter