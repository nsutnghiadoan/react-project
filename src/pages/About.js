import React,{useEffect, useState} from 'react'
import { Button } from '@chakra-ui/react'
import { MdOutlinePhonelink } from "react-icons/md";
import {useNavigate } from 'react-router-dom';
import '../assets/css/_advanced.scss'
export default function About() {
  const navigate = useNavigate()
  return (
    <>
        <div className='advanced'>
          <Button onClick={()=>navigate(1)}>
            go forward
          </Button>
          <Button onClick={()=>navigate(2)}>
            go 2 page forward
          </Button>
          <Button onClick={()=>navigate(-2)}>
            go 2 page back
          </Button>
          <Button onClick={()=>navigate(-1)}>
            go back
          </Button>
        </div>
    </>
  )
}
