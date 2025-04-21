/* eslint-disable @typescript-eslint/no-unused-vars */
// import Head from 'next/head'; // Keep this line if needed
/* eslint-enable @typescript-eslint/no-unused-vars */

import FirstPage from '@/components/hero/page'; 
import Secondpage from '@/components/about/page'; 
import BeigeSection from '@/components/BeigeSection/page';

export default function Home() {
  return (
    <main>
        <FirstPage />
        <Secondpage/>
        <BeigeSection/>
    </main>      
  );
}
