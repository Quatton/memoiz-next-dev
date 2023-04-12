import { SignUp } from "@clerk/nextjs";
import Head from "next/head";
import { Main } from "~/components/layouts/Main";
import { DefaultHeader } from "~/components/layouts/Header";
import { dark } from "@clerk/themes";

export default function SignUpPage() {
  return (
    <>
      <Head>
        <title>Sign Up</title>
        <meta name="description" content="Talk to your database" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DefaultHeader />
      <Main>
        <SignUp
          appearance={{
            baseTheme: dark,
          }}
          path="/signup"
          routing="path"
          signInUrl="/signin"
          redirectUrl="/"
        />
      </Main>
    </>
  );
}
