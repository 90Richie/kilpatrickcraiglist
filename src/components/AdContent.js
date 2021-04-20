import './AdContent.css'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useState } from 'react'

function AdContent() {
    const [open, setOpen] = useState(false);
    const [values, setValues] = useState({
        title: '',
        price: '',
        body: '',
        image: '',
      });

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };

    return (
        <div>
            <h2>Select One of the Following</h2>
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>Place Ad</Button>
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>Edit Ad</Button>
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>Remove Ad</Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">New Ad</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Please fill out the following information about your ad
          </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="title"
                        label="Title"
                        fullWidth
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="price"
                        label="Price (USD)"
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
          </Button>
                    <Button onClick={handleClose} color="primary">
                        Submit
          </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default AdContent;