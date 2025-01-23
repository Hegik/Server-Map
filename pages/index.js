import { useRouter } from 'next/router';
import Head from 'next/head';
import Header from '@components/Header';

export default function Home() {
  const router = useRouter();

  // Weiterleitung durchführen (z.B. nach 3 Sekunden)
  setTimeout(() => {
    router.push('http://gamec25.dsh.gg:25588'); 
  }, 3000);

  return (
    <div className="container">
      <Head>
        <title>Hegik's Server Map</title>
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="Hegik's Server Map" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      <main>
        <img src="/server-icon.png" alt="Logo" /> 
        <Header title="Weiterleitung in 3 Sekunden..." /> 
      </main>
    </div>
  );
}