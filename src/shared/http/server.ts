import "reflect-metadata";
import Express from "express";
import cors from "cors";
import router from "src/routes";
import ErrorHandleMiddleware from "@shared/midllewares/ErrorHandleMiddleware";

import { AppDataSource } from "@shared/typeorm/data-source";

AppDataSource.initialize().then(async () => {
    const app = Express()

    app.use(cors())
    app.use(Express.json())
    app.use(ErrorHandleMiddleware.handleError)
    app.use(router)

    console.log("conectado ao banco de dados")
    app.listen(3333, () => {
        console.log('Server started on port 3333!')
    })

}).catch(error => console.log(error))