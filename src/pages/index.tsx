import { type NextPage } from "next";
import Head from "next/head";
import { DefaultHeader } from "~/components/layouts/Header";
import { Layout } from "~/components/layouts/Layout";
const Home: NextPage = ({}) => {
  return (
    <>
      <Head>
        <title>Memoiz</title>
        <meta name="description" content="Talk to your database" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <DefaultHeader />
        <main className="flex h-full flex-1"></main>
      </Layout>
    </>
  );
};

export default Home;
