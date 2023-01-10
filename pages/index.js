import Head from 'next/head'
import Banner from '../components/frontend/Banner'
import Category from '../components/Category'
import Footer from '../components/Footer'
import Header from '../components/frontend/Header'
import LargeCard from '../components/LargeCard'
import ProductCard from '../components/ProductCard'
import { PrismaClient } from '@prisma/client';
import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import Cardinfo from '../components/frontend/Cardinfo'
import LargeCardSecond from '../components/LargeCardSecond'
import { useRef, useState } from 'react'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'

const prisma = new PrismaClient();

export default function Home({ products, categories }) {
  const { data: session } = useSession()
  const rowRef = useRef(null)
  const [isMoved, setIsMoved] = useState(false)

  const handleClick = (direction) => {
    setIsMoved(true)

    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current

      const scrollTo = direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth

      rowRef.current.scrollTo({ left: scrollTo, behavior: "smooth" })
    }
  }

  function handleSignOut() {
    signOut()
  }

  return (
    <div className='w-[600px] md:w-full lg:w-full sm:w-full'>
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
      <Banner />


      {/* Category Section */}
      <main className='max-w-7xl mx-auto px-2 sm:px-16'>
        <section>
          <div className='justify-items-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 p-3 ml-3 gap-2.5'>
            {/* Card Info Section */}
            <Cardinfo />
          </div>
        </section>

        {/* Large Card Info */}
        {/* <LargeCard
          img='https://images.unsplash.com/photo-1604014237256-11d475e2a2d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80'
          company="Hosana Kito Group"
          title="Luxury Series"
          description="With all of our experiance and combination, we create perfect Product series."
          buttonText="Learn More"
        /> */}
        {/* <LargeCardSecond
          img='https://images.unsplash.com/photo-1661107259637-4e1c55462428?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTk3fHxzaG93ZXIlMjBpbnRlcmlvcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60'
          company="Hosana Kito Group"
          title="Gold Series"
          description="With all of our experiance and combination, we create perfect Product series,"
          seconddesc="gold series for who appreciate uniqueness in simplicity."
          buttonText="Learn More"
        /> */}

        <section className='pt-10'>
          <h2 className='text-4xl text-center font-thin pb-3'>Category</h2>
          <p className='text-gray-400 font-extralight text-center pb-5 cursor-pointer underline'><a href="/category">View all</a></p>

          <div className='flex overflow-scroll scrollbar-hide p-3 ml-3'>
            {categories.map(item => (
              <Category key={item.id} img={item.img} title={item.name} />
            ))}
          </div>

        </section>

        <section className='pt-10'>
          <h2 className='text-4xl font-thin pb-3 text-center'>Products</h2>
          <p className='text-gray-400 font-extralight text-center pb-5 cursor-pointer underline'><a href="/product">View all</a></p>
          <div className="group relative md:-ml-2">
            <AiOutlineLeft className={`absolute top-0 bottom-0 left-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100 ${!isMoved && "hidden"}`} onClick={() => handleClick("left")} />
            <div ref={rowRef} className='flex overflow-scroll scrollbar-hide p-3 ml-3'>
              {products.map(item => (
                <ProductCard key={item.id} title={item.title} img={item.image} price={item.price} description={item.description} quantity={item.quantity} subCategory={item.subCategory.name} />
              ))}
            </div>
            <AiOutlineRight className={`absolute top-0 bottom-0 right-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100`} onClick={() => handleClick("right")} />
          </div>
        </section>

        {/* {session ? User({ session, handleSignOut }) : Guest()} */}
      </main>

      {/* footer section */}
      <Footer />
    </div>
  )
}

// For Guest
function Guest() {
  return (
    <main className="container mx-auto text-center py-20">
      <h3 className='text-4xl font-bold'>Guest Home Page</h3>
      <div className='flex justify-center'>
        <Link href={'/auth/login'}><span className='mt-5 px-10 py-1 rounded-sm bg-indigo-500 text-gray-50'>Sign In</span></Link>
      </div>
    </main>
  )
}

// For Authorize User
function User({ session, handleSignOut }) {
  return (
    <main className="container mx-auto text-center py-20">
      <h3 className='text-4xl font-bold'>Authorize User Home Page</h3>
      <div className='details'>
        <h5>{session.user.name}</h5>
        <h5>{session.user.email}</h5>
      </div>
      <div className="flex justify-center">
        <button onClick={handleSignOut} className='mt-5 mb-5 p-10 py-1 bg-indigo-500 text-gray-50'>Sign Out</button>
      </div>
      <div className='flex justify-center'>
        <Link href={'/profile'}><span className='mt-5 px-10 py-1 rounded-sm bg-indigo-500 text-gray-50'>Profile</span></Link>
      </div>
    </main>
  )
}

export async function getServerSideProps() {
  const products = await prisma.product.findMany({
    include: {
      subCategory: true,
    },
    take: 10,
    orderBy: {
      id: 'asc'
    }
  });
  const categories = await prisma.category.findMany({
    take: 10,
    orderBy: {
      id: 'asc'
    }
  });
  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
      categories,
    }
  };
} 
