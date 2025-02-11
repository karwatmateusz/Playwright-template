// Use this code snippet in your app.
// If you need more information about configurations or implementing the sample code, visit the AWS docs:
// https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/getting-started.html

import { SecretsManagerClient, GetSecretValueCommand } from "@aws-sdk/client-secrets-manager"
import { configEnv } from "./config"

const secret_name = "test/beta/acc"

const accessKeyId: string = configEnv.accessKeyId
const secretAccessKey: string = configEnv.secretAccessKey

const client = new SecretsManagerClient({
  region: "eu-north-1",
  credentials: {
    accessKeyId: accessKeyId,
    secretAccessKey: secretAccessKey,
  },
})

export const secret = async () => {
  let x: string | undefined
  await client
    .send(
      new GetSecretValueCommand({
        SecretId: secret_name,
        VersionStage: "AWSCURRENT", // VersionStage defaults to AWSCURRENT if unspecified
      })
    )
    .then((data) => {
      x = data.SecretString
    })
  console.log("Secret retrieved:", x)
  return x
}

console.log("Secret retrieved:", secret())
