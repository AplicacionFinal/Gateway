import 'dotenv/config';

import * as joi from 'joi';


const evnSchema = joi.object({
    PORT: joi.number().required(),
    ACCOUNT_MICROSERVICE_HOST: joi.string(),
    ACCOUNT_MICROSERVICE_PORT: joi.number(),
    ACCOUNT_SERVICE:joi.string(),
    NATS_SERVICE:joi.string().required(),
    NATS_SERVERS:joi.array().items(joi.string()).required(),
}).unknown(true);

//console.log(`El valor de la constante PORT es ${process.env.PORT}`);

const {error,value:envVars} = evnSchema.validate({...process.env,NATS_SERVERS:process.env.NATS_SERVERS.split(",")}); //

if(error) throw new Error(`ConfigValidationError: ${error.message}`);

export const envs = {
    PORT: envVars.PORT,
    ACCOUNT_MICROSERVICE_HOST: envVars.ACCOUNT_MICROSERVICE_HOST,
    ACCOUNT_MICROSERVICE_PORT: envVars.ACCOUNT_MICROSERVICE_PORT,
    ACCOUNT_SERVICE: envVars.ACCOUNT_SERVICE,
    NATS_SERVICE: envVars.NATS_SERVICE,
    NATS_SERVERS: envVars.NATS_SERVERS,
}