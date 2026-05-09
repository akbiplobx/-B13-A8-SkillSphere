import { createAuthClient } from "better-auth/react"
export const authClient = createAuthClient({
   
    baseURL: "https://b13-a8-skill-sphere.vercel.app"
    
})
export const { signIn, signUp, signOut, useSession } = createAuthClient();