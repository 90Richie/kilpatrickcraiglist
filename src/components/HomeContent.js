import './HomeContent.css'
import Ad from './Ad.js'
import { Button } from '@material-ui/core';
// import mockData from '../mockdata/mockaddata.json'
const mockData = [    
    {
        "postsid": 1,
        "tag_id": 1,
        "user_id": 3,
        "post_title": "Bike",
        "post_body": "This is the best bike in the world, others don't even compare. Contact me at 555-555-5555",
        "base_id": 1,
        "price": 150,
        "image_url": "https://bit.ly/3vcgcRX",
        "created_at": "2021-04-20T07:00:00.000Z"
    },
    {
        "postsid": 2,
        "tag_id": 2,
        "user_id": 1,
        "post_title": "Charizard Pokemon Card",
        "post_body": "I am willing to buy any charizard pokemon card willing to pay up to $50. Contact me at 555-555-5555",
        "base_id": 1,
        "price": 50,
        "image_url": "https://bit.ly/32yLGVP",
        "created_at": "2021-04-20T08:00:00.000Z"
    },
    {
        "postsid": 3,
        "tag_id": 1,
        "user_id": 2,
        "post_title": "Golf Clubs",
        "post_body": "These are aweful, the ball won't go straight. Contact me at 555-555-5555",
        "base_id": 1,
        "price": 2,
        "image_url": "https://bit.ly/3efkFfO",
        "created_at": "2021-04-20T09:00:00.000Z"
    },
    {
        "postsid": 4,
        "tag_id": 1,
        "user_id": 5,
        "post_title": "Nintendo Switch",
        "post_body": "Find yourself recently single?  Then you need this! Contact me at 555-555-5555",
        "base_id": 1,
        "price": 350,
        "image_url": "https://bit.ly/3v0IHBG",
        "created_at": "2021-04-20T10:00:00.000Z"
    },
    {
        "postsid": 5,
        "tag_id": 1,
        "user_id": 4,
        "post_title": "Car",
        "post_body": "Its fast than what you have now! Contact me at 555-555-5555",
        "base_id": 1,
        "price": 55000,
        "image_url": "https://bit.ly/3dAhe4c",
        "created_at": "2021-04-20T11:00:00.000Z"
    }
];

const HomeContent= () => {
    return (
        <div className="Home">
            <div className="Filters">
                <h1>Filters</h1>
                <div>Coming Soon!</div>
            </div>    
            <div className="Adlist">
            {mockData.map(ad => <Ad image={ad['image_url']} title={ad['post_title']} price={ad['price']} body={ad['post_body']} timestamp={ad['created_at']} tagid={ad['tag_id']} />
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