import './Ad.css'
import Paper from '@material-ui/core/Paper';

function Ad({image, title, price, body, timestamp, tagid, postsid}) {
    function buyOrSell (tagid) {
        if (tagid === 1) {
            return "I Want to Sell!"
        } else {
            return "I Want to Buy!"
        }
    }

    return (
        <Paper elevation={3} style={{padding: '1vh', margin: '1vh'}}>
        <div className="adcontainer">
        {[
            <img src={image} />,
            <h2 className='Title'>{title}</h2>,
            <h3 className='Tag'>{buyOrSell(tagid)} ${price}</h3>,
            <p className='Body'>{body}</p>,
            <div className='Timestamp'>{timestamp} ID #{postsid}</div>
        ]}
        </div>
        </Paper>
    )
}

export default Ad;