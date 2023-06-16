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
import { Link, useNavigate } from "react-router-dom";
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
      <Box bg="gray.200" py={4}>
        <Flex maxW="container.xl" mx="auto" px={6}>
          <HStack h="60px" pl="0px" spacing="10px">
            <Menu>
              <MenuButton as={Button} bg="none" rightIcon={<ChevronDownIcon />}>
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
              Mixer
            </Link>
            <Link to="/products" onClick={() => setCategory("Speakers")}>
              Speaker
            </Link>
            <Link to="/products" onClick={() => setCategory("headphones")}>
              Headphone
            </Link>
            <Link to="/products" onClick={() => setCategory("controllers")}>
              Controller
            </Link>
            <Link to="/products" onClick={() => setCategory("cables")}>
              Cables
            </Link>
          </HStack>
          <HStack>
            <Link fontSize="xl" fontWeight="bold" to="/">
              <Image
                src={logo}
                alt="Logo"
                style={{ marginLeft: "100px" }}
                w="143px"
              />
            </Link>
          </HStack>
          <Spacer />
          <HStack h="60px" pl="40px" spacing="20px">
            <Link to="/login" onClick={onOpen} mr={4}>
              <AiOutlineUser size={20} />
            </Link>
            <p>{username}</p>
            <Link mr={4}>
              <AiOutlineShoppingCart size={20} to="/cart" />
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
              <BsBoxArrowRight size={20} />
            </Link>
          </HStack>
        </Flex>
      </Box>
    </>
  );
};

export default Navbar;
