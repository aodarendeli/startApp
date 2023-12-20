import { Button, Container, Divider, Paper, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <Container sx={{height : 400 , mb:5, mt:5}} component={Paper}>
        <Typography gutterBottom variant='h3'>Aradağınız sayfa bulunamadı.</Typography>
        <Divider />
        <Button fullWidth component={Link} to='/'>
            Anasayfaya Geri Dön !
        </Button>
    </Container>
  )
}

export default NotFound