import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    container: { 
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around"
    },

    containerItem: {
        flexGrow: "1"
    }
});

export default useStyles;