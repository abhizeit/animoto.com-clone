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
import { CartContext } from "../Context/CartContext/CartContext";
import { useContext } from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText, Input
} from '@chakra-ui/react'
import AlertDialog from "./CheckOutDialog";
export default function Checkout() {
  const {state}= useContext(CartContext);
  console.log(state)
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
            <Text>{state.type} subscription:</Text>
            <Text>Animoto {state.subscription}</Text>
          </Box>
          <Spacer />
          <Box>₹{state.price}</Box>
        </Flex>
        <Text py={6} align="start">
        {`Billed as ₹${state.price} every ${state.type=="Annual"?"year":"month"}`}
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
          ₹{state.price}
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
