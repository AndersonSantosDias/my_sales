import CreateUser from "../services/CreateUserService";
import ListUserService from "../services/ListUserService"
import { Request, Response } from "express";

export default class UsersControllers {
    async index(request: Request, response: Response): Promise<Response> {
        const listUsersService = new ListUserService()
        const users = await listUsersService.execute()
        return response.json(users)
    }

    async create(request: Request, response: Response): Promise<Response> {
        const { name, email, password } = request.body
        const createUser = new CreateUser()
        const user = await createUser.execute({name, email, password})
        return response.json(user)
    }
}