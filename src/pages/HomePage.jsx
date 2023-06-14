import React from 'react'
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

export default function HomePage() {
  return (
    <>
      <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
      boxSize="100%"
      p="10px"
      border='3px solid Black'
      borderRadius="0"
      background="#FFCA28"
    >
      <VStack spacing="90px" pt="40px" pl="100px" style={{fontFamily:"Poppins, sans-serif"}}>
        <VStack w="100%">
          <Text fontSize={{ base: "15px", md: "20px", lg: "60px" }} style={{fontFamily:"Poppins, sans-serif"}}>Enhance Your Sound</Text>

          <Text py="3" fontSize={{ base: "15px", md: "20px", lg: "30px" }}>
            Unleash Your Hidden Vibes
          </Text>
          <Text py="2" fontSize={{ base: "15px", md: "20px", lg: "10px" }}>
            Numark Party Mix II
          </Text>
        </VStack>

          <HStack spacing="100px" >
            <Button variant="solid" bg="black" color="#00BCD4" _hover="none" style={{marginTop:"-100px"}}>
              Shop Now
            </Button>
            <Button variant="solid" bg="white" color="black" style={{marginTop:"-100px"}}>
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
    </>
  )
}
