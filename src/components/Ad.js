import './Ad.css'

function Ad({image, title, price, body, timestamp}) {
    return (
        <div className="adcontainer">
        {[
            <img src={image} />,
            <h1>{title}</h1>,
            <h2>{price}</h2>,
            <p>{body}</p>,
            <div>{timestamp}</div>
        ]}
        </div>
    )
}

export default Ad;