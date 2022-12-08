import {Router,Request,Response} from "express"
import { findAllMovies, findMovieByID, MovieCreate, removeMovie, updateMovie } from "./controllers/movieControllers"
import { validate } from "./middlewares/handlevalidator"
import { movieCreateValidation } from "./middlewares/movieValidator"
const router = Router()



export default router.get("/test", (req:Request,res:Response)=>{
    res.status(200).send("blablabla")
}).post("/movie",movieCreateValidation(),validate,MovieCreate)
.get("/movie/:id", findMovieByID)
.get("/movie", findAllMovies)
.delete("/movie/:id", removeMovie)
.patch("/movie/:id", movieCreateValidation(),validate,updateMovie)

