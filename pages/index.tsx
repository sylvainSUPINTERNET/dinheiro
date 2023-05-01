// import Image from 'next/image'
// import { Inter } from 'next/font/google'

import Header from '@/components/header'
import { supabase } from '@/lib/supabaseClient'


export async function getServerSideProps() {

  let { data } = await supabase.from('countries').select()

  return {
    props: {
     countries: data
    },
  }
}

export default function Home({ countries }: {countries: any}) {
  return (
    <main>
      <Header/>

      <div className="flex">

        <div className="h-screen bg-gray-100 w-1/4 py-4">
          <ul className="text-gray-700">
            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Menu item 1</li>
            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Menu item 2</li>
            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Menu item 3</li>
          </ul>
        </div>

        <div className="h-screen bg-white w-3/4 py-4 px-8">

          
        <div className='flex justify-center'>
          <div className="relative w-[35em] shadow-lg">
            <img src="https://picsum.photos/900/800" alt="My Image" className="rounded-lg shadow object-cover" />

            <div className="hidden md:block lg:block absolute bottom-0 right-0 p-4 text-white text-right bg-black w-full bg-opacity-10 backdrop-blur-lg">
              <h2 className="text-xl font-bold mb-1">Job title</h2>
              <p className="text-sm">Working at Capgemini</p>
            </div>

          </div>
        </div>
        <div className="md:hidden">
          Job title / working at capgemini for mobile 
        </div>


          <p>{"my text"}</p>


        </div>

      </div>
      
      {/* <ul>
        {countries.map((country:any) => (
          <li key={country.id}>{country.name}</li>
        ))}
      </ul> */}
    </main>
  )
}
