import { Product } from "../database/entities/Product";
import { productsRepostories } from "../database/repositories/ProductsRepositories";

export default class ListProductsService {
    async execute(): Promise<Product[]> {
        const products = await productsRepostories.find();
        return products;
    }
}