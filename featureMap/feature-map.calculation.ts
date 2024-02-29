/* eslint-disable @typescript-eslint/ban-ts-comment */
import { test as calculation } from "@playwright/test"
//@ts-expect-error
import { calculateYamlCoverage } from "feature-map"
// import { configEnv } from '@setup/config'
import { configEnv } from "../setup/config"

calculation("Feature Map", async () => {
  const runCalculationCoverage = configEnv.calculate_coverage

  if (runCalculationCoverage) {
    console.log("Calculating coverage...")
    calculateYamlCoverage("./featureMap/featureMap.yml")
  } else {
    console.log("Skipping coverage calculation...")
  }
})
