import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles( theme => ({
    desktop: {
        display: "flex",
        [theme.breakpoints.up("md")] : {
            display: "none"
        }
    },

    mobile: {
        display: "none",
        [theme.breakpoints.up("md")] : {
            display: "flex"
        }
    }
}));

export default useStyles;