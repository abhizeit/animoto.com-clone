import { Box, Button, Center, Divider, HStack, Text, VStack } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import Navbar from "../Components/Navbar";

export default function Pricing() {
  return (
    <Box>
      <Navbar />
      <Center w="100%">
        <Text as="b" color="#181C47" fontSize="3rem">
          Choose your plan
        </Text>
      </Center>
      <Center w="100%">
        <VStack>
          <HStack>
            <Text>Get started with a free account</Text>{" "}
            <Button>SIGN UP FOR FREE</Button>
          </HStack>
          <Text>Prices are shown in Indian Rupee</Text>
        </VStack>
      </Center>
      <Tabs>
        
          <Center w="100%">
          <TabList>
            <Tab fontSize="1.5rem" fontWeight="bold">ANNUAL</Tab>
          <Tab fontSize="1.5rem" fontWeight="Bold">MONTHLY</Tab>
          </TabList>
          </Center>
          
       

        <TabPanels>
          <TabPanel>
          <HStack spacing={12} p={12}>
            <VStack align="start">
              <Text>Free</Text>
              <Text>Create unlimited videos Free forever!</Text>
              <Text>₹0/month</Text>
              <Button variant="outline">SIGN UP FOR FREE</Button>
            </VStack>
            <VStack align="start">
              <Text>Basic</Text>
              <Text>Create unbranded videos with unlimited downloadsc</Text>
              <Text>₹290 /month</Text>
              <Text>Billed as ₹3,480 every year</Text>
              <Button variant="outline">BUY BASIC</Button>
            </VStack>
            <VStack align="start">
              <Text>Most popular!</Text>

              <Text>Professional</Text>
              <Text>Create customized videos with proffessional tools</Text>
              <Text>₹56083 /month</Text>
              <Text>Billed as ₹6,730 every year</Text>
              <Button variant="outline">BUY PROFESSIONAL</Button>

            </VStack>
            <VStack align="start">
             

              <Text>Professional Plus</Text>
              <Text>Create branded videos at scale with advanced tools</Text>
              <Text>₹1,45750 /month</Text>
              <Text>Billed as ₹17,490 every year</Text>
              <Button variant="outline">BUY PROFESSIONALn PLUS</Button>

            </VStack>

          </HStack>
          </TabPanel>
          <TabPanel>
          <HStack spacing={12} p={12}>
            <VStack align="start">
              <Text fontSize="3rem" fontWeight="bold">Free</Text>
              <Text>Create unlimited videos Free forever!</Text>
              <Text>₹0/month</Text>
              <Button variant="outline">SIGN UP FOR FREE</Button>
            </VStack>
            <VStack align="start">
              <Text fontSize="3rem" fontWeight="bold">Basic</Text>
              <Text>Create unbranded videos with unlimited downloadsc</Text>
              <Text>₹550 /month</Text>
              <Text>Billed as ₹550 every month</Text>
              <Button variant="outline">BUY BASIC</Button>
            </VStack>
            <VStack align="start">
              <Text>Most popular!</Text>

              <Text fontSize="3rem" fontWeight="bold">Professional</Text>
              <Text>Create customized videos with proffessional tools</Text>
              <Text>₹1,080 /month</Text>
              <Text>Billed as ₹1,080 every month</Text>
              <Button variant="outline">BUY PROFESSIONAL</Button>

            </VStack>
            <VStack align="start">
              <Text fontSize="3rem" fontWeight="bold">Professional Plus</Text>
              <Text>Create branded videos at scale with advanced tools</Text>
              <HStack ><Text fontWeight="500" fontSize="4rem">₹2,200 </Text><Text fontSize="1.5rem">/month</Text></HStack>
              <Text>Billed as ₹2,200 every month</Text>
              <Button variant="outline">BUY PROFESSIONAL PLUS</Button>

            </VStack>

          </HStack>
          </TabPanel>
      
        </TabPanels>
      </Tabs>
    </Box>
  );
}
