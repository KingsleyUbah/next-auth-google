import NextAuth from 'next-auth'
import GitHubProvider from "next-auth/providers/github";

const options = {
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,                     
            authorization: { params: { scope: 'notifications' } },
        }),
    ],
}

export default (req, res) => NextAuth(req, res, options)



