import { Link as ReachLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { FaCrown } from "react-icons/fa";
import {
  Box,
  Image,
  Link,
  HStack,
  Flex,
  Spacer,
  Button,
  Center,
} from "@chakra-ui/react";
import { AuthContext } from "../Context/AuthContextProvider";
import { logout } from "../Context/actions";
import  NavBarDrawer from "./NavBarDrawer"

export default function Navbar() {
  const { state, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <Box
      w="100%"
      paddingX={16}
      paddingY={4}
      alignItems="center"
      backgroundSize="contain"
      borderBottom=".05rem solid grey"
      backgroundRepeat="no-repeat"
      backgroundImage="url('	https://animoto.com/static/AnimotoLogoBlobs-afa5652205594807da50c94d53f42b86.svg')"
    >
      <Flex>
        <Box>
          <HStack spacing="24px" >
            <Link as={ReachLink} to="/">
              <Image
                height="100%"
                objectFit="cover"
                src="https://animoto.com/static/logo-1d220e413f4f69fa42d66d93381db371.svg"
                alt="Dan Abramov"
              />
            </Link>

            <HStack spacing="24px" display={["none","none","Flex","flex"]}>
              <Link as="b" color="#23408c" fontSize="xl">
                Create
              </Link>
              <Link as="b" color="#23408c" fontSize="xl">
                Template
              </Link>
              <Link
                as={ReachLink}
                to="/features"
                fontWeight="bold"
                color="#23408c"
                fontSize="xl"
              >
                Features
              </Link>
              <Link as={ReachLink} to="/pricing" fontWeight="bold" color="#23408c" fontSize="xl">
                Pricing
              </Link>
            </HStack>
          </HStack>
        </Box>
        <Spacer />
        <Box>
          <HStack spacing="24px" display={["none","none","Flex","flex"]}>
            <Button
              leftIcon={state.isPremiumUser ? <FaCrown /> : null}
              onClick={() => navigate("/login")}
              bg="transparent"
              color="#23408c"
              fontSize="xl"
              fontWeight="bold"
              disabled={state.isAuth}
            >
              {state.isAuth ? state.user : "LOGIN"}
            </Button>
            <Button
              onClick={() =>
                state.isAuth ? dispatch(logout) : navigate("/signup")
              }
              color="#23408c"
              fontSize="xl"
              fontWeight="bold"
              bg="transparent"
            >
              {state.isAuth ? "LOGOUT" : "SIGNUP"}
            </Button>
           
          </HStack> 
          <NavBarDrawer />
        </Box>
      </Flex>
    </Box>
  );
}
