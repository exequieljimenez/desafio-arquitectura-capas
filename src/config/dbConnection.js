import mongoose from "mongoose";
import options from './options.js';
import { logger } from "../loggers/loggers.js";

const connectDB = async () => {
    try {
        await mongoose.connect(options.mongo.url)
        logger.info('Base de datos conectada');
    } catch (error) {
        logger.error('hubo un error al conectarse la base de datos')
    }
}

export default connectDB