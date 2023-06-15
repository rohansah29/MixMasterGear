import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import {
  Box,
  Divider,
  HStack,
  Heading,
  Image,
  Input,
  InputGroup,
  InputRightAddon,
  ListItem,
  SimpleGrid,
  Spacer,
  Stack,
  Text,
  UnorderedList,
  VStack,
} from "@chakra-ui/react";
import React from "react";

import logo from "../image/MixMasterGear.png";

import google from "../image/google.png";
import fb from "../image/fb.png";
import wapp from "../image/wapp.png";

export const Footer = () => {
  return (
    <>
      <SimpleGrid
      style={{ fontFamily: "Poppins, sans-serif"}}
        spacing="40px"
        // w="90%"
        m="auto"
        p="30px"
        bg="#212121"
      >
        <VStack>
          <HStack w="90%" bg="white" p="35px 80px" borderRadius="20px">
            <HStack>
              <Heading fontSize="2xl">Subscribe Newsletter</Heading>
            </HStack>

            <Spacer />

            <HStack>
              <InputGroup>
                <Input
                  bg="white"
                  placeholder="Email Address"
                  id="placeholderbtn"
                  color="white"
                  w="300px"
                  borderRadius="15px"
                  border="1px solid black"
                />
                <InputRightAddon bg="#00BFA5" border="1px solid black" children={<EmailIcon />} />
              </InputGroup>
            </HStack>
            <Spacer />
            <HStack>
              <PhoneIcon />
              <Text pl="3">Call us 24/7 : (+62) 1 509 555 1212</Text>
            </HStack>
          </HStack>

          <SimpleGrid
            columns={[1,2, 4]}
            spacing="40px"
            w="100%"
            m="auto"
            mb="50px"
            p="30px"
            // bg="#E3F2FD"

            borderRadius="30px"
          >
            <HStack w="90%" borderRadius="20px" p="30px" mt="-5">
              <Stack textAlign="start">
                <Image w="65%" bg="white" src={logo} />
                <Text color="white">We're a specialized DJ equipment & accessories store established in 2016 and since then we have been uncompromising market leaders.</Text>
                <Divider/>
                <HStack w="50%">
                  <Image w="20%" bg="#00BFA5" src={google} />
                  <Spacer />
                  <Image w="20%" bg="#00BFA5" src={fb} />
                  <Spacer />
                  <Image w="20%" bg="#00BFA5" src={wapp} />
                </HStack>
              </Stack>
            </HStack>

            <Stack  textAlign="left" p='15px'>
              <Heading fontSize="18px" color='white'>Find Product</Heading>
              <UnorderedList pl='25px' color='white' spacing={2}>
                <ListItem>Mixers</ListItem>
                <ListItem>Speakers</ListItem>
                <ListItem>Headphones</ListItem>
                <ListItem>Controllers</ListItem>
                <ListItem>Cables</ListItem>
              </UnorderedList>
            </Stack>
            <Stack  textAlign="left" p='15px' >
              <Heading fontSize="18px" color='white'>Get Help</Heading>
              <UnorderedList pl='25px' color='white' spacing={2}>
                <ListItem>About Us</ListItem>
                <ListItem>Contact Us</ListItem>
                <ListItem>Return Policy</ListItem>
                <ListItem>Privacy Policy</ListItem>
                <ListItem>Payment Policy</ListItem>
              </UnorderedList>
            </Stack>
            <Stack  textAlign="left" p='15px'>
              <Heading fontSize="18px" color='white'>About Us</Heading>
              <UnorderedList pl='25px' color='white' spacing={2}>
                <ListItem>News Service</ListItem>
                <ListItem>Service</ListItem>
                <ListItem>Our Policy</ListItem>
                <ListItem>Customer Care</ListItem>
                <ListItem>Faq's</ListItem>
              </UnorderedList>
            </Stack>
          </SimpleGrid>
        </VStack>
      </SimpleGrid>
    </>
  );
};
