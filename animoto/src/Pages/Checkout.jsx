import React from "react";
import {
  Box,
  Button,
  Center,
  Divider,
  Flex,
  HStack,
  Image,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText, Input
} from '@chakra-ui/react'
import AlertDialog from "./CheckOutDialog";
export default function Checkout() {
  return (
    <Center
      margin="auto"
      w="80%"
      p={16}
      mt={8}
      boxShadow="dark-lg"
      bg="#F3f3F9"
      borderRadius="md"
    >
      <Box width="50%" boxShadow="base" p={10}>
          <form >
      <FormLabel >Card Number</FormLabel>
      <Input boxShadow="base" type="password" maxLength="16" min={16}/>
      <FormLabel>Expiry</FormLabel>
      <Input boxShadow="base" type="date"/>
     <FormLabel >CVV</FormLabel>
     <Input  boxShadow="base" maxLength="3" type="password"/>
      <FormLabel >Postal Code</FormLabel>
      <Input  boxShadow="base" maxLength="6" type="text"/>

     </form>
      </Box>
   

      <Box w="40%" p={16}>
        <Text fontSize="2rem" fontWeight="600" color="#181C47" align="center">
          Your Order Summary
        </Text>
        <Divider />
        <Flex pt={4}>
          <Box>
            <Text>Annual subscription:</Text>
            <Text>Animoto Basic</Text>
          </Box>
          <Spacer />
          <Box>₹3,480</Box>
        </Flex>
        <Text py={6} align="start">
          ₹290/mo billed as ₹3,480/year.
        </Text>

        <Flex pt={4}>
          <Box>
            <Divider color="black" />
            <Text fontSize="2rem" fontWeight="600" color="#181C47">
              Total:
            </Text>
          </Box>
          <Spacer />
          <Box fontSize="2rem" fontWeight="600" color="#181C47">
            ₹3,480
          </Box>
        </Flex>
        <Divider />
        <Center py={6}>
          <AlertDialog/>
        </Center>
        <Text align="center">
          By purchasing, you agree to the terms of service and privacy policy.
        </Text>
      </Box>
    </Center>
  );
}
