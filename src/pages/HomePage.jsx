import React from "react";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Center,
  HStack,
  Heading,
  Image,
  SimpleGrid,
  Spacer,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import dj from "../image/dj-removebg.png";
import Slider from "../components/Slider";
import Slider2 from "../components/Slider2";
import { StarIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <>
      <Card
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="outline"
        boxSize="100%"
        p="10px"
        border="3px solid Black"
        borderRadius="0"
        background="#FFCA28"
      >
        <VStack
          spacing="90px"
          pt="40px"
          pl="100px"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          <VStack w="100%">
            <Text
              fontSize={{ base: "15px", md: "20px", lg: "60px" }}
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Enhance Your Sound
            </Text>

            <Text py="3" fontSize={{ base: "15px", md: "20px", lg: "30px" }}>
              Unleash Your Hidden Vibes
            </Text>
            <Text py="2" fontSize={{ base: "15px", md: "20px", lg: "10px" }}>
              Numark Party Mix II
            </Text>
          </VStack>

          <HStack spacing="100px">
            <Button
              variant="solid"
              bg="black"
              color="#00BFA5"
              _hover="none"
              style={{ marginTop: "-100px" }}
            >
              <Link to="/products">Shop Now</Link>
            </Button>
            <Button
              variant="solid"
              bg="white"
              color="black"
              style={{ marginTop: "-100px" }}
            >
              View More
            </Button>
          </HStack>
        </VStack>
        <Spacer />
        <Image
          objectFit="cover"
          borderRadius="30px"
          pr="100px"
          boxSize="40%"
          src={dj}
          alt="Caffe Latte"
        />
      </Card>
      <Slider/>
      <Stack bg="#00BFA5" border="3px solid Black" style={{ fontFamily: "Poppins, sans-serif",marginTop:"30px" }}>
        <Spacer/>
        <Spacer/>
        <Spacer/>
        <Spacer/>
        <Text
              fontSize={{ base: "15px", md: "20px", lg: "60px" }}
              style={{ fontFamily: "Poppins, sans-serif" }}
              textAlign="start" m="auto" w="86%"
            >
          Order,Get,Enjoy..
        </Text>
        <Text textAlign="start" m="auto" w="86%" fontSize={{ base: "15px", md: "20px", lg: "30px" }}>Want to know more?</Text>
        <SimpleGrid
          columns={[1, 2, 3]}
          spacing="40px"
          w="90%"
          m="auto"
          mb="10px"
          p="30px"
          mt="-20px"
        >
          <HStack  border='1px solid black' p='30px' background="white" >
          <VStack>
            <HStack>
              <Heading>Payment</Heading>
            </HStack>
            <HStack><Text fontSize='md'>You can pay online with credit/ debit cards and e-wallets or by cash upon goods receipt</Text></HStack>
            <Spacer/>
            <HStack>
            <Button
              variant="solid"
              bg="black"
              color="#00BFA5"
              _hover="none"
              w="80"
              mt="10px"
            >Learn More</Button>
            </HStack>
          </VStack>
        </HStack>
        <HStack  border='1px solid black' p='25px' background="white" >
          <VStack>
            <HStack>
              <Heading>Delivery</Heading>
            </HStack>
            <HStack><Text fontSize='md'>You can either order delivery by courier or just pick-up the goods in our store near by you.</Text></HStack>
            <Spacer/>
            <HStack>
            <Button
              variant="solid"
              bg="black"
              color="#00BFA5"
              _hover="none"
              w="80"
              mt="10px"
            >Learn More</Button>
            </HStack>
          </VStack>
        </HStack>
        <HStack  border='1px solid black' p='25px' background="white" >
          <VStack>
            <HStack>
              <Heading>Warranty</Heading>
            </HStack>
            <HStack><Text fontSize='md'>Almost all our goods have 1 year warranty and our online support is available 24/7 for you.</Text></HStack>
            <Spacer/>
            <HStack>
            <Button
              variant="solid"
              w="80"
              bg="black"
              color="#00BFA5"
              _hover="none"
              mt="10px"
            >Learn More</Button>
            </HStack>
          </VStack>
        </HStack>
        </SimpleGrid>
      </Stack>
      <Text textAlign="end" style={{marginTop:"20px"}} m="auto" w="86%" fontSize={{ md: "20px", lg: "20px" }}>Headphones</Text>
      <Slider2/>

      <Card
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="outline"
        boxSize="100%"
        p="10px"
        border="3px solid Black"
        borderRadius="0"
        background="#FFCA28"
      >
        <VStack
          spacing="90px"
          pt="0px"
          pl="100px"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          <VStack w="100%">
          <Text
              fontSize={{ base: "15px", md: "20px", lg: "60px" }}
              style={{ fontFamily: "Poppins, sans-serif" }}
              textAlign="start" m="auto" w="100%"
            >
          Feedbacks are power
        </Text>
        <Text textAlign="start" m="auto" w="100%" fontSize={{ base: "15px", md: "20px", lg: "30px" }}>What do our customers say?</Text>
          </VStack>
          <SimpleGrid
          spacing="0px"
        columns={[1, 2]}
        // bg="#E3F2FD"
        mt="-20"
        borderRadius='30px'
      >
        <HStack  border='1px solid black' p='25px' background="white" w="70%" h="400px">
          <VStack>
            <HStack>
              <Image src='https://www.thediscdjstore.com/user/products/large/pioneer-djc-flx6-open.jpg' w="50%" ml="25%"/><Spacer/>
              
            </HStack>
            <Box display='flex' mt='2' alignItems='center'>
             {Array(5)
               .fill('')
               .map((_, i) => (
                 <StarIcon
                   key={i}
                   color={i < 5 ? 'teal.500' : 'gray.300'}
                 />
               ))}
           </Box>
            <Heading>Tony Stark</Heading>
            <HStack>
            <Text fontSize='md'>ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text></HStack>
          </VStack>
        </HStack>
        <HStack  border='1px solid black' p='25px' background="white" w="70%" h="400px">
          <VStack>
            <HStack>
              <Image src='https://www.thediscdjstore.com/user/products/large/pioneer-ddj-xp2-rb-vd2-black.jpg' w="50%" ml="25%" /><Spacer/>
              
            </HStack>
            <Box display='flex' mt='2' alignItems='center'>
             {Array(5)
               .fill('')
               .map((_, i) => (
                 <StarIcon
                   key={i}
                   color={i < 5 ? 'teal.500' : 'gray.300'}
                 />
               ))}
           </Box>
            <Heading>Steve Rogers</Heading>
            <HStack>
            <Text fontSize='md'>ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text></HStack>
          </VStack>
        </HStack>
        </SimpleGrid>
        </VStack>
        <Spacer />
      </Card>
    </>
  );
}
