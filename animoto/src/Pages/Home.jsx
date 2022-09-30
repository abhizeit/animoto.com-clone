import Navbar from "../Components/Navbar";

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
  Center,
  List,
  ListItem,
  SimpleGrid,
} from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import Footer from "../Components/Footer";
import FooterLinks from "../Components/FooterLinks";

export default function Home() {
  return (
    <Box>
      <Navbar />
      {/* ///section 1 */}
      <SimpleGrid p={16} columns={{ sm: 1, md: 2 }} bg="#f3f3f9" spacingY={12}>
        <Box w="80%">
          <VStack align="start">
            <VStack>
              <Text as="b">DO-IT-YOURSELF</Text>
              <Image src="https://animoto.com/static/wavy-e1cf461e1a9e7fed09a8a00a53c93f7f.svg" />
            </VStack>
            <Text as="b" fontSize="4rem">
              Easily make your own videos
            </Text>
            <Text fontSize="1.5rem">
              Join millions of people creating and sharing videos with our easy
              drag and drop video maker. No experience necessary.
            </Text>
            <Button colorScheme="messenger"> GET STARTED FOR FREE</Button>
          </VStack>
        </Box>

        <Center>
          <video
            autoplay="autoplay"
            muted
            loop
            title="naruto"
            src="https://d2of6bhnpl91ni.cloudfront.net/cms/03_New%20Aspirational%20V2_YT_Stream-b0e722c3fc.mp4"
            allowFullScreen
          />
        </Center>
      </SimpleGrid>
      {/* ///section 2 */}
      <Box>
        <Center p="4rem" width="100%">
          <VStack>
            <Box as="b" fontSize="2.5rem">
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
      <SimpleGrid columns={{ sm: 1, md: 3 }} px="6rem" py="4rem">
        <Box align="center">
          <Image src="https://images.ctfassets.net/00i767ygo3tc/58RO6ExjLkW8a6SjV5lx18/18e776a3e0a9ef95bd8064d3c9a08db1/2022-04_SMB-Modules-from-HomePage_LP_Small-Business-removebg-preview.png?w=612&h=572&q=80&fm=webp" />
          <Text as="b">SMALL BUSINESS</Text>
          <Text fontSize="1.2rem">
            Capture attention and engage your audience with professional videos.
          </Text>
          <Link as="b" color="#23408c">
            Learn More
          </Link>
        </Box>

        <Box align="center">
          <Image src="https://images.ctfassets.net/00i767ygo3tc/3IS1ef7FvNE9FXQL0SR714/024a3b2eeefe6a41314abbdea86af677/2022-04_SMB-Modules-from-HomePage_LP_HR-People-Ops-removebg-preview.png?w=612&h=572&q=80&fm=webp" />
          <Text as="b">HR AND PEOPLE OPS</Text>
          <Text fontSize="1.2rem">
            Boost engagement and company culture in hybrid workspaces.
          </Text>
          <Link as="b" color="#23408c">
            Learn More
          </Link>
        </Box>

        <Box align="center">
          <Image src="https://images.ctfassets.net/00i767ygo3tc/58RO6ExjLkW8a6SjV5lx18/18e776a3e0a9ef95bd8064d3c9a08db1/2022-04_SMB-Modules-from-HomePage_LP_Small-Business-removebg-preview.png?w=612&h=572&q=80&fm=webp" />
          <Text as="b">MARKETING AGENCIES</Text>
          <Text fontSize="1.2rem">
            Wow your clients with videos that showcase and promote their brand.
          </Text>
          <Link as="b" color="#23408c">
            Learn More
          </Link>
        </Box>
      </SimpleGrid>
      {/* section4 */}
      <Box w="95%" bg="#f3f3f9" m="auto">
        <Center w="100%" p={6}>
          <VStack>
            <Text as="b" align="center">
              IMAGINE IT. CREATE IT.
            </Text>
            <Text as="b" fontSize="2.5rem" align="center">
              Create quickly with video templates
            </Text>
            <Image
              width="25%"
              src="https://animoto.com/static/wavy-e1cf461e1a9e7fed09a8a00a53c93f7f.svg"
            />
          </VStack>
        </Center>
        <Box py={10}>
          <Center w="100%">
            <Tabs w="90%">
              <TabList>
                <Center w="100%">
                  <Tab as="b">SOCIAL TRENDS</Tab>

                  <Tab as="b">BUSINESS</Tab>

                  <Tab as="b">PROMO VIDEOS</Tab>
                </Center>
              </TabList>

              <TabPanels>
                <TabPanel>
                  <SimpleGrid
                    columns={{ sm: 1, md: 3, lg: 3 }}
                    spacingY={6}
                    spacingX={6}
                  >
                    <Box>
                      <VStack align="start">
                        <Image src="https://images.ctfassets.net/00i767ygo3tc/asset-sktwi7jfjxrnhft5/42bf42308d5b26a2fb1a15a89bba7c0c/Make-a-facebook-video-_2x-1b91f5bc33.jpg?w=525&h=295&q=50&fm=webp" />
                        <Text as="b" py={5}>
                          TELL A TRAVEL STORY
                        </Text>
                        <Button colorScheme="messenger">
                          USE THIS TEMPLATE
                        </Button>
                      </VStack>
                    </Box>

                    <Box>
                      <VStack align="start">
                        <Image src="https://images.ctfassets.net/00i767ygo3tc/2yEqvP358BvnUdigwAVlV2/2e7ebccf696d147107107522a1a71b09/Trend_Story.jpg?w=525&h=295&q=50&fm=webp" />
                        <Text as="b" py={5}>
                          TRENDING TOPIC
                        </Text>
                        <Button colorScheme="messenger">
                          USE THIS TEMPLATE
                        </Button>
                      </VStack>
                    </Box>

                    <Box>
                      <VStack align="start">
                        <Image src="https://images.ctfassets.net/00i767ygo3tc/1kDoozfRhRamTTcZsuzKMG/a078ab26d8aeed5c00701c7978d9e24a/make_your_own_monday_motivation_video.jpg?w=525&h=295&q=50&fm=webp" />
                        <Text as="b" py={5}>
                          #MONDAYMOTIVATION
                        </Text>
                        <Button colorScheme="messenger">
                          USE THIS TEMPLATE
                        </Button>
                      </VStack>
                    </Box>
                  </SimpleGrid>
                </TabPanel>
                <TabPanel>
                  <SimpleGrid
                    columns={{ sm: 1, md: 3 }}
                    spacingY={6}
                    spacingX={6}
                  >
                    <Box>
                      <VStack align="start">
                        <Image src="https://images.ctfassets.net/00i767ygo3tc/asset-sktwi7jfjxrnhft8/3cd037d0f2be2f512214e75dee69eddb/Real_Estate_Listing.jpg?w=525&h=295&q=50&fm=webp" />
                        <Text as="b" py={5}>
                          REAL ESTATE LISTING
                        </Text>
                        <Button colorScheme="messenger">
                          USE THIS TEMPLATE
                        </Button>
                      </VStack>
                    </Box>

                    <Box>
                      <VStack align="start">
                        <Image src="https://images.ctfassets.net/00i767ygo3tc/asset-sktwi7jfjxrnhft9/fa0945721778cd756f0293c59ba36620/Digital_Album.jpg?w=525&h=295&q=50&fm=webp" />
                        <Text as="b" py={5}>
                          DIGITAL ALBUM
                        </Text>
                        <Button colorScheme="messenger">
                          USE THIS TEMPLATE
                        </Button>
                      </VStack>
                    </Box>

                    <Box>
                      <VStack align="start">
                        <Image src="https://images.ctfassets.net/00i767ygo3tc/asset-sktwi7jfjxrnhfta/3f9e77def9ea8ddec5b1bfdf25e3f1e7/About_Us.jpg?w=525&h=295&q=50&fm=webp" />
                        <Text as="b" py={5}>
                          ABOUT US
                        </Text>
                        <Button colorScheme="messenger">
                          USE THIS TEMPLATE
                        </Button>
                      </VStack>
                    </Box>
                  </SimpleGrid>
                </TabPanel>
                <TabPanel>
                  <SimpleGrid
                    columns={{ sm: 1, md: 3 }}
                    spacingY={6}
                    spacingX={6}
                  >
                    <Box>
                      <VStack align="start">
                        <Image src="https://images.ctfassets.net/00i767ygo3tc/asset-sktwi7jfjxrnhftb/2db5197bda4b725b384182bd0a10587a/New_Launch_Promo.jpg?w=525&h=295&q=50&fm=webp" />
                        <Text as="b" py={5}>
                          NEW LAUNCH PROMO
                        </Text>
                        <Button colorScheme="messenger">
                          USE THIS TEMPLATE
                        </Button>
                      </VStack>
                    </Box>

                    <Box>
                      <VStack align="start">
                        <Image src="https://images.ctfassets.net/00i767ygo3tc/asset-sktwi7jfjxrnhftc/90b05ace043ddbc3f9a1c30b88e1a4bc/Collection_Portfolio.jpg?w=525&h=295&q=50&fm=webp" />
                        <Text as="b" py={5}>
                          COLLECTION PORTFOLIO
                        </Text>
                        <Button colorScheme="messenger">
                          USE THIS TEMPLATE
                        </Button>
                      </VStack>
                    </Box>

                    <Box>
                      <VStack align="start">
                        <Image src="https://images.ctfassets.net/00i767ygo3tc/asset-sktwi7jfjxrnhftd/9a94be4c48398ceb3c23b40469d82fe5/Bite_Sized_Product_Intro.jpg?w=525&h=295&q=50&fm=webp" />
                        <Text as="b" py={5}>
                          NEW LAUNCH PROMO
                        </Text>
                        <Button colorScheme="messenger">
                          BITE-SIZED PRODUCT INTRO
                        </Button>
                      </VStack>
                    </Box>
                  </SimpleGrid>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Center>
        </Box>
        <Center w="100%" pb={6}>
          <Link as="b" color="#23408c" fontSize="xl">
            SEE ALL TEMPLATES
          </Link>
        </Center>
      </Box>
      <Box p={10} margin="auto" align="center">
        <Center w="100%" p={6}>
          <VStack>
            <Text as="b" fontSize="2.5rem">
              Everything you need to create stunning videos
            </Text>
            <Image
              width="25%"
              src="https://animoto.com/static/wavy-e1cf461e1a9e7fed09a8a00a53c93f7f.svg"
            />
          </VStack>
        </Center>
      </Box>
      <SimpleGrid
        columns={{ sm: 1, md: 2 }}
        py={8}
        spacingX={16}
        spacingY={8}
        w="85%"
        m="auto"
      >
        <Center alignItems="center">
          <VStack align="start">
            <Text as="b" fontSize="2.5rem">
              Stock images and music at your fingertips
            </Text>
            <Text fontSize="1.5rem">
              Save time and money tracking down stock media with our built-in
              library of millions of photos, video clips, and graphics from
              Getty Images. Set the mood with one of 3,000+ licensed songs.
            </Text>
            <Button colorScheme="messenger" variant="outline">
              GET STARTED FOR FREE
            </Button>
          </VStack>
        </Center>

        <Center>
          <video
            autoplay="autoplay"
            muted
            loop
            title="naruto"
            src="https://d2of6bhnpl91ni.cloudfront.net/cms/2022-08_StockGraphic_Homepage_A3_ForAnimation-735d643160.mp4"
            allowFullScreen
          />
        </Center>
      </SimpleGrid>

      <SimpleGrid
        columns={{ sm: 1, md: 2 }}
        py={8}
        spacingX={16}
        spacingY={8}
        w="85%"
        m="auto"
      >
        <Center>
          <video
            autoplay="autoplay"
            muted
            loop
            title="naruto"
            src="https://d2of6bhnpl91ni.cloudfront.net/cms/2022-08_EasyCustomization_Homepage_A3_FINAL-6b892ce006.mp4"
            allowFullScreen
          />
        </Center>

        <Center>
          <VStack align="start">
            <Text as="b" fontSize="2.5rem">
              Easy customization tools
            </Text>
            <Text fontSize="1.5rem">
              Make each video your own with intuitive color, font, and design
              tools. Add your logo as a watermark to build brand awareness
            </Text>
            <Button colorScheme="messenger" variant="outline">
              {" "}
              GET STARTED FOR FREE
            </Button>
          </VStack>
        </Center>
      </SimpleGrid>
      <SimpleGrid
        columns={{ sm: 1, md: 2 }}
        py={8}
        spacingX={16}
        spacingY={8}
        w="85%"
        m="auto"
      >
        <Center>
          <VStack align="start">
            <Text as="b" fontSize="2.5rem">
              Unlimited video creation
            </Text>
            <Text fontSize="1.5rem">
              Create square, landscape, and vertical videos to share to social
              media and beyond. There are no creation limits on any Animoto
              plan.
            </Text>
            <Button colorScheme="messenger" variant="outline">
              {" "}
              GET STARTED FOR FREE
            </Button>
          </VStack>
        </Center>

        <Center>
          <video
            autoplay="autoplay"
            muted
            loop
            title="naruto"
            src="https://d2of6bhnpl91ni.cloudfront.net/cms/2022-08_UnlimtedCreation_Homepage_A3_FINAL-653c9a7b73.mp4"
            allowFullScreen
          />
        </Center>
      </SimpleGrid>

      {/* //tesimonials */}
      <Box p={10} margin="auto">
        <Center w="100%" p={6}>
          <VStack>
            <Text as="b" fontSize="2.5rem" align="center">
              Hear from our customers
            </Text>
            <Image
              width="25%"
              src="https://animoto.com/static/wavy-e1cf461e1a9e7fed09a8a00a53c93f7f.svg"
            />
          </VStack>
        </Center>
      </Box>
      <SimpleGrid
        columns={{ sm: 1, md: 1, lg: 3 }}
        w="80%"
        margin="auto"
        spacingX={16}
        spacingY={10}
      >
        <VStack>
          <Image src="https://images.ctfassets.net/00i767ygo3tc/5BqRKnEuMFaOAav2D4vSSJ/f9c069faa5c0f8f8831f4f7f6463d351/TestimonialOneIllustration.png?w=320&h=299&q=80&fm=webp" />
          <Text as="b">MATT CAVALLARO</Text>
          <Text align="center">
            “Running our Animoto video on Facebook and Instagram not only
            increased awareness of the Nest brand, but we also made 4x our usual
            online sales.”
          </Text>
        </VStack>

        <VStack>
          <Image src="https://images.ctfassets.net/00i767ygo3tc/1TuMlRQQJMVXTOy7ZjjuPl/ac0c443010035659113644460fb34f81/TestimonialTwoIllustration.png?w=320&h=299&q=80&fm=webp" />
          <Text as="b">REBECCA FANCHER</Text>
          <Text align="center">
            “Our Animoto video was a quick way for us to let our audience know
            about our event, and show them how simple it was to register or
            donate. Plus, we can easily adjust our video so they work on all
            platforms. A true time-saver.”
          </Text>
        </VStack>

        <VStack>
          <Image src="https://images.ctfassets.net/00i767ygo3tc/bqjxtmuX7vs1uFe4uasV1/ef5338ce6588039752c6aff8fe89b843/TestimonialThreeIllustration.png?w=320&h=299&q=80&fm=webp" />
          <Text as="b">MARY MANNIX</Text>
          <Text align="center">
            “Animoto helps me to build a stronger brand in the competitive real
            estate marketplace, and their real estate templates make it easy for
            me to create listings videos and virtual tours.”
          </Text>
        </VStack>
      </SimpleGrid>

      <Box py={16}>
        <Center w="100%">
          <Text as="b">PARTNER OF </Text>
        </Center>
        <SimpleGrid
          columns={{ sm: 2, md: 5, lg: 5 }}
          spacingX={8}
          width="60%"
          m="auto"
          py={16}
        >
          <Box>
            <Image src="https://animoto.com/static/FacebookPartnerIcon-4f675b081bec613dbac01a85deceacb3.svg" />
          </Box>
          <Box>
            <Image src="https://animoto.com/static/YoutubePartnerIcon-c1d64a90323f18e6780043bcfcd98978.svg" />
          </Box>
          <Box>
            <Image src="https://animoto.com/static/LinkedinPartnerIcon-24d62148b51dffedabf037a759749c64.svg" />
          </Box>
          <Box>
            <Image src="https://animoto.com/static/TwitterPartnerIcon-ec004db8d46ae33366ce5ce169fa44ee.svg" />
          </Box>
          <Box>
            <Image src="	https://animoto.com/static/HubspotPartnerIcon-c7fb5a3e97b9754634f47b1680b8deb9.svg" />
          </Box>
        </SimpleGrid>
      </Box>
      <Center w="100%" bg="#23408c" py={16}>
        <VStack spacing={10}>
          <Text as="b" fontSize="4rem" align="center">
            Make your first video today
          </Text>
          <Image
            width="25%"
            src="https://animoto.com/static/wavy-e1cf461e1a9e7fed09a8a00a53c93f7f.svg"
          />
          <Text color="white" as="b" align="center" fontSize="1.2rem">
            Create and share videos for free. Upgrade anytime for more
            customization.
          </Text>
          <Button bg="white" color="#23408c">
            GET STARTED FREE
          </Button>
          <Link as="b" color="white">
            SEE PRICING
          </Link>
        </VStack>
      </Center>

      {/* //footer */}
      <FooterLinks />
      <Footer />
    </Box>
  );
}
