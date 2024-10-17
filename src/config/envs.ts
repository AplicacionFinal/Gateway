import 'dotenv/config';

import * as joi from 'joi';


const evnSchema = joi.object({
    PORT: joi.number().required(),
}).unknown(true);

//console.log(`El valor de la constante PORT es ${process.env.PORT}`);

const {error,value:envVars} = evnSchema.validate(process.env); //

if(error) throw new Error(`ConfigValidationError: ${error.message}`);

export const envs = {
    PORT: envVars.PORT,
}