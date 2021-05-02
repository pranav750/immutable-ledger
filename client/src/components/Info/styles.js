import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    grid: {
        width: "70%",
        margin: "50px"
    },

    typo: {
        wordWrap: "break-word"
    },

    extraPadding: {
        margin: "10px"
    },

    container: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
    },

    conatinerItem: {
        width: "450px",
        flexGrow: "1"
    }
});

export default useStyles;