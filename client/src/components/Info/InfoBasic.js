import React from "react";
import { Grid, Button, Typography } from '@material-ui/core';
import useStyles from "./styles";

const InfoBasic = ({ addDataToggler, hackDataToggler, fixDataToggler, clearToggler, viewBlockChainToggler }) => {
    const classes = useStyles();

    return (
        <Grid className={classes.container}>
            <Grid className={classes.conatinerItem} align="center">
                <Grid className={classes.grid}>
                    <Typography className={classes.typo} variant="h6" gutterBottom>
                        Immutable Ledger
                    </Typography>
                    <Typography className={classes.typo} variant="body2" gutterBottom>
                        Immutable Ledger uses the concept of blockchain to store the data of property or in general any other digital document in the blocks of blockchain.
                    </Typography>
                    <Typography className={classes.typo} variant="body2" gutterBottom>
                        If a hacker tries to tamper the data, by viewing the blockchain, we can tell which block was tampered as the previous block's hash will not match with the current block's hash.
                    </Typography>
                </Grid>
            </Grid>
            <Grid className={classes.conatinerItem} align="center">
                <Grid className={classes.grid}>
                    <Typography variant="body1" gutterBottom>
                        Manipulating Blocks
                    </Typography>
                    <Grid>
                        <Button className={classes.extraPadding} variant="contained" size="small" color="primary" onClick={addDataToggler}>Add Block</Button>
                        <Button className={classes.extraPadding} variant="contained" size="small" color="primary" onClick={hackDataToggler}>Hack Block</Button>
                        <Button className={classes.extraPadding} variant="outlined" size="small" color="primary" onClick={fixDataToggler}>Fix Block</Button>
                        <Button className={classes.extraPadding} variant="outlined" size="small" color="primary" onClick={clearToggler}>Clear</Button>
                    </Grid>
                    <Typography className={classes.extraPadding} variant="body1" gutterBottom>
                        Viewing Blockchain
                    </Typography>
                    <Grid>
                        <Button className={classes.extraPadding} variant="contained" size="small" color="primary" onClick={viewBlockChainToggler}>View</Button>
                        <Button className={classes.extraPadding} variant="outlined" size="small" color="primary" onClick={clearToggler}>Clear</Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default InfoBasic;