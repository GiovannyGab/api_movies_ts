require("dotenv").config()

import  express  from "express";
import  config  from "config";
import router from "./router";
import db from "../config/db"
import Logger from "../config/logger";
import morganMiddleware from "./middlewares/morganMiddleware";








const app = express()
const port = config.get<number>("port")

app.use(morganMiddleware)
app.use(express.json())
app.use("/api",router)


app.listen(port,async ()=>{
    await db()
    Logger.info(`aplicação rodando na porta ${port} `)
})