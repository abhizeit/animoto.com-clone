import { Box, Center, VStack, Text,Image } from "@chakra-ui/react";

export default function Footer() {
  return (<Box p={6} bg="#232323">
      <Center w="100%">
        <VStack>
          <Image src="https://animoto.com/static/Logo-769512d18812f2135069123e6840b976.svg" />
          <Text  color="grey"> © 2022 Animoto Inc. All Rights Reserved.</Text>
        </VStack>
      </Center>
    </Box>
  );
}
