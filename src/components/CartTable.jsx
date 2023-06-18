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
import { AuthContext } from "./AuthContextProvider";
import { useContext } from "react";

export const CartTable = ({
  image,
  title,
  category,
  id,
  price,
  quantity,
  onDelete,
  onChange
}) => {

  const handleQuanity=(newQuantity)=>{
      onChange(id,newQuantity);
  }
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
                onClick={() => onDelete(id)}
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
              isDisabled={quantity === 1}
              onClick={() => {
                handleQuanity(quantity-1);
              }}
              bg="black"
              color="#00BFA5"
            >
              -
            </Button>
            <Button bg="white" color="#00BFA5">{quantity}</Button>
            <Button
              onClick={() => {
                handleQuanity(quantity+1);
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
            quantity * price
            } /-</Heading>
        </Td>
      </Tr>
    </>
  );
};