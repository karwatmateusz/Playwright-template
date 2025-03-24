/* eslint-disable @typescript-eslint/no-namespace */
import { z } from "zod"
import * as dotenv from "dotenv"

dotenv.config({ path: ".env" })

const envVariables = z.object({
  // url: z.string(),
  // calculate_coverage: z.string(),
  ENV: z.string().optional(),
  // accessKeyId: z.string(),
  // secretAccessKey: z.string(),
  // region: z.string(),
  ENVVAR: z.boolean().optional(),
})

const configEnv = envVariables.parse(process.env)

declare global {
  namespace NodeJS {
    interface ProcessEnv extends z.infer<typeof envVariables> {}
  }
}

export { configEnv }
