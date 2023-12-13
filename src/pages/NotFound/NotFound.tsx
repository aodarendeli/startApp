import { Button, Container, Divider, Paper, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <Container sx={{height : 400}} component={Paper}>
        <Typography gutterBottom variant='h3'>Opps - we could not find anything</Typography>
        <Divider />
        <Button fullWidth component={Link} to='/catalog'>
            Go back shop
        </Button>
    </Container>
  )
}

export default NotFound