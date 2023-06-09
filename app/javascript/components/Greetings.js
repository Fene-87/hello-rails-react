import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchGreetings } from '../redux/features/greetings/greetingsSlice';

const Greetings = () => {
  const { greetings } = useSelector((store) => store.greetings)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGreetings());
  }, [dispatch])
  return (
    <div>
        <h1>{greetings[0].message}</h1>
        <h2>Working</h2>
    </div>
  )
}

export default Greetings