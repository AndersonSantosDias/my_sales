import AppError from "@shared/errors/AppError"
import { productsRepostories } from "../database/repositories/ProductsRepositories"

interface IDelete {
    id: string
}

export default class DeleteProductService {
    async execute({id}: IDelete): Promise<void> {
        const product = await productsRepostories.FindById(id)
        if (!product) {
            throw new AppError("Produto não encontrado", 404)
        }
        await productsRepostories.remove(product)
    }

}