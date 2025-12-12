import AppError from "@shared/errors/AppError";
import { productsRepostories } from "../database/repositories/ProductsRepositories";
import { Product } from "../database/entities/Product";

interface IShowProduct {
    id: string
}

export default class ShowProduct {
    async execute({id}: IShowProduct): Promise<Product> {
        const product = await productsRepostories.FindById(id)
        if (!product) {
            throw new AppError("Produto não encontrado", 404)
        }
        return product
    }

}