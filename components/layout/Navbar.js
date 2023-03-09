import classes from './Navbar.module.css'
import {Courgette} from 'next/font/google'

const courgette = Courgette({weight: '400', subsets: ['latin']})

function Navbar(){
    return (
        <nav className={classes.navbar}>
            <h1 className={`${classes.logo} ${courgette.className}`}>Wishlist It</h1>
        </nav>
    )
}

export default Navbar