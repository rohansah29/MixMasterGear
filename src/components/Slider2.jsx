import { StarIcon } from '@chakra-ui/icons';
import { Badge, Box, Image } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export default function Slider2() {
    const [data,setData]=useState([]);

    const fetchData=async()=>{
        let res=await fetch(`https://mixmastergear.onrender.com/headphones`);
        let data=await res.json();
        setData(data);
    }

    useEffect(()=>{
        fetchData();
    },[])

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
  return (
    <>
    <Carousel responsive={responsive}>
      {data.map((el)=>(
         <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'style={{marginLeft:"60px"}} >
         <Image src={el.image} alt="err" />
   
         <Box p='6'>
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
             {el.title}
           </Box>
   
           <Box>
           ₹{el.price}
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
                   color={i < el.popular ? 'teal.500' : 'gray.300'}
                 />
               ))}
             <Box as='span' ml='2' color='gray.600' fontSize='sm'>
               {el.id*9} reviews
             </Box>
           </Box>
         </Box>
       </Box>
      ))}
      </Carousel>
    </>
  )
}
