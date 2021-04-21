import './Ad.css'
import Paper from '@material-ui/core/Paper';

function Ad({image, title, price, body, timestamp, tagid, postsid, location}) {
    
    function buyOrSell (tagid) {
        if (tagid === 1) {
            return "Wanted"
        } if (tagid === 2) {
            return "I Want to Buy!"
        } else {
            return "I Want to Sell!"
        }
    }

    function locationById (location) {
        if (location === 1) {
            return 'No location specified';    
        } if (location === 2) {
            return 'Fort Hood'
        } else {
            return 'Lackland JBSA'
        }
    }

    function timestampSlice (timestamp) {
        const date = timestamp.slice(0, 10);
        const time = timestamp.slice(11, 19);
        const newTimeStamp = date + ' ' + time;
        return newTimeStamp;
    }

    return (
        <Paper elevation={3} style={{padding: '1vh', margin: '1vh'}}>
        <div className="adcontainer">
        {[
            <img src={image} />,
            <h2 className='Title'>{title}</h2>,
            <h3 className='Tag'>{buyOrSell(tagid)} ${price}</h3>,
            <p className='Body'>{body}</p>,
            <div className='Timestamp'>{timestampSlice(timestamp)} ID #{postsid}</div>,
            <div className="Location">{locationById(location)}</div>
        ]}
        </div>
        </Paper>
    )
}

export default Ad;