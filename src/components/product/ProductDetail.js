import React, { useState } from 'react'
import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  VisuallyHidden,
  List,
  ListItem
} from '@chakra-ui/react';
import axios from 'axios'
import { useQuery} from 'react-query'
import { MdLocalShipping } from 'react-icons/md';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux/es/exports';
import {addToCart} from '../../redux/action'

export default function ProductDetail() {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1)
  let {prodId} = useParams();
  const fetchProduct = ()=>{
    const response = axios.get(`https://fakestoreapi.com/products/${prodId}`)
    return response
  }
  const { data,status,error} = useQuery(['product'],()=>fetchProduct())
  if (status === 'loading') {
    return <span>Loading...</span>
  }
  if (status === 'error') {
    return <span>Error: {error.message}</span>
  }
  return (
    <>
     <Container maxW={'7xl'}>
       <SimpleGrid
         columns={{ base: 1, lg: 2 }}
         spacing={{ base: 8, md: 10 }}
         py={{ base: 18, md: 24 }}>
         <Flex>
           <Image
             rounded={'md'}
             alt={'product image'}
             src={data?.data.image}
             fit={'cover'}
             align={'center'}
             w={'100%'}
             h={{ base: '100%', sm: '400px', lg: '500px' }}
           />
         </Flex>
         <Stack spacing={{ base: 6, md: 10 }}>
           <Box as={'header'}>
             <Heading
               lineHeight={1.1}
               fontWeight={600}
               fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
               {data?.data.title}
             </Heading>
             <Text
               fontWeight={300}
               fontSize={'2xl'}>
               ${data?.data.price} USD
             </Text>
           </Box>

           <Stack
             spacing={{ base: 4, sm: 6 }}
             direction={'column'}
             divider={
               <StackDivider
               />
             }>
             <VStack spacing={{ base: 4, sm: 6 }}>
               <Text fontSize={'lg'}>
                 {data?.data.description}
               </Text>
             </VStack>
             <Box>
               <Text
                 fontSize={{ base: '16px', lg: '18px' }}
                 fontWeight={'500'}
                 textTransform={'uppercase'}
                 mb={'4'}>
                 Category : {data?.data.category}
               </Text>
             </Box>
           </Stack>
           <Box>
              <Text>Quantity</Text>
            <Flex justifyContent={'space-around'} alignItems={'center'}>
                <Button disabled={quantity<=1} onClick={()=> setQuantity(pre=>pre-1)}>-</Button>
                <Text>{quantity}</Text>
                <Button onClick={()=> setQuantity(pre=>pre+1)}>+</Button>
            </Flex>
           </Box>
           <Button
             rounded={'none'}
             w={'full'}
             mt={8}
             size={'lg'}
             py={'7'}
             textTransform={'uppercase'}
             _hover={{
               transform: 'translateY(2px)',
               boxShadow: 'lg',
             }}
             onClick={(e)=>{
              e.preventDefault()
              e.stopPropagation()
              dispatch(addToCart({
                id: data?.data.id,
                quantity : quantity,
                image : data?.data.image,
                title : data?.data.title,
                price : data?.data.price,
              }))
            }}
             >
             Add to cart
           </Button>

           <Stack direction="row" alignItems="center" justifyContent={'center'}>
             <MdLocalShipping />
             <Text>2-3 business days delivery</Text>
           </Stack>
         </Stack>
       </SimpleGrid>
     </Container>
    </>
    
  )
}
