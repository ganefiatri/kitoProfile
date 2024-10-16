import { PrismaClient } from '@prisma/client';
import Head from 'next/head'
import Banner from '../components/frontend/Banner'
import Footer from '../components/Footer'
import Header from '../components/frontend/Header'
import { useSession } from 'next-auth/react'
import Cardinfo from '../components/frontend/Cardinfo'
import ProjectHome from '../components/project/ProjectHome'

const prisma = new PrismaClient();

export async function getServerSideProps() {
  const projects = await prisma.project.findMany();
  const pictures = await prisma.picture.findMany();
  const categories = await prisma.sub_category_third.findMany();
  return {
    props: {
      categories,
      projects,
      pictures
    }
  };
}

const Home = ({ categories, pictures, projects }) => {
  const { data: session } = useSession();

  return (
    <div className='md:w-full lg:w-full'>
      <Head>
        <title>HOSANA GROUP</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="shortcut icon" href="/assets/favicon/favicon.ico" />
        <link rel="icon" type="image/vnd.microsoft.icon" href="/assets/favicon/favicon.ico" />
        <link rel="icon" type="image/x-icon" href="/assets/favicon/favicon.ico" />
        <link rel="icon" href="/assets/favicon/favicon.ico" />
      </Head>
      {/* header Section */}
      <Header />

      {/* Banner Section */}
      {pictures && (
        <Banner picture={pictures} />
      )}


      {/* Category Section */}
      <main className=''>
        <section>
          <div className='justify-items-center'>
            {/* Card Info Section */}
            <Cardinfo />
          </div>
        </section>

        <section className='pt-10'>
          <h2 className='text-xl md:text-2xl lg:text-4xl text-center font-thin pb-3'>Category</h2>
          <p className='text-gray-400 font-extralight text-center pb-5 cursor-pointer underline'><a href="/product">View all</a></p>

          <div className="grid grid-cols-4 gap-4">
            {categories && categories.map(item => (
              <a key={item.id} href={`/category/${item.id}`} className='relative inline-flex items-center w-full px-4 py-2 text-sm font-medium border-b border-gray-200 hover:bg-gray-100 hover:text-green-700 focus:z-10 focus:ring-2 focus:ring-green-700 focus:text-green-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white'>
                {item.name}</a>
            ))}
          </div>
        </section>

        <section className='pt-10'>
          <h2 className='text-xl md:text-2xl lg:text-4xl text-center font-thin pb-3'>Project</h2>
          <p className='text-gray-400 font-extralight text-center pb-5 cursor-pointer underline'><a href="/project">View all</a></p>

          <div className='flex space-x-3 overflow-scroll scrollbar-hide p-3 ml-3'>
            {projects && projects.map(item => (
              <ProjectHome key={item.id} name={item.name} img={item.img} />
            ))}
          </div>
        </section>

      </main>

      {/* footer section */}
      <Footer />
    </div>
  )
}

export default Home;