import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Dotenv Test</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            Dotenv <span className="text-[hsl(280,100%,70%)]">Test</span> App
          </h1>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
              href="/"
            >
              <h3 className="text-2xl font-bold">Environment →</h3>
              <div className="text-lg">
                Current environment is - {process.env.NODE_ENV}
              </div>
            </Link>
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
              href="/"
            >
              <h3 className="text-2xl font-bold">Test Variable →</h3>
              <div className="text-lg">
                Value = {process.env.NEXT_PUBLIC_TEST_VAR}
              </div>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
