import {
  Box,
  Button,
  Center,
  HStack,
  Text,
  VStack,
  Image,
  SimpleGrid,
} from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import Navbar from "../Components/Navbar";
import { FaFacebookF } from "react-icons/fa";
import FooterLinks from "../Components/FooterLinks";
import Footer from "../Components/Footer";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../Context/CartContext/CartContext";
import { useContext } from "react";

export default function Pricing() {
  const { state, dispatch } = useContext(CartContext);
  const navigate = useNavigate();
  const addToCart = (price, type, subscription) => {
    dispatch({
      type: "checkout",
      payload: {
        price: price,
        type: type,
        subscription: subscription,
      },
    });
    navigate("/checkout");
  };
  return (
    <Box>
      <Navbar />
      <Center w="100%" bg="#f3f3f9" pos="relative">
        <Image
          width="10%"
          zIndex="1"
          pos="absolute"
          top="20"
          left="-5"
          src="https://d2of6bhnpl91ni.cloudfront.net/images/site/Pricing_topright-red-splats-a15a235a32.svg"
        />
        <Text as="b" color="#181C47" fontSize="3rem" py={6} align="center">
          Choose your plan
        </Text>
      </Center>
      <Box w="100%">
        <Image src="https://d2of6bhnpl91ni.cloudfront.net/images/site/Hero_bottom-repeat-6af922ddb4.svg" />
      </Box>

      <Tabs>
        <Center w="100%">
          <VStack>
            <Text fontSize="1.2rem" p={49} align="center">
              Prices are shown in Indian Rupee
            </Text>
            <TabList>
              <Tab fontSize="1.5rem" fontWeight="bold">
                ANNUAL
              </Tab>
              <Tab fontSize="1.5rem" fontWeight="Bold">
                MONTHLY
              </Tab>
            </TabList>
            <Text fontSize="1rem" align="center">
              Save up to 50% with an annual subscription
            </Text>
          </VStack>
        </Center>
        <TabPanels>
          <TabPanel>
            <SimpleGrid columns={{ lg: 4, md: 2, sm: 1 }} spacing={12} p={12}>
              <VStack align="start">
                <Text fontSize="3rem" fontWeight="bold">
                  Free
                </Text>
                <Text fontSize="1.2rem" rightIcon={<FaFacebookF />}>
                  Create unlimited videos Free forever!
                </Text>
                <HStack>
                  <Text fontWeight="500" fontSize="4rem">
                    ₹0
                  </Text>
                  <Text fontSize="1.5rem">/month</Text>
                </HStack>
                <Button variant="outline" colorScheme="messenger">
                  SIGN UP FOR FREE
                </Button>
              </VStack>
              <VStack align="start">
                <Text fontSize="3rem" fontWeight="bold">
                  Basic
                </Text>
                <Text fontSize="1.2rem">
                  Create unbranded videos with unlimited downloads
                </Text>
                <HStack>
                  <Text fontWeight="500" fontSize="4rem">
                    ₹290
                  </Text>
                  <Text fontSize="1.5rem">/month</Text>
                </HStack>
                <Text fontSize="1.2rem">Billed as ₹3,480 every year</Text>
                <Button
                  variant="outline"
                  colorScheme="messenger"
                  onClick={() => addToCart("3,480", "Annual", "Basic")}
                >
                  BUY BASIC
                </Button>
              </VStack>
              <VStack align="start">
                <Text fontSize="1.5rem" fontWeight="600" color="yellow.500">
                  Most popular!
                </Text>
                <Text fontSize="3rem" fontWeight="bold">
                  Professional
                </Text>
                <Text fontSize="1.2rem">
                  Create customized videos with proffessional tools
                </Text>
                <HStack>
                  <Text fontWeight="500" fontSize="4rem">
                    ₹560
                  </Text>
                  <Text fontSize="1.5rem">/month</Text>
                </HStack>

                <Text fontSize="1.2rem">Billed as ₹6,730 every year</Text>
                <Button
                  variant="outline"
                  colorScheme="messenger"
                  onClick={() => addToCart("6,730", "Annual", "Professional")}
                >
                  BUY PROFESSIONAL
                </Button>
              </VStack>
              <VStack align="start">
                <Text fontSize="3rem" fontWeight="bold">
                  Professional Plus
                </Text>
                <Text fontSize="1.2rem">
                  Create branded videos at scale with advanced tools
                </Text>
                <HStack>
                  <Text fontWeight="500" fontSize="4rem">
                    ₹1,457
                  </Text>
                  <Text fontSize="1.5rem">/month</Text>
                </HStack>
                <Text fontSize="1.2rem">Billed as ₹17,490 every year</Text>
                <Button
                  variant="outline"
                  colorScheme="messenger"
                  onClick={() =>
                    addToCart("17,490", "Annual", "Professinal Plus")
                  }
                >
                  BUY PROFESSIONAL PLUS
                </Button>
              </VStack>
            </SimpleGrid>
          </TabPanel>
          <TabPanel>
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 4 }} spacing={12} p={12}>
              <VStack align="start">
                <Text fontSize="3rem" fontWeight="bold">
                  Free
                </Text>
                <Text fontSize="1.2rem">
                  Create unlimited videos Free forever!
                </Text>
                <HStack>
                  <Text fontWeight="500" fontSize="4rem">
                    ₹0
                  </Text>
                  <Text fontSize="1.5rem">/month</Text>
                </HStack>
                <Button variant="outline">SIGN UP FOR FREE</Button>
              </VStack>
              <VStack align="start">
                <Text fontSize="3rem" fontWeight="bold">
                  Basic
                </Text>
                <Text fontSize="1.2rem">
                  Create unbranded videos with unlimited downloadsc
                </Text>
                <HStack>
                  <Text fontWeight="500" fontSize="4rem">
                    ₹550
                  </Text>
                  <Text fontSize="1.5rem">/month</Text>
                </HStack>
                <Text fontSize="1.2rem">Billed as ₹550 every month</Text>
                <Button
                  variant="outline"
                  onClick={() => addToCart("550", "Monthly", "Basic")}
                >
                  BUY BASIC
                </Button>
              </VStack>
              <VStack align="start">
                <Text fontSize="1.5rem" fontWeight="600" color="yellow.500">
                  Most popular!
                </Text>

                <Text fontSize="3rem" fontWeight="bold">
                  Professional
                </Text>
                <Text fontSize="1.2rem">
                  Create customized videos with proffessional tools
                </Text>
                <HStack>
                  <Text fontWeight="500" fontSize="4rem">
                    ₹1,080
                  </Text>
                  <Text fontSize="1.5rem">/month</Text>
                </HStack>
                <Text fontSize="1.2rem">Billed as ₹1,080 every month</Text>
                <Button
                  variant="outline"
                  onClick={() => addToCart("1,080", "Monthly", "Professional")}
                >
                  BUY PROFESSIONAL
                </Button>
              </VStack>
              <VStack align="start">
                <Text fontSize="3rem" fontWeight="bold">
                  Professional Plus
                </Text>
                <Text fontSize="1.2rem">
                  Create branded videos at scale with advanced tools
                </Text>
                <HStack>
                  <Text fontWeight="500" fontSize="4rem">
                    ₹2,200
                  </Text>
                  <Text fontSize="1.5rem">/month</Text>
                </HStack>
                <Text fontSize="1.2rem">Billed as ₹2,200 every month</Text>
                <Button
                  variant="outline"
                  onClick={() =>
                    addToCart("2,200", "Monthly", "Professional Plus")
                  }
                >
                  BUY PROFESSIONAL PLUS
                </Button>
              </VStack>
            </SimpleGrid>
          </TabPanel>
        </TabPanels>
      </Tabs>
      <Box>
        <Text align="center" fontWeight="500" fontSize="2rem" p={6}>
          All Plans include
        </Text>
        <SimpleGrid
          columns={{ sm: 1, md: 2, lg: 4 }}
          spacing="auto"
          w="80%"
          m="auto"
          py={6}
          pb={12}
        >
          <Box w="80%" align="center">
            <Image
              w="50%"
              src="https://d2of6bhnpl91ni.cloudfront.net/images/site/unlimited-d000100c75.svg"
            />
            <Text as="b">UNLIMITED VIDEO CREATION</Text>
          </Box>
          <Box w="80%" align="center">
            <Image
              w="50%"
              src="https://d2of6bhnpl91ni.cloudfront.net/images/site/socialsharing-d83289b8ef.svg"
            />
            <Text as="b">SOCIAL SHARING</Text>
          </Box>
          <Box w="80%" align="center">
            <Image
              w="50%"
              src="https://d2of6bhnpl91ni.cloudfront.net/images/site/musiclibrary-2dcac001c8.svg"
            />
            <Text as="b">MUSIC LIBRARY</Text>
          </Box>
          <Box w="80%" align="center">
            <Image
              w="50%"
              src="https://d2of6bhnpl91ni.cloudfront.net/images/site/crossplatform-119e7f990e.svg"
            />
            <Text as="b">AVAILABLE ON DESKTOP AND IOS</Text>
          </Box>
        </SimpleGrid>
      </Box>
      <FooterLinks />
      <Footer />
    </Box>
  );
}
