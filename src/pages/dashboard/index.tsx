import { NextPage } from "next";
import Head from "next/head";
import { DashboardHeader } from "~/components/layouts/Header";
import { SideBar } from "~/components/layouts/SideBar";
import { Layout } from "~/components/layouts/Layout";
import { SideBarTriggerArea } from "~/components/layouts/SideBarTriggerArea";

const DashboardPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="Talk to your database" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <DashboardHeader />
        <div className="flex h-full">
          <SideBarTriggerArea />
          <SideBar activeRoute="home" />
          <main className="grow overflow-y-auto p-16 transition-all">
            <section className="h-screen">
              <h1>Dashboard</h1>
            </section>
            <section className="h-screen">
              <h1>Dashboard</h1>
            </section>
          </main>
        </div>
      </Layout>
    </>
  );
};

export default DashboardPage;
