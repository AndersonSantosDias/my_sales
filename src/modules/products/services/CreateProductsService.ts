import AppError from "@shared/errors/AppError"
import { Product } from "../database/entities/Product"
import { productsRepostories } from "../database/repositories/ProductsRepositories"

interface ICreateProduct {
    name: string
    price: number
    quantity: number
}


export default class CreateProductService {
    async excute({name, price, quantity}: ICreateProduct ): Promise<Product> {
        const productExists = await productsRepostories.findByName(name)

        if (productExists) {
            throw new AppError("Já existe um produto com esse nome", 409)
        }

        const product = productsRepostories.create({
            name,
            price,
            quantity
        })
        await productsRepostories.save(product)
        return product
    }
}