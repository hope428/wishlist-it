import classes from './Navbar.module.css'

function Navbar(){
    return (
        <nav className={classes.navbar}>
            <h1 className={classes.logo}>Wishlist It</h1>
        </nav>
    )
}

export default Navbar