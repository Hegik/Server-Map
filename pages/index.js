import { useRouter } from 'next/router';
import Head from 'next/head';
import Header from '@components/Header';

export default function Home() {
  const router = useRouter();

  // Weiterleitung durchführen (z.B. nach 3 Sekunden)
  setTimeout(() => {
    router.push('https//gamec25.dsh.gg:25588'); 
  }, 3000);

  return (
    <div className="container">
      <Head>
        <title>Hegik's Server Map</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Weiterleitung in 3 Sekunden..." /> 
      </main>
    </div>
  );
}