import {Router,Request,Response} from "express"
import { MovieCreate } from "./controllers/movieControllers"
import { validate } from "./middlewares/handlevalidator"
const router = Router()


export default router.get("/test", (req:Request,res:Response)=>{
    res.status(200).send("blablabla")
}).get("/movie", validate,MovieCreate)

