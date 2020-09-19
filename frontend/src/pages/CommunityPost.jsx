import React, {useState, useEffect} from 'react';
import {Grid, Fade, Button, makeStyles, Typography, Box, CardContent, Card, Divider} from '@material-ui/core';
import Post from '../components/Post';
import Comments from '../components/CommentSection';

const useStyles = makeStyles((theme) => ({
    postCard: {
        boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.08)',
        width: '100%',
        marginBottom: '0.5em',
    },
    active: {

    },
    heading: {
        color: '#334D6E',
    },
    cardLabel: {
        color: '#AEAEAE',
    },
    content: {
        color: '#334D6E',
    },
    symptoms: {
        color: '#fff',
        background: '#9066FF',
        padding: '3px 6px 3px 6px',
        borderRadius: '5px',
    }
}));

const CommunityPost = (props) => {
    const classes = useStyles();
    return (
        <div className = {classes.container}>
            <Grid container direction = 'row' spacing = {2} justify = 'center' alignItems = 'stretch' alignContent = 'stretch'>
                <Grid item xs ={12} mg = {6} lg ={7} xl = {7} style = {{marginLeft: '1rem', marginTop: '1rem', height: '80vmin'}}>
                    <Grid container direciton = 'column' spacing = {3}>
                        <Grid item>
                            <Post></Post>
                        </Grid>
                        <Divider />
                        <Grid item>
                            <Comments></Comments>
                        </Grid> 
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default CommunityPost;