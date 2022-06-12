import {useContext, useState, useEffect, forwardRef} from 'react';
import { Snackbar } from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import { AppContext } from '../context/AppContext';

const Alert = forwardRef(function Alert(props, ref){
    return <MuiAlert elevation={6} ref={ref} {...props}/>;
})

export default function AlertPopUp(){
    const [open, setOpen] = useState(false);
    const {alert, setAlert} = useContext(AppContext)

    useEffect(
        ()=>{
            setOpen(true)
        }, [alert]
    )

    const handleClose = (event, reason) => {
        if (reason === 'clickaway'){
            return;
        }
        setOpen(false);
        setAlert({})
    }

    if(!alert?.msg) return <></>
    return(
        <Snackbar open={open} autoHideDuration={5000} onClose={handleClose} anchorOrigin={{vertical:'top', horizontal:'right'}}>
            <Alert onClose={handleClose} severity={alert.cat} sx={{width:'100%'}}>
                {alert.msg}
            </Alert>
        </Snackbar>
    )
}