import { fade, makeStyles } from "@material-ui/core/styles";


export  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      backgroundColor: "rgba(232, 30, 30, 0.86)"
    },
    menuButton: {
      marginRight: theme.spacing(2)
    },
    toolBar:{
     display:'flex',
     justifyContent: "space-between"
    },
    title: {
      flexGrow: 0,
      display: "none",
      marginRight: "auto",
      [theme.breakpoints.up("sm")]: {
        display: "block"
      }
    },
    linkBrand:{
      textDecoration: "none",  
      color: 'white',
      "&:hover":{
        cursor: "pointer",
        textDecoration: "none",
      },
    },
    search: {
      position: "relative",
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      "&:hover": {
        backgroundColor: fade(theme.palette.common.white, 0.25)
      },
      marginLeft: "auto",
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(1),
        width: "auto"
      }
    },
    searchIcon: {
      width: theme.spacing(7),
      height: "50%",
      position: "absolute",
      pointerEvents: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    },
    inputRoot: {
      color: "inherit"
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 7),
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: 120,
        "&:focus": {
          width: 200
        }
      }
    },
    link: {
      '& > * + *': {
          marginLeft: theme.spacing(2),
        },
    },
    shoopingIcon: {
        marginTop: "0"
    },
    Drawer:{
        backgroundColor: "#FFF0F0"
    }
  }));