import { Router } from "express";

const router = Router()

router.get('/health', (request, response) => {
    return response.json({message: "hello Dev! i'm alive!"})
})

export default router