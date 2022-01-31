import React from 'react'
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import Blogger_logo from './Images/Blogger_logo.png';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import { getPosts } from './actions/posts';
import useStyles from './style'
import { useState, useEffect } from 'react';


const App = () => {
    const [currentId, setCurrentId] = useState(null);
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(getPosts());

    }, [dispatch])

    return (
        <Container maxWidth="gl">
            <AppBar className={classes.appBar} position="static" color='inherit'>
                <Typography variant='h2' align='center'></Typography>
                <img className={classes.image} src={Blogger_logo} alt={"Blogger_logo"} height="60" width="250" />
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify='space-between' alignItems='stretch' spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts setCurrentId={setCurrentId} />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form currentId={currentId} setCurrentId={setCurrentId} />
                        </Grid>
                    </Grid>
                </Container>
            </Grow >
        </Container >
    )
}

export default App;