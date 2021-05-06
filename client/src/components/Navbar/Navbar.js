import React, { Fragment, useState } from "react";
import { AppBar, Button, Grid, IconButton, Menu, MenuItem, Toolbar, Typography } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from "react-router-dom";
import useStyles from "./styles";

const Navbar = () => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    }

    const handleClose = () => {
        setAnchorEl(null);
    }

    const mobileView = (
        <Menu keepMounted anchorEl={anchorEl} open={anchorEl} onClose={handleClose}>
            <MenuItem onClick={handleClose} component={Link} to="/">
                Basic Ledger
            </MenuItem>
            <MenuItem onClick={handleClose} component={Link} to="/distributedP2P">
                Distributed P2P Network
            </MenuItem>
        </Menu>
    );

    return (
        <Fragment>
            <AppBar color="primary" position="static">
                <Toolbar>
                    <Typography style={{ flexGrow: "1" }} variant="h6">
                        Immutable Ledger
                    </Typography>
                    <Grid className={classes.mobile}>
                        <Button color="inherit" component={Link} to="/">
                            Basic Ledger
                        </Button>
                        <Button color="inherit" component={Link} to="/distributedP2P">
                            Distributed P2P Network
                        </Button>
                    </Grid>
                    <IconButton className={classes.desktop} color="inherit" onClick={handleClick}>
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            {mobileView}
        </Fragment>
    );
}

export default Navbar;