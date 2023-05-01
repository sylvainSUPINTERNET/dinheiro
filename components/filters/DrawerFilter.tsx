
import { useDisclosure, Drawer,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    Text,   
    DrawerBody,} from '@chakra-ui/react';

import { useEffect, useRef, useState } from 'react';
import { GoSettings } from 'react-icons/go';
 

function DrawerFilter () {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRefFilter = useRef(); // drawer filter

    return (
        <div>
            
            
            <button
            ref={btnRefFilter}
            onClick={onOpen}
            className="shadow-lg bg-gradient-to-r from-blue-400 to-purple-500 rounded-full px-6 py-2 flex items-center space-x-2 border-2 border-black border-solid transition duration-300 ease-in-out hover:scale-110"
            >
            <Text className="text-2xl text-white font-bold">Filter</Text>
            <GoSettings className="text-2xl text-white" />
            </button>

            <Drawer
                    isOpen={isOpen}
                    placement='right'
                    onClose={onClose}
                    finalFocusRef={btnRefFilter}
                >
                    
                <DrawerOverlay/>
                <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>Filter</DrawerHeader>
                    <DrawerBody>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </div>
    )
}

export default DrawerFilter;