import React from "react";
import { Card, CardContent, Typography, CardActionArea } from "@material-ui/core";
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import useStyles from "./styles";

const BlockDistributed = ({ index, data, isChainValid, brokenIndex }) => {
    const classes = useStyles();

    return (
        <>
            <Card className={(!isChainValid && brokenIndex <= index) ? classes.danger : classes.valid} style={{ width: "300px"}} elevation={10}>
                <CardActionArea>
                    <CardContent>
                        <Typography className={classes.cardContent} variant="h6">
                            {"Block No." + index}
                        </Typography>
                        <Typography className={classes.cardContent} variant="h6">
                            Data
                        </Typography>
                        <Typography className={classes.cardContent} variant="body1">
                            {data}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            <ArrowDownwardIcon fontSize="large"/>
        </>
    );
}

export default BlockDistributed;