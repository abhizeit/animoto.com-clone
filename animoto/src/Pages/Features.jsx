import Navbar from "../Components/Navbar";
import { FaImages } from "react-icons/fa";
import Footer from "../Components/Footer";

import {
  Box,
  Text,
  Center,
  VStack,
  Image,
  Button,
  Flex,
  Grid,
  GridItem,
  Spacer,
  HStack,
  Link,
  ListItem,List
} from "@chakra-ui/react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { Link as ReachLink } from "react-router-dom";
export default function Features() {
  return (
    <Box>
      <Navbar />
      <Box>
        <Center w="100%" bg="#fddbcc" p={8} pos="relative">
          <Image
            w="10%"
            pos="absolute"
            top="0"
            left="0"
            src="https://animoto.com/static/UpperLeftRedBlue-63b6ee2eca1e536576fa136c918c1c54.svg"
          />
          <VStack w="40%">
            <Text as="b">DO-IT-YOURSELF</Text>
            <Image
              w="30%"
              src="https://animoto.com/static/wavy-e1cf461e1a9e7fed09a8a00a53c93f7f.svg"
            />
            <Text fontSize="4rem" as="b" align="center">
              Online Video Editor
            </Text>
            <Text align="center" fontSize="1.5rem" pb={10}>
              Powerful features that make video editing easy. Create and
              customize your own videos with Animoto’s easy-to-use online video
              editor. No experience necessary.
            </Text>
            <Button
              bg="#23408c"
              colorScheme="messenger"
              align="center"
              size="lg"
            >
              GET STARTED FREE
            </Button>
          </VStack>
          <Image
            w="20%"
            pos="absolute"
            bottom="-20"
            right="0"
            src="https://animoto.com/static/LowerRightTealYellow-944790b2ec1f2d1d569c799113cbfc41.svg"
          />
        </Center>
        <img
          h="100px"
          src="	https://animoto.com/static/desktop-wiggle-light-peach-315f22fa71d8e1157ff20595589df76e.svg"
          alt=""
        />
      </Box>
      <Box p={16}>
        <Text fontWeight="500" fontSize="2.5rem" align="start" w="40%">
          {" "}
          Everything you need to create stunning videos
        </Text>
        <Image
          py={5}
          w="18%"
          src="https://animoto.com/static/wavy-e1cf461e1a9e7fed09a8a00a53c93f7f.svg"
        />
        <Flex>
          <Grid w="50%" templateColumns="repeat(2, 1fr)" gap={6}>
            <GridItem w="100%">
              <HStack>
                <svg
                  class="MarketingIcon-module--icon--1daoz"
                  height="100%"
                  role="img"
                  viewBox="0 0 48 48"
                  width="20%"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.5 8.5h38v38h-38z"
                    fill="none"
                    stroke="#181c47"
                    stroke-miterlimit="10"
                    stroke-width="2"
                  ></path>
                  <path
                    d="M8.11 39.83c4.19.76 11.31.58 19.28-5.87l.23-.19A41.42 41.42 0 0 1 46.5 25"
                    fill="none"
                    stroke="#181c47"
                    stroke-miterlimit="10"
                    stroke-width="2"
                  ></path>
                  <circle
                    cx="21.18"
                    cy="19.46"
                    fill="none"
                    r="4"
                    stroke="#181c47"
                    stroke-miterlimit="10"
                    stroke-width="2"
                  ></circle>
                  <path
                    d="M8.5 29c4.59-.24 12.1.27 18.89 4.92M7.5 39.5h-6v-38h38v6"
                    fill="none"
                    stroke="#181c47"
                    stroke-miterlimit="10"
                    stroke-width="2"
                  ></path>
                </svg>
                <Text as="b" p={6}>
                  STOCK LIBRARY
                </Text>
              </HStack>
              <Text align="start" fontSize="1.3rem">
                Save time and money tracking down stock with our built-in
                library of millions of photos and videos from Getty Images.
              </Text>
              <Link align="start" fontSize="1.1rem" as="b">
                LEARN MORE
              </Link>
            </GridItem>
            <GridItem w="100%">
              {" "}
              <HStack>
                <svg
                  class="MarketingIcon-module--icon--1daoz"
                  height="100%"
                  role="img"
                  viewBox="0 0 48 48"
                  width="30%"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.81 19.79h29.44v20.44H11.81z"
                    fill="none"
                    stroke="#181c47"
                    stroke-miterlimit="10"
                    stroke-width="2"
                  ></path>
                  <path
                    d="M30.04 30.01l-7 3.97v-7.94l7 3.97z"
                    fill="none"
                    stroke="#181c47"
                    stroke-miterlimit="10"
                    stroke-width="2"
                  ></path>
                  <path
                    d="M11.82 33.86L6.9 35.19 1.57 15.45 30 7.77l3.25 12.02m11.43-13.8l-4.89 4.89M48 15.05h-6.92M35.62 2.67v6.91"
                    fill="none"
                    stroke="#181c47"
                    stroke-miterlimit="10"
                    stroke-width="2"
                  ></path>
                </svg>
                <Text as="b" p={6}>
                  PHOTOS AND VIDEO CLIPS
                </Text>
              </HStack>
              <Text align="start" fontSize="1.3rem">
                Upload your own images and video clips with ease. Then drag and
                drop right into your project.
              </Text>
              <Link align="start" fontSize="1.1rem" as="b">
                LEARN MORE
              </Link>
            </GridItem>
            <GridItem w="100%">
              {" "}
              <HStack>
                <svg
                  class="MarketingIcon-module--icon--1daoz"
                  height="100%"
                  role="img"
                  viewBox="0 0 48 48"
                  width="20%"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    fill="none"
                    height="27"
                    rx="4"
                    ry="4"
                    stroke="#181c47"
                    stroke-linecap="square"
                    stroke-miterlimit="10"
                    stroke-width="2"
                    transform="rotate(90 24 24)"
                    width="46"
                    x="1"
                    y="10.5"
                  ></rect>
                  <path
                    d="M20.75 5h6.5m.74 19l-7 3.97v-7.94l7 3.97z"
                    fill="none"
                    stroke="#181c47"
                    stroke-miterlimit="10"
                    stroke-width="2"
                  ></path>
                  <path
                    d="M10.5 9h27v30h-27z"
                    fill="none"
                    stroke="#181c47"
                    stroke-linecap="square"
                    stroke-miterlimit="10"
                    stroke-width="2"
                  ></path>
                </svg>
                <Text as="b" p={6}>
                  CREATE ANYWHERE
                </Text>
              </HStack>
              <Text align="start" fontSize="1.3rem">
                Log in from a Mac or PC using your preferred browser. All your
                videos will be ready for you in our cloud-based video editor.
              </Text>
              <Link align="start" fontSize="1.1rem" as="b">
                LEARN MORE
              </Link>
            </GridItem>
            <GridItem w="100%">
              {" "}
              <HStack>
                <svg
                  class="MarketingIcon-module--icon--1daoz"
                  height="100%"
                  role="img"
                  viewBox="0 0 48 48"
                  width="20%"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M29.31 33.65a2.45 2.45 0 1 1 2.45-2.45 2.45 2.45 0 0 1-2.45 2.45zm-13.56 1.64a2.45 2.45 0 1 1 2.45-2.45 2.45 2.45 0 0 1-2.45 2.45zm16.01-13.43L18.2 23.5"
                    fill="none"
                    stroke="#181c47"
                    stroke-miterlimit="10"
                    stroke-width="2"
                  ></path>
                  <path
                    d="M18.2 32.84V20.16a2 2 0 0 1 1.8-1.82l10-1.2a1.49 1.49 0 0 1 1.79 1.38V31.2"
                    fill="none"
                    stroke="#181c47"
                    stroke-miterlimit="10"
                    stroke-width="2"
                  ></path>
                  <path
                    d="M1 11h46v30H1zm0-6v6h16.02l-1.36-6H1z"
                    fill="none"
                    stroke="#181c47"
                    stroke-linecap="square"
                    stroke-miterlimit="10"
                    stroke-width="2"
                  ></path>
                </svg>
                <Text as="b" p={6}>
                  MUSIC LIBRARY
                </Text>
              </HStack>
              <Text align="start" fontSize="1.3rem">
                Select a song to add to your video from our library of thousands
                of licensed tracks.
              </Text>
              <Link align="start" fontSize="1.1rem" as="b">
                LEARN MORE
              </Link>
            </GridItem>
          </Grid>
          <Spacer />
          <Center width="45%">
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

      <Box p={16}>
        <Center w="100%" p={6}>
          <VStack>
            <Text pb={10} as="b">
              MAKE IT YOUR OWN
            </Text>
            <Text as="b" fontSize="2.5rem">
              Customize to fit your brand
            </Text>
            <Image
              width="15%"
              src="https://animoto.com/static/wavy-e1cf461e1a9e7fed09a8a00a53c93f7f.svg"
            />
            <Text p={10} align="center" fontSize="1.5rem" w="60%">
              Create videos tailor-made for your needs. Our flexible tools are
              easy-to-use and put the controls in your hands.
            </Text>
            <video
              width="70%"
              autoplay="autoplay"
              muted
              loop
              title="naruto"
              src="https://d2of6bhnpl91ni.cloudfront.net/cms/2022-08_FeaturesPage_CustomizeToFitYourBrand-6ab0b60f6e.mp4"
              allowFullScreen
            />
          </VStack>
        </Center>
      </Box>
      <Box p={16}>
        <Center w="100%" p={6}>
          <VStack>
            <Text pb={10} as="b">
              TAKE THE NEXT STEP
            </Text>
            <Text as="b" fontSize="2.5rem">
              Share your video with the world
            </Text>
            <Image
              width="15%"
              src="https://animoto.com/static/wavy-e1cf461e1a9e7fed09a8a00a53c93f7f.svg"
            />
          </VStack>
        </Center>
        <Box px="6rem" py="4rem">
          <Flex>
            <Box width="25%" align="center">
              <Image
                w="60%"
                src="https://animoto.com/static/HandPhoneIllustration-2993f3742d804c7c323e94436bbaa88e.svg"
              />
              <Text as="b">ON SOCIAL MEDIA</Text>
              <Text fontSize="1.2rem">
                Post to YouTube, Facebook, Twitter, and more with just one
                click, right from Animoto.
              </Text>
            </Box>
            <Spacer />
            <Box width="25%" align="center">
              <Image src="https://animoto.com/static/LaptopIllustration-8ed1bae1cfa07e7d0dc6f5dc9c0ea71c.svg" />
              <Text as="b">ON YOUR WEBSITE</Text>
              <Text fontSize="1.2rem">
                Quickly and easily copy and paste the auto-generated embed link
                right into your website or blog.
              </Text>
            </Box>
            <Spacer />
            <Box width="25%" align="center">
              <Image src="https://animoto.com/static/PartyIllustration-a82ae451dc8ac443f9cf8609bb6dd466.svg" />
              <Text as="b">AT AN EVENT</Text>
              <Text fontSize="1.2rem">
                Download your video to your computer or burn a DVD, then share
                anywhere else you want!
              </Text>
            </Box>
          </Flex>
        </Box>
      </Box>
      <Box p={16}>
        <Text fontSize="3.5rem" as="b">
          FAQS
        </Text>
        <Accordion allowToggle>
          <Grid templateColumns="repeat(2, 1fr)" gap={6}>
            <GridItem>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="b" flex="1" textAlign="left" fontSize="1.3rem">
                      HOW DO YOU CONVERT IMAGES TO VIDEOS?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} fontSize="1.3rem">
                  Turning images into videos with music is easy with Animoto's
                  online video maker! Upload then drag and drop your images into
                  any of our video templates for a dynamic video slideshow,
                  complete with animations and licensed music. Create a video
                  from images in minutes!
                </AccordionPanel>
              </AccordionItem>
            </GridItem>
            <GridItem>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="b" flex="1" textAlign="left" fontSize="1.3rem">
                      CAN YOU TURN ANY IMAGES TO VIDEO WITH MUSIC?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} fontSize="1.3rem">
                  With Animoto, you can turn images to videos with music online.
                  All of our pre-built templates are set to high quality music
                  tracks, but you can easily customize your video with any of
                  our thousands of licensed music tracks. Browse our collection
                  and create a professional video in minutes!
                </AccordionPanel>
              </AccordionItem>
            </GridItem>
            <GridItem>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="b" flex="1" textAlign="left" fontSize="1.3rem">
                      CAN I MAKE A SLIDESHOW VIDEO WITH ANIMOTO?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} fontSize="1.3rem">
                  In short, absolutely! But Animoto is way more than a simple
                  slideshow maker. Stitch your favorite images together by
                  adding them to our free Slideshow templates then customize
                  your slideshow with licensed music tracks, your brand colors,
                  text, and more.
                </AccordionPanel>
              </AccordionItem>
            </GridItem>
          </Grid>
        </Accordion>
      </Box>
      <Box p={16} bg="gray.300">
        <Flex w="80%" margin="auto">
          <List>
            <ListItem as="b">USES</ListItem>
            <ListItem>Marketing video</ListItem>
            <ListItem>Video ad</ListItem>
            <ListItem>How-to video</ListItem>
            <ListItem>Slideshow video</ListItem>
            <ListItem>Social media</ListItem>
            <ListItem>Promo video</ListItem>
            <ListItem>Birthday video</ListItem>
            <ListItem>Intro / Outro videos</ListItem>
            <ListItem>Explainer video</ListItem>
            <ListItem>Email marketing</ListItem>
            <ListItem>Training video</ListItem>
          </List>
          <Spacer />
          <List>
            <ListItem as="b">ANIMOTO FOR</ListItem>
            <ListItem>Business</ListItem>
            <ListItem>Photography</ListItem>
            <ListItem>Real Estate</ListItem>
            <ListItem>Non-profit</ListItem>
            <ListItem>Education</ListItem>
            <ListItem>Ecommerce</ListItem>
            <ListItem>Fitness</ListItem>
            <ListItem>Marketing Agency</ListItem>
            <ListItem>HR / People Ops</ListItem>
            <ListItem>Corporate</ListItem>
          </List>
          <Spacer />
          <List>
            <ListItem as="b">FEATURES</ListItem>
            <ListItem>Video commenting tool</ListItem>
            <ListItem>Screen recorder</ListItem>
            <ListItem>Photo video maker</ListItem>
            <ListItem>Music library</ListItem>
            <ListItem>Online video editor</ListItem>
            <ListItem>Templates</ListItem>
            <ListItem>Video trimming</ListItem>
            <ListItem>Stock library</ListItem>
            <ListItem>Voice over</ListItem>
          </List>
          <Spacer />
          <List>
            <ListItem as="b">COMPANY</ListItem>
            <ListItem>Support</ListItem>
            <ListItem>Blog</ListItem>
            <ListItem>Careers</ListItem>
            <ListItem>Press</ListItem>
            <ListItem>Affiliates</ListItem>
            <ListItem>Privacy policy</ListItem>
            <ListItem>Terms of use</ListItem>
            <ListItem>Animoto Tutorials</ListItem>
          </List>
        </Flex>
      </Box>
      <Footer />
    </Box>
  );
}
