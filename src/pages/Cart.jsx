import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Divider,
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
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect } from "react";
import { useState,useContext } from "react";
import { CartTable } from "../components/CartTable";
import { Link, useNavigate } from "react-router-dom";
import Loading from "../components/Loading";
import { AuthContext } from "../components/AuthContextProvider";



export default function Cart() {
  // CodeStart
  const [loading, setLoading] =useState(false);

  const navigate=useNavigate();
  const [Products, setProducts] =useState([]);
  const {setSum}=useContext(AuthContext);

  const getCartDetail=()=>{
    if(JSON.parse(localStorage.getItem("cartArray")).length>0){
      setProducts(JSON.parse(localStorage.getItem("cartArray")));
      return;
    }
    setLoading(true);
    axios
      .get(`https://mixmastergear.onrender.com/random`)
      .then((res) => {
        localStorage.setItem("cartArray", JSON.stringify(res.data));
        setProducts(JSON.parse(localStorage.getItem("cartArray")));
        setLoading(false);
      });
  }

  useEffect(()=>{
    getCartDetail();
  },[])

  useEffect(()=>{
    localStorage.setItem("cartArray", JSON.stringify(Products));
    setSum(Products.reduce((a,b)=>a+(b.price*b.quantity),0))
  },[Products])

  const handleDelete = (id) => {
    console.log("Going to delete: ",id);
    setProducts(prevProduct=>prevProduct.filter(ele=>ele.id!==id));
    axios
    .delete(`https://mixmastergear.onrender.com/random/${id}`)
    .then((res) => {
      getCartDetail();
    });
   };

  const handleOrder = () => {

    navigate("/checkout");
  //   axios.put(`https://mixmastergear.onrender.com/random`,Products).then((res)=>{
  //     console.log(`updated cart backend`,res.data);
  //   })
  }

  const handleChange=(ProductID,quantity)=>{
    setProducts(prevProduct=>{
      let currentProduct=prevProduct
      currentProduct.map(product=>{
        if(product.id===ProductID){
          product.quantity=quantity;
        }
        return product;
      })
      return currentProduct.slice();
    });
  }

  return (
    <>
      <Breadcrumb
        spacing="8px"
        separator={<ChevronRightIcon color="gray.500" />}
        ml="40px"
        mt="10px"
        style={{ fontFamily: "Poppins, sans-serif"}}
      >
        <BreadcrumbItem>
          <BreadcrumbLink href="/" _hover={{ color: "red" }}>
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage color="#00BFA5">
          <BreadcrumbLink href="#">Cart</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      {Products.length==0?<Image src="https://assets.materialup.com/uploads/87d4df96-a55f-4f4b-9a17-a696eded97f3/preview.gif" style={{margin:"auto",width:"40%"}}/>:<>
      <TableContainer w="95%" m="auto" mt="30px" border="2px solid black" style={{ fontFamily: "Poppins, sans-serif"}}>
        <Table variant="striped" bg="white">
          <TableCaption>Product Added into Carts</TableCaption>
          <Thead>
            <Tr>
              <Th fontSize="18px">Product</Th>
              <Th fontSize="18px">Price</Th>
              <Th fontSize="18px">Quantity</Th>
              <Th fontSize="18px">SubTotal</Th>
            </Tr>
          </Thead>
          <Tbody bg="white">
            {Products.map(product=>
              <CartTable
                key={product.id}
                {...product}
                onDelete={handleDelete}
                onChange={handleChange}
              />)
            }
          </Tbody>
        </Table>
      </TableContainer>

      <Stack
        p="20px"
        border="2px solid black"
        w="50%"
        m="auto"
      >
        <Heading>Cart Total</Heading>
        <HStack w="80%" pl="100px">
          <Text fontSize="20px" fontWeight="bold">
            Total :{" "}
          </Text>
          <Spacer />
          <Text fontSize="18px">₹{Products.reduce((a,b)=>a+(b.price*b.quantity),0)} /-</Text>
        </HStack>
        <HStack w="80%" pl="100px">
          <Text fontSize="20px" fontWeight="bold">
            Delivery :{" "}
          </Text>
          <Spacer />
          <Text fontSize="18px" mr="5">Free</Text>
        </HStack>
        <Divider />
        <HStack w="60%" pl="240px">
          <Button bg="black" w="100px" onClick={handleOrder} color="#00BFA5">
            Checkout
          </Button>
          <Spacer />
          <Button bg="black" color="#00BFA5">
            <Link to="/products">Buy More </Link>
          </Button>
        </HStack>
      </Stack>
      </>}
    </>
  );
}