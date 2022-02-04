import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Typography, Button, Toolbar, Avatar } from "@material-ui/core";
import Blogger_logo from '../../Images/Blogger_logo.png';
import useStyles from '../../style';


const Nav = () => {

    const classes = useStyles();

    const user = null;

    return (
        <div>
            <AppBar className={classes.appBar} position="static" color='inherit'>
                <div>
                    <Typography variant='h2' align='center'></Typography>
                    <img className={classes.image} src={Blogger_logo} alt={"Blogger_logo"} height="60" width="250" />
                </div>
                <Toolbar className={classes.toolbar}>
                    {user ? (
                        <div className={classes.profile}>
                            <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>
                            <Typography className={classes.userName} variant="h6">{user.result.name}</Typography>
                            <Button variant="contained" className={classes.logout} color="secondary">Logout</Button>
                        </div>
                    ) : (
                        <Link to='/auth'><Button variant="contained" color="primary">Sign In</Button></Link>
                    )}
                </Toolbar>
            </AppBar>

        </div>
    );
}

export default Nav;