import React from "react";
import { Grid, Paper, Typography, TextField, Button } from "@material-ui/core";
import LinkIcon from '@material-ui/icons/Link';
import useStyles from "./styles";


const FixBlock = ({ fixedDataChangeHandler, fixedSubmitHandler, isChainValid, distributed }) => {
    const classes = useStyles();
    
    return (
        <Grid align="center">
            {(!isChainValid && !distributed) ? (
                <form onSubmit={fixedSubmitHandler}>
                    <Paper className={classes.card} elevation={10}>
                        <Grid className={classes.cardItem} align="center">
                            <LinkIcon className={classes.avatar} fontSize="large"/>
                            <Typography variant="h6">
                                Fix Block
                            </Typography>
                        </Grid>
                        <TextField label="Data" placeholder="Enter Data" variant="outlined" onChange={fixedDataChangeHandler} rows={4} multiline fullWidth/>
                        <Grid align="center">
                            <Button className={classes.cardButton} type="submit" variant="contained" color="primary">Fix</Button>
                        </Grid>
                    </Paper>
                </form>
            ) : (!isChainValid && distributed) ? (
                <Paper className={classes.card} elevation={10}>
                    <Button className={classes.cardButtonLg} type="submit" variant="contained" color="primary" onClick={fixedSubmitHandler}>Fix Blockchain</Button>
                </Paper>
            ) : (
                <Paper className={classes.card} elevation={10}>
                    <Typography variant="body1">
                        Blockchain okay. 
                    </Typography>
                    <Typography variant="body1">
                        No need to fix any data. 
                    </Typography>
                </Paper>
            )}
        </Grid>
    );
}

export default FixBlock;