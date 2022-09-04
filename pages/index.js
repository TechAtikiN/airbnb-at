import Head from 'next/head'
import Banner from '../components/Banner'
import Footer from '../components/Footer';
import Header from '../components/Header'
import LargeCard from '../components/LargeCard';
import MediumCard from '../components/MediumCard';
import SmallCard from '../components/SmallCard';

// Server rendering
//>>static rendering -->when the data is not likely to change much
//>>server side rendering--> when you have data that is changing frequentlyy use ssr eg news


export default function Home({exploreData, cardsData}) {
  
  return (


    <div className=''>
      <Head>
        <title>AirbnbAt</title>
      </Head>
      {/**Header */}
      <Header/>
      {/**Banner */}
      <Banner/>
      <main className='max-w-7xl mx-auto px-8 sm:16px'>
        <section className='pt-6'>
          <h2 className='text-4xl font-semibold pb-5'>Explore Nearby</h2>

          {/* Pull some data from the server - API Endpoints */}
          <div className='grid grid-col-1 sm:grid-cols-2 ls:grid-cols-3 xl:grid-cols-4'>
            {exploreData?.map(({img, distance, location}) => (
            <SmallCard
              key={img}
              img={img}
              distance={distance}
              location={location} />
          ))}
          </div>
        </section>

        <section>
          <h2 className='text-4xl font-semibold py-8'>Live Anywhere</h2>
          <div className='flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3'>
              {cardsData?.map(item => (
            <MediumCard
              key={item.img}
              img={item.img}
              title={item.title} />
          ))}
          </div>
          
        </section>

        <LargeCard
          img="https://links.papareact.com/4cj"
          title="The Greatest Outdoors"
          description="Wishlists curatedd by Airbnb"
          buttonText="Get Inspired"
        />
      </main>
        <Footer/>
    </div>
  )
}

export async function getStaticProps() { // this only works in pages
  //this tells nextjs that this is gonna do some clever nextjs renderiing stuuf
  const exploreData = await fetch('https://links.papareact.com/pyp')
    .then(res => res.json()); 
  //anuthing inside getStaticProps getsServerSideprops happens on the server
  //so we need to return it to th functional component at the top

  const cardsData = await fetch('https://links.papareact.com/zp1')
    .then((res) => 
    res.json())

  return {
    props: {
      exploreData: exploreData,
      cardsData
    }
  }

  
}