import React from "react";
import { Grid, Paper, Typography, TextField, Button } from "@material-ui/core";
import LinkIcon from '@material-ui/icons/Link';
import useStyles from "./styles";

const AddBasicBlock = ({ dataChangeHandler, submitHandler, isChainValid }) => {
    const classes = useStyles();
    
    return (
        <Grid align="center">
            {isChainValid ? (
                <form onSubmit={submitHandler}>
                    <Paper className={classes.card} elevation={10}>
                        <Grid className={classes.cardItem} align="center">
                            <LinkIcon className={classes.avatar} fontSize="large"/>
                            <Typography variant="h6">
                                Add Block
                            </Typography>
                        </Grid>
                        <TextField label="Data" placeholder="Enter Data" variant="outlined" onChange={dataChangeHandler} rows={4} multiline fullWidth/>
                        <Grid align="center">
                            <Button className={classes.cardButton} type="submit" variant="contained" color="primary">ADD</Button>
                        </Grid>
                    </Paper>
                </form>
            ) : (
                <Paper className={classes.card} elevation={10}>
                    <Typography variant="body1">
                        Blockchain tampered. 
                    </Typography>
                    <Typography variant="body1">
                        You cannot add further data. 
                    </Typography>
                </Paper>
            )}
        </Grid>
    );
}

export default AddBasicBlock;