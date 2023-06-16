import { ChevronDownIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Flex, SimpleGrid, Spacer } from "@chakra-ui/react";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useReducer, useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../components/AuthContextProvider";
import ProductCard from "../components/ProductCard";
import { Link } from "react-router-dom";

const initialState = {
  loading: "false",
  data: [],
  error: "false",
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case "loading": {
      return { ...state, loading: true };
    }
    case "success": {
      return { ...state, loading: false, data: payload };
    }
    case "error": {
      return { ...state, error: true, loading: false };
    }
  }
};

export default function ProductPage() {
  const [sortOrder, setSortOrder] = useState("");
  let [page, setpage] = useState(1);
  const [state, dispatch] = useReducer(reducer, initialState);
  const { category, setCategory } = useContext(AuthContext);
  const { data } = state;
  let URL = category;

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const fetchAndRender = (URL) => {
    dispatch({ type: "loading" });
    axios({
      method: "get",
      baseURL: `https://mixmastergear.onrender.com/`,
      url: URL,
    })
      .then((res) => {
        const data = res?.data;
        console.log(data);
        dispatch({ type: "success", payload: data });
      })
      .catch(() => {
        dispatch({ type: "error" });
      });
  };

  useEffect(() => {
    let delimiter = "?";
    URL = category;
    if (sortOrder) {
      URL += delimiter + `_sort=price&_order=${sortOrder}&_limit=4&_page=${page}`;
    }else{
      URL += delimiter +`_limit=4&_page=${page}`;
    }
    fetchAndRender(URL);
  }, [category, URL, sortOrder,page]);

  const handleClick = (val) => {
    setpage(page + val);
  };

  return (
    <>
      <Box>
        <Flex>
          <Box p="4">
            <Breadcrumb
              spacing="8px"
              separator={<ChevronRightIcon color="gray.500" />}
              ml="40px"
              mt="10px"
            >
              <BreadcrumbItem>
                <BreadcrumbLink href="/" _hover={{ color: "grey" }}>
                  Home
                </BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbItem isCurrentPage color="#00BFA5">
                <BreadcrumbLink href="#">Products</BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
          </Box>
          <Spacer />
          <Box p="4">
            <Menu>
              <select
                style={{
                  padding: "8px",
                  fontSize: "16px",
                  borderRadius: "10px",
                  // border: "1px solid #ccc",
                  backgroundColor: isHovered ? '#f0f0f0' : '#fff',
                  color: "#333",
                  outline: "none",
                  // boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                  fontWeight: "bold",
                }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onChange={(e) => setSortOrder(e.target.value)}
              >
                <option style={{ padding:"10px" }} value="">Sort By</option>
                <option style={{ padding:"10px" }} value="desc">High to Low</option>
                <option style={{ padding:"10px" }} value="asc">Low to High</option>
              </select>
            </Menu>
            <Menu>
              <MenuButton mt="-2" as={Button} bg="none" rightIcon={<ChevronDownIcon />}>
                Category
              </MenuButton>
              <MenuList>
                <MenuItem><Link to="/products" onClick={()=>setCategory("mixers")}>Mixer</Link></MenuItem>
                <MenuItem><Link to="/products" onClick={()=>setCategory("Speakers")}>Speaker</Link></MenuItem>
                <MenuItem><Link to="/products" onClick={()=>setCategory("headphones")}>Headphone</Link></MenuItem>
                <MenuItem><Link to="/products" onClick={()=>setCategory("controllers")}>Controller</Link></MenuItem>
                <MenuItem><Link to="/products" onClick={()=>setCategory("cables")}>Cables</Link></MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Flex>
        <Spacer />
        <SimpleGrid
          columns={[1, 2]}
          spacing="40px"
          w="75%"
          m="auto"
          mb="50px"
          p="30px"
        >
          {data.map((el) => (
            <ProductCard key={el.id} {...el} />
          ))}
        </SimpleGrid>
      </Box>
      <Box w="20%" m="auto" mt="30px">
        <Button isDisabled={page === 1} onClick={() => handleClick(-1)}>
          Prev
        </Button>
        <Button ml="30px">{page}</Button>
        <Button isDisabled={page === 2} ml="30px" onClick={() => handleClick(1)}>
          Next
        </Button>
      </Box>
    </>
  );
}
