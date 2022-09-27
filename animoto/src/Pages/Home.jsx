import {
  Box,
  Image,
  Link,
  HStack,
  Flex,
  Spacer,
  VStack,
  Text,
  Button,
  AspectRatio,
  Center,
} from "@chakra-ui/react";

export default function Home() {
  return (
    <Box>
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
              <Link as="b" color="#23408c" fontSize="xl">
                LOG IN
              </Link>
              <Link as="b" color="#23408c" fontSize="xl">
                SIGN UP FOR FREE
              </Link>
            </HStack>
          </Box>
        </Flex>
      </Box>
      {/* ///section 1 */}
      <Box p={16} bg="#f3f3f9">
        <Flex>
          <Box width="40%">
            <VStack align="start">
              <HStack>
                <Text as="b">DO-IT-YOURSELF</Text>
                <Image src="https://animoto.com/static/wavy-e1cf461e1a9e7fed09a8a00a53c93f7f.svg" />
              </HStack>
              <Text as="b" fontSize="4rem">
                Easily make your own videos
              </Text>
              <Text fontSize="1.5rem">
                Join millions of people creating and sharing videos with our
                easy drag and drop video maker. No experience necessary.
              </Text>
              <Button colorScheme="messenger"> GET STARTED FOR FREE</Button>
            </VStack>
          </Box>
          <Spacer />
          <Center width="50%">
            <video
              autoplay="autoplay"
              muted
              loop
              title="naruto"
              src="https://d2of6bhnpl91ni.cloudfront.net/cms/03_New%20Aspirational%20V2_YT_Stream-b0e722c3fc.mp4"
              allowFullScreen
            />
          </Center>
        </Flex>
      </Box>
      {/* ///section 2 */}
      <Box>
        <Center py="4rem" width="100%">
          <VStack>
            <Box as="b" fontSize="2rem">
              Put video to work for your business
            </Box>
            <Image
              width="25%"
              src="https://animoto.com/static/wavy-e1cf461e1a9e7fed09a8a00a53c93f7f.svg"
            />
          </VStack>
        </Center>
      </Box>
      {/* section 3 */}
      <Box px="6rem" py="4rem" >
        <Flex >
          <Box width="25%" align="center">
            <Image src="https://images.ctfassets.net/00i767ygo3tc/58RO6ExjLkW8a6SjV5lx18/18e776a3e0a9ef95bd8064d3c9a08db1/2022-04_SMB-Modules-from-HomePage_LP_Small-Business-removebg-preview.png?w=612&h=572&q=80&fm=webp" />
            <Text as="b">SMALL BUSINESS</Text>
            <Text fontSize="1.2rem">
              Capture attention and engage your audience with professional
              videos.
            </Text>
            <Link as="b" color="#23408c">
              Learn More
            </Link>
          </Box>
          <Spacer />
          <Box width="25%" align="center">
            <Image src="https://images.ctfassets.net/00i767ygo3tc/3IS1ef7FvNE9FXQL0SR714/024a3b2eeefe6a41314abbdea86af677/2022-04_SMB-Modules-from-HomePage_LP_HR-People-Ops-removebg-preview.png?w=612&h=572&q=80&fm=webp" />
            <Text as="b">HR AND PEOPLE OPS</Text>
            <Text fontSize="1.2rem">
              Boost engagement and company culture in hybrid workspaces.
            </Text>
            <Link as="b" color="#23408c">
              Learn More
            </Link>
          </Box>
          <Spacer />
          <Box width="25%" align="center">
            <Image src="https://images.ctfassets.net/00i767ygo3tc/58RO6ExjLkW8a6SjV5lx18/18e776a3e0a9ef95bd8064d3c9a08db1/2022-04_SMB-Modules-from-HomePage_LP_Small-Business-removebg-preview.png?w=612&h=572&q=80&fm=webp" />
            <Text as="b">MARKETING AGENCIES</Text>
            <Text fontSize="1.2rem">
              Wow your clients with videos that showcase and promote their
              brand.
            </Text>
            <Link as="b" color="#23408c">
              Learn More
            </Link>
          </Box>
        </Flex>
      </Box>
      {/* section4 */}
      <Box>
        
      </Box>
    </Box>
  );
}
