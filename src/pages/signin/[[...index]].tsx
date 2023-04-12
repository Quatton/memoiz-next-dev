import { SignIn } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import Head from "next/head";
import { Main } from "~/components/layouts/Main";
import { DefaultHeader } from "~/components/layouts/Header";

export default function SignInPage() {
  return (
    <>
      <Head>
        <title>Sign In</title>
        <meta name="description" content="Talk to your database" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DefaultHeader />
      <Main>
        <SignIn
          appearance={{
            baseTheme: dark,
          }}
          path="/signin"
          routing="path"
          signUpUrl="/signup"
          redirectUrl="/"
        />
      </Main>
    </>
  );
}
