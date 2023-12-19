import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/configureStore';
import { addBasketItemAsync, increment } from './counterSlice';
import { Container, Grid, Typography } from '@mui/material';
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
        <Container>
          <Grid container item>
            <Grid xs={12} md={6} lg={6} sx={{ mt: 2, mb: 2 }}>
              <Typography component={"h2"} sx={{ mt: 2, mb: 2 }}>İletişim</Typography>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12044.796802875073!2d28.836687314504275!3d40.99901299162577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa4a5934f0147%3A0x36250195a49b22f6!2zxZ5pcmluZXZsZXIsIDM0MTg4IEJhaMOnZWxpZXZsZXIvxLBzdGFuYnVs!5e0!3m2!1str!2str!4v1703004546647!5m2!1str!2str" width="600" height="450" loading="lazy" ></iframe>
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  )
}

export default Contact