import { Link } from 'react-router-dom'
import HomeTwoToneIcon from '@material-ui/icons/Home';
import { Button } from '@material-ui/core';
import InfoTwoToneIcon from '@material-ui/icons/InfoTwoTone';
import HttpTwoToneIcon from '@material-ui/icons/HttpTwoTone';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import './NavBar.css'

function NavBar() {
    return (
        <header className="Nav-header">
            <div>
                Kilpatrick Craig's List
            </div>
            <div>            
                <Link to='/' style={{textDecoration: 'none'}}>
                    <Button
                        variant="contained"
                        color="secondary"
                        startIcon={<HomeTwoToneIcon />}
                        style={{margin: 15, backgroundColor: 'cadetblue'}}
                    >
                        Home
                    </Button>
                </Link>
                <Link to='/ads' style={{textDecoration: 'none'}}>
                    <Button
                        variant="contained"
                        color="secondary"
                        startIcon={<TrendingUpIcon />}
                        style={{margin: 15, backgroundColor: 'cadetblue'}}
                    >
                        Place Ad
                    </Button>
                </Link>
                <Link to='/about' style={{textDecoration: 'none'}}>
                <Button
                    variant="contained"
                    color="secondary"
                    startIcon={<InfoTwoToneIcon />}
                    style={{margin: 15, backgroundColor: 'cadetblue'}}
                >
                    About
                </Button>
                </Link>
            </div>
        </header>
    )
}

export default NavBar;