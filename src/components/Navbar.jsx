import React from "react";
import {
  Box,
  Image,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Input,
  HStack,
  Spacer,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  SimpleGrid,
  Heading,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  SearchIcon,
} from "@chakra-ui/icons";
import logo from "../image/MixMasterGear.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AiOutlineUser, AiOutlineShoppingCart } from "react-icons/ai";
import { BsBoxArrowRight } from "react-icons/bs";
import { useContext } from "react";
import { AuthContext } from "./AuthContextProvider";
let username = localStorage.getItem("username");

const Navbar = ({ isOpen, onOpen, onClose, currUser, setCurrUser }) => {
  const { setCategory, isAuth, setIsAuth } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <>
      <Box bg="white" py={4} mt={5} style={{ fontSize: "18px"}}>
        <Flex mx="auto" px={6}>
          <HStack h="60px" pl="0px" spacing="18px">
            <Menu>
              <MenuButton as={Button} mt={-3.5} _hover={{ color: "#00BFA5" }} size={30} bg="none" rightIcon={<ChevronDownIcon />}>
                Home
              </MenuButton>
              <MenuList>
                <MenuItem>
                  <Link to="/">Home Page</Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/products">All Products</Link>
                </MenuItem>
              </MenuList>
            </Menu>
            <Link to="/products" onClick={() => setCategory("mixers")}>
              <Text _hover={{ color: "#00BFA5" }}>Mixer</Text>
            </Link>
            <Link to="/products" onClick={() => setCategory("Speakers")}>
              <Text _hover={{ color: "#00BFA5" }}>Speaker</Text>
            </Link>
            <Link to="/products" onClick={() => setCategory("headphones")}>
              <Text _hover={{ color: "#00BFA5" }}>Headphone</Text>
            </Link>
            <Link to="/products" onClick={() => setCategory("controllers")}>
              <Text _hover={{ color: "#00BFA5" }}>Controller</Text>
            </Link>
            <Link to="/products" onClick={() => setCategory("cables")}>
              <Text _hover={{ color: "#00BFA5" }}>Cables</Text>
            </Link>
          </HStack>
          <HStack>
            <Link fontSize="xl" fontWeight="bold" to="/">
              <Image
                src={logo}
                alt="Logo"
                style={{ marginLeft: "100px" }}
                w="250px"
                mt="-5"
              />
            </Link>
          </HStack>
          <Spacer />
          <HStack h="60px" pl="40px" spacing="20px">
            <Link to="/login" onClick={onOpen} mr={4}>
              <Text _hover={{ color: "#00BFA5" }}><AiOutlineUser size={30} /></Text>
            </Link>
            <Text _hover={{ color: "#00BFA5" }}>{username}</Text>
            <Link mr={4} to="/cart">
              <Text _hover={{ color: "#00BFA5" }}>
                <AiOutlineShoppingCart size={30} />
              </Text>
            </Link>
            <Link
              onClick={() => {
                localStorage.removeItem("username");
                setIsAuth(false);
                setCurrUser("");
                navigate("/");
                window.location.reload();
              }}
            >
              <Text _hover={{ color: "#00BFA5" }}><BsBoxArrowRight size={30} /></Text>
            </Link>
          </HStack>
        </Flex>
      </Box>
    </>
  );
};

export default Navbar;
