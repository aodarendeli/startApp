import { Container, Divider, Paper, Typography } from '@mui/material'
import { useLocation } from 'react-router-dom'

function ServerError() {
    const { state } = useLocation();
    return (
        <Container component={Paper}>
            {state?.error ? (
                <>
                    <Typography variant='h3' color='secondary' gutterBottom>
                        {state.error.title}
                    </Typography>
                    <Divider />
                    <Typography variant='body1'>
                        {state.error.detail || 'INTERNAL SERVER'}
                    </Typography>
                </>
            ) : (
                <></>
            )

            }

        </Container>
    )
}

export default ServerError