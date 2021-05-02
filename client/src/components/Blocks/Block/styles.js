import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    valid: {
        display: "block",
        backgroundColor: "#c8e6c9",
        padding: "15px",
        margin: "30px 20px",
        borderRadius: "10px"
    },

    danger: {
        display: "block",
        backgroundColor: "#ffcdd2",
        padding: "15px",
        margin: "30px 20px",
        borderRadius: "10px"
    },

    cardContent: {
        display: "block",
        marginBottom: "15px",
        wordWrap: "break-word"
    }
});

export default useStyles;