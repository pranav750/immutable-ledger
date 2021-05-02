import React from "react";
import { Grid, Paper, Typography, TextField, Button } from "@material-ui/core";
import LinkOffIcon from '@material-ui/icons/LinkOff';
import useStyles from "./styles";


const HackDistributedBlock = ({ indexChangeHandler, hackedDataChangeHandler, blockSubmitHandler, blockNumberHandler, blockNumber, isChainValid, length, index }) => {
    const classes = useStyles();
    index = Number(index);
    
    return (
        <Grid align="center">
            {isChainValid ? (
                <form onSubmit={blockSubmitHandler}>
                    <Paper className={classes.card} elevation={10}>
                        <Grid className={classes.cardItem} align="center">
                            <LinkOffIcon className={classes.avatar} fontSize="large"/>
                            <Typography variant="h6">
                                Hack Block
                            </Typography>
                        </Grid>
                        <TextField 
                            className={classes.cardItem} 
                            label="Blockchain No" 
                            error={(blockNumber !== "" && blockNumber !== "1" && blockNumber !== "2" && blockNumber !== "3") ? true : false}
                            placeholder="Enter Blockchain"
                            variant="outlined" 
                            helperText={(blockNumber !== "" && blockNumber !== "1" && blockNumber !== "2" && blockNumber !== "3") && "Incorrect Entry"}
                            onChange={blockNumberHandler}
                            required fullWidth
                        /><br />
                        <TextField 
                            className={classes.cardItem} 
                            label="Index" 
                            error={(isNaN(index) || (index >= length)) ? true : false}
                            placeholder="Enter Index"
                            variant="outlined" 
                            helperText={(isNaN(index) || (index >= length)) && "Incorrect Entry"}
                            onChange={indexChangeHandler}
                            required fullWidth
                        />
                        <TextField 
                            label="Data" 
                            placeholder="Enter Data" 
                            variant="outlined" 
                            onChange={hackedDataChangeHandler} 
                            rows={4} multiline fullWidth
                        />
                        <Grid align="center">
                            <Button className={classes.cardButton} type="submit" variant="contained" color="primary">Hack</Button>
                        </Grid>
                    </Paper>
                </form>
            ) : (
                <Paper className={classes.card} elevation={10}>
                    <Typography variant="body1">
                        Blockchain tampered. 
                    </Typography>
                    <Typography variant="body1">
                        You cannot hack further data. 
                    </Typography>
                </Paper>
            )}
        </Grid>
    );
}

export default HackDistributedBlock;