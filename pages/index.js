import Head from 'next/head';
import Header from '@components/Header';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Hegik's Server Map</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/* Iframe hier einfügen */}
        <iframe src="http://gamec25.dsh.gg:25588" /> 
      </main>
    </div>
  );
}