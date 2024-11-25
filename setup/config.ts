/* eslint-disable @typescript-eslint/no-namespace */
import { z } from "zod"
import * as dotenv from "dotenv"

dotenv.config({ path: ".env" })

const envVariables = z.object({
  env: z.string().optional(),
})

const configEnv = envVariables.parse(process.env)

declare global {
  namespace NodeJS {
    interface ProcessEnv extends z.infer<typeof envVariables> {}
  }
}

export { configEnv }
