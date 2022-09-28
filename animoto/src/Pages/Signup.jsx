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
  
  export default function Signup() {
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
              <Input my={4} size="lg" placeholder="email" />
              <Spacer />
              <Input my={4} size="lg" placeholder="password" type="password"/>
              <Button bg="#23408c" colorScheme="messenger" align="center">
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
              Already have an account? <Link color="blue">Log in</Link>
            </Text>
            </Box>
          </VStack>
        </Center>
      </Box>
    );
  }
  