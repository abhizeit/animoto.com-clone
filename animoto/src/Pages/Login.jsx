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

export default function Login() {
  return (
    <Box>
      <Navbar />
      <Divider />
      <Center w="100%" py={16}>
        <VStack w="100%">
          <Text fontSize="1.3rem">
            New to Animoto? <Link color="blue">Sign up free</Link>
          </Text>

          <Box
            w="80%"
            boxShadow="dark-lg"
            p={16}
            align="center"
            borderRadius="md"
          >
            <Text fontWeight="bold" fontSize="4rem" color="#181c47">
              Welcome Back
            </Text>
            <Text fontSize="1.5rem">Log in to create your next video</Text>
            <Input my={4} size="lg" placeholder="email" />
            <Spacer />
            <Input my={4} size="lg" placeholder="password" type="password"/>
            <Button bg="#23408c" colorScheme="messenger" align="center">
              LOG IN WITH EMAIL
            </Button>
            <Flex align="center" p={10}>
              <Divider />
              <Text padding="2">OR</Text>
              <Divider />
            </Flex>
            <Flex  w="80%" pb={5}>
              <Button size="lg" leftIcon={<FaFacebook />}>
                LOGIN WITH FACEBOOK
              </Button>
              <Spacer />
              <Button size="lg" leftIcon={<FcGoogle />}>
                LOGIN WITH GOOGLE
              </Button>
              <Spacer/>
              <Button size="lg" leftIcon={<FaApple />}>
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
