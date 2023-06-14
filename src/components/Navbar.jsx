import React from 'react'
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
  import logo from "../image/MixMasterGear.png"
  import { Link, useNavigate } from "react-router-dom";
  import { AiOutlineUser, AiOutlineShoppingCart } from 'react-icons/ai';
import { BsBoxArrowRight } from 'react-icons/bs';

const Navbar = () => {
  return (
    <>
      <Box bg="gray.200" py={4} >
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
            <Link to="/products">Mixer</Link>
            <Link to="/products">Speaker</Link>
            <Link to="/products">Headphone</Link>
            <Link to="/products">Controller</Link>
            <Link to="/products">Cables</Link>
          </HStack>
          <HStack>

        <Link fontSize="xl" fontWeight="bold" to="/">
        <Image src={logo} alt="Logo" style={{marginLeft:"100px"}} w="143px" />
        </Link>
        </HStack>
        <Spacer />
        <HStack h="60px" pl="40px" spacing="20px">
        <Link to="/login" mr={4}><AiOutlineUser size={20} /></Link>
        <p>Kumar Rohan</p>
        <Link mr={4}><AiOutlineShoppingCart size={20} to="/cart" /></Link>
        <Link><BsBoxArrowRight size={20} /></Link>
        </HStack>
      </Flex>
    </Box>
    </>
  )
}

export default Navbar
