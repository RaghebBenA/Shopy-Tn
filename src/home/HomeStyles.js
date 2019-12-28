import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "3%",
    display: "flex",
    justifyContent: "center"
  },
  home: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    backgroundColor: "rgba(228, 221, 243, 0.29)",
    minHeight: "100vh",
    overflow: "hidden"
  },
  img: {
    height: 310,
    display: "block",
    overflow: "hidden",
    width: "100%",
    transition: "filter .5s",
    "&:hover": {
      filter: "blur(3px)"
    }
  },

  Category: {
    backgroundColor: "#FCFCFC",
    width: "auto"
  },
  ListItem: {
    backgroundColor: "#FFFAFA",
    transition: "boxShadow .3s",
    paddingTop: "5%",
    padding: 0,
    "&:hover": {
      boxShadow: "-4px 6px 13px 11px rgba(92,91,92,1)",
      cursor: "pointer"
    }
  },
  Caresouls: {
    "&:hover": {
      display: "block",
      cursor: "pointer"
    }
  },
  Info: {
    background:
      "linear-gradient(180deg, rgba(244, 226, 226, 0) 0%, rgba(39, 37, 37, 0.49) 0.01%, #000000 100%)",
    fontFamily: "Galindo",
    fontStyle: "normal",
    fontSize: 24,
    color: "#FFE0E0",
    position: "absolute",
    top: "70%",
    height: 90,
    width: "100%",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  LinkStyle:{
    textDecoration: 'none',
    color: "inherit",
    display: "flex",
    width: "100%",
    justifyContent: "space-between"
  }
}));
