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
import { useState } from "react";
import { CartTable } from "../components/CartTable";
import { Link, useNavigate } from "react-router-dom";
import Loading from "../components/Loading";

let cartArray = JSON.parse(localStorage.getItem("cartArray")) || [];
console.log(cartArray);

export default function Cart() {
  const [cartData, setCartData] = useState([]);
  const [loading,setLoading]=useState(false);
  const [totalSum, setTotalSum] = useState(0);
  const [subTotal,setSubTotal]=useState(0);
  const [temp,setTemp]=useState(0);
  const toast = useToast();
  const navigate = useNavigate();

  function getCartDetail() {
    setLoading(true);
    axios
      .get(`https://mixmastergear.onrender.com/random`)
      .then((res) => {
        setCartData(res.data);
        localStorage.setItem("cartArray", JSON.stringify(res.data));

        let sum = 0;

        for (let i = 0; i < cartArray.length; i++) {
          sum += cartArray[i].quantity * cartArray[i].price;
        }
        setTotalSum( typeof sum === "number" ? sum : 0);
        const totalPriceQuantity = res.data.reduce((sum, product) => sum + (product.price * product.quantity), 0);
        setSubTotal(totalPriceQuantity)
        setLoading(false);
      });
  }
  console.log(totalSum);

  useEffect(() => {
    getCartDetail();
  }, []);

  const handleDelete = (val) => {
    console.log(val);
    cartArray=cartArray.filter((ele)=>{
      return ele.id!==val;
    });
    localStorage.setItem("cartArray",JSON.stringify(cartArray));

    axios
      .delete(`https://mixmastergear.onrender.com/random/${val}`)
      .then((res) => {
        getCartDetail();
      });
  };

  const handleOrder = () => {
    toast({
      title: "Order Placed !",
      description: "Order Placed Successfully !",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
    navigate("/");
    // let cart=cartArray.filter((el)=>el.id==0);
    // console.log(cart);
    // axios
    //   .patch(`https://mixmastergear.onrender.com/random`,cart)
    //   .then((res) => {
    //     console.log(res);
    //     getCartDetail();
    //   });
  };
  // const handleQty=(id,val)=>{
    
  //   let obj
  //   axios.get(`https://mixmastergear.onrender.com/random/${id}`)
  //   .then(response => {
  //     obj=response.data;
  //     setTemp(obj.quantity)
  //   })
  //   const payload={quantity:temp+val}
  //   axios.patch(`https://mixmastergear.onrender.com/random/${id}`, payload)
  // .then(response => {
  //   getCartDetail();
  //   console.log('Resource updated successfully:', response.data);
  // })
  // .catch(error => {
  //   console.error('Error updating resource:', error);
  // });
  // }

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
      {cartArray.length==0 && cartData.length==0?<Image src="https://assets.materialup.com/uploads/87d4df96-a55f-4f4b-9a17-a696eded97f3/preview.gif" style={{margin:"auto",width:"40%"}}/>:<>
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
            {(cartArray.length==0?cartData:cartArray)?.map((item) => (
              <CartTable
                key={item.id}
                {...item}
                handleDelete={handleDelete}
                totalSum={totalSum}
                setTotalSum={setTotalSum}
              />
            ))}
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
          <Text fontSize="18px">₹{totalSum} /-</Text>
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
