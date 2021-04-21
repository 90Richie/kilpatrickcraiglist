import './AdContent.css'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import MenuItem from '@material-ui/core/MenuItem';
import ImageIcon from '@material-ui/icons/Image';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { useState } from 'react'

function AdContent() {
    const [open, setOpen] = useState(false);
    const [values, setValues] = useState({
        title: '',
        price: '',
        body: '',
        image: '',
        filters: '',
        location: ''
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
        <div className="Ads">
            <h2>Select One of the Following</h2>
            <Button variant="contained" onClick={handleClickOpen} startIcon={<AddCircleIcon fontSize="5em" />} style={{ fontWeight: "750", fontSize: "1.5em", backgroundColor: "#1974d3", color: "#ffe6b6", width: "17vw", margin: '5vh', padding: '5vh' }}>Place Ad</Button><br></br>
            <Button variant="outlined" onClick={handleClickOpen} startIcon={<EditIcon />} style={{ fontWeight: "750", fontSize: "1.5em", backgroundColor: "#1974d3", color: "#ffe6b6", width: "17vw", margin: '5vh', padding: '5vh' }}>Edit Ad</Button><br></br>
            <Button variant="outlined" onClick={handleClickOpen} startIcon={<DeleteIcon />} style={{ fontWeight: "750", fontSize: "1.5em", backgroundColor: "#1974d3", color: "#ffe6b6", width: "17vw", margin: '5vh', padding: '5vh' }}>Remove Ad</Button><br></br>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" width="50vw" margin="2vh">
                <DialogTitle id="form-dialog-title">New Ad</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Please fill out the following information about your ad
          </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="title"
                        value={values.title}
                        label="Title"
                        variant="filled"
                        onChange={handleChange("title")}
                        style={{ marginRight: '7vw' }}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="price"
                        value={values.price}
                        label="Price - USD"
                        variant="filled"
                        onChange={handleChange("price")}
                    />
                    <TextField
                        select
                        fullWidth
                        margin="dense"
                        id="location"
                        value={values.location}
                        label="Location"
                        variant="filled"
                        onChange={handleChange("price")}
                    >
                        <MenuItem>Luke</MenuItem>
                        <MenuItem>Davis Monthan</MenuItem>
                    </TextField>
                    <TextField
                        select
                        fullWidth
                        margin="dense"
                        id="filters"
                        value={values.filters}
                        label="Buying or Selling?"
                        variant="filled"
                        onChange={handleChange("price")}
                    >
                        <MenuItem>Buying</MenuItem>
                        <MenuItem>Selling</MenuItem>
                    </TextField>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="body"
                        value={values.body}
                        label="Description"
                        variant="outlined"
                        fullWidth
                        onChange={handleChange("body")}
                    />
                </DialogContent>
                <DialogActions>
                    <Button
                        variant="contained"
                        color="primary"
                        startIcon={<ImageIcon />}
                        
                    >
                        Add a photo
                    </Button>
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