import './Ad.css'
import { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import CloseIcon from '@material-ui/icons/Close';
import { Button } from '@material-ui/core';


function Ad({ image, title, price, body, timestamp, tagid, postsid, location, contactinfo }) {
    const [openAd, setOpenAd] = useState(false);

    function buyOrSell(tagid) {
        if (tagid === 1) {
            return "Wanted"
        } if (tagid === 2) {
            return "I Want to Buy!"
        } else {
            return "I Want to Sell!"
        }
    }

    function locationById(location) {
        if (location === 1) {
            return 'No location specified';
        } if (location === 2) {
            return 'Fort Hood'
        } else {
            return 'Lackland JBSA'
        }
    }

    function timestampSlice(timestamp) {
        const date = timestamp.slice(0, 10);
        const time = timestamp.slice(11, 19);
        const newTimeStamp = `${date} ${time}`;
        return newTimeStamp;
    }

    return (
        <div>
            <Paper elevation={6} style={{ padding: '1vh', margin: '1vh' }}>
                <div className="adcontainer" onClick={() => { setOpenAd(true); console.log(openAd) }}>
                    {[
                        <img src={image} />,
                        <h2 className='Title'>{title}</h2>,
                        <h3 className='Tag'>{buyOrSell(tagid)}</h3>,
                        <h3 className='Price'>Price ${price}</h3>,
                        <p className='Body'>{body}</p>,
                        <div className='Timestamp'>{timestampSlice(timestamp)} ID #{postsid}</div>,
                        <div className="Location">{locationById(location)}</div>,
                        <div className="Contactinfo">Contact Me at: {contactinfo}</div>
                    ]}
                </div>
            </Paper>

            <div>
                <Dialog open={openAd} margin="2vh" maxWidth>
                    <DialogTitle id="form-dialog-title">Ad Info</DialogTitle>
                    <DialogContent>
                        <DialogContentText >
                            <div className="popupad">
                                <img src={image} /><Button onClick={()=>setOpenAd(false)} startIcon={<CloseIcon />} className="close"></Button>
                                <h2 className='Title'>{title}</h2>
                                <h3 className='Tag'>{buyOrSell(tagid)}</h3>
                                <h3 className='Price'>Price ${price}</h3>
                                <p className='Body'>{body}</p>
                                <div className='Timestamp'>{timestampSlice(timestamp)} ID #{postsid}</div>
                                <div className="Location">{locationById(location)}</div>
                                <div className="Contactinfo">Contact Me at: {contactinfo}</div>
                            </div>
                        </DialogContentText>
                    </DialogContent>
                </Dialog>
            </div>
        </div>
    )
}

export default Ad;