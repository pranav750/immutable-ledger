import React from "react";
import { Grid, Typography } from "@material-ui/core";
import Block from "./Block/BlockBasic";
import useStyles from "./styles";

const BlocksBasic = ({ chain, isChainValid, brokenIndex }) => {

    const classes = useStyles();

    return (
        <Grid align="center" className={classes.mainCard}>
            <Typography variant="h6">
                Blockchain
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

export default BlocksBasic;