import React,{ReactNode} from 'react'
import { Link } from 'react-router-dom'
import {BsCart3 , Badge} from 'react-icons/bs'
import {
    Box,
    Flex,
    Avatar,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    useColorModeValue,
    Stack,
    useColorMode,
    Center,
    Image
  } from '@chakra-ui/react';
  import { MoonIcon, SunIcon } from '@chakra-ui/icons';
export default function Navbar(props) {
    const NavLink = ({ children, path }) => (
        <Link
          px={2}
          py={1}
          rounded={'md'}
          _hover={{
            textDecoration: 'none',
            bg: useColorModeValue('gray.200', 'gray.700'),
          }}
          to={path}>
          {children}
        </Link>
      );
    const { colorMode, toggleColorMode } = useColorMode();
    const { isOpen, onOpen, onClose } = useDisclosure();
  return (
      <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box><Image src='../assets/images/logo512.png'/></Box>
          <Box>
            <Stack direction={'row'} spacing={4}>
                <NavLink children={'React hook'} path={'/home'}  />
                <NavLink children={'Todo'} path={'/todo'}/>
                <NavLink children={'React Advanced'} path={'/about'}/>
                <NavLink children={'Product'} path={'/product'}/>
            </Stack>
          </Box>
          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7} alignItems={'center'}>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>
              <Box><Link to={'cart'}><BsCart3 size={20}/></Link></Box>
              <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                  <Avatar
                    size={'sm'}
                    src={'https://avatars.dicebear.com/api/male/username.svg'}
                  />
                </MenuButton>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
      </>
  )
}
