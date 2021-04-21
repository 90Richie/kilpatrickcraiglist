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
    const [openPlaceAd, setOpenPlaceAd] = useState(false);
    const [openEditAd, setOpenEditAd] = useState(false);
    const [openRemoveAd, setOpenRemoveAd] = useState(false);
    const [location, setLocation] = useState('Luke AFB');
    const [filter, setFilter] = useState('Selling');
    const [values, setValues] = useState({
        title: '',
        price: '',
        body: '',
        imageUrl: '',
        postsid: ''
    });

    const handleClickOpenPlaceAd = () => {
        setOpenPlaceAd(true);
    };

    const handleClosePlaceAd = () => {
        setOpenPlaceAd(false);
    };

    const handleClickOpenEditAd = () => {
        setOpenEditAd(true);
    };

    const handleCloseEditAd = () => {
        setOpenEditAd(false);
    };

    const handleClickOpenRemoveAd = () => {
        setOpenRemoveAd(true);
    };

    const handleCloseRemoveAd = () => {
        setOpenRemoveAd(false);
    };

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleChangeLocation = (event) => {
        setLocation(event.target.value)
      };

    const handleChangeFilters = (event) => {
        setFilter(event.target.value)
      };  

    return (
        <div className="Ads">
            <h2>Select One of the Following</h2>
            <Button variant="contained" onClick={handleClickOpenPlaceAd} startIcon={<AddCircleIcon fontSize="5em" />} style={{ fontWeight: "750", fontSize: "1.5em", backgroundColor: "#1974d3", color: "#ffe6b6", width: "17vw", margin: '5vh', padding: '5vh' }}>Place Ad</Button><br></br>
            <Button variant="outlined" onClick={handleClickOpenEditAd} startIcon={<EditIcon />} style={{ fontWeight: "750", fontSize: "1.5em", backgroundColor: "#1974d3", color: "#ffe6b6", width: "17vw", margin: '5vh', padding: '5vh' }}>Edit Ad</Button><br></br>
            <Button variant="outlined" onClick={handleClickOpenRemoveAd} startIcon={<DeleteIcon />} style={{ fontWeight: "750", fontSize: "1.5em", backgroundColor: "#1974d3", color: "#ffe6b6", width: "17vw", margin: '5vh', padding: '5vh' }}>Remove Ad</Button><br></br>
            <Dialog open={openPlaceAd} onClose={handleClosePlaceAd} aria-labelledby="form-dialog-title" width="50vw" margin="2vh">
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
                        style={{ marginRight: '7vw' }}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="imageUrl"
                        value={values.imageUrl}
                        label="Image URL"
                        variant="filled"
                        onChange={handleChange("imageUrl")}
                    />
                    <TextField
                        select
                        fullWidth
                        margin="dense"
                        id="location"
                        label="Location"
                        variant="filled"
                        value={location}
                        onChange={handleChangeLocation}
                    > 
                        <MenuItem value={"Luke AFB"}>Luke AFB</MenuItem>
                        <MenuItem value={"Davis Monthan AFB"}>Davis Monthan AFB</MenuItem>
                    </TextField>
                    <TextField
                        select
                        fullWidth
                        margin="dense"
                        id="filters"
                        label="Buying or Selling?"
                        variant="filled"
                        value={filter}
                        onChange={handleChangeFilters}
                    >
                        <MenuItem value={"Selling"}>Selling</MenuItem>
                        <MenuItem value={"Buying"}>Buying</MenuItem>
                    </TextField>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="body"
                        value={values.body}
                        label="Description (including contact info)"
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
                    <Button onClick={handleClosePlaceAd} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleClosePlaceAd} color="primary">
                        Submit
                     </Button>
                </DialogActions>
            </Dialog>

            <Dialog open={openEditAd} onClose={handleCloseEditAd} aria-labelledby="form-dialog-title" width="50vw" margin="2vh">
                <DialogTitle id="form-dialog-title">Edit Existing Ad</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Please edit the data below
          </DialogContentText>
                     <TextField
                        autoFocus
                        margin="dense"
                        id="postsid"
                        value={values.postsid}
                        label="Post ID"
                        variant="filled"
                        onChange={handleChange("postsid")}
                        style={{ marginRight: '7vw' }}
                    />
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
                        style={{ marginRight: '7vw' }}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="imageUrl"
                        value={values.imageUrl}
                        label="Image URL"
                        variant="filled"
                        onChange={handleChange("imageUrl")}
                    />
                    <TextField
                        select
                        fullWidth
                        margin="dense"
                        id="location"
                        label="Location"
                        variant="filled"
                        value={location}
                        onChange={handleChangeLocation}
                    > 
                        <MenuItem value={"Luke AFB"}>Luke AFB</MenuItem>
                        <MenuItem value={"Davis Monthan AFB"}>Davis Monthan AFB</MenuItem>
                    </TextField>
                    <TextField
                        select
                        fullWidth
                        margin="dense"
                        id="filters"
                        label="Buying or Selling?"
                        variant="filled"
                        value={filter}
                        onChange={handleChangeFilters}
                    >
                        <MenuItem value={"Selling"}>Selling</MenuItem>
                        <MenuItem value={"Buying"}>Buying</MenuItem>
                    </TextField>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="body"
                        value={values.body}
                        label="Description (including contact info)"
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
                    <Button onClick={handleCloseEditAd} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleCloseEditAd} color="primary">
                        Submit
                     </Button>
                </DialogActions>
            </Dialog>

            <Dialog open={openRemoveAd} onClose={handleCloseRemoveAd} aria-labelledby="form-dialog-title" width="50vw" margin="2vh">
                <DialogTitle id="form-dialog-title">Delete an Existing Ad</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Please select an ad to remove
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="postsid"
                        value={values.postsid}
                        label="Post ID"
                        variant="filled"
                        onChange={handleChange("postsid")}
                        style={{ marginRight: '7vw' }}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseRemoveAd} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleCloseRemoveAd} color="secondary" variant='outlined'>
                        Delete
                     </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default AdContent;