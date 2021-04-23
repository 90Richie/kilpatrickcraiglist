import './About.css'
import heading from "../pictures/Heading.jpg"
function About () {
    // git checkout
    return (
<div className="About">
        <div className="header">
            <img src={heading} className="logo"/>
            <h3>About Kilpatrick Craig's List</h3>
            <p>A secure platform to buy, trade, and sell with other DOD members.</p>
        </div>

        <h2>Our Team</h2>
        <div className="row">
            <div className="column">
                <div className="card">
                    <img src="https://bit.ly/32DBBHd" alt="Richard"/>
                    <div className="container">
                        <h2>Richard Brennen</h2>
                        <p className="title">Tallest Guy</p>
                        <p>Does cool stuff.</p>
                        <p>Richard@kpcl.com</p>
                        <p><button className="button" onClick={(e) => {
                            e.preventDefault()
                            window.open('https://www.linkedin.com/in/richie-brennan/')
                            }}>Contact</button></p>
                    </div>
                </div>
            </div>

            <div className="column">
                <div className="card">
                    <img src="https://bit.ly/3equlnK" alt="Steven"/>
                    <div className="container">
                        <h2>Steven Richards</h2>
                        <p className="title">Second Tallest Guy</p>
                        <p>Does not do cool stuff</p>
                        <p>Steven@kpcl.com</p>
                        <p><button className="button" onClick={(e) => {
                            e.preventDefault()
                            window.open('https://www.linkedin.com/in/steven-lance-richards-89bb93149/')
                            }}>Contact</button></p>
                    </div>
                </div>
            </div>

            <div className="column">
                <div className="card">
                    <img src="https://bit.ly/32Hkgxf" alt="Michael"/>
                    <div className="container">
                        <h2>Michael Mason</h2>
                        <p className="title">Third Tallest Guy</p>
                        <p>Does cool boom stuff</p>
                        <p>Michael@kpcl.com</p>
                        <p><button className="button" onClick={(e) => {
                            e.preventDefault()
                            window.open('https://www.linkedin.com/in/michael-mason-8825985a/')
                            }}>Contact</button></p>
                    </div>
                </div>
            </div>

            <div className="column">
                <div className="card">
                    <img src="https://bit.ly/2RQFNkJ" alt="Elgin"/>
                    <div className="container">
                        <h2>Elgin Posadas</h2>
                        <p className="title">Fourth Tallest Guy</p>
                        <p>Runs his roomates show</p>
                        <p>Elgin@kpcl.com</p>
                        <p><button className="button">Contact</button></p>
                    </div>
                </div>
            </div>
        </div>

</div>

    )
}

export default About;