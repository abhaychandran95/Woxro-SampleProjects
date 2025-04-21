import Head from 'next/head';
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
