import { createAuthClient } from "better-auth/react"
export const authClient = createAuthClient({
   
    baseURL: "https://skill-sphere-ak.vercel.app"
})
export const { signIn, signUp, signOut, useSession } = createAuthClient();