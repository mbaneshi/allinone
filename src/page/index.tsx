import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

import { api } from "~/utils/api";

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "Construction" });

  return (
    <>
      <Head>
        <title>mbaneshi</title>
        <meta
          name="description"
          content="Full-Stack Web Developer MBaneshi HomePage"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#051b19] to-[#080a2b]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-24 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            <span className="text-[hsla(351,54%,46%,1)]">
              {" "}
              &#39;mbaneshi&#39;
            </span>
          </h1>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 md:gap-8">
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
              href="/social"
            >
              <h3 className="text-2xl font-bold">Social →</h3>
              <div className="text-lg"> Platform Link</div>
            </Link>
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
              href="/resume"
            >
              <h3 className="text-2xl font-bold">Resume →</h3>
              <div className="text-lg">my past ,present and future </div>
            </Link>
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
              href="/home"
            >
              <h3 className="text-2xl font-bold">Start here →</h3>
              <div className="text-lg">Home</div>
            </Link>
          </div>
          <div className="flex flex-col items-center gap-2">
            <button className="btn-accent btn">
              <p className="text-2xl text-white">
                {hello.data ? hello.data.greeting : "Loading tRPC query..."}
              </p>
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
