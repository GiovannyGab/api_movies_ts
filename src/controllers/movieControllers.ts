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

export async function findMovieByID(req:Request,res:Response) {
    try {
        const id= req.params.id
        const movie= await MovieModel.findById(id)

        if(!movie){
         return   res.status(402).send({error:"filme não encontrado"})
        }return res.status(200).json(movie)
        
        





    } catch (error:any) {
        Logger.error(`error:${error.message}`)
    }
}
export async function findAllMovies(req:Request,res:Response) {
    try {
        const movies= await MovieModel.find()
        return res.status(200).json(movies)





    } catch (error:any) {
        Logger.error(`error:${error.message}`)
    }
}

export async function removeMovie(req:Request,res:Response) {
    const id= req.params.id
        const movie= await MovieModel.findById(id)
    
    try {
        

        if(!movie){
            return res.status(402).json({
                error: "o filme  nao existe =("
            })
        }
        await movie.delete()
        return res.status(200).json({
              message: "o filme foi deletado"
        })
    
        





    } catch (error:any) {
        Logger.error(`error:${error.message}`)
    }
}

export async function updateMovie(req:Request,res:Response) {
    const id= req.params.id
        const movie= await MovieModel.findById(id)
    const data = req.body
    try {
        

        if(!movie){
            return res.status(402).json({
                error: "o filme  nao existe =("
            })
        }
        await MovieModel.updateOne({_id:id},data)
        return res.status(200).json(data)
    
        





    } catch (error:any) {
        Logger.error(`error:${error.message}`)
    }
}