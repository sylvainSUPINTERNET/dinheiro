// import Image from 'next/image'
// import { Inter } from 'next/font/google'

import Header from '@/components/header'
import PictureGallery from '@/components/user/PictureGallery.component';
import { supabase } from '@/lib/supabaseClient'
import { useEffect, useRef, useState } from 'react';


import { Swiper } from 'swiper';


export async function getServerSideProps() {

  let { data } = await supabase.from('countries').select()

  return {
    props: {
     countries: data
    },
  }
}

export default function Home({ countries }: {countries: any}) {
  
  useEffect(() => {

  }, []);


  return (
    <main className="bg-gradient-to-b from-blue-500 to-purple-500 h-screen">

      <Header/>

      <div className='md:container md:mx-auto md:mt-20'>
        <div className="flex flex-wrap justify-center">

        <div className="relative h-[20em] w-full md:h-[40em] md:w-[40em] mt-5 mb-5 md:mt-0 md:mb-0">
          <img className="border-2 border-black border-solid absolute top-0 left-0 w-full h-full object-cover md:rounded-tl-lg md:rounded-bl-lg shadow-2xl" src="https://media.discordapp.net/attachments/997271582005264384/1102607582268493924/ricsoft74_view_from_an_elevated_building_Mexico_City_in_the_fut_e8616032-4312-488f-8c43-52f7526a9c32.png?width=984&height=656" alt="your-image-alt" />

          <button className="absolute bottom-[-75px] md:left-40 left-20 transform -translate-y-1/2 py-6 px-8 bg-gradient-to-br from-blue-400 to-purple-500 hover:from-purple-500 hover:to-blue-400 text-white font-bold rounded-full shadow-lg text-2xl transition duration-300 ease-in-out hover:scale-110" >X</button>

          <button className="absolute bottom-[-75px] md:right-40 right-20  transform -translate-y-1/2  py-6 px-8 bg-gradient-to-br from-blue-400 to-purple-500 hover:from-purple-500 hover:to-blue-400  text-white font-bold rounded-full shadow-lg text-2xl transition duration-300 ease-in-out hover:scale-110">✓</button>

        </div>
          

          
          <div className="bg-gradient-to-r from-blue-600 via-blue-500 to-purple-600 w-full md:w-1/2
                          md:rounded-tr-lg md:rounded-br-lg shadow-2xl border-2 border-black border-solid mt-10 md:mt-0">
            <div className="justify-center p-4">


              <div className='bg-black bg-opacity-40 text-white p-3 rounded-lg mb-5 text-xl md:text-center'>
                <div className="mt-5 mb-5">
                  <p className="font-bold">Working @ Capgemini - Sotfware Engineer</p>
                </div>

                <div className='mt-5 mb-5'>
                  <p className="md:text-justify">As an AI language model, I do not have a personal life, experiences, or emotions to write a description of myself on a dating app. However, I can provide you with some tips on how to write an effective profile description on Bumble.</p>
                </div>

                <div className='mt-5 mb-5'>
                  <p>Mon talent le plus inutile c'est ...</p>
                  <p className="font-bold">Chanter sous la douche 👅</p>
                </div>

                <div className='mt-5 mb-5'>
                  <p>Mon talent le plus inutile c'est ...</p>
                  <p className="font-bold">Chanter sous la douche 👅</p>
                </div>

                <div className='mt-5 mb-5'>
                  <p className="font-bold">Paris - 7KM | 🇫🇷</p>
                </div>          

                <div className="text-white">
              
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xl font-medium bg-white bg-opacity-25 backdrop-blur-lg p-3 m-2">
                    <svg className="h-4 w-4 mr-1.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.293 9.293a1 1 0 0 1 0-1.414l5-5a1 1 0 1 1 1.414 1.414L7.414 8l4.293 4.293a1 1 0 0 1-1.414 1.414l-5-5z" clipRule="evenodd" />
                    </svg>
                    Non fumeur
                  </span>

                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xl font-medium bg-white bg-opacity-25 backdrop-blur-lg p-3 m-2">
                    <svg className="h-4 w-4 mr-1.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.293 9.293a1 1 0 0 1 0-1.414l5-5a1 1 0 1 1 1.414 1.414L7.414 8l4.293 4.293a1 1 0 0 1-1.414 1.414l-5-5z" clipRule="evenodd" />
                    </svg>
                    Pas d'alcohol
                  </span>

                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xl font-medium bg-white bg-opacity-25 backdrop-blur-lg p-3 m-2">
                    <svg className="h-4 w-4 mr-1.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.293 9.293a1 1 0 0 1 0-1.414l5-5a1 1 0 1 1 1.414 1.414L7.414 8l4.293 4.293a1 1 0 0 1-1.414 1.414l-5-5z" clipRule="evenodd" />
                    </svg>
                    Religion
                  </span>

                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xl font-medium bg-white bg-opacity-25 backdrop-blur-lg p-3 m-2">
                    <svg className="h-4 w-4 mr-1.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.293 9.293a1 1 0 0 1 0-1.414l5-5a1 1 0 1 1 1.414 1.414L7.414 8l4.293 4.293a1 1 0 0 1-1.414 1.414l-5-5z" clipRule="evenodd" />
                    </svg>
                    Sprotif
                  </span>

                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xl font-medium bg-white bg-opacity-25 backdrop-blur-lg p-3 m-2">
                    <svg className="h-4 w-4 mr-1.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.293 9.293a1 1 0 0 1 0-1.414l5-5a1 1 0 1 1 1.414 1.414L7.414 8l4.293 4.293a1 1 0 0 1-1.414 1.414l-5-5z" clipRule="evenodd" />
                    </svg>
                    1m82
                  </span>

                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xl font-medium bg-white bg-opacity-25 backdrop-blur-lg p-3 m-2">
                    <svg className="h-4 w-4 mr-1.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.293 9.293a1 1 0 0 1 0-1.414l5-5a1 1 0 1 1 1.414 1.414L7.414 8l4.293 4.293a1 1 0 0 1-1.414 1.414l-5-5z" clipRule="evenodd" />
                    </svg>
                    Badge Text
                  </span>

              </div>

              </div>

              
            </div>
          </div>

        </div>


      </div>

  

    </main>
  )
}
