import mongoose from "mongoose";
import config from "config"
import Logger from "../config/logger"
async function connect() {
    const dbUri = config.get<string>("dbUri")
    try {
        await mongoose.connect(dbUri)

        Logger.info("conectado a o mongoAtlas")

    } catch (error) {
        Logger.error(`erro na conecção ${error}`)
        process.exit(1)
    }
}


export default connect