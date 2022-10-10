import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Auth/firebase";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
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
  useToast,

} from "@chakra-ui/react";
import { Link as ReachLink } from "react-router-dom";
import { useState } from "react";
import Navbar from "../Components/Navbar";
import { FaFacebook ,FaApple} from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../Context/AuthContextProvider";
import { login } from "../Context/actions";

export default function Login() {
  const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();
    const toast = useToast();
    const {dispatch} = useContext(AuthContext);

    const handleClick=async()=>{
      setLoading(true)
      try{
        const res = await(signInWithEmailAndPassword(auth,email,password))
        console.log(res)
        dispatch(login(res.user.email))
        setLoading(false)
        toast({
          title: 'Login Successful',
          description: "You have signed in successfully",
          status: 'success',
          duration: 2000,
          isClosable: true,
        } )
        navigate("/")
      }catch(err){
        setLoading(false)
        toast({
          title: 'Uh Oh!',
          description:`${err.code.substring(5).toUpperCase()}`,
          status: 'error',
          duration: 3000,
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
          <Text fontSize="1.3rem">
            New to Animoto? <Link as={ReachLink} to="/signup" color="blue">Sign up free</Link>
          </Text>

          <Box
            w="80%"
            boxShadow="dark-lg"
            p={8}
            align="center"
            borderRadius="md"
          >
            <Text fontWeight="bold" fontSize={{base:"1.8rem",md:"3.5rem",lg:"4rem"}} color="#181c47">
              Welcome Back
            </Text>
            <Text fontSize="1.5rem">Log in to create your next video</Text>
            <Input my={4} size="lg" placeholder="email"value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <Spacer />
            <Input my={4} size="lg" placeholder="password" type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
            <Button onClick={handleClick} bg="#23408c" colorScheme="messenger" align="center" isLoading={loading} loadingText="Logging In">
              LOG IN WITH EMAIL
            </Button>
            <Flex align="center" p={10}>
              <Divider />
              <Text padding="2">OR</Text>
              <Divider />
            </Flex>
            <Flex  w="80%" pb={5} flexDirection={["column","column","column","row"]} >
              <Button size={["xs","sm","md","lg"]} leftIcon={<FaFacebook />} my={2}>
                LOGIN WITH FACEBOOK
              </Button>
              <Spacer />
              <Button size={["xs","sm","md","lg"]} leftIcon={<FcGoogle />} my={2}>
                LOGIN WITH GOOGLE
              </Button>
              <Spacer/>
              <Button size={["xs","sm","md","lg"]} leftIcon={<FaApple />} my={2}>
                LOGIN WITH APPLE
              </Button>
            </Flex>
            <Text>
              By logging in you agree to our terms of service and privacy
              policy.
            </Text>
          </Box>
        </VStack>
      </Center>
    </Box>
  );
}
