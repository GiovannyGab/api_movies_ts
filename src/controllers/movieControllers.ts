import { Request,Response } from "express";
import Logger from "../../config/logger";

import { MovieModel } from "../models/Movie";

export async function MovieCreate(req:Request,res:Response) {
   
    try {
        const data = req.body
    const movie = await MovieModel.create(data)
        res.status(200).send(movie)
    } catch (error:any) {
        Logger.error(`error:${error.message}`)
    }
    
}