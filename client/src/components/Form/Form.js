import React from "react";
import { useState } from "react";
import { Typography, TextField, Button, Paper } from '@material-ui/core';
import useStyles from "./styles";
import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux';
import { createPost } from "../../actions/posts";

const Form = () => {

    const [postData, setPostData] = useState({
        creator: '',
        title: '',
        message: '',
        tags: '',
        selectedFile: ''
    });

    const dispatch = useDispatch();

    const classes = useStyles();

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(createPost(postData));
        clear();
    }

    const clear = () => {
        setPostData({
            creator: '',
            title: '',
            message: '',
            tags: '',
            selectedFile: ''
        });
    }

    return (
        <Paper className={classes.paper}>
            <form className={`${classes.root} ${classes.form}`} noValidate autoComplete="off" onSubmit={handleSubmit}> 
            <Typography variant="h6">Create A Post</Typography>
            <TextField 
                name="creator" 
                variant="outlined" 
                label="Creator" 
                fullWidth
                value={postData.creator} 
                onChange={(e) => setPostData({...postData, creator: e.target.value})}
            />
            <TextField 
                name="title" 
                variant="outlined" 
                label="title" 
                fullWidth
                value={postData.title} 
                onChange={(e) => setPostData({...postData, title: e.target.value})}
            />
            <TextField 
                name="message" 
                variant="outlined" 
                label="message" 
                fullWidth
                value={postData.message} 
                onChange={(e) => setPostData({...postData, message: e.target.value})}
            />
            <TextField 
                name="tags" 
                variant="outlined" 
                label="tags" 
                fullWidth
                value={postData.tags} 
                onChange={(e) => setPostData({...postData, tags: e.target.value})}
            />
            <div className={classes.fileInput}>
                <FileBase 
                    type="file" 
                    multiple={false} 
                    onDone={({base64}) => setPostData({...postData, selectedFile: base64})}/>
            </div>
            <Button className = {classes.buttonSubmit} variant="container" color="primary" size="large" type="submit" fullWidth>Submit</Button>
            <Button className = {classes.buttonSubmit} variant="container" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
            </form>
        </Paper>
    )
}

export default Form;