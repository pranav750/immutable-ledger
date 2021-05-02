import React from "react";
import { Grid, Button, Typography } from '@material-ui/core';
import useStyles from "./styles";

const InfoDistributed = ({ addDataToggler, hackDataToggler, fixDataToggler, clearToggler, viewBlockChainToggler }) => {
    const classes = useStyles();

    return (
        <Grid className={classes.container}>
            <Grid className={classes.conatinerItem} align="center">
                <Grid className={classes.grid}>
                    <Typography className={classes.typo} variant="h6" gutterBottom>
                        Distributed P2P Network
                    </Typography>
                    <Typography className={classes.typo} variant="body2" gutterBottom>
                        Distributed P2P Network is just an upgrade of Immutable Ledger to make it even harder for the hacker to hack the data in the blockchain.
                    </Typography>
                    <Typography className={classes.typo} variant="body2" gutterBottom>
                        If a hacker tries to tamper the data of a block in blockchain, the other computers connected in Distributed P2P Network send the signal to the computer that someone is tampering the data.
                    </Typography>
                    <Typography className={classes.typo} variant="body2" gutterBottom>
                        The hacked blockchain will be replaced by the correct one as the other computers send over the correct blockchain to the hacked computer.
                    </Typography>
                    <Typography className={classes.typo} variant="body2" gutterBottom>
                        Hacker has to hack more than 50% of the computers to change the data in the blockchain which is next to immpossible.
                    </Typography>
                    <Typography className={classes.typo} variant="body2" gutterBottom>
                        In this, I have used three blockchains.
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

export default InfoDistributed;