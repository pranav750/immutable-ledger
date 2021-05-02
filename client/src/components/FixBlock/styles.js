import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({

    cardButton: {
        marginTop: "10px",
        marginBottom: "10px",
        width: "30%"
    },

    cardButtonLg: {
        marginTop: "10px",
        marginBottom: "10px",
        width: "30%",
        [theme.breakpoints.down("md")]: {
            width: "60%"
        }
    },

    card: {
        padding: "20px",
        margin: "30px 0",
        width: "70%",
        borderRadius: "10px",
        [theme.breakpoints.up("md")]: {
            width: "30%"
        }
    },

    avatar: {
        color: "#3f51b5"
    },
    
    cardItem: {
        marginBottom: "15px"
    }
}));

export default useStyles;