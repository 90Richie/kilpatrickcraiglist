import './HomeContent.css'
import Ad from './Ad.js'
import ClearIcon from '@material-ui/icons/Clear';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Button } from '@material-ui/core';
import { useState, useEffect } from 'react';
// import mockData from '../mockdata/mockaddata.json'

const HomeContent= () => {
    const [ ads, setAds ] = useState([]);
    const [ filter, setFilter ] = useState('All Ads')
    const [ location, setLocation ] = useState('All Locations')
    const [ url, setUrl ] = useState('http://localhost:3001/ads')
    const [ filterName, setFilterName] = useState('All Ads')
    const [ locationName, setLocationName] = useState('All Locations')
    const [ openAd, setOpenAd] = useState(false);


    useEffect(() => {
        if (typeof filter === "number" && typeof location === 'string') {
            setUrl(`http://localhost:3001/ads?tagid=${filter}`)
        }
        if (typeof location === "number" && typeof filter === 'string') {
            setUrl(`http://localhost:3001/ads?baseid=${location}`)
        }
        if (typeof filter === "number" && typeof location === "number") {
            setUrl(`http://localhost:3001/ads?tagid=${filter}&baseid=${location}`)
        }
        if (typeof filter === "string" && typeof location === "string") {
            setUrl(`http://localhost:3001/ads`)
        }

        return fetch(url, {
                    mode:'cors',
                    credentials: 'same-origin'})
            .then(res => res.json())
            .then(data => {
                setAds(data)}
                )
    })

    return (
        <div className="Home">
            <div className="Filters">
                <h1>Filters</h1><Button onClick={() => {setFilter('All Ads'); setFilterName('All Ads')}} startIcon={<ClearIcon />}>Clear</Button>
                <h4>Current Filter: {filterName} </h4>
                <Button variant="contained" onClick={() => {setFilter(3); setFilterName('For Sale')}} style={{margin: '3%', width: '9vw', backgroundColor: '#ffcc98', color: '#172f4b', fontWeight: "900"}}>For Sale</Button><br></br>
                <Button variant="outlined" onClick={() => {setFilter(2); setFilterName('For Purchase')}} style={{margin: '3%', width: '9vw', backgroundColor: '#ffcc98', color: '#172f4b', fontWeight: "900"}}>For Purchase</Button><br></br>
                <Button variant="outlined" onClick={() => {setFilter(1); setFilterName('Wanted')}} style={{margin: '3%', width: '9vw', backgroundColor: '#ffcc98', color: '#172f4b', fontWeight: "900"}}>Wanted</Button><br></br>
            </div>    
            <div className="Adlist">
            {ads.map(ad => <Ad onClick={() => {setOpenAd(true); console.log(openAd)}} image={ad['image_url']} title={ad['post_title']} price={ad['price']} body={ad['post_body']} timestamp={ad['created_at']} tagid={ad['tag_id']} postsid={ad['postsid']} location={ad['base_id']} contactinfo={ad['contact_info']}/>
            )}
            </div>
            <div className="Locations">
                <h1>Locations</h1><Button onClick={() => {setLocation('All Locations'); setLocationName('All Locations')}} startIcon={<ClearIcon />}>Clear</Button>
                <h4>Current Location: {locationName} </h4>
                <Button variant="outlined" onClick={() => {setLocation(2); setLocationName('Fort Hood')}} style={{margin: '3%', width: '9vw', backgroundColor: '#ffcc98', color: '#172f4b', fontWeight: "900"}}>Fort Hood</Button><br></br>
                <Button variant="outlined" onClick={() => {setLocation(3); setLocationName('Lackland JBSA')}} style={{margin: '3%', width: '9vw', backgroundColor: '#ffcc98', color: '#172f4b', fontWeight: "900"}}>Lackland JBSA</Button><br></br>
            </div>

            <div>
            <Dialog open={openAd}  margin="2vh">
                <DialogTitle id="form-dialog-title">Ad Info</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Let Google help apps determine location. This means sending anonymous location data to
                        Google, even when no apps are running.
                    </DialogContentText>
                </DialogContent>                    
            </Dialog>

            </div> 
        </div>
    )
}

export default HomeContent;