import { Button, TextField, Box, RadioGroup, FormControlLabel, Radio, Rating } from '@mui/material';
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography';
import SendIcon from '@mui/icons-material/Send';
import '../App.css'
import { useContext, useState } from 'react'
import UserContext from './UserContext';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

function Create() {
    const [name, setName] = useState('')
    const [details, setDetails] = useState('')
    const [nameError, setNameError] = useState(false)
    const [detailError, setDetailError] = useState(false)
    const [gender, setGender]= useState('female')
    const [rating, setRating]= useState(5)
    const {createCustomer} = useContext(UserContext)
    const [openSnackBar, setOpenSnackBar] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (name && details) {
            createCustomer({name, details, gender, rating})
            setOpenSnackBar(true)
        }
        if (name === '')
            setNameError(true)
        if (details === '')
            setDetailError(true)

    }

   

    const handleClose=()=>{
        openSnackBar(false)
    }

    return (
        <Container style={{padding:"20px"}}>
            <Typography variant='h3' align='center' gutterBottom>
                Create a new Customer
            </Typography>
            <form noValidate autoComplete='off' onSubmit={handleSubmit}>
                <Box pb={2}>
                    <TextField label='Name' variant='standard' fullWidth
                        onChange={(e) => setName(e.target.value)}
                        error={nameError} />
                    <TextField label='Detail' variant='standard' fullWidth multiline rows={3}
                        onChange={(e) => setDetails(e.target.value)}
                        error={detailError} />

                    <RadioGroup value={gender} onChange={e=> setGender(e.target.value)}>
                        <FormControlLabel value='male' control={<Radio />} label="Male"/>
                        <FormControlLabel value='female' control={<Radio />} label="Female"/>
                        <FormControlLabel value='other' control={<Radio />} label="Other"/>
                    </RadioGroup>

                    <Rating value={rating} onChange={(e)=>setRating(~~e.target.value)}/>
                </Box>
                <Button type='submit' variant='contained' startIcon={<SendIcon />}>Submit</Button>
            </form >

            <Snackbar
                
                autoHideDuration={1500}
                onClose={handleClose}>
                <Alert severity='success' open={openSnackBar}>
                    Create new customer successfully
                </Alert>
            </Snackbar>
        </Container >
    );
}

export default Create;