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
import { useEffect, useState } from 'react'

function AdContent() {
    const [openPlaceAd, setOpenPlaceAd] = useState(false);
    const [openEditAd, setOpenEditAd] = useState(false);
    const [openRemoveAd, setOpenRemoveAd] = useState(false);
    const [openAdditionalEditAd, setOpenAdditionalEditAd] = useState(false);
    const [adSubmitMessage, setAdSumbitMessage] = useState(false);
    const [adEditMessage, setAdEditMessage] = useState(false);
    const [adDeleteMessage, setAdDeleteMessage] = useState(false);
    const [adId, setAdId] = useState({
        "postsid" : ""
    });
    const [values, setValues] = useState({
        "post_title": "",
        "price": "",
        "post_body": "",
        "image_url": "",
        "base_id": 1,
        "tag_id": 1,
        "user_id": 1,
        "contact_info": ""
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
        setOpenAdditionalEditAd(false);
    };

    const handleClickOpenRemoveAd = () => {
        setOpenRemoveAd(true);
    };

    const handleCloseRemoveAd = () => {
        setOpenRemoveAd(false);
    };

    const handleCloseAdSubmitMessage = () => {
        setAdSumbitMessage(false);
    };

    const handleCloseAdEditMessage = () => {
        setAdEditMessage(false);
    };

    const handleCloseAdDeleteMessage = () => {
        setAdDeleteMessage(false);
    };

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleChangeLocation = (event) => {
        setValues({ ...values, ['base_id']: event.target.value })
      };

    const handleChangeFilters = (event) => {
        setValues({ ...values, ['tag_id']: event.target.value })
      };

    const handleChangeAdId = (prop) => (event) => {
        setAdId({ ...adId, [prop]: event.target.value });
    };   
      
    const onPlaceAdSubmit = (e) => {
        e.preventDefault();
        setAdSumbitMessage(true);

        if (values['image_url'].length < 4) {
            values['image_url'] = "https://bit.ly/3aue8MV"
        }

        return fetch('http://localhost:3001/ads', {
            method: 'POST', 
            mode:'cors',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
        })
        .then(data => setValues({
            "post_title": "",
            "price": "",
            "post_body": "",
            "image_url": "",
            "base_id": 1,
            "tag_id": 1,
            "user_id": 1,
            "contact_info": ""
        }))
    }

    const onEdit = (e) => {
        e.preventDefault();
        setAdEditMessage(true);
        const newObj = {...adId,
                        ...values};                

        return fetch('http://localhost:3001/ads', {
            method: 'PATCH', 
            mode:'cors',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newObj)
        })
        .then(data => {
            setValues({
            "post_title": "",
            "price": "",
            "post_body": "",
            "image_url": "",
            "base_id": 1,
            "tag_id": 1,
            "user_id": 1,
            "contact_info": ""
        })
        setAdId({
            "postsid": ""
        })
    })
    }
    
    const onDelete = (e) => {
        e.preventDefault();
        setAdDeleteMessage(true);

        return fetch('http://localhost:3001/ads', {
            method: 'DELETE', 
            mode:'cors',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(adId)
            })
            .then(data => setAdId({
                "postsid" : ""
            }))
    }

    const getAdInfo = (e) => {
        e.preventDefault();
        setOpenAdditionalEditAd(true);

        return fetch(`http://localhost:3001/ads/${adId.postsid}`)
            .then(res => res.json())
            .then(data => setValues(...data))
    }

    return (
        <div className="Ads">
            <h2>Select One of the Following</h2>
            <Button variant="contained" onClick={handleClickOpenPlaceAd} startIcon={<AddCircleIcon fontSize="5em" />} style={{ fontWeight: "750", fontSize: "1.5em", backgroundColor: "#1974d3", color: "#ffe6b6", width: "17vw", margin: '5vh', padding: '5vh' }}>Place Ad</Button><br></br>
            <Button variant="outlined" onClick={handleClickOpenEditAd} startIcon={<EditIcon />} style={{ fontWeight: "750", fontSize: "1.5em", backgroundColor: "#1974d3", color: "#ffe6b6", width: "17vw", margin: '5vh', padding: '5vh' }}>Edit Ad</Button><br></br>
            <Button variant="outlined" onClick={handleClickOpenRemoveAd} startIcon={<DeleteIcon />} style={{ fontWeight: "750", fontSize: "1.5em", backgroundColor: "#1974d3", color: "#ffe6b6", width: "17vw", margin: '5vh', padding: '5vh' }}>Remove Ad</Button><br></br>
            <Dialog open={openPlaceAd} margin="2vh">
                <DialogTitle id="form-dialog-title">New Ad</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Please fill out the following information about your ad
                        </DialogContentText>
                            <TextField
                                autoFocus
                                fullWidth
                                margin="dense"
                                id="post_title"
                                value={values['post_title']}
                                label="Title"
                                variant="filled"
                                onChange={handleChange("post_title")}
                                style={{ marginRight: '7vw' }}
                            />
                            <TextField
                                autoFocus
                                fullWidth
                                margin="dense"
                                id="price"
                                value={values['price']}
                                label="Price - USD"
                                variant="filled"
                                onChange={handleChange("price")}
                                style={{ marginRight: '7vw' }}
                            />
                            <TextField
                                autoFocus
                                fullWidth
                                margin="dense"
                                id="image_url"
                                value={values['image_url']}
                                label="Image URL"
                                variant="filled"
                                onChange={handleChange("image_url")}
                            />
                            <TextField
                                autoFocus
                                fullWidth
                                margin="dense"
                                id="image_url"
                                value={values['contact_info']}
                                label="Email / Phone Number"
                                variant="filled"
                                onChange={handleChange("contact_info")}
                            />
                            <TextField
                                select
                                fullWidth
                                margin="dense"
                                id="base_id"
                                label="Location"
                                variant="filled"
                                value={values['base_id']}
                                onChange={handleChangeLocation}
                            > 
                                <MenuItem value={2}>Fort Hood</MenuItem>
                                <MenuItem value={3}>Lackland JBSA</MenuItem>
                            </TextField>
                            <TextField
                                select
                                fullWidth
                                margin="dense"
                                id="tag_id"
                                label="Buying or Selling?"
                                variant="filled"
                                value={values['tag_id']}
                                onChange={handleChangeFilters}
                            >
                                <MenuItem value={1}>Wanted</MenuItem>
                                <MenuItem value={2}>Buying</MenuItem>
                                <MenuItem value={3}>Selling</MenuItem>
                            </TextField>
                            <TextField
                                autoFocus
                                margin="dense"
                                id="post_body"
                                value={values['post_body']}
                                label="Description"
                                variant="outlined"
                                fullWidth
                                onChange={handleChange("post_body")}
                            />
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClosePlaceAd} color="primary">
                                Cancel
                            </Button>
                            <Button variant='contained' onClick={onPlaceAdSubmit} color="primary">
                                Submit
                            </Button>
                        </DialogActions>
            </Dialog>

            <Dialog open={openEditAd} onClose={handleCloseEditAd} aria-labelledby="form-dialog-title" width="50vw" margin="2vh">
                <DialogTitle id="form-dialog-title">Edit Existing Ad</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                    Input an Ad ID to Edit
                        </DialogContentText>
                                    <TextField
                                        autoFocus
                                        fullWidth
                                        margin="dense"
                                        id="postsid"
                                        value={adId['postsid']}
                                        label="Post ID"
                                        variant="filled"
                                        onChange={handleChangeAdId("postsid")}
                                        style={{ marginRight: '7vw' }}
                                    />
                                    <Button onClick={handleCloseEditAd} color="primary">
                                        Cancel
                                    </Button>
                                    <Button onClick={getAdInfo} color="primary" variant="contained">Find Ad Info</Button>
                </DialogContent>                    
            </Dialog>

                <Dialog open={openAdditionalEditAd} onClose={handleCloseEditAd} aria-labelledby="form-dialog-title" width="50vw" margin="2vh">
                    <DialogTitle id="form-dialog-title">Edit Existing Ad</DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                            Please edit the data below    
                            </DialogContentText>                                                
                                    <TextField
                                        autoFocus
                                        fullWidth
                                        margin="dense"
                                        id="post_title"
                                        value={values['post_title']}
                                        label="Title"
                                        variant="filled"
                                        onChange={handleChange("post_title")}
                                        style={{ marginRight: '7vw' }}
                                    />
                                    <TextField
                                        autoFocus
                                        fullWidth
                                        margin="dense"
                                        id="price"
                                        value={values['price']}
                                        label="Price - USD"
                                        variant="filled"
                                        onChange={handleChange("price")}
                                        style={{ marginRight: '7vw' }}
                                    />
                                    <TextField
                                        autoFocus
                                        fullWidth
                                        margin="dense"
                                        id="image_url"
                                        value={values['image_url']}
                                        label="Image URL"
                                        variant="filled"
                                        onChange={handleChange("image_url")}
                                    />
                                    <TextField
                                        autoFocus
                                        fullWidth
                                        margin="dense"
                                        id="image_url"
                                        value={values['contact_info']}
                                        label="Email / Phone Number"
                                        variant="filled"
                                        onChange={handleChange("contact_info")}
                                    />
                                    <TextField
                                        select
                                        fullWidth
                                        margin="dense"
                                        id="base_id"
                                        label="Location"
                                        variant="filled"
                                        value={values['base_id']}
                                        onChange={handleChangeLocation}
                                    > 
                                        <MenuItem value={2}>Fort Hood</MenuItem>
                                        <MenuItem value={3}>Lackland JBSA</MenuItem>
                                    </TextField>
                                    <TextField
                                        select
                                        fullWidth
                                        margin="dense"
                                        id="tag_id"
                                        label="Buying or Selling?"
                                        variant="filled"
                                        value={values['tag_id']}
                                        onChange={handleChangeFilters}
                                    >
                                        <MenuItem value={1}>Wanted</MenuItem>
                                        <MenuItem value={2}>Buying</MenuItem>
                                        <MenuItem value={3}>Selling</MenuItem>
                                    </TextField>
                                    <TextField
                                        autoFocus
                                        margin="dense"
                                        id="post_body"
                                        value={values['post_body']}
                                        label="Description"
                                        variant="outlined"
                                        fullWidth
                                        onChange={handleChange("post_body")}
                                    />
                                </DialogContent>
                                <DialogActions>
                                    <Button onClick={handleCloseEditAd} color="primary">
                                        Cancel
                                    </Button>
                                    <Button variant='contained' onClick={onEdit} color="primary">
                                        Save Changes
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
                        value={adId['postsid']}
                        label="Post ID"
                        variant="filled"
                        onChange={handleChangeAdId("postsid")}
                        style={{ marginRight: '7vw' }}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseRemoveAd} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={onDelete} color="secondary" variant='contained'>
                        Delete
                     </Button>
                </DialogActions>
            </Dialog>

            <Dialog open={adSubmitMessage}  aria-labelledby="form-dialog-title" width="50vw" margin="2vh">
                <DialogTitle id="form-dialog-title">Ad Submitted!</DialogTitle>
                <DialogContent>
                            <Button onClick={handleCloseAdSubmitMessage}>Okay</Button>
                </DialogContent>                    
            </Dialog>

            <Dialog open={adEditMessage} aria-labelledby="form-dialog-title" width="50vw" margin="2vh">
                <DialogTitle id="form-dialog-title">Changes Saved!</DialogTitle>
                <DialogContent>
                            <Button onClick={handleCloseAdEditMessage}>Okay</Button>
                </DialogContent>                    
            </Dialog>

            <Dialog open={adDeleteMessage}  aria-labelledby="form-dialog-title" width="50vw" margin="2vh">
                <DialogTitle id="form-dialog-title">Ad Deleted!</DialogTitle>
                <DialogContent>
                            <Button onClick={handleCloseAdDeleteMessage}>Okay</Button>
                </DialogContent>                    
            </Dialog>
        </div>
    )
}

export default AdContent;