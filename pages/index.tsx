// import Image from 'next/image'
// import { Inter } from 'next/font/google'

import Header from '@/components/header'
import { supabase } from '@/lib/supabaseClient'
import { useDisclosure, Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Input,
  Button,} from '@chakra-ui/react';
import { useEffect, useRef, useState } from 'react';
import Image from "next/image";
import DrawerFilter from '@/components/filters/DrawerFilter';

export async function getServerSideProps() {


  // head : true will only return the count and not the actual data. This is useful if you only need the count and not the data.
  // count: actually uses the COUNT(*) and will give you the exact number of products but that algorithm is slow.
  // planned: uses a faster algorithm that might not get you the exact number which might not matter.
  // estimated: will use exact for small numbers and planned for large numbers.

  const { count } = await supabase
  .from('users')
  .select('*', { count: 'estimated', head: true });


  return {
    props: {
      count
    },
  }
}

export default function Home({ count }: {count: any}) {
  
  const { isOpen, onOpen, onClose } = useDisclosure()

  const btnRef = useRef() // drawer account

  useEffect(() => {
    const handleKeyDown = (ev:any) => {
      if (ev.key === 'ArrowLeft') {
       
          setClicked(true);

          setTimeout( () => {
            setCurrent("NOP")
            setCurrentPic("https://media.discordapp.net/attachments/997271582005264384/1102607582268493924/ricsoft74_view_from_an_elevated_building_Mexico_City_in_the_fut_e8616032-4312-488f-8c43-52f7526a9c32.png?width=984&height=656")
            setClicked(false)
          }, 300)
      }

      if ( ev.key === 'ArrowRight') {
        setClicked(true);

        setTimeout( () => {
          setCurrent("BIG")
          setCurrentPic("https://cdn.discordapp.com/attachments/1102026209472286781/1102629973371654185/bsqkt_i_want_a_background_using_gradiant_color_and_abstract_sha_d3f18145-4c33-44b8-8369-309996477eb7.png")
          setClicked(false)
        }, 300)
      }

    }

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);



  const [current, setCurrent] = useState("Sylvain")
  const [currentPic, setCurrentPic] = useState("https://cdn.discordapp.com/attachments/1102026209472286781/1102629973371654185/bsqkt_i_want_a_background_using_gradiant_color_and_abstract_sha_d3f18145-4c33-44b8-8369-309996477eb7.png")
  const [clicked, setClicked] = useState(false)

  return (
    <main className="bg-gradient-to-b from-blue-500 to-purple-500 h-screen">


    "WIP" => {count}

    {/* drawer account */ }
      <Drawer
              isOpen={isOpen}
              placement='left'
              onClose={onClose}
              finalFocusRef={btnRef}
            >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />

          
          <div className="flex items-center mt-5 p-4">
            <div className="cursor-pointer transition duration-300 ease-in-out hover:scale-110 mr-4">
              <Image src="https://picsum.photos/200" width={76} height={76 } alt={'profil'} className="rounded-full border-2 border-solid border-black" />
            </div>
            <h1 className="text-black text-2xl font-bold">Sylvain</h1>
          </div>

          <DrawerHeader>Conversation</DrawerHeader>
          

          <DrawerHeader>Match</DrawerHeader>

          <DrawerHeader>Historique</DrawerHeader>
        </DrawerContent>
      </Drawer>
    



      <Header onOpen={onOpen} btnRef={btnRef}/>

      {/* todo */}

      {/* <button onClick={ async e => {
        console.log(e)


        const resp = await supabase.from('users').insert( {
          firstname: 'Sylvain',
          lastname: "Joly",
          phone: "+33642561130",
          point: st.point(-122.4183, 37.7750)
        });

      }}>Ici</button> */}

      <div className='mt-10 mb-1 md:container md:mx-auto p-4'>
        <DrawerFilter />
      </div>

{/*       <div className={`md:container md:mx-auto md:mt-20 transition-opacity duration-150 ease-out ${clicked ? 'opacity-0' : ''}`}>
 */}     

        <div className={`md:container md:mx-auto md:mt-20`}>

        <div className="flex flex-wrap justify-center">

        <div className={`relative h-[20em] w-full md:h-[40em] md:w-[40em] mt-5 mb-5 md:mt-0 md:mb-0 transition-opacity duration-100 ease-out ${clicked ? 'opacity-10' : ''}`}>
          <img className="border-2 border-black border-solid absolute top-0 left-0 w-full h-full object-cover md:rounded-tl-lg md:rounded-bl-lg shadow-2xl" 
          
          src={`${currentPic}`} alt="your-image-alt" />

          <button className="border-2 border-black border-solid absolute bottom-[-75px] md:left-40 left-20 transform -translate-y-1/2 py-6 px-8 bg-gradient-to-br from-blue-400 to-purple-500 hover:from-purple-500 hover:to-blue-400 text-white font-bold rounded-full shadow-lg text-2xl transition duration-300 ease-in-out hover:scale-110"
          onClick={e => {
            setClicked(true);
            
            setTimeout( () => {
              setCurrent("NOP")
              setCurrentPic("https://media.discordapp.net/attachments/997271582005264384/1102607582268493924/ricsoft74_view_from_an_elevated_building_Mexico_City_in_the_fut_e8616032-4312-488f-8c43-52f7526a9c32.png?width=984&height=656")
              setClicked(false)
            }, 300)

            }}>
            X
          </button>

          <button className="border-2 border-black border-solid absolute bottom-[-75px] md:right-40 right-20  transform -translate-y-1/2  py-6 px-8 bg-gradient-to-br from-blue-400 to-purple-500 hover:from-purple-500 hover:to-blue-400  text-white font-bold rounded-full shadow-lg text-2xl transition duration-300 ease-in-out hover:scale-110"
                    onClick={e => {
                      setClicked(true);
          
                      setTimeout( () => {
                        setCurrent("BIG")
                        setCurrentPic("https://cdn.discordapp.com/attachments/1102026209472286781/1102629973371654185/bsqkt_i_want_a_background_using_gradiant_color_and_abstract_sha_d3f18145-4c33-44b8-8369-309996477eb7.png")
                        setClicked(false)
                      }, 300)
          
                      }}>
            ✓
          </button>

        </div>
          

          
          <div className="bg-gradient-to-r from-blue-600 via-blue-500 to-purple-600 w-full md:w-1/2
                          md:rounded-tr-lg md:rounded-br-lg shadow-2xl border-2 border-black border-solid mt-10 md:mt-0">
            <div className="justify-center p-4">


              <div className={`bg-black bg-opacity-40 text-white p-3 rounded-lg mb-5 text-xl md:text-center transition-opacity duration-100 ease-out ${clicked ? 'opacity-10' : ''}`}>
                <div className="mt-5 mb-5">
                  <p className="font-bold">{current}</p>
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
