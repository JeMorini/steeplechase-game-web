// pages/index.js
import Head from "next/head";
import SteeplechaseGame from "@/app/components/SteeplechaseGame";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Dinosaur Game</title>
        <meta name="description" content="Dinosaur Game in Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <SteeplechaseGame />
      </main>
    </div>
  );
}
