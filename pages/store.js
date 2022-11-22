import Header from "../components/Header"
import Footer from "../components/Footer"
import { PrismaClient, Prisma } from '@prisma/client';
import LargeCard from "../components/LargeCard";

const prisma = new PrismaClient();

export async function getServerSideProps() {
    const stores = await prisma.stores.findMany();
    return {
      props: {
         stores
      }
    };
  }
  

function store({stores}) {
  return (
    <div>
        <Header />
            <div className="max-w-7xl mx-auto">
                <div className="pt-6">
                    <h2 className='text-4xl font-semibold pb-5'>Our Store Location</h2>
                    {stores.map(store => (
                        <LargeCard 
                            img={store.img}
                            title={store.title}
                            description={store.description}
                            buttonText="Get Inspired"
                        />
                    ))}
                </div>
            </div>
        <Footer />
    </div>
  )
}

export default store