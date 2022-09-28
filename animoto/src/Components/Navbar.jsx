import { Link as ReachLink } from "react-router-dom";

import {
  Box,
  Image,
  Link,
  HStack,
  Flex,
  Spacer
} from "@chakra-ui/react";

export default function Navbar() {
  return (
    <Box
      w="100%"
      px={10}
      py={5}
      backgroundRepeat="no-repeat"
      backgroundImage="url('	https://animoto.com/static/AnimotoLogoBlobs-afa5652205594807da50c94d53f42b86.svg')"
    >
      <Flex>
        <Box>
          <HStack spacing="24px">
            <Image
              height="100%"
              objectFit="cover"
              src="https://animoto.com/static/logo-1d220e413f4f69fa42d66d93381db371.svg"
              alt="Dan Abramov"
            />
            <HStack spacing="24px">
              <Link as="b" color="#23408c" fontSize="xl">
                Create
              </Link>
              <Link as="b" color="#23408c" fontSize="xl">
                Template
              </Link>
              <Link as="b" color="#23408c" fontSize="xl">
                Features
              </Link>
              <Link as="b" color="#23408c" fontSize="xl">
                Pricing
              </Link>
            </HStack>
          </HStack>
        </Box>
        <Spacer />
        <Box>
          <HStack spacing="24px">
            <Link
              as={ReachLink}
              to="/login"
              color="#23408c"
              fontSize="xl"
              fontWeight="bold"
            >
              LOG IN
            </Link>
            <Link as={ReachLink}
              to="/signup"
              color="#23408c"
              fontSize="xl"
              fontWeight="bold">
              SIGN UP FOR FREE
            </Link>
          </HStack>
        </Box>
      </Flex>
    </Box>
  );
}
