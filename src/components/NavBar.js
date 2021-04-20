import { Link } from 'react-router-dom'
import { Button } from '@material-ui/core';
import InfoTwoToneIcon from '@material-ui/icons/InfoTwoTone';
import AccountBalanceTwoToneIcon from '@material-ui/icons/AccountBalanceTwoTone';
import AnnouncementTwoToneIcon from '@material-ui/icons/AnnouncementTwoTone';
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
                        startIcon={<AccountBalanceTwoToneIcon />}
                        style={{margin: 15, backgroundColor: 'cadetblue'}}
                    >
                        Home
                    </Button>
                </Link>
                <Link to='/ads' style={{textDecoration: 'none'}}>
                    <Button
                        variant="contained"
                        color="secondary"
                        startIcon={<AnnouncementTwoToneIcon />}
                        style={{margin: 15, backgroundColor: 'cadetblue'}}
                    >
                        Ads
                    </Button>
                </Link>
                <Link to='/about' style={{textDecoration: 'none'}}>
                <Button
                    variant="contained"
                    color="secondary"
                    startIcon={<InfoTwoToneIcon />}
                    style={{margin: 15, backgroundColor: 'cadetblue'}}
                >
                    About KCL
                </Button>
                </Link>
            </div>
        </header>
    )
}

export default NavBar;