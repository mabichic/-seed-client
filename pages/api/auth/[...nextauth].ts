import NextAuth, { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
// import EmailProvider from "next-auth/providers/email";
import CredentialsProvider from "next-auth/providers/credentials";
import { gql, useMutation } from "@apollo/client";
import client from "../../../apollo-client";
export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "email", type: "text", placeholder: "jsmith" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials, req) {
        // Add logic here to look up the user from the credentials supplied

        const LoginMutation = gql`
          mutation Login($email: String!, $password: String!) {
            login(email: $email, password: $password) {
              token
              user {
                name
              }
            }
          }
        `;

        // const [login, { data, loading, error }] = useMutation(LoginMutation);
        // login({ variables: { credentials } })
        //   .then((result) => {
        //     console.log(result);
        //   })
        //   .catch((e) => {
        //     console.log(e);
        //   });
        const result = await client
          .mutate({
            mutation: LoginMutation,
            variables: {
              email: credentials?.email,
              password: credentials?.password,
            },
          })
          .then((results) => {
            console.log(results);
            const user = {
              id: 1,
              name: "J Smith",
              email: "jsmith@example.com",
              roles: "admin",
            };
            return user;
          })
          .catch((e) => {
            console.log(e);
          });
        if (result) {
          return result;
        } else {
          return null;
        }
        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, account, profile, isNewUser }) {
      console.log(token);
      return token;
    },
  },
};
export default NextAuth(authOptions);
