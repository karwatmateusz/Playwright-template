/* eslint-disable @typescript-eslint/no-namespace */
import { z } from "zod"
import * as dotenv from "dotenv"

dotenv.config({ path: ".env"  });

const envVariables = z.object({
  // url: z.string(),
  // calculate_coverage: z.string(),
  ENV: z.string(),
  // accessKeyId: z.string(),
  // secretAccessKey: z.string(),
  // region: z.string(),
  // ENVVAR: z.preprocess((val) => {
  //   return val as boolean  // return undefined if not a string
  // }, z.string().optional()).transform((val) => {return !!val}),
  ENVVAR: z.string().transform((val) => val === 'true'),
  TYPE: z.string(),
  repeat: z.string().transform((val) => {
    if (val.trim() !== '' && !isNaN(Number(val))) {
      return parseInt(val, 10)
    }
    return 
  }).optional(),
})

const configEnv = envVariables.parse(process.env)

console.log('configEnv')
console.log(configEnv)
console.log('process.env')
console.log(process.env)
console.log('parsed configEnv')
console.log( envVariables.parse(process.env))

declare global {
  namespace NodeJS {
    interface ProcessEnv extends z.infer<typeof envVariables> {}
  }
}

export { configEnv }
