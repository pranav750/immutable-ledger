import React from "react";
import { Grid, Paper, Typography, Button } from "@material-ui/core";
import useStyles from "./styles";


const FixDistributedBlock = ({ fixedSubmitHandler, isChainValid }) => {
    const classes = useStyles();
    
    return (
        <Grid align="center">
            <Paper className={classes.card} elevation={10}>
                {!isChainValid ? (
                    <Button className={classes.cardButtonLg} type="submit" variant="contained" color="primary" onClick={fixedSubmitHandler}>Fix Blockchain</Button>
                ) : (
                    <Grid>
                        <Typography variant="body1">
                            Blockchain okay. 
                        </Typography>
                        <Typography variant="body1">
                            No need to fix any data. 
                        </Typography>
                    </Grid>
                )}
            </Paper>
        </Grid>
    );
}

export default FixDistributedBlock;