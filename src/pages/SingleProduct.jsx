import React, { useContext, useEffect, useState } from "react";
import { CheckIcon, ChevronRightIcon, StarIcon } from "@chakra-ui/icons";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  HStack,
  Heading,
  Image,
  Stack,
  VStack,
  Text,
  Divider,
  Radio,
  Box,
  Button,
  useToast,
  Spacer
} from "@chakra-ui/react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../components/AuthContextProvider";
import heart from "../image/heart.png"
import Slider3 from "../components/Slider3";
import Loading from "../components/Loading";

export default function SingleProduct() {

  const { id } = useParams();
  const [quantity, setQuantity] = useState(0);
  const [product, setProduct] = useState([]);
  const { isAuth,category } = useContext(AuthContext);
  const [loading,setLoading]=useState(false);
  const navigate = useNavigate();
    const toast = useToast();

    let currdata = {
      title: "",
      price: "",
      image: "",
      description: "",
    };

  let fetchedCartdata = [];


  useEffect(() => {
    setLoading(true);
    axios.get(`https://mixmastergear.onrender.com/${category}/${id}`).then((res) => {
      setProduct(res.data);
      setLoading(false);
    });
  }, [id,category]);

  const handleQuantity = (val) => {
    setQuantity((pre) => pre + val);
  };

  const handleClick = () => {
    console.log(id);
    if (isAuth) {
      axios
        .get(`https://mixmastergear.onrender.com/${category}/${id}`)
        .then((res) => {
          currdata = {
            ...currdata,
            title: res.data.title,
            price: res.data.price,
            image: res.data.image,
            description: res.data.description,
            quantity:1
          };
          axios
            .get(`https://mixmastergear.onrender.com/random`)
            .then((res) => {
              fetchedCartdata = res.data;
              let filteredData = fetchedCartdata?.filter(
                (ele) =>
                  ele.title === currdata.title && ele.price === currdata.price
              );
              if (filteredData.length === 0) {
                axios
                  .post(
                    `https://mixmastergear.onrender.com/random`,
                    currdata
                  )
                  .then((res) => {
                    toast({
                      title: "Yay !",
                      description: "Product Added to Cart !",
                      status: "success",
                      duration: 3000,
                      isClosable: true,
                    });
                  });
              } else {
                toast({
                  title: "Oops !",
                  description: "Product already exist !",
                  status: "success",
                  duration: 3000,
                  isClosable: true,
                });
              }
            });
        });
    } else {
      toast({
        title: `Oops !`,
        description: "Can't Add , Login First !",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      navigate(`/login`);
    }
  };

  return (
    <>
      <Breadcrumb
        spacing="8px"
        separator={<ChevronRightIcon color="gray.500" />}
        ml="40px"
        mt="10px"
        fontFamily='Poppins, sans-serif'
      >
        <BreadcrumbItem>
          <BreadcrumbLink href="/" _hover={{ color: "red" }}>
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage color="#00BFA5">
          <BreadcrumbLink href="#">{category}</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>

      {loading?<Loading/>:<><HStack w="90%" m="auto" mt="10px" mb="50px">
        <Image
          border="3px solid grey"
          p="20px"
          src={product.image}
          boxSize="45%"
        />
        <VStack pl="25px" border="2px solid black" p="60px" fontFamily='Poppins, sans-serif'>
          <Stack textAlign="start" spacing={5}>
            <Text fontSize="32px" color="black">
              {product.title}
            </Text>
            <Box display='flex' mt='2' alignItems='center'>
             {Array(5)
               .fill('')
               .map((_, i) => (
                 <StarIcon
                   key={i}
                   color={i < product.popular ? 'teal.500' : 'gray.300'}
                 />
               ))}
             <Box as='span' ml='2' color='gray.600' fontSize='sm'>
               {product.id*9} Ratings
             </Box>
           </Box>
            <Heading fontSize="35px"> ₹ {product.price} /- </Heading>
            <Heading display="flex" alignItems="center" fontSize="22px">
              Availability :
              <Heading fontSize="22px" color="#00BFA5">
                <CheckIcon ml="15px" mr="5px" color="#00BFA5" /> In Stock
              </Heading>
            </Heading>
            <Box  w='100%' p='20px'  m='auto' ml="-3.5"  fontSize='17px' fontFamily='Poppins, sans-serif'>{product.description}</Box>
            <Divider h="3px" bg="black" />

            <HStack>
              <Text fontSize="20px" fontWeight="bold">
                Quantity :
              </Text>
              <Button
                isDisabled={quantity === 1}
                onClick={() => handleQuantity(-1)}
                bg="black"
                color="#00BFA5"
              >
                -
              </Button>
              <Button bg="white" color="#00BFA5">{quantity+1}</Button>
              <Button onClick={() => handleQuantity(1)} bg="black"
                color="#00BFA5">+</Button>
            </HStack>
            <HStack spacing={50}>
              <Button bg="black" border="2px solid black" color="#00BFA5" p="25px" >
                Buy Now
              </Button>
              <Button bg="white" border="2px solid black" color="#00BFA5" p="25px" onClick={handleClick}>
                <Link>Add To Cart</Link>
              </Button>
              <Image w="5%" src={heart} />
            </HStack>
          </Stack>
        </VStack>
      </HStack>
      <Box border='2px solid black' w='70%' fontFamily='Poppins, sans-serif' p='20px'  m='auto' mb='30px' fontSize='25px'>No Feedbacks Yet !!</Box></>}
      <Box mt="80px">
      <Breadcrumb
        spacing="8px"
        separator={<ChevronRightIcon color="gray.500" />}
        ml="40px"
        mt="10px"
        fontFamily='Poppins, sans-serif'
      >
        {/* <BreadcrumbItem>
          <BreadcrumbLink href="/" _hover={{ color: "red" }}>
            Home
          </BreadcrumbLink>
        </BreadcrumbItem> */}

        <BreadcrumbItem isCurrentPage color="#00BFA5"  fontWeight="bold" fontSize="20px">
          <BreadcrumbLink href="#">Similar products</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <Box mt="30px">
      <Slider3/>
      </Box>
      </Box>
    </>
  )
}
