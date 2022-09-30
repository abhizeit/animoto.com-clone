import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Link,
    useDisclosure,Button, VStack,IconButton
  } from '@chakra-ui/react'
  import React from 'react';
  import {AiOutlineMenu} from "react-icons/ai"
  import {Link as ReachLink} from "react-router-dom"
  import { AuthContext } from "../Context/AuthContextProvider";
import { logout } from "../Context/actions";
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { FaCrown } from 'react-icons/fa';
  

  export default function NavBarDrawer() {
    const { state, dispatch } = useContext(AuthContext);
    const navigate = useNavigate();
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
  
    return (
      <>
        <IconButton display={["block","block","none","none"]} size="lg" ref={btnRef} icon={<AiOutlineMenu/>} variant outline onClick={onOpen}/>
        
   
        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Animoto</DrawerHeader>
  
            <DrawerBody>
                <VStack spacing={6}>
                <Button
              leftIcon={state.isPremiumUser ? <FaCrown /> : null}
              onClick={() => navigate("/login")}
              bg="transparent"
              color="#23408c"
              fontSize="xl"
              fontWeight="bold"
              disabled={state.isAuth}
            >
              {state.isAuth ? state.user : "LOGIN"}
            </Button>
            <Button
              onClick={() =>
                state.isAuth ? dispatch(logout) : navigate("/signup")
              }
              color="#23408c"
              fontSize="xl"
              fontWeight="bold"
              variant="contained"
            >
              {state.isAuth ? "LOGOUT" : "SIGNUP"}
            </Button>
                <Link as="b" color="#23408c" fontSize="xl">
                Create
              </Link>
              <Link as="b" color="#23408c" fontSize="xl">
                Template
              </Link>
              <Link
                as={ReachLink}
                to="/features"
                fontWeight="bold"
                color="#23408c"
                fontSize="xl"
              >
                Features
              </Link>
              <Link as={ReachLink} to="/pricing" fontWeight="bold" color="#23408c" fontSize="xl">
                Pricing
              </Link>
                </VStack>
            
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
    )
  }