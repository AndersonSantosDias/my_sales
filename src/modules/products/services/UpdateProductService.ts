import AppError from "@shared/errors/AppError"
import { Product } from "../database/entities/Product"
import { productsRepostories } from "../database/repositories/ProductsRepositories"

interface IUpdateProduct {
    id: string
    name: string
    price: number
    quantity: number
}

export default class UpdateProductService {
    async execute({id, name, price, quantity}: IUpdateProduct): Promise<Product> {
        const product = await productsRepostories.FindById(id)
        if (!product) {
            throw new AppError("Produto não encontrado", 404)
        }
        const productExists = await productsRepostories.findByName(name)
        if (productExists) {
            throw new AppError("Já existe um produto com esse nome", 409)
        }
        product.name = name
        product.price = price
        product.quantity = quantity
        await productsRepostories.save(product)
        return product
    }

}