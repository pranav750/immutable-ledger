import React from "react";
import { Grid, Typography } from "@material-ui/core";
import Block from "./Block/BlockDistributed";
import useStyles from "./styles";

const BlocksDistributed = ({ chain, isChainValid, brokenIndex, blockchainName }) => {

    const classes = useStyles();

    return (
        <Grid align="center" className={classes.mainCard}>
            <Typography variant="h6">
                Blockchain {blockchainName}
            </Typography>
            {chain.map(block => (
                <Block 
                    key={block.index}
                    isChainValid={isChainValid} 
                    index={block.index}
                    data={block.data}
                    brokenIndex={brokenIndex}
                />
            ))}
            <Typography className={classes.null} variant="h6">
                NULL
            </Typography>
        </Grid>
    );
}

export default BlocksDistributed;