import './HomeContent.css'
import Ad from './Ad.js'
import { Button } from '@material-ui/core';
import { useState, useEffect } from 'react';
// import mockData from '../mockdata/mockaddata.json'

const HomeContent= () => {
    const [ ads, setAds ] = useState([])

    useEffect(() => {
        return fetch('http://localhost:3001/ads', {
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
                <h1>Filters</h1>
                <div>Coming Soon!</div>
            </div>    
            <div className="Adlist">
            {ads.map(ad => <Ad image={ad['image_url']} title={ad['post_title']} price={ad['price']} body={ad['post_body']} timestamp={ad['created_at']} tagid={ad['tag_id']} postsid={ad['postsid']}/>
            )}
            </div>
            <div className="Locations">
                <h1>Locations</h1>
                <div>Coming Soon!</div>
            </div> 
        </div>
    )
}

export default HomeContent;