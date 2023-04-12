import { NextPage } from "next";
import Head from "next/head";
import { DashboardHeader } from "~/components/layouts/Header";
import { SideBar } from "~/components/layouts/SideBar";
import { Layout } from "~/components/layouts/Layout";
import { SideBarTriggerArea } from "~/components/layouts/SideBarTriggerArea";

const ChatPage: NextPage = () => {
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
          <SideBar activeRoute="chat" />
          <main className="grow overflow-y-auto p-16 transition-all">
            <section className="h-screen">
              <h1>Chat</h1>
            </section>
          </main>
        </div>
      </Layout>
    </>
  );
};

export default ChatPage;
