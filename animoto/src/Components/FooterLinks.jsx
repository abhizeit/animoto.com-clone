import {
  Flex,
  Box,
  ListItem,
  List,
  Spacer,
  SimpleGrid,
} from "@chakra-ui/react";

export default function FooterLinks() {
  return (<Box bg="#dadada">
       <SimpleGrid columns={{sm:1,md:1,lg:4}} p={16} w="80%" margin="auto">
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
    </SimpleGrid>
  </Box>
 
  );
}
