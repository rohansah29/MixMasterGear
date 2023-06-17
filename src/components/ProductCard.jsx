import React, { useContext } from 'react'
import { StarIcon } from '@chakra-ui/icons';
import { Badge, Box, Button, ButtonGroup, CardFooter, Divider, Image, Spacer, useToast } from '@chakra-ui/react';
import { Link,useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthContextProvider';
import axios from 'axios';

export default function ProductCard({id,title,image,price,popular}) {
    const { isAuth,category } = useContext(AuthContext);
    const navigate = useNavigate();
    const toast = useToast();

    let currdata = {
        title: "",
        price: "",
        image: "",
        description: "",
      };

    let fetchedCartdata = [];

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
    <div>
      <Box maxW='sm' p="25px" overflow='hidden' borderRadius="10px" _hover={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)' }} style={{marginLeft:"60px",width:"500px",fontFamily: "Poppins, sans-serif"}} >
      <Link to={`/products/${id}`}>
         <Image src={image} alt="err" />
   
         <Box p='6' mt="-10">
           <Box display='flex' alignItems='baseline'>
             <Badge borderRadius='full' px='2' colorScheme='teal'>
               New
             </Badge>
           </Box>
   
           <Box
             mt='1'
             fontWeight='semibold'
             as='h4'
             lineHeight='tight'
             noOfLines={1}
           >
             {title}
           </Box>
   
           <Box>
           ₹{price}
             <Box as='span' color='gray.600' fontSize='sm'>
               /-
             </Box>
           </Box>
   
           <Box display='flex' mt='2' alignItems='center'>
             {Array(5)
               .fill('')
               .map((_, i) => (
                 <StarIcon
                   key={i}
                   color={i < popular ? 'teal.500' : 'gray.300'}
                 />
               ))}
             <Box as='span' ml='2' color='gray.600' fontSize='sm'>
               {id*9} Ratings
             </Box>
           </Box>
         </Box>
         </Link>
         <Divider h="3px" bg="black" />
        <ButtonGroup spacing="2" w="100%">
          <Button
            variant="solid"
            bg="white"
            color="#00BFA5"
            _hover={{ bg: "#00BFA5",color:"white", scale: "1.1" }}
          >
            <Link to={`/products/${id}`}>More Info</Link>
          </Button>
          <Spacer />
          <Button variant="ghost" bg="white"
            color="#00BFA5"
            _hover={{ bg: "#00BFA5",color:"white", scale: "1.1" }} onClick={handleClick}>
            <Link>Add to cart</Link>
          </Button>
        </ButtonGroup>
       </Box>
    </div>
  )
}
