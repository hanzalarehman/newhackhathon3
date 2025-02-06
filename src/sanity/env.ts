export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-01-18'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)
export const token = assertValue(
 "sk3FXPhcQ2TNqMO4PT2d9RyhF1v6bwwnsrRcIiJqSAf9WyvuxjaTGfQILSRUawTTi2L7fF96s4m7m2cL99oQbkRqnJL8zx4zJls0MX104XwxQDPgK9iNA0hRhvQS2pX3BY02uHBMBsR9PXhek1TryP2mSlSYiNX3feGd1ikbE47InsfcgiyE",

   'Missing environment variable: NEXT_PUBLIC_SANITY_API_TOKEN'
)
export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
