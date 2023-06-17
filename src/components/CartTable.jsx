import {
    Button,
    HStack,
    Heading,
    Image,
    Spacer,
    Stack,
    Table,
    TableCaption,
    TableContainer,
    Tbody,
    Td,
    Text,
    Tfoot,
    Th,
    Thead,
    Tr,
  } from "@chakra-ui/react";
  import axios from "axios";
  import React, { useEffect, useState } from "react";
  
  export const CartTable = ({
    image,
    title,
    category,
    description,
    id,
    price,
    rating,
    handleDelete,
    totalSum,
    setTotalSum,
    handleQty
  }) => {
    const [count, setCount] = useState(1);

      useEffect(()=>{
          setTotalSum(count*price)
  
      },[count])
  
    return (
      <>
        <Tr>
          <Td >
            <HStack >
              <Image w="30%" src={image} style={{border:"1px solid black"}} />
              <Stack>
                <Heading fontSize="20px">{title}</Heading>
                <Text>{category}</Text>
                {/* <Text>Rating : {rating}</Text> */}
                <Spacer/>
                <Button
                    mt="50px"
                  w="15%"
                  bg="black"
                  color="red"
                  onClick={() => handleDelete(id)}
                >
                  Delete
                </Button>
              </Stack>
            </HStack>
          </Td>
  
          <Td>
            <Heading fontSize="15px">Price : ₹ {price} /-</Heading>
          </Td>
  
          <Td>
            <HStack>
              <Button
                isDisabled={count === 1}
                onClick={() => {
                  setCount(count - 1)
                }}
                bg="black"
                color="#00BFA5"
              >
                -
              </Button>
              <Button bg="white" color="#00BFA5">{count}</Button>
              <Button
                onClick={() => {
                  setCount(count + 1)
                }}
                bg="black"
                color="#00BFA5"
              >
                +
              </Button>
            </HStack>
          </Td>
          <Td>
            <Heading fontSize="15px">Total : ₹ {
              count * price
              } /-</Heading>
          </Td>
        </Tr>
      </>
    );
  };
  


