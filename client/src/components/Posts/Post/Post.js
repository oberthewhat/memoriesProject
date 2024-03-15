import React from "react";
import useStyles from "./styles";

const Post = () => {

    const classes = useStyles();
    
    return (
        <div>
            <h2 className={classes.heading}>Posts</h2>

        </div>
    )
}

export default Post