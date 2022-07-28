import { HStack,Text, Box, Image, Flex,VStack } from '@chakra-ui/react';
import React, { useState } from 'react'
import { useSelector } from 'react-redux/es/exports'
import { selectCart } from '../../redux/cartReducer';

export default function Cart() {
  const cartSelector = useSelector(selectCart)
  const[totalPrice,setTotalPrice] = useState(()=>{
    let count = 0
    cartSelector.forEach((e)=>{
      count+= e.price*e.quantity
    })
    return count
  })
  return (
    <>
    { cartSelector.map((item)=>{
      return(
        <Box 
          key={item.id}
          maxW={'100%'}
          w={'full'}
          boxShadow={'2xl'}
          rounded={'lg'}
          pos={'relative'}
          zIndex={1}
          height={'28'}
          marginBottom={'5'}
        >
          <Flex justifyContent={'space-around'}>
              <Image
                src={item.image} 
                height={100}
                width={100}  
                objectFit={'contain'}/>        
            <VStack>
              <Box>
                <Text>{item.title}</Text>
              </Box>
              <Box>
                <Text>Quantity: {item.quantity}</Text>
                <Text>Price: {item.quantity *item.price}$</Text>
              </Box>
            </VStack>
          </Flex>
        </Box>
      )
      })
    }
    {totalPrice>0?
      <Box><Text>Total Price: {totalPrice}</Text></Box>
      :
      <Box><Text>Cart is Empty</Text></Box>
    }
    
    </>
  )
}
