import {
  Box,
  Button,
  Center,
  Divider,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import Navbar from "../Components/Navbar";
import { FaFacebook, FaFacebookF } from "react-icons/fa";

export default function Pricing() {
  return (
    <Box>
      <Navbar />
      <Center w="100%">
        <Text as="b" color="#181C47" fontSize="3rem" py={6}>
          Choose your plan
        </Text>
      </Center>
      <Center w="100%">
        <VStack p={10}>
          <HStack spacing={10}>
            <Text fontSize="2rem">Get started with a free account</Text>
            <Button colorScheme="messenger" fontWeight="300" bg="#23408c">
              SIGN UP FOR FREE
            </Button>
          </HStack>
        </VStack>
      </Center>
      <Tabs>
        <Center w="100%">
          <VStack>
            <Text fontSize="1.2rem" p={49}>
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
            <Text fontSize="1rem">
              Save up to 50% with an annual subscription
            </Text>
          </VStack>
        </Center>
        <TabPanels>
          <TabPanel>
            <HStack spacing={12} p={12}>
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
                  Create unbranded videos with unlimited downloadsc
                </Text>
                <HStack>
                  <Text fontWeight="500" fontSize="4rem">
                    ₹290
                  </Text>
                  <Text fontSize="1.5rem">/month</Text>
                </HStack>
                <Text fontSize="1.2rem">Billed as ₹3,480 every year</Text>
                <Button variant="outline" colorScheme="messenger">
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
                <Button variant="outline" colorScheme="messenger">
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
                <Button variant="outline" colorScheme="messenger">
                  BUY PROFESSIONAL PLUS
                </Button>
              </VStack>
            </HStack>
          </TabPanel>
          <TabPanel>
            <HStack spacing={12} p={12}>
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
                <Button variant="outline">BUY BASIC</Button>
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
                <Button variant="outline">BUY PROFESSIONAL</Button>
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
                <Button variant="outline">BUY PROFESSIONAL PLUS</Button>
              </VStack>
            </HStack>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}
