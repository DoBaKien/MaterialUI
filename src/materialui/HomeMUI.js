import { useContext } from 'react'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography';
import { Box, Grid} from '@mui/material';
import UserCard from './UserCard';
import UserContext from './UserContext';
import CssBaseline from '@mui/material/CssBaseline'
import { styled } from '@mui/system'
function HomeMUI() {

    const { customers } = useContext(UserContext)
    
    const MyDiv= styled('div')({
        backgroundColor: 'aliceblue',
        padding: 10,
        borderRadius: 15,
    })

    const MyTypography = styled(Typography)({
        backgroundColor: '#52A388',
        color: 'white',
        textAlign: 'center',
        padding: 5,
        fontSize: "30px"
    })

    return (
        <Container>
            <CssBaseline/>
            <Typography variant='h3' gutterBottom align='center' >
                Dashboard
            </Typography>
            <MyTypography>
                Dashboard
            </MyTypography>

            <Box sx={{display: "flex"}}>
                <Box component="main" sx={{flexGrow: 1, p:3}}>
                    <Grid container p={5} spacing={6}>
                        {customers && customers.map((customer) =>
                            <Grid item xs={4} key={customer.id}>
                                <MyDiv>
                                    <UserCard customer={customer} />
                                </MyDiv>
                            </Grid>)}
                    </Grid>
                </Box>
            </Box>


        </Container>
    );
}

export default HomeMUI;