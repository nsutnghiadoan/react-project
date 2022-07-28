import React, { useState } from 'react'
import axios from 'axios'
import {
  Box,
  Heading,
  Text,
  Stack,
  Image,
  SimpleGrid,
  Center,
  IconButton,
  Select
} from '@chakra-ui/react';
import { useQuery} from 'react-query'
import { Link } from 'react-router-dom';


export default function ListProduct({setProductId}) {
  const [category, setCategory] = useState('')
  const fetchProduct = (filter)=>{  
    const response = axios.get(`https://fakestoreapi.com/products/${filter}`)
    return response
  }
  const { data,status,error,refetch} = useQuery(['product',category],()=>fetchProduct(category))
  if (status === 'loading') {
    return <span>Loading...</span>
  }
  if (status === 'error') {
    return <span>Error: {error.message}</span>
  }
  return (
    <>
      <Stack>
        <Select placeholder='Select option' value={category} onChange={(e)=>{
          setCategory(e.target.value)
        }}>
          <option value='category/jewelery'>jewelery</option>
          <option value='category/electronics'>electronics</option>
          <option value="category/men's clothing">men's clothing</option>
          <option value="category/women's clothing">women's clothing</option>
        </Select>
      </Stack>
      <Center className='list_product'>
          <SimpleGrid columns={[2, null, 3]} spacing='40px'>
            { data?.data?.map((productItem,index)=>{
              return(
                <Box 
                  key={productItem.id}
                  role={'group'}
                  p={6}
                  maxW={'330px'}
                  w={'full'}
                  boxShadow={'2xl'}
                  rounded={'lg'}
                  pos={'relative'}
                  zIndex={1}
                  onClick={()=>setProductId(productItem.id)}
                > 
                  <Link to={`${productItem.id}`}>
                    <Box
                      rounded={'lg'}
                      mt={-12}
                      pos={'relative'}
                      height={'230px'}
                      _after={{
                        transition: 'all .3s ease',
                        content: '""',
                        w: 'full',
                        h: 'full',
                        pos: 'absolute',
                        top: 5,
                        left: 0,
                        filter: 'blur(15px)',
                        zIndex: -1,
                      }}
                    >
                    <Image
                        rounded={'lg'}
                        height={230}
                        width={282}
                        objectFit={'cover'}
                        src={productItem.image}
                      />
                    </Box>
                    <Stack pt={10} align={'center'}>
                      <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
                        {productItem.category}
                      </Text>
                      <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
                      {productItem.title}
                      </Heading>
                      <Stack direction={'row'} align={'center'}>
                        <Text fontWeight={800} fontSize={'xl'}>
                          {productItem.price}$
                        </Text>
                      </Stack>
                    </Stack>
                  </Link>
                </Box>
              )
            })}
          </SimpleGrid>
      </Center>
    </>
  )
}
