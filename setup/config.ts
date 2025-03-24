/* eslint-disable @typescript-eslint/no-namespace */
import { z } from "zod"
import * as dotenv from "dotenv"

dotenv.config()

const envVariables = z.object({
  // url: z.string(),
  // calculate_coverage: z.string(),
  ENV: z.string(),
  // accessKeyId: z.string(),
  // secretAccessKey: z.string(),
  // region: z.string(),
  ENVVAR: z.boolean(),
  type: z.string(),
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
