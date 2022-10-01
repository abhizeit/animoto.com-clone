import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Auth/firebase";
import {
    Box,
    Center,
    Text,
    Link,
    Divider,
    Flex,
    Input,
    VStack,
    Spacer,
    Button,
    HStack,
  } from "@chakra-ui/react";
  import { Link as ReachLink } from "react-router-dom";
  import Navbar from "../Components/Navbar";
  import { FaFacebook ,FaApple} from "react-icons/fa";
  import { FcGoogle } from "react-icons/fc";
  import { useState } from "react";
  import { useToast } from "@chakra-ui/react";
  import { useNavigate } from "react-router-dom";
  
  export default function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();
    const toast = useToast();

    const handleClick=async()=>{
      setLoading(true)
      try{
        const res = await(createUserWithEmailAndPassword(auth,email,password))
        setLoading(false)
        toast({
          title: 'Account created.',
          description: "We've created your account for you.",
          status: 'success',
          duration: 2000,
          isClosable: true,
        } )
        navigate("/login");
      }catch(err){
        setLoading(false)
        toast({
          title: 'Uh Oh!',
          description:`${err.code.substring(5).toUpperCase()}`,
          status: 'error',
          duration: 9000,
          isClosable: true,
        } )
      }
    }

    return (
      <Box>
        <Navbar />
        <Divider />
        <Center w="100%" py={16}>
          <VStack w="100%">
            <Box
              w="80%"
              boxShadow="dark-lg"
              p={16}
              align="center"
              borderRadius="md"
            >
              <Text fontWeight="bold" fontSize="4rem" color="#181c47">
               Create a free account
              </Text>
              <Text fontSize="1.5rem">Make and share unlimited videos for freee</Text>
              <Input my={4} size="lg" placeholder="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
              <Spacer />
              <Input my={4} size="lg" placeholder="password" type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
              <Button bg="#23408c" colorScheme="messenger" align="center" onClick={handleClick} isLoading={loading} loadingText="Signing up">
                CREATE AN ACCOUNT
              </Button>
              <Flex align="center" p={5}>
                <Divider />
                <Text padding="2">OR</Text>
                <Divider />
              </Flex>

                <Button size="lg" leftIcon={<FaFacebook />}>
                  SIGN UP WITH FACEBOOK
                </Button>
              
              <Text>
              By signing up you agree to our terms of service and privacy policy.
              </Text>
              <Text fontSize="1.3rem">
              Already have an account? <Link as={ReachLink} to="/login" color="blue">Log in</Link>
            </Text>
            </Box>
          </VStack>
        </Center>
      </Box>
    );
  }
  