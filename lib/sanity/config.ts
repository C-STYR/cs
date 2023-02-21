import { createClient } from "next-sanity"


const config = {
    // projectId: "fx98y37t",
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "development",
    apiVersion: "2023-02-23",
    useCdn: process.env.NODE_ENV === "production",
    // token: process.env.SANITY_TOKEN || ""
}

export const client = createClient(config)