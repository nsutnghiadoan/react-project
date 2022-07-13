import React, {useEffect , useState} from 'react'
import '../assets/css/_hook.scss'
import {useDispatch, useSelector} from 'react-redux'
import { incrementNum, minusNum }  from '../redux/action'
import { selectCount } from '../redux/increReducer'
import store from '../redux/store'
export default function Home() {
  const count = useSelector(selectCount)
  let [data, setData]= useState([])
  let dispatch = useDispatch()
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(res => res.json())
      .then(res => {
        setData(res)
      })
  },[])
  return (
    <>
      <div className='hook'>
        <div className='useState'>
          <h3>useState & redux example</h3>
          <h4>{count.value}</h4>
          <button onClick={()=>{
            dispatch(incrementNum())
          }}>+</button>
          <button onClick={()=>{
            dispatch(minusNum())
          }}>-</button>
        </div>
        <div className='useEffect'>
          <h3>useEffect example</h3>
          <h4>Look at the title of this web</h4>
          <ul>
          {data.map((e)=>{
            return(
              <li key={e.id}>{e.title}</li>
            )
          })}
          </ul>
        </div>
      </div>
    </>
  )
}
