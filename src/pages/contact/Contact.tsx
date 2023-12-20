import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/configureStore';
import { addBasketItemAsync, increment } from './counterSlice';
import { Box, Button, Container, Grid, Input, Typography } from '@mui/material';
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
      {/* <button onClick={() => dispatch(increment())}>
        +
      </button>
      <span>{value}</span>
      <div>
        {basket && basket.title} */}
        <Container maxWidth="xl">
          <Grid container>
            <Grid item xs={12} md={6} lg={6} sx={{ mt: 2, mb: 2 }}>
              <Typography component={"h2"} sx={{ mt: 2, mb: 2 }}>İletişim</Typography>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12044.796802875073!2d28.836687314504275!3d40.99901299162577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa4a5934f0147%3A0x36250195a49b22f6!2zxZ5pcmluZXZsZXIsIDM0MTg4IEJhaMOnZWxpZXZsZXIvxLBzdGFuYnVs!5e0!3m2!1str!2str!4v1703004546647!5m2!1str!2str" width="600" height="450" loading="lazy" ></iframe>
            </Grid>
            <Grid item xs={12} lg={6}>
              <Box component="form" p={2} method="post">
                <Box px={3} py={{ xs: 2, sm: 6 }}>
                  <Typography variant="h2" mb={1}>
                    İletişim Formu
                  </Typography>
                  <Typography variant="body1" color="text" mb={2}>
                    Lütfen iletişim formunu doldurun !
                  </Typography>
                </Box>
                <Box pt={0.5} pb={3} px={3}>
                  <Grid container>
                    <Grid item xs={12} pr={1} mb={6}>
                      <Input
                        //   variant="standard"
                        //   label="My name is"
                        placeholder="Ad & Soyad"
                        //   InputLabelProps={{ shrink: true }}
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12} pr={1} mb={6}>
                      <Input
                        //   variant="standard"
                        //   label="I'm looking for"
                        placeholder="Email"

                        //   InputLabelProps={{ shrink: true }}
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12} pr={1} mb={6}>
                      <Input
                        //   variant="standard"
                        //   label="Your message"
                        placeholder="Konu..."
                        //   InputLabelProps={{ shrink: true }}
                        fullWidth
                        multiline
                        rows={6}
                      />
                    </Grid>
                  </Grid>
                  <Grid
                    container
                    item
                    xs={12}
                    md={6}
                    justifyContent="flex-end"
                    textAlign="right"
                    ml="auto"
                  >
                    <Button variant="contained">
                      Gönder
                    </Button>
                  </Grid>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      {/* </div> */}
    </>
  )
}

export default Contact