import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/configureStore';
import { addBasketItemAsync, increment } from './counterSlice';

function Contact() {
  const dispatch = useAppDispatch();
  const { value } = useAppSelector(state => state.counter)
  const { basket } = useAppSelector(state => state.counter)

  useEffect(() => {
    dispatch(addBasketItemAsync())
  }, [dispatch])

  console.log(basket)


  return (
    <>
      <button onClick={() => dispatch(increment())}>
        +
      </button>
      <span>{value}</span>
      <div>
    {basket && basket.title}
      </div>
    </>
  )
}

export default Contact